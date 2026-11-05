---
title: "Tracker Module Playback"
chapter: 24
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_tweaks"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 24

# 24. Tracker Module Playback

Tracker modules (MOD, XM, IT and related formats) are not recordings. They are compositions: sample data plus pattern instructions that the player renders in real time. Poweramp includes a tracker decoder with two dedicated controls, on **Settings › Audio › Advanced Tweaks** (screen `audio_tweaks`).

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Tracker Decoder Extra Gain | `mod_gain_mb` | Knob | Not declared | −10.0 dB to 10.0 dB, step 1.0 dB | — |
| Tracker Decoder Stereo Separation | `mod_separation` | Knob | Not declared | 0% to 200%, step 10% | — |

*Source: APK build 1031 settings XML — reference: [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md).*


### Tracker Decoder Extra Gain

“Extra gain applied to tracker formats, such as .mod, *.s3c, *.xm, *.it”. The range is −10.0 dB to 10.0 dB, step 1.0 dB, with no declared default.

The extension list is quoted exactly as declared, including “*.s3c”. **RESEARCH SUPPORTED** (editorial inference, not verified): this is probably a typo for `.s3m` (ScreamTracker 3). The XML does not confirm it, and the list may not be exhaustive.

**GENERAL PRINCIPLE.** Modules are often rendered quieter than mastered recordings, because a tracker mixes many channels and leaves headroom against clipping. Extra gain brings them closer to the level of the rest of the library. Positive gain can clip loud modules, so raise it in small steps. **RUNTIME VERIFICATION REQUIRED:** whether the ReplayGain preamp for untagged files ([Chapter 05 — ReplayGain and Loudness Normalization](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)) also applies to modules when ReplayGain is enabled.

### Tracker Decoder Stereo Separation

The range is 0% to 200%, step 10%, with no declared default. The XML is inconsistent here: the value format is a percentage (`%.0f%%`) but the knob label format reads `%.1fdB`. The percentage matches the 0–200 range, so this handbook treats the control as a percentage. **APK VERIFIED** inconsistency; display behaviour is **RUNTIME VERIFICATION REQUIRED**.

**GENERAL PRINCIPLE.** Classic Amiga MOD files hard-pan channels fully left and right, which sounds extreme on headphones. Reducing separation narrows the image. In the usual convention 0 % is mono and 100 % is the module's own panning, with higher values widening the image further; Poweramp's own scale is **RUNTIME VERIFICATION REQUIRED**. A partial reduction is a common choice for Amiga-era modules on headphones; set it by ear.

## Evidence and limitations

- **APK VERIFIED:** keys, ranges, steps, the declared extension text and the format inconsistency.
- **RESEARCH SUPPORTED:** “.s3c” as a typo for `.s3m`.
- **GENERAL PRINCIPLE:** tracker rendering, Amiga panning, the usual separation convention.
- **RUNTIME VERIFICATION REQUIRED:** defaults, the full list of supported module formats, interpolation and resampling used by the decoder, and how 100 % is defined.

## Related

- [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md)
- [Chapter 05 — ReplayGain and Loudness Normalization](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md) · [Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

---

← [Chapter 23 — Network Streams](23%20Network%20Streams.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 25 — Look and Feel](../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md) →
