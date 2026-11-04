---
title: "Bit-Perfect Output"
chapter: 11
part: "2 — Sound and Audio Processing"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_bit_perfect"
  - "audio_output_device_opts"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 11

# 11. Bit-Perfect Output

“Bit-perfect” means the samples that reach the DAC are identical to the samples decoded from the file: no gain change, no equalization, no resampling, no dither, no mixing. Poweramp build 1031 offers this as **Perfect Bit Perfect**, both as a global switch and per output. This chapter explains what it disables, what you still have to set up correctly around it, and how to check that it works.

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Perfect Bit Perfect | `global_perfect_bit_perfect` | Switch | Not declared | — | — |
| Perfect Bit Perfect <sup>non-persistent</sup> | `perfect_bit_perfect` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |

*Source: APK build 1031 settings XML — reference: [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md), [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


APK description: “Direct decoder-to-output path. Enables DSD output for DSD tracks. No Equalizer, no DSP, no software volume control”.

The per-output list (Auto/Enable/Disable = 0/1/−1) lets you, for example, run bit-perfect on a USB DAC and keep the equalizer on Bluetooth. No default is declared for either control. Runtime information rows (`perfect_bit_perfect_opts`, `perfect_bit_perfect_static`) report the state.

## What Perfect Bit Perfect switches off

| Stage | Status in PBP | Evidence |
|---|---|---|
| Equalizer and tone | off | **APK VERIFIED** (“No Equalizer”) |
| Other DSP | off | **APK VERIFIED** (“no DSP”) |
| Software volume and DVC | off | **APK VERIFIED** (“no software volume control”; “Software volume is not applied in Perfect Bit Perfect mode”) |
| ReplayGain | presumably off (it is a digital gain) | **RUNTIME VERIFICATION REQUIRED** |
| Crossfade and fades | presumably off (they modify samples) | **RUNTIME VERIFICATION REQUIRED** |
| Resampling | avoided only if the output can run at the track's rate | see below |
| DSD tracks | sent as DSD | **APK VERIFIED** |

## What you must still get right

1. **Volume.** With no software volume, level comes from the DAC's own control or from hardware volume. Review **Volume Type** and **Synchronize Hardware Volume** for the output ([Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md)). Start with the DAC turned down.
2. **Sample rate.** Bit-perfect requires the output to run at each track's native rate. Enable **Follow Track Sample Rate** and include every source rate in **Allowed Sample Rates** ([Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md)). In this mode, allowed DSD rates can be selected as well. Any track rate that is not allowed or not supported will “still be resampled”.
3. **DVC on that output.** The APK notes that disabling DVC “may be required for Hi-Res and other advanced output options to work”, and that on some devices DVC forces 48 kHz/16-bit. If Audio Info shows a capped format, set **No DVC** for the output.
4. **System effects.** Global effects such as Dolby “may force standard definition audio”. Turn off system-wide effects and MusicFX.
5. **Driver.** **GENERAL PRINCIPLE:** bit-perfect output requires a path on which nothing mixes, resamples or applies effects to the stream. Traditionally on Android that means a driver path that bypasses the system mixer; newer Android versions (Android 14 and later) also define a framework-level bit-perfect mixer behaviour for some USB devices. Which path Poweramp uses on a given device is **RUNTIME VERIFICATION REQUIRED**. The driver list is populated at runtime ([Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)). On USB, a direct driver path is the usual route ([Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)).
6. **DSD Remastering.** If this is enabled too, PCM tracks are *converted* to DSD (not bit-perfect) and DSD tracks pass unchanged ([Chapter 10 — DSD Playback and Remastering](10%20DSD%20Playback%20and%20Remastering.md)).

## Verifying

**GENERAL PRINCIPLE.** The setting expresses intent. Proof comes from the chain:

- **Audio Info** should show the track's own rate and format and no active processing ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)).
- The **DAC's display** (or its companion app) should show the same rate as the file.
- **Transparency tests.** If the DAC or a downstream receiver can detect HDCD flags or a DTS-encoded CD-audio stream, those signals only survive a bit-exact path. A DTS-CD track played into an S/PDIF receiver that decodes DTS will show “DTS” only if no sample was altered. Some measurement setups compare a digital capture with the file directly.

## When not to use it

Bit-perfect output is a reference mode, not a quality upgrade in itself. It gives up equalization (including headphone correction), ReplayGain and crossfade. On a fixed-rate phone output the platform resamples, and on Bluetooth the stream is normally re-encoded by a lossy codec, so bit-perfect output to the listener is generally not achievable there. Lossless Bluetooth codecs exist on some devices, but Poweramp does not control the encoding.

## Evidence and limitations

- **APK VERIFIED:** description, per-output values, the rules about software volume, DVC, allowed DSD rates, the DSD Remaster combination, and the effects warnings.
- **GENERAL PRINCIPLE:** the definition of bit-perfect and verification methods.
- **RUNTIME VERIFICATION REQUIRED:** ReplayGain and fade behaviour in PBP, which drivers support it on a given device, and the default states.

## Related

- [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md) · [Chapter 10 — DSD Playback and Remastering](10%20DSD%20Playback%20and%20Remastering.md) · [Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)

---

← [Chapter 10 — DSD Playback and Remastering](10%20DSD%20Playback%20and%20Remastering.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) →
