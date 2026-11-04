---
title: "ReplayGain and Loudness Normalization"
chapter: 5
part: "2 — Sound and Audio Processing"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "rg"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 05

# 05. ReplayGain and Loudness Normalization

ReplayGain evens out loudness differences between tracks and albums by applying a playback gain computed in advance and stored in the file's tags. The audio data in the file is not rewritten. Poweramp Player build 1031 exposes four ReplayGain settings: mode, source, a preamp, and a separate preamp for files that carry no ReplayGain information.

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Replay Gain | `rg_type` | List | `0` → Don't apply† | Don't apply; Apply Gain; Apply Gain/prevent clipping according to Peak (positional†) | — |
| Source | `rg_source` | List | `0` → Album† | Album; Track (positional†) | — |
| RG preamp | `rg_preamp_mb` | Knob | 0.0 dB (`0`) | −16.0 dB to 16.0 dB, step 0.1 dB | — |
| Preamp for songs without RG info | `rg_default_mb` | Knob | 0.0 dB (`0`) | −16.0 dB to 16.0 dB, step 0.1 dB | — |

*Source: APK build 1031 settings XML — reference: [ReplayGain Settings](../Appendices/Settings%20Reference/ReplayGain%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**APK VERIFIED:** the option labels, which come from the APK string resources. **RESEARCH SUPPORTED (†), not verified:** the meaning of the declared default `0`. If the stored values follow option position, a fresh configuration has ReplayGain **off** (“Don't apply”) with **Album** as the source. Check both settings on your device before relying on that.

## Modes

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

- **Don't apply.** ReplayGain tags are ignored.
- **Apply Gain.** The stored gain (plus the preamp) is applied. Positive gains can push peaks past full scale.
- **Apply Gain/prevent clipping according to Peak.** The label states the intent: the stored peak value is used to prevent clipping. **GENERAL PRINCIPLE:** ReplayGain players do this by limiting the gain so that *peak × gain* stays at or below full scale. **RUNTIME VERIFICATION REQUIRED:** Poweramp's actual mechanism (gain cap or limiter), and how it treats files that have a gain tag but no peak tag.

## Album or Track

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

- **Album** uses one gain for every track of an album. Loudness relationships *within* the album are preserved, so a quiet intro stays quiet. Different albums are brought to a common loudness.
- **Track** uses each track's own gain. It suits shuffled or mixed playlists, but it flattens deliberate level differences inside an album.

**RUNTIME VERIFICATION REQUIRED:** what Poweramp does when the selected kind of gain is missing, for example Album selected on a file with only track gain. The XML does not declare a fallback.

## Preamps

Both preamps are knobs from −16.0 dB to 16.0 dB, step 0.1 dB, default 0.0 dB.

- **RG preamp** shifts every ReplayGain-adjusted track. **GENERAL PRINCIPLE:** ReplayGain's reference level is fairly low (about 89 dB SPL in the original specification, or −18 LUFS in ReplayGain 2.0). Many listeners add a few dB of preamp to restore subjective loudness. With the peak-protection mode, that extra gain is limited where the peaks require it.
- **Preamp for songs without RG info** applies to untagged files. **GENERAL PRINCIPLE:** setting it a few dB *below* 0 dB roughly matches untagged material, typically mastered loud, to normalized material. There is no universally correct value: it depends on how your untagged files were mastered.

**RUNTIME VERIFICATION REQUIRED:** whether the untagged-file preamp applies when the mode is “Don't apply”. Its label suggests it only matters while ReplayGain is applied.

## Tags and analysis

ReplayGain needs tags written by a tagging or analysis tool. **GENERAL PRINCIPLE:** common fields are track gain, album gain, track peak and album peak (for example the `REPLAYGAIN_*` Vorbis comments, or their ID3/APE equivalents). Album gain is only meaningful when every track of the album was analysed together. The settings XML does not declare which tag formats Poweramp reads. Nothing in it indicates that Poweramp analyses files itself, so plan to tag your library beforehand.

## Interactions

- **Equalizer and DVC.** ReplayGain sets the starting level. EQ boosts come afterwards in the conventional chain ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)) and need their own headroom ([Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md), [Chapter 04 — Equalizer and Tone Controls](04%20Equalizer%20and%20Tone%20Controls.md)). Peak protection covers the ReplayGain step, not later boosts.
- **Bit-perfect output.** Any non-zero gain changes the samples. Perfect Bit Perfect is described as having “no DSP, no software volume control”. **RUNTIME VERIFICATION REQUIRED:** whether ReplayGain is skipped in that mode. See [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md).
- **Not a compressor.** ReplayGain applies one static gain per track or album. Dynamics inside the track are unchanged.

## Recommended starting points

| Listening style | Mode | Source | Notes |
|---|---|---|---|
| Whole albums | Apply Gain/prevent clipping according to Peak | Album | Preserves album dynamics; peak protection avoids clipping from positive gains |
| Shuffle and mixed playlists | Apply Gain/prevent clipping according to Peak | Track | Most consistent song-to-song level |
| Partly tagged library | as above | as above | Set the untagged preamp by ear against a few tagged tracks |
| Reference or bit-perfect listening | Don't apply | — | No sample modification |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, labels, ranges, steps and declared defaults.
- **GENERAL PRINCIPLE:** ReplayGain reference levels, tag fields, peak protection.
- **RUNTIME VERIFICATION REQUIRED:** the peak-handling mechanism, fallback when tags are missing, the scope of the untagged preamp, supported tag formats, and behaviour under Perfect Bit Perfect.

## Related

- [ReplayGain Settings](../Appendices/Settings%20Reference/ReplayGain%20Settings.md)
- [Chapter 04 — Equalizer and Tone Controls](04%20Equalizer%20and%20Tone%20Controls.md) · [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)

---

← [Chapter 04 — Equalizer and Tone Controls](04%20Equalizer%20and%20Tone%20Controls.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 06 — Track Transitions and Gapless Playback](06%20Track%20Transitions%20and%20Gapless%20Playback.md) →
