---
title: "Volume Control and DVC"
chapter: 3
part: "2 — Sound and Audio Processing"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_dvc"
  - "audio_equ"
  - "audio_output_device_opts"
  - "audio_tweaks"
  - "misc"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 03

# 03. Volume Control and DVC

Volume in Poweramp can be set inside the player's own processing chain (Direct Volume Control, DVC) or left to Android and the connected hardware. Which of the two is active decides how much headroom the equalizer has, whether high-resolution output is possible on some devices, and how Bluetooth headsets behave. This chapter covers DVC and every other volume-related setting in build 1031.

## What DVC is

**Enable Direct Volume Control** is a global switch. **APK VERIFIED:** it defaults to On. The APK never defines DVC in a sentence, but the texts around it describe its role consistently:

- The preamp reduction applies the reduction provides headroom for bass or EQ boosts; setting 0 dB may match other apps' loudness but reduces this protection “Applied only when DVC is disabled for any reason”.
- **No Headroom Gain Reduction**: “Don't reduce output gain when DVC is disabled. May cause distortion for high equ/tone gains”.
- **Smooth Equalizer/Tone Gains** (on by default): “Automatically reduce Equalizer/Tone band gains near maximum volume to avoid overloading”.
- Per output, **No DVC**: “Disable Direct Volume Control (DVC) for this output/device” “Disabling DVC may be required for Hi-Res and other advanced output options to work”.
- On some devices: “On your device, DVC may force standard definition audio (48 kHz/16 bit)”.

> [!NOTE]
> **Working model (interpretation of the APK texts; not runtime-verified)**
> With **DVC active**, Poweramp sets the playback level inside its own digital processing, and the Android stream volume for the output stays fixed. Because the level is applied after the equalizer, EQ boosts have headroom wherever the volume is below maximum. Near maximum that headroom runs out, which is why **Smooth Equalizer/Tone Gains** reduces band gains there.
> With **DVC not active** (switched off globally, disabled for one output, or switched off automatically for Bluetooth Absolute Volume), the level is set *after* Poweramp by Android or the device. Poweramp then cannot count on volume headroom, so it lowers its own output by a fixed **preamp reduction** (default −6 dB) to leave room for EQ and bass boosts.
> This model explains every related description in the build. The internal gain arithmetic is not declared, so treat it as **RUNTIME VERIFICATION REQUIRED**.

## Global DVC settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Enable Direct Volume Control | `dvc_enabled` | Switch | On | — | — |
| No DVC for Bluetooth Absolute Volume | `no_dvc_bt_absvol` | Switch | On | — | Enable Direct Volume Control (`dvc_enabled`) |
| No DVC - Preamp Reduction | `no_dvc_gain_mb` | Knob | −6.0 dB (`-600`) | −10.0 dB to 0.0 dB, step 0.5 dB | — |
| Compensate DVC Volume | `compensate_dvc_vol` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Direct Volume Control](../Appendices/Settings%20Reference/Direct%20Volume%20Control.md).*


### Bluetooth Absolute Volume

**GENERAL PRINCIPLE:** with Bluetooth Absolute Volume, the phone's volume control adjusts the headset's own volume instead of scaling the digital signal. If a player also scales the signal digitally (as DVC does), the two controls stack, and the result can be a low ceiling or coarse, unpredictable steps.

**No DVC for Bluetooth Absolute Volume** handles this automatically. Its documented effect is: Poweramp disables DVC when Bluetooth Absolute Volume is detected or cannot be determined. The screen carries two alternative hint rows that show what happens on a given phone:

- When detection is possible: Bluetooth connection can briefly change the volume while Absolute Volume is being detected “• volume may be constantly changed and probed on this page”.
- When it is not: “• it's not possible to detect Absolute Volume on your device” “• on you device this option just disables DVC for Bluetooth by default” “• uncheck if you know that Absolute Volume is disabled for your device”.

A status row (`bt_absvol_status`) and a row titled **Disable Bluetooth Absolute Volume** (`dvc_bt_msg`) complete the Bluetooth section. Their text is generated at runtime. **RUNTIME VERIFICATION REQUIRED:** the second row presumably explains how to turn Absolute Volume off in Android's developer options, but its content is not in the XML.

Practical reading: with the defaults, DVC is **not** used for Bluetooth outputs that have (or may have) Absolute Volume, and volume is handled by the headset. **RESEARCH SUPPORTED:** because the preamp reduction is “applied only when DVC is disabled for any reason”, the −6 dB reduction presumably applies in this case too, so Bluetooth playback may be about 6 dB quieter than in other players. Clear the option only if you know Absolute Volume is off for your device, as the hint itself advises. Bluetooth is covered fully in [Chapter 14 — Bluetooth Audio](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md).

> [!CAUTION]
> **Volume probing**
> The APK states that Absolute Volume detection “may temporarily change volume for a few seconds on Bluetooth connection” and that volume “may be constantly changed and probed” while the DVC settings page is open. Keep headphones off your ears or the volume low while you test.

### Preamp reduction when DVC is off

**No DVC - Preamp Reduction** ranges −10.0 dB to 0.0 dB, step 0.5 dB, default −6.0 dB. The APK frames the trade-off directly: the reduction “allows equalization/basses without distortion”, and setting it to 0 dB matches “other players’ volume, though this makes equalization less effective”. It is “applied only when DVC is disabled for any reason”, which includes the automatic Bluetooth case above.

- If you use **no EQ or tone boosts** with DVC off, 0 dB costs nothing and restores the level other players produce.
- If you use **boosts**, keep a reduction at least as large as your largest combined boost. **GENERAL PRINCIPLE:** overlapping bands can add up to more than any single slider shows. The knob stops at −10 dB, so combined boosts above about 10 dB cannot be fully covered this way; reduce the boosts instead.

**No Headroom Gain Reduction** on the per-output screen removes this reduction for one output entirely, with the APK warning that it “may cause distortion for high equ/tone gains”.

### Android 15+ low-volume compensation

**Compensate DVC Volume**: the setting addresses detected low DVC volume on certain Android 15-or-newer firmware. It is a targeted workaround, off by default, and the APK says it acts only when the issue is detected. It is not a loudness boost.

## Per-output volume settings

These live on the options screen for each output category ([Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)).

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| No DVC <sup>non-persistent</sup> | `no_dvc` | Switch | Not declared | — | — |
| No Headroom Gain Reduction <sup>non-persistent</sup> | `no_headroom` | Switch | Not declared | — | — |
| Volume Type <sup>non-persistent</sup> | `volume_type` | List | Not declared | Auto/Hardware = `0`; Software = `1` | — |
| Synchronize Hardware Volume <sup>non-persistent</sup> | `sync_hw_volume` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


**Volume Type** chooses between:

- **Auto/Hardware** — stored value `0`: Hardware volume is used when supported; otherwise, software volume is used, if possible
- **Software** — stored value `1`: Enable software volume, even when hardware volume is supported

The hint row adds two facts: many USB DACs have independent level controls that the phone's hardware-volume control may not affect “Software volume is not applied in Perfect Bit Perfect mode”. In other words, on a USB DAC with its own volume knob, “Hardware” volume from the phone may not change the DAC's level at all, and Perfect Bit Perfect output receives no software volume regardless of this setting ([Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md)).

**Synchronize Hardware Volume**: the option restores a saved volume; otherwise the device's current hardware level may be used, potentially at maximum. The hint recommends: use synchronization for devices without persistent hardware-volume settings, but not for devices that reliably remember their own level “Applied on the new connection”.

> [!CAUTION]
> **Unexpected maximum volume**
> With synchronization off, the APK warns that a device's current hardware volume “typically defaults to MAXIMUM”. Turn the amplifier or DAC down before the first connection after changing this setting.

## Volume steps, the volume panel and volume-key actions

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Volume Levels | `volume_levels` | List | System Default (`0`) | System Default = `0`; 30 = `30`; 50 = `51`; 75 = `76`; 100 = `101` | — |
| Volume Panel | `volume_popup` | Switch | Not declared | — | — |
| Pause/Resume on Volume <sup>Experiment</sup> | `pause_on_volume` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md).*


**Volume Levels** sets the number of volume steps. The stored values for 50, 75 and 100 are 51, 76 and 101. **RESEARCH SUPPORTED:** these are most likely position counts including zero. More steps give finer control, not better fidelity. **Pause/Resume on Volume** is marked *Experiment* and, per the APK, “works when the Poweramp UI or notification is visible”.

Changing tracks with a long press of the volume keys (**Change Tracks By Long Volume Keys Press**) is described in [Chapter 17 — Headphones and Hardware Buttons](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md).

## Choosing a configuration

| Situation | Suggested starting point | Why |
|---|---|---|
| Phone headphone output or wired adapter, EQ in use | DVC on (default) | EQ boosts get volume headroom; Smooth Gains protects the top of the range |
| Same, but Audio Info reports 48 kHz/16-bit and you want Hi-Res | test **No DVC** for that output | the APK warns DVC may force standard definition on some devices |
| Bluetooth headset with Absolute Volume | defaults (DVC off for that output, −6 dB reduction) | avoids stacked digital and headset volume |
| Bluetooth with Absolute Volume disabled in Android | clear **No DVC for Bluetooth Absolute Volume** | DVC can then manage volume, as the hint text allows |
| USB DAC with its own volume control | turn the DAC down first; volume set on the DAC; **Synchronize Hardware Volume** off (the phone-side hardware volume then “typically defaults to MAXIMUM”); consider **No DVC** for Hi-Res | the hint says hardware volume does not reach the DAC's own control |
| USB DAC without volume control | **Synchronize Hardware Volume** on | the hint recommends it for devices that don't retain their level |

These are reasoned starting points from the APK texts, not measured recommendations. Confirm each with Audio Info and by listening at a safe level.

## Poweramp Equalizer

Poweramp Equalizer is a separate app and is outside this handbook's primary scope. The Player APK evidence does not establish whether it has its own DVC setting or how its settings relate to Player's (**RUNTIME VERIFICATION REQUIRED**). If both apps are installed and you hear unexpected level or gain behaviour, check each app's own settings separately.

## Evidence and limitations

- **APK VERIFIED:** all keys, defaults, ranges and quoted texts; the existence of runtime status rows.
- **RESEARCH SUPPORTED:** the working model of DVC headroom, and the interpretation of the Volume Levels stored values.
- **RUNTIME VERIFICATION REQUIRED:** whether DVC is active on a given output, the content of the Bluetooth status rows, the effective level change from the preamp reduction, and when the Android 15+ compensation triggers.

## Related

- [Direct Volume Control](../Appendices/Settings%20Reference/Direct%20Volume%20Control.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) · [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md)
- [Chapter 04 — Equalizer and Tone Controls](04%20Equalizer%20and%20Tone%20Controls.md) — gain staging with the equalizer.
- [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) — symptoms: too quiet, distorted, sudden level jumps.

---

← [Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 04 — Equalizer and Tone Controls](04%20Equalizer%20and%20Tone%20Controls.md) →
