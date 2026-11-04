---
title: "The Poweramp Audio Path"
chapter: 2
part: "1 — Getting Oriented"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio"
  - "audio_bit_perfect"
  - "audio_output_device_opts"
  - "audio_resampler"
  - "audio_tweaks"
  - "singlepane"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 1 — Getting Oriented › Chapter 02

# 02. The Poweramp Audio Path

This chapter is a map, not a manual. It follows a track from the file to the loudspeaker, names the Poweramp settings that act at each stage, and points to the chapter that covers each one. It also introduces **Audio Info**, the one tool you need to confirm what the player is actually doing.

## The path at a glance

```text
 File or network stream
   │  Decoding ........ built-in decoders · tracker decoder (Ch. 24) · optional custom
   │                    ffmpeg_neon.so (Experiment, Ch. 34)
   ▼
 Level ................ ReplayGain and its preamps (Ch. 5)
   ▼
 Tone and EQ .......... Equalizer, Bass/Treble, gain smoothing (Ch. 4)
   ▼
 Volume ............... DVC (Poweramp-side volume) or system/hardware volume;
   │                    preamp reduction when DVC is not active (Ch. 3)
   ▼
 Transitions .......... crossfade, fades, gapless preload, inserted silence (Ch. 6)
   ▼
 Rate and format ...... resampler and dither (Ch. 7–8) · 64-bit pipeline (Ch. 9)
   │                    · DSD remastering / native DSD (Ch. 10)
   ▼
 Output driver ........ chosen per output category (Ch. 12)
   ▼
 Android audio system .. mixer, system effects (MusicFX, Dolby), Bluetooth stack
   ▼                     — or a direct USB DAC path where the driver provides one
 DAC · Bluetooth codec · Chromecast receiver  →  amplifier  →  headphones or speakers
```

**GENERAL PRINCIPLE** with **APK VERIFIED** labels. The stage names and the settings attached to them come from the APK. The order of the inner stages, especially where ReplayGain, EQ and transitions sit relative to one another, is a conventional player design and is **not declared** by the settings XML. Two APK descriptions do fix the end points. The 64-bit pipeline is described as running “from decoder to the output”, and Perfect Bit Perfect as “Direct decoder-to-output path. Enables DSD output for DSD tracks. No Equalizer, no DSP, no software volume control”.

## The Audio hub

**Settings › Audio** (screen `audio`) links to every audio sub-screen.

| Entry | In-app summary | Covered in |
|---|---|---|
| **Audio Info** | “Detailed info about the audio processing. Also available by long press on small meta info on the Main and Equalizer screens” | this chapter |
| **Crossfade, Fade, and Gapless** | “Crossfade options, fade type and length, gapless” | [Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md) |
| **Replay Gain (RG)** | “Enable RG, set source, preamp values” | [Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md) |
| **Audio Focus** | “Pause/Resume/Duck volume on calls/notifications/start” | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| **Resampler** | “Resampling/dither settings” | [Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) |
| **Direct Volume Control (DVC)** | “DVC options, DVC for Bluetooth” | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) |
| **Audio Outputs** | “Wired Headset, Bluetooth, USB, Chromecast, and other outputs” | [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)–[Chapter 15](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md) |
| **Bit Perfect** | “64-bit audio pipeline, Perfect Bit Perfect” | [Chapter 09](../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)–[Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |
| **Advanced Tweaks** | “Volume levels, MusicFX, equalizer/reverb presets reset” | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 24](../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md) |

The equalizer settings screen is not on this hub. See [Chapter 04 — Equalizer and Tone Controls](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md).

## Audio Info: verify instead of assuming

**Audio Info** is a runtime page, so its content does not appear in the XML. Its declared summary says it holds detailed information about the audio processing and can also be opened by **long-pressing the small meta info on the Main (Player) and Equalizer screens**. **APK VERIFIED:** existence and access method. **RUNTIME VERIFICATION REQUIRED:** the exact fields shown on a given build and device.

Use it whenever a chapter of this handbook says that behaviour depends on the device. The settings tell you what Poweramp has been *asked* to do. Audio Info is where the app reports what it is *doing*.

## Where the system can change your signal

Several APK texts warn that something outside Poweramp's own settings can override them. These are among the most practically useful declarations in the build:

| Warning (APK text) | Where it appears | Consequence |
|---|---|---|
| “On your device, DVC may force standard definition audio (48 kHz/16 bit)” | per-output options | On affected devices DVC and high-resolution output exclude each other. See [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md). |
| “Global sound effects, like Dolby, may force standard definition audio (48 kHz/16 bit)” | per-output options | System-wide effects can cap the output format whatever Poweramp is set to. |
| “On most Android phones, choosing a Bluetooth codec sample rate can cause repeated resampling because the system enforces 48 kHz-based sample rates, even when the codec supports 44.1 kHz-based frequencies. The codec option is intended for DAPs” “The codec parameters may arrive late, requiring reconfiguration during a playback; or in some instances, may never arrive” | per-output options (Bluetooth) | A 44.1 kHz codec setting on a phone can cause extra resampling. See [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md). |
| “Disable Direct Volume Control (DVC) for this output/device” “Disabling DVC may be required for Hi-Res and other advanced output options to work” | per-output options | Advanced output modes may need DVC switched off for that output. |
| “Output driver can override this setting” | Resampler | The chosen dither may not be the dither actually used. |

**Android MusicFX** is the system audio-effects panel. Poweramp can expose a button for it with **MusicFX** (Off by default). MusicFX is a separate effect chain, not Poweramp's equalizer. Keep it in mind whenever you measure or compare.

## Processing modes compared

The settings combine into four broad operating modes. Detail and caveats are in the linked chapters.

| Mode | How it is reached | What changes | Chapter |
|---|---|---|---|
| Normal DSP playback | default configuration | EQ, tone, ReplayGain, fades and DVC volume available; output at the driver's configured rate | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)–[Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) |
| Hi-Res output | per-output driver, sample rate and format; DVC possibly disabled for that output | rate and format follow the configuration or the track; DVC may be unavailable on some devices | [Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Perfect Bit Perfect | global switch or per-output Enable | “No Equalizer, no DSP, no software volume control”; DSD output for DSD tracks | [Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |
| DSD Remastering | global switch or per-output Enable | PCM converted to DSD at a target DSD rate; overrides Sample Rate and Allowed Sample Rates | [Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md) |

## Establishing a baseline before you change anything

Before you troubleshoot or tune, record the current state so every change can be undone and judged against a reference:

1. Note the device, the Android version and Poweramp's version ([Chapter 37 — About, Updates and Support](../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)).
2. Play a known track and open **Audio Info**. Record the source format, output category, driver, output sample rate and format, and which processing stages it reports as active.
3. Record the per-output settings for the output in use (**Settings › Audio › Audio Outputs**, then the category).
4. Export settings with **Export Settings/Data** ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
5. Change **one** setting, replay the same passage at a safe level, and compare Audio Info again.

> [!CAUTION]
> **Hearing and equipment safety**
> Several settings in this part of the handbook can change output level abruptly: hardware-volume synchronization, DVC switching, Bluetooth Absolute Volume probing, and Perfect Bit Perfect (no software volume). Lower the physical volume of the amplifier, DAC or headphones before you test them.

## Evidence and limitations

- **APK VERIFIED:** hub entries and summaries, Audio Info access, all quoted warnings, the MusicFX option and its default.
- **GENERAL PRINCIPLE:** the generic structure of a digital playback chain.
- **RUNTIME VERIFICATION REQUIRED:** the internal ordering of Poweramp's DSP stages, the fields Audio Info shows, and when each system-level override applies on a particular device.

## Related

- [Audio Settings](../Appendices/Settings%20Reference/Audio%20Settings.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) — output categories and the per-output options screen.
- [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) — symptom-based troubleshooting built on this map.

---

← [Chapter 01 — How Poweramp's Settings Are Organized](01%20How%20Poweramp's%20Settings%20Are%20Organized.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 03 — Volume Control and DVC](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md) →
