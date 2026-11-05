---
title: "64-bit Floating-Point Processing"
chapter: 9
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

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 09

# 09. 64-bit Floating-Point Processing

Poweramp can run its internal processing in 64-bit floating point. This chapter explains what that changes, what it does not change, and how the global switch relates to the per-output setting.

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| 64-bit Audio Pipeline | `global_pipeline64` | Switch | Not declared | — | — |
| 64-bit Audio Pipeline <sup>non-persistent</sup> | `pipeline64` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |

*Source: APK build 1031 settings XML — reference: [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md), [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- The **global** switch on **Settings › Audio › Bit Perfect**: “Enables Float 64-bit audio pipeline from decoder to the output”. No default is declared.
- The **per-output** list on each output's options screen offers Auto, Enable and Disable, with stored values 0, 1 and −1. A runtime information row (`pipeline64_static`) shows the state where it cannot be changed. On the Bit Perfect screen, `pipeline64_opts` is a runtime-filled information row.

**RESEARCH SUPPORTED:** “Auto” presumably follows the global switch, and Enable or Disable overrides it for that output. Confirm with Audio Info ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)).

## What 64-bit floating point buys

**GENERAL PRINCIPLE.** A double-precision float carries a 53-bit significand, so each multiply-add in an EQ filter, resampler or volume stage adds a relative rounding error of about 10⁻¹⁶ (roughly −320 dB). Single precision (24-bit significand) gives about −144 dB relative to the signal, comparable to 24-bit fixed point at full scale. Even the single-precision figure lies below the noise floor of practically any recording or DAC. The practical gains of 64-bit processing are:

- **Accumulated error stays negligible** through long chains of processing, such as many narrow EQ bands, strong boosts with compensating attenuation, or resampling with steep filters.
- **Low-frequency filters behave better.** Narrow, low-frequency biquad filters are numerically sensitive, and double precision avoids coefficient-quantization artefacts.
- **There is effectively no internal clipping.** Floating point keeps values above full scale until the final conversion. Clipping can still occur at the output if the signal leaves Poweramp above full scale.

What it does **not** do:

- It does not add resolution to the recording. A 16-bit file processed in 64-bit float is still 16-bit information.
- It does not mean the DAC receives 64-bit samples. Output format is a separate per-output choice ([Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)).
- It does not make playback bit-perfect. Bit-perfect means *no* processing at all ([Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)).

## Should you enable it?

If your device handles it without dropouts, there is no audible downside, and it is the cleanest choice when you use heavy equalization or resampling. **RUNTIME VERIFICATION REQUIRED:** CPU and battery cost. The XML says nothing about it. On older devices, check for stutter under load (screen off, other apps active) and fall back to Auto or Disable for the affected output if you find any.

## Evidence and limitations

- **APK VERIFIED:** keys, description, per-output values and labels, runtime information rows.
- **RESEARCH SUPPORTED:** the relationship between Auto and the global switch.
- **GENERAL PRINCIPLE:** floating-point precision figures and their consequences.
- **RUNTIME VERIFICATION REQUIRED:** the default state, CPU cost, and which outputs allow it.

## Related

- [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) · [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)

---

← [Chapter 08 — Bit Depth, Sample Format and Dither](08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 10 — DSD Playback and Remastering](10%20DSD%20Playback%20and%20Remastering.md) →
