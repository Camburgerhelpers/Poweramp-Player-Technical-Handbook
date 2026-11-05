---
title: "USB DAC Setup and Compatibility"
chapter: 13
part: "3 — Outputs and Devices"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_output_device_opts"
  - "audio_outputs_tweaks"
  - "headset"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 13

# 13. USB DAC Setup and Compatibility

An external USB DAC is usually the most capable output Poweramp supports. Depending on the phone, the Android version, the output driver and the DAC itself, it may allow native sample rates, DSD and bit-perfect output. None of these is guaranteed for a given combination (**RUNTIME VERIFICATION REQUIRED**). It is also the output with the most compatibility settings, because USB audio devices vary widely in how they start up, switch formats and handle volume. This chapter collects every USB-related setting in build 1031 and gives an order in which to apply them.

## Before you start

> [!CAUTION]
> **Hearing and equipment safety.**
> Lower the DAC or amplifier volume, and take headphones off, before you connect, before you change a volume, synchronization or bit-perfect setting, and before you test DSD. Some DACs start at full level. With **Synchronize Hardware Volume** off, the phone-side hardware volume “typically defaults to MAXIMUM”. Perfect Bit Perfect applies no software volume. A DoP or format mismatch can produce loud noise.

- Play a known track and keep **Audio Info** open ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)) so you can see what changes.
- Change one setting at a time.

## Connection behaviour

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Show Poweramp for USB DACs <sup>non-persistent</sup> | `usb_activity` | Switch | Not declared | — | — |
| Pause On USB DAC connection | `pause_on_usb_connection` | Switch | Not declared | — | — |
| Pause On Headset Disconnect | `pause_on_headset` | Switch | Not declared | — | — |
| Release USB DAC while paused <sup>non-persistent</sup> | `pause_usb_release` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md), [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md), [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **Show Poweramp for USB DACs** (Audio Outputs › Advanced Tweaks): the app can open on USB DAC connection and remember the device to reduce later connection prompts.
- **Pause On USB DAC connection** (Headset/Bluetooth): pausing as a USB DAC connects can prevent loud initialization noise.
- **Pause On Headset Disconnect** also covers USB DACs: “Pause when wired/Bluetooth headset/USB DAC disconnected”.
- **Release USB DAC while paused** (per output): “Return the USB DAC to Android while Poweramp is paused or stopped so other apps can use it” “This option stresses USB DAC a bit more, and may cause glitches for some DACs”.

## Volume on a USB DAC

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Volume Type <sup>non-persistent</sup> | `volume_type` | List | Not declared | Auto/Hardware = `0`; Software = `1` | — |
| Synchronize Hardware Volume <sup>non-persistent</sup> | `sync_hw_volume` | Switch | Not declared | — | — |
| No DVC <sup>non-persistent</sup> | `no_dvc` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


The APK's hint is the key fact: many USB DACs have independent level controls that the phone's hardware-volume control may not affect “Software volume is not applied in Perfect Bit Perfect mode”. Many DACs therefore have **two** volume stages: Poweramp's (software or DVC) and the DAC's own (knob or firmware).

- **DAC with its own volume control that keeps its level.** Set the level on the DAC. Leave **Synchronize Hardware Volume** off, as the hint advises for devices that “preserve their volume level between connections”. Because the phone-side hardware volume may then start at maximum, turn the DAC down before each first connection until you know how your DAC behaves.
- **DAC without its own control, or one that forgets its level.** Turn **Synchronize Hardware Volume** on, which “restores the previously saved volume”. With it off, the device's current hardware volume “typically defaults to MAXIMUM”.
- **Hi-Res or bit-perfect.** Set **No DVC** for the USB output if Audio Info shows a capped format ([Chapter 03 — Volume Control and DVC](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 11 — Bit-Perfect Output](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)).

## Rates and formats

USB DACs are the output the Follow Track feature was designed for. The APK says it is “intended for devices with broad sample rate support, including USB DACs and Digital Audio Players”. Configure **Follow Track Sample Rate**, **Allowed Sample Rates** and **Base-Rate Synchronous Scaling** as in [Chapter 07 — Sample Rates and Resampling](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), and the output format as in [Chapter 08 — Bit Depth, Sample Format and Dither](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md). For DSD, see [Chapter 10 — DSD Playback and Remastering](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md).

## Compatibility quirks

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| USB DAC Warmup on Startup <sup>non-persistent</sup> | `warmup` | Switch | Not declared | — | — |
| USB DAC PCM/DSD Warmups <sup>non-persistent</sup> | `pcm_dsd_extra_warmup` | Switch | Not declared | — | — |
| USB DAC Sample Rate Quirk <sup>non-persistent</sup> | `target_alt_sr_quirk` | Switch | Not declared | — | — |
| Force USB 1.1 <sup>non-persistent</sup> | `force_usb_full_speed` | Switch | Not declared | — | — |
| Reconfiguration Delay <sup>non-persistent</sup> | `reconfig_delay_ms` | Slider | Not declared | 0 ms to 500 ms, step not declared (minimum position labelled “Default delay”; labels “Default” … “500”) | — |
| Buffer Size <sup>non-persistent</sup> | `buffer_size` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


**GENERAL PRINCIPLE** background: a USB Audio Class device exposes “alternate settings” (interface configurations for given formats) and accepts a sampling-frequency request. Devices differ in how long they need to lock after a change, and in which order they expect the two requests. The quirk options address these differences:

- **USB DAC Warmup on Startup:** extra warm-up at first playback may help DACs that initially output silence or distortion.
- **USB DAC PCM/DSD Warmups:** additional warm-ups can address PCM/DSD distortion after format or sample-rate changes.
- **USB DAC Sample Rate Quirk:** this workaround sets the USB rate after selecting the alternative interface setting, potentially fixing silence or distortion.
- **Force USB 1.1:** “Force slow full speed usb connection for the old USB 1.1 devices”. USB 1.1 full speed limits bandwidth. Use it only for genuinely old devices.
- **Reconfiguration Delay** adds time between reconfigurations and lengthens track changes.
- **Buffer Size**: “Tweak if audio skips”.

## Troubleshooting order

| Symptom | Try, in this order |
|---|---|
| Loud pop or noise when connecting | Pause On USB DAC connection → USB DAC Warmup on Startup |
| Silence or distortion right after connecting | USB DAC Warmup on Startup → USB DAC Sample Rate Quirk |
| Distortion after a rate or PCM/DSD change | USB DAC PCM/DSD Warmups → Reconfiguration Delay (small steps) |
| Dropouts during playback | Buffer Size (larger) → cable/hub/power → 64-bit pipeline to Auto/Disable to cut CPU load |
| Old DAC not recognised or unstable | Force USB 1.1 → check the Audio Outputs Detection Log |
| Other apps can't use the DAC | Release USB DAC while paused (may stress some DACs) |
| Level jumps to maximum | DAC volume down → Synchronize Hardware Volume on → check Volume Type |

**GENERAL PRINCIPLE:** check the physical layer before blaming software. Bus-powered DACs on phones can brown out under load, and OTG adapters and hubs are frequent causes of failure.

## Evidence and limitations

- **APK VERIFIED:** every listed key and text, the USB DAC/DAP intent of Follow Track, and the maximum-volume warning.
- **GENERAL PRINCIPLE:** USB Audio Class behaviour and power considerations.
- **RUNTIME VERIFICATION REQUIRED:** the default state of every USB option (none is declared), which driver Poweramp uses for a given DAC, and warm-up durations.

## Related

- [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) · [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md) · [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md)
- [Chapter 10 — DSD Playback and Remastering](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md) · [Chapter 11 — Bit-Perfect Output](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) · [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md)

---

← [Chapter 12 — Choosing an Audio Output](12%20Choosing%20an%20Audio%20Output.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 14 — Bluetooth Audio](14%20Bluetooth%20Audio.md) →
