---
title: "DSD Playback and Remastering"
chapter: 10
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

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 10

# 10. DSD Playback and Remastering

DSD (Direct Stream Digital) is the 1-bit, very-high-rate format of SACD. It is distributed in `.dsf` and `.dff` files. Poweramp build 1031 can send DSD tracks to compatible DACs as DSD, and can also convert ordinary PCM tracks *to* DSD (“DSD Remastering”). This chapter separates the two, and covers the transport options (DoP and native) and the USB warm-up settings that help DACs switch between PCM and DSD.

## Playing DSD files as DSD

The only APK text that promises DSD output for DSD tracks belongs to Perfect Bit Perfect: a direct decoder-to-output route can send DSD tracks without EQ, other DSP, or software volume A Follow Track hint adds: “Perfect Bit Perfect mode enables the selection of allowed DSD rates as well”.

Two per-output switches control how the DSD stream travels:

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Allow DSD DOP <sup>non-persistent</sup> | `allow_dsd_dop` | Switch | Not declared | — | — |
| Prefer DSD Raw <sup>non-persistent</sup> | `prefer_dsd_raw` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


**GENERAL PRINCIPLE:**

- **DoP (DSD over PCM)** packs 16 DSD bits, plus a marker byte, into each 24-bit PCM frame at a rate such as 176.4 kHz for DSD64. The DAC recognises the marker and plays DSD. It works through paths that only carry PCM, but the DAC must support DoP. Any change to the samples on the way (volume, resampling, effects) destroys the marker and produces loud noise.
- **Native (raw) DSD** sends the bitstream in a dedicated USB format. It needs DAC support and a driver path that exposes it. It is generally preferred where available.

**RUNTIME VERIFICATION REQUIRED:** how DSD files are played when Perfect Bit Perfect is off. The extracted evidence does not say. **GENERAL PRINCIPLE:** players normally convert DSD to PCM in that case.

> [!CAUTION]
> **DoP and volume**
> Never route DoP through anything that changes level. Use Perfect Bit Perfect, keep system effects off, and lower the DAC's volume before the first test.

## DSD Remastering: PCM to DSD

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| DSD Remastering | `global_dsd_remaster` | Switch | Not declared | — | — |
| DSD Remastering <sup>non-persistent</sup> | `dsd_remaster` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |
| Target DSD Sample Rate <sup>non-persistent</sup> | `dsd_remaster_sample_rate` | List | Not declared | Options populated at runtime | — |
| Allow 48 kHz-based DSD <sup>non-persistent</sup> | `dsd_remaster_allow_48k` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md), [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- The global switch and the per-output list are both described as “Remasters PCM to DSD”. The per-output list offers Auto, Enable and Disable (0, 1, −1). The global switch declares no default.
- **Target DSD Sample Rate** is populated at runtime. The APK text: “Used in the DSD Remastering mode for the output” “48 kHz-based DSD sample rate variant is used (if supported) for 48 kHz-based tracks”.
- **Allow 48 kHz-based DSD:** “Use 48 kHz-based DSD sample rates for 48 kHz-based PCM tracks”.
- The hint row states two rules: “This option overrides Sample Rate and Allowed Sample Rates selection” with Perfect Bit Perfect enabled, DSD Remaster affects PCM material while native DSD tracks are unchanged.

So with remastering active, the output rate is the DSD target and the PCM rate settings no longer apply. Combined with Perfect Bit Perfect, PCM tracks are remastered and DSD tracks pass through unchanged.

**GENERAL PRINCIPLE: what remastering is and isn't.** PCM-to-DSD conversion is a high-rate sigma-delta modulation of the PCM signal. It cannot add information that the PCM source lacks. Its use is to drive a DAC in its DSD mode, which some listeners prefer and some DACs implement better than their PCM path. The modulator's design (order, noise shaping) is not declared, so its quality cannot be judged from this evidence.

**GENERAL PRINCIPLE: 48 kHz-based DSD.** DSD rates are normally multiples of 44.1 kHz (DSD64 = 2.8224 MHz). Variants based on 48 kHz (3.072 MHz) exist, and some DACs accept them. With the 48 kHz-based option, 48 kHz-family PCM can be modulated without a rate-family conversion.

## USB DAC switching aids

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| USB DAC PCM/DSD Warmups <sup>non-persistent</sup> | `pcm_dsd_extra_warmup` | Switch | Not declared | — | — |
| USB DAC Warmup on Startup <sup>non-persistent</sup> | `warmup` | Switch | Not declared | — | — |
| Reconfiguration Delay <sup>non-persistent</sup> | `reconfig_delay_ms` | Slider | Not declared | 0 ms to 500 ms, step not declared (minimum position labelled “Default delay”; labels “Default” … “500”) | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


DACs that click, mute or distort when they switch between PCM and DSD, or when they first lock, are the target of these options ([Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)). Each warm-up or delay lengthens track changes.

## A safe test sequence

1. Lower the DAC volume. Enable **Perfect Bit Perfect** for the USB output ([Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)).
2. Play a DSD64 `.dsf`. Check Audio Info and the DAC's display for DSD (or DoP).
3. If you hear noise, check that **Allow DSD DOP** matches what the DAC supports. Try **Prefer DSD Raw** if the DAC supports native DSD.
4. To try remastering, enable **DSD Remastering** for that output. Play a 44.1 kHz and then a 48 kHz PCM track, and check the reported DSD rate. Toggle **Allow 48 kHz-based DSD** if the DAC supports it.
5. If format switches glitch, enable **USB DAC PCM/DSD Warmups**. Raise **Reconfiguration Delay** only if needed.

## Evidence and limitations

- **APK VERIFIED:** all keys, labels and quoted rules, including the override and the PCM-only rule.
- **GENERAL PRINCIPLE:** DoP framing, native DSD, sigma-delta conversion, DSD rate families.
- **RUNTIME VERIFICATION REQUIRED:** DSD handling outside Perfect Bit Perfect, the available target rates, modulator design, the default states, and DAC-specific behaviour.

## Related

- [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md) · [Chapter 13 — USB DAC Setup and Compatibility](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)

---

← [Chapter 09 — 64-bit Floating-Point Processing](09%2064-bit%20Floating-Point%20Processing.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md) →
