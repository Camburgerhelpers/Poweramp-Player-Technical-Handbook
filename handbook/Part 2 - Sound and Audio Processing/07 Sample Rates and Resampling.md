---
title: "Sample Rates and Resampling"
chapter: 7
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
  - "audio_resampler"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 07

# 07. Sample Rates and Resampling

Digital audio arrives at fixed sample rates: 44.1 kHz for CD-derived material, 48 kHz for video and most streaming masters, and multiples of both for high-resolution files. An output also runs at one rate at a time. When the two differ, something has to resample. In Poweramp the questions are **where** that happens (in Poweramp, in Android, or not at all) and **how well**. Build 1031 has a global resampler configuration plus per-output rate controls.

## Resampler quality

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Resampler Type | `resampler_type` | List | `0` → SW - high quality† | SW - high quality; SoX - very high quality (positional†) | — |
| Resampler Cutoff Frequency Ratio | `resampler_cutoff` | Knob | 97.0% (`970`) | 80.0% to 99.0%, step not declared | — |

*Source: APK build 1031 settings XML — reference: [Resampler Settings](../Appendices/Settings%20Reference/Resampler%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **SW - high quality**
- **SoX - very high quality**

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

The labels come from the resolved APK strings. **RESEARCH SUPPORTED** (an interpretation of the labels, not declared): “SW” most likely corresponds to FFmpeg's built-in libswresample engine and “SoX” to the SoX resampler (soxr). **GENERAL PRINCIPLE:** Both are mature polyphase designs. SoX is generally the more stringent of the two, at somewhat higher CPU cost. Poweramp's exact filter parameters are not declared.

**Resampler Cutoff Frequency Ratio** (80.0% to 99.0%, step not declared, default 97.0%) sets where the anti-aliasing/anti-imaging filter's passband ends. **GENERAL PRINCIPLE:** it is expressed as a fraction of the Nyquist frequency of the lower of the two rates. At 97 % for a 44.1 kHz target the passband runs to about 21.4 kHz. A higher ratio keeps more top octave but needs a steeper filter. A lower ratio gives a gentler filter with more stop-band margin. Both endpoints are inaudible to most adults, so the default is a sensible choice. Two observations support this reading. FFmpeg's libswresample documents a `cutoff` ratio whose default for its native engine is also 0.97 (its soxr engine defaults to 0.91, so the correspondence is partial). And Poweramp's dither choices ([Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)) match libswresample's dither methods one-for-one. Together they suggest that Poweramp exposes libswresample-style parameters. That remains an inference: the ratio's exact reference is **RUNTIME VERIFICATION REQUIRED**.

## Fixed rate or Follow Track

The per-output options screen ([Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)) decides the output rate.

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Sample Rate <sup>non-persistent</sup> | `sample_rate` | List | Not declared | Options populated at runtime | — |
| Follow Track Sample Rate | `global_follow_sr` | Switch | Not declared | — | — |
| Allowed Sample Rates <sup>non-persistent</sup> | `allowed_srs` | Multi-select list | Not declared | Options populated at runtime (multi-select) | — |
| Base-Rate Synchronous Scaling <sup>non-persistent</sup> | `prefer_base_rate` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md), [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md).*


- **Sample Rate** is “The sample rate Poweramp uses for the output”. Its choices are populated at runtime from what the driver and device support.
- **Follow Track Sample Rate** (global switch; the XML shows no per-output switch with this name) “enables track sample rate matching for the compatible outputs”. Its hints explain the algorithm:
  - Follow Track chooses from supported allowed rates and may select the next higher compatible rate the feature targets devices supporting numerous rates, such as USB DACs and dedicated audio players.
  - “Gapless playback and crossfade may be affected when switching between different sample rates” source rates not allowed or not supported by the output are still resampled “Perfect Bit Perfect mode enables the selection of allowed DSD rates as well”.
- **Allowed Sample Rates** is a runtime-populated multi-select that limits the rates Follow Track may use.
- **Base-Rate Synchronous Scaling:** “Prioritize integer multiples of the source frequency (44.1/48 kHz) from the Allowed Sample Rates”.

### Worked illustration

Take a 44.1 kHz track on a DAC whose allowed list is 48, 88.2 and 96 kHz:

- **Follow Track without Base-Rate scaling** → no exact match, so the track is upsampled to the *next higher* allowed rate, **48 kHz**.
- **Follow Track with Base-Rate scaling** → the integer multiple **88.2 kHz** is preferred.
- **Fixed 48 kHz output** → always resampled to 48 kHz.

Add 44.1 kHz to the allowed list and the track plays at its native rate.

This illustration follows the APK descriptions word for word. The exact selection order when several candidates qualify is **RUNTIME VERIFICATION REQUIRED**. **GENERAL PRINCIPLE:** integer-ratio conversion is not inherently higher quality with modern resamplers, but it avoids switching rate families. Some DACs relock audibly or slowly when they change families.

## When Android resamples instead

Even with Poweramp configured perfectly, the platform can impose a rate. The APK names three cases:

| Case | APK text |
|---|---|
| DVC on some devices | “On your device, DVC may force standard definition audio (48 kHz/16 bit)” |
| System-wide effects | “Global sound effects, like Dolby, may force standard definition audio (48 kHz/16 bit)” |
| Bluetooth on phones | many Android phones use 48-kHz-family Bluetooth rates, so requesting another codec rate can add resampling; this option chiefly targets dedicated audio players codec parameters can arrive too late, cause mid-track reconfiguration, or fail to arrive |

In these cases Poweramp may output 48 kHz, or Android may convert after Poweramp. Use **Audio Info** to see what Poweramp sends. **GENERAL PRINCIPLE:** where the platform forces a fixed rate, it is usually better to let Poweramp's resampler (SoX, if you prefer) do the conversion to that rate than to leave it to a generic system resampler.

## DSD Remastering overrides rate selection

If DSD Remastering is active, the hint states: “This option overrides Sample Rate and Allowed Sample Rates selection”. See [Chapter 10 — DSD Playback and Remastering](10%20DSD%20Playback%20and%20Remastering.md).

## Gapless and crossfade side effects

Follow Track changes the output rate when consecutive tracks differ. The APK warns that gapless playback and crossfade “may be affected”. For mixed-rate playlists that rely on gapless joins, prefer a fixed output rate. Only enable Follow Track if the DAC switches cleanly. **Reconfiguration Delay** ([Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)) helps DACs that need more time.

## Choosing

| Output | Starting configuration |
|---|---|
| Phone speaker or Bluetooth on a phone | Leave the rate at the driver default (often 48 kHz); SoX resampler |
| USB DAC with broad rate support, native playback wanted | Follow Track on; allowed list = every rate the DAC handles cleanly; Base-Rate scaling on if the list is incomplete |
| USB DAC with gapless mixed-rate playlists | Fixed rate (e.g. 96 kHz); SoX resampler |
| Bit-perfect intent | Follow Track with all source rates allowed, plus Perfect Bit Perfect ([Chapter 11](11%20Bit-Perfect%20Output.md)) |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** resampler labels, cutoff range and default, all quoted hints, the runtime nature of the rate lists, and the DSD override.
- **GENERAL PRINCIPLE:** resampler engines, cutoff semantics, and rate-family behaviour of DACs.
- **RUNTIME VERIFICATION REQUIRED:** the rates offered per driver and device, the exact Follow Track selection order, and whether the cutoff ratio is relative to the output or the input Nyquist frequency.

## Related

- [Resampler Settings](../Appendices/Settings%20Reference/Resampler%20Settings.md) · [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) · [Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) · [Chapter 14 — Bluetooth Audio](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)

---

← [Chapter 06 — Track Transitions and Gapless Playback](06%20Track%20Transitions%20and%20Gapless%20Playback.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) →
