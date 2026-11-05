---
title: "Bit Depth, Sample Format and Dither"
chapter: 8
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
  - "audio_resampler"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 08

# 08. Bit Depth, Sample Format and Dither

Sample rate fixes how often the signal is sampled. Sample format and bit depth fix how precisely each sample is represented. Poweramp processes audio at high internal precision and must produce whatever format the output accepts: 16-bit, 24-bit or 32-bit integer, or floating point. When precision is reduced along the way, dither decides what the rounding error sounds like.

## Output format

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Sample Format <sup>non-persistent</sup> | `sample_fmt` | List | Not declared | Options populated at runtime | — |
| Float32 Sample Format <sup>non-persistent</sup> | `float` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **Sample Format** is “The sample format Poweramp uses for the output”. Like Sample Rate, its choices are filled in at runtime from the driver and device. A companion information row (`sample_bits_static`) shows the format when it cannot be changed.
- **Float32 Sample Format** is a separate per-output switch with no description in the XML. **RESEARCH SUPPORTED** (inferred from the title only): it presumably asks the output path to accept 32-bit floating-point samples instead of integers, which avoids an integer conversion inside Poweramp when the Android path or device accepts float. It is unrelated to the 64-bit internal pipeline ([Chapter 09 — 64-bit Floating-Point Processing](09%2064-bit%20Floating-Point%20Processing.md)). **RUNTIME VERIFICATION REQUIRED:** how this switch interacts with the Sample Format list.

The system can still cap the format. The APK warns that DVC on some devices, and system-wide effects such as Dolby, “may force standard definition audio (48 kHz/16 bit)” ([Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md)).

## Dither

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Dither | `dither` | List | `0` → None (fastest)† | None (fastest); Rectangular (fast); Triangular (fast); Triangular with high pass (fast); F-weighted noise shaping (slow); Modified-e-weighted noise shaping (slow); Improved-e-weighted noise shaping (slow); Shibata noise shaping (slow); Low shibata noise shaping (slow) (positional†) | — |

*Source: APK build 1031 settings XML — reference: [Resampler Settings](../Appendices/Settings%20Reference/Resampler%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **None (fastest)**
- **Rectangular (fast)**
- **Triangular (fast)**
- **Triangular with high pass (fast)**
- **F-weighted noise shaping (slow)**
- **Modified-e-weighted noise shaping (slow)**
- **Improved-e-weighted noise shaping (slow)**
- **Shibata noise shaping (slow)**
- **Low shibata noise shaping (slow)**

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

The APK adds: “Output driver can override this setting”. The “(fast)” and “(slow)” tags in the labels refer to CPU cost.

**GENERAL PRINCIPLE: what dither does.** Reducing a high-precision signal to fewer bits leaves a rounding error. Without dither, at low levels this error is correlated with the music and is heard as distortion: a gritty texture on fade-outs and reverb tails. Dither adds a tiny amount of random noise before rounding, which turns the error into a constant, benign noise floor.

| Family | Character | Use |
|---|---|---|
| None | no added noise; correlated error at low levels | integer outputs of 24 bits or more, where the error lies below the analogue noise of practically any DAC |
| Rectangular | uniform noise; less effective at removing noise modulation | rarely preferred |
| Triangular (TPDF) | the textbook choice; fully decorrelates error and noise level | **default recommendation for 16-bit output** |
| Triangular with high pass | TPDF with the noise tilted upward in frequency | slightly lower audibility on some systems |
| Noise shaping: F-, modified-E-, improved-E-weighted, Shibata, low Shibata | pushes noise into frequency regions where hearing is least sensitive; total noise power rises | 16-bit output on quiet, high-quality systems; aggressive curves can be audible on high-gain headphones |

These descriptions are standard engineering properties of the named methods. The names match FFmpeg libswresample's dither methods. Poweramp's implementation details are not declared.

**When dither matters at all.** Dither is only relevant when the output is narrower than the processing. With a 24-bit or 32-bit integer output, or a float output, the choice has no practical effect. With a 16-bit output, for example a phone forced to 48 kHz/16-bit, Triangular is a sound default. Noise shaping is worth trying only if you listen at high gain in a quiet room.

## Bit-perfect and dither

Dither changes sample values. Perfect Bit Perfect (“no DSP”) implies none is applied ([Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)). Choosing a dither type therefore has no effect in that mode, and can be overridden by the driver in others.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, the nine dither labels, the declared default value `0` (its option is inferred, †) and the driver-override note; the runtime population of format lists.
- **GENERAL PRINCIPLE:** dither theory, noise shaping, and the libswresample correspondence.
- **RUNTIME VERIFICATION REQUIRED:** the formats offered per driver and device, the effect of Float32 alongside Sample Format, and which drivers override dither.

## Related

- [Resampler Settings](../Appendices/Settings%20Reference/Resampler%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md) · [Chapter 09 — 64-bit Floating-Point Processing](09%2064-bit%20Floating-Point%20Processing.md) · [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)

---

← [Chapter 07 — Sample Rates and Resampling](07%20Sample%20Rates%20and%20Resampling.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 09 — 64-bit Floating-Point Processing](09%2064-bit%20Floating-Point%20Processing.md) →
