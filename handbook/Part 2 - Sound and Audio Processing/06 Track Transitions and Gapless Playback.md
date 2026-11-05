---
title: "Track Transitions and Gapless Playback"
chapter: 6
part: "2 — Sound and Audio Processing"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_output_device_opts"
  - "fade"
  - "library_lists"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 06

# 06. Track Transitions and Gapless Playback

Track transitions are where a player's design shows: a live album should flow without a click, a party playlist may want a blend, and a manual skip shouldn't sound like a cut tape. Poweramp separates automatic transitions, manual changes, play/pause/stop and seeking, and adds gapless preloading and optional inserted silence. All of it lives on **Settings › Audio › Crossfade, Fade, and Gapless** (screen `fade`).

## Concepts

- **Gapless playback** joins consecutive tracks sample-accurately, with no added silence and no overlap. It matters for live recordings, DJ mixes, classical works split into movements, and albums with segues.
- **Crossfade** overlaps the end of one track with the start of the next while fading one out and the other in.
- **Short fades** are brief level ramps on play, pause, stop, seek or manual skip. They avoid the click of an abrupt start or stop.

## Automatic track changes

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Auto-advance Fading | `crossfade_auto_advance` | List | `0` → No fading† | No fading; Non-gapless/cue; All songs; Shuffled songs (positional†) | — |
| Crossfade Length | `crossfade_length_ms` | Slider | 5000 ms (`5000`) | 100 ms to 15000 ms, step 50 ms | — |

*Source: APK build 1031 settings XML — reference: [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

- **No fading** (the default, if the inferred † mapping holds): tracks follow each other directly. Gapless material plays gaplessly, provided the decoder and output allow it.
- **Non-gapless/cue:** crossfade is restricted by gapless status. **RESEARCH SUPPORTED:** the label suggests that transitions recognised as gapless are left intact and only the others are crossfaded. How Poweramp decides what is gapless, and what “/cue” covers (CUE-sheet tracks, presumably), is not declared.
- **All songs:** every automatic transition is crossfaded, including gapless ones.
- **Shuffled songs:** crossfade only while shuffle is active, so a shuffled playlist blends while an album played in order stays intact.

**Crossfade Length** runs 100 ms to 15000 ms, step 50 ms, default 5000 ms. The fade curve (linear, equal-power or other) is not declared.

## Manual track changes

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Manual Track Change Fading | `fade_manual_advance` | List | `1` → Short crossfade† | No fading; Short crossfade; Crossfade (positional†) | — |
| Short Manual Crossfade Length | `fade_short_xfade_ms` | Slider | 400 ms (`400`) | 10 ms to 1000 ms, step 10 ms | — |

*Source: APK build 1031 settings XML — reference: [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

The declared default `1` corresponds to **Short crossfade** under the inferred † mapping (unverified), using **Short Manual Crossfade Length** (400 ms, 10 ms to 1000 ms, step 10 ms). The APK notes: “Output driver can override this setting”. Some outputs may therefore cut instead of fading.

## Play, pause, stop and seek

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Fade Play/Pause/Stop | `fade_play_pause` | Switch | On | — | — |
| Play/Pause/Stop Fade Length | `fade_short_ms` | Slider | 400 ms (`400`) | 10 ms to 1000 ms, step not declared | — |
| Fade on Seek | `fade_seek` | Switch | On | — | — |
| Seek Fade Length | `fade_seek_ms` | Slider | 100 ms (`100`) | 10 ms to 500 ms, step not declared | — |

*Source: APK build 1031 settings XML — reference: [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md).*


Both fades are on by default: 400 ms for play/pause/stop and 100 ms for seeks. Neither length declares a step. Turn the seek fade off only if you need instant, click-accurate seeking, for example when checking edit points.

## Gapless preloading and inserted silence

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Preload Gapless Tracks | `gapless_preload_ms` | Slider | 0 ms (`0`) | 0 ms to 5000 ms, step 100 ms (labels “None” … “Normal” … “More”) | — |
| Silence Between Tracks | `track_end_silence_ms` | Slider | 0 ms (`0`) | 0 ms to 5000 ms, step 100 ms | — |

*Source: APK build 1031 settings XML — reference: [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md).*


- **Preload Gapless Tracks:** “Increase (to Normal or more) for slow storages to improve gapless” “%d ms”. The slider is labelled None … Normal … More. The numeric position of “Normal” is not declared. Start at 0 and raise it in steps only if you hear gaps when tracks come from slow storage (SD cards, USB OTG, network-mounted folders).
- **Silence Between Tracks:** “Applied to all tracks excluding CUE tracks. Elapsed time may go beyond track duration” “%d ms”. It adds deliberate silence. It does not remove silence that is encoded in the files. Keep it at 0 for gapless albums.

## Things outside this screen that affect transitions

| Cause | Source | Effect |
|---|---|---|
| Sample-rate changes between tracks | Follow Track Sample Rate hint: “Gapless playback and crossfade may be affected when switching between different sample rates” | Mixed-rate albums or playlists may lose gaplessness or crossfade when the output follows each track's rate ([Chapter 07](07%20Sample%20Rates%20and%20Resampling.md)) |
| Bluetooth codec parameter changes | **Set BT Codec Parameters** hint: “Introduces a short gap between tracks during codec parameters change” | A gap at each codec reconfiguration ([Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)) |
| Output reconfiguration delay | **Reconfiguration Delay**: “Increases track change delay” | Longer pauses at format changes on slow-to-reconfigure DACs ([Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)) |
| DSD/PCM switching on USB DACs | **USB DAC PCM/DSD Warmups** | Warm-ups add time at format changes ([Chapter 10](10%20DSD%20Playback%20and%20Remastering.md)) |
| Output driver | `fade_manual_advance` note | A driver may override manual fading |
| Queue restarts and list clicks | **Click Restarts Track** | Whether a list click restarts the current track ([Chapter 19](../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)) |

## Recipes

| Goal | Auto-advance | Manual | Silence | Preload |
|---|---|---|---|---|
| Gapless albums (live, classical, DJ mixes) | No fading | Short crossfade or No fading | 0 ms | 0, raise only if gaps appear |
| Album fidelity, blended shuffle | Shuffled songs | Short crossfade | 0 ms | as needed |
| Radio-style blend for mixed playlists | All songs (or Non-gapless/cue to protect segues) | Crossfade | 0 ms | as needed |
| Spoken word with breathing room | No fading | No fading | e.g. 1000–2000 ms | — |

For gapless playback, also keep the output at a **fixed sample rate**, or make sure an album's tracks share one rate, when Follow Track Sample Rate is enabled.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** all keys, ranges, steps, defaults and quoted notes; option labels (resolved resources).
- **RESEARCH SUPPORTED:** the interpretation of “Non-gapless/cue”.
- **RUNTIME VERIFICATION REQUIRED:** fade curves, gapless detection, which drivers override manual fading, the “Normal” preload value, and CUE handling.

## Related

- [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md)
- [Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md) · [Chapter 21 — Shuffle](../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md) · [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md)

---

← [Chapter 05 — ReplayGain and Loudness Normalization](05%20ReplayGain%20and%20Loudness%20Normalization.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md) →
