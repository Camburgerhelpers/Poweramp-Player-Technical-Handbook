---
title: "Troubleshooting Guide"
chapter: 38
part: "7 — Maintenance and Support"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 7 — Maintenance and Support › Chapter 38

# 38. Troubleshooting Guide

This guide is organised by **symptom**. Each entry lists the settings to check, in the order most likely to help, and points to the chapter with the full explanation. Every step uses the in-app setting names from build 1031.

## Before you start

1. **Record a baseline.** Play a known track, open **Audio Info**, and note the output, driver, rate and format ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)).
2. **Export your settings** ([Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md)).
3. **Change one thing at a time**, test at a safe volume, and revert anything that doesn't help.
4. **Identify the output.** Most audio symptoms are specific to one output. Per-output settings appear to take precedence over global ones (**RESEARCH SUPPORTED** inference, not verified at runtime; see [Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)).

> [!CAUTION]
> **Safety**
> Lower the physical volume before you test volume-type, hardware-sync, DVC, Bluetooth Absolute Volume or bit-perfect changes. Several of these can jump straight to full level.

## A. Level and sound quality

| Symptom | Check, in order | See |
|---|---|---|
| Distortion when using EQ or tone boosts | 1. Reduce the boosts (prefer cuts) · 2. Is DVC active for this output? If not, keep **No DVC - Preamp Reduction** at least as large as the boost and check **No Headroom Gain Reduction** is off · 3. Keep **Smooth Equalizer/Tone Gains** on · 4. **RG preamp** and **Apply Gain** without peak protection · 5. **Tracker Decoder Extra Gain** for modules | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md), [Chapter 24](../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md) |
| Quieter than other players | 1. DVC off for this output (including automatically for Bluetooth Absolute Volume)? Per the APK, the preamp reduction (default −6 dB) is “applied only when DVC is disabled”; for the automatic Bluetooth case this is **RESEARCH SUPPORTED**. Set it nearer 0 dB if you use no boosts · 2. **Compensate DVC Volume** (Android 15+) · 3. **Volume Type** and the DAC's own volume · 4. ReplayGain preamps | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md) |
| Volume jumps to maximum on connect | 1. Turn down the device · 2. **Synchronize Hardware Volume** on for DACs that don't keep their level · 3. **Volume Type** | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Bluetooth volume coarse or capped | Keep **No DVC for Bluetooth Absolute Volume** on; clear it only if Absolute Volume is disabled system-wide | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) |
| Audio Info shows 48 kHz/16-bit despite Hi-Res settings | 1. **No DVC** for this output (the APK warns DVC may force standard definition) · 2. Turn off system effects (Dolby, MusicFX) · 3. Check **Output Driver**, **Sample Rate**, **Sample Format** · 4. On Bluetooth, the sample rate is negotiated between Android and the receiver for the active codec and is implementation-dependent: check the codec and sample rate in Android's developer options, and compare with Audio Info ([Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)) | [Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md), [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) |
| Crackles or dropouts | 1. **Buffer Size** larger · 2. Background restrictions (Part 6) · 3. USB cable, hub, power · 4. Reduce CPU load: 64-bit pipeline to Auto/Disable, resampler SW instead of SoX, visualization off | [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |
| Equalizer has no effect | 1. **No Equ/Tone** set for this output? · 2. Perfect Bit Perfect active? · 3. The EQ switched on in the Equalizer screen | [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |

## B. Playback stops, starts or interrupts

| Symptom | Check, in order | See |
|---|---|---|
| Stops with the screen off or in the background | 1. Android battery setting “Unrestricted” for Poweramp · 2. **Keep Service** / **Keep Notification** · 3. **Use Wakelock** · 4. **Play silence in background** | [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |
| Stops after a notification sound and doesn't continue | 1. **Resume On Focus Gain** · 2. **Force Audio On Audio Focus Change** · 3. If ducking on this output causes glitches, **No Duck** makes Poweramp pause briefly instead of ducking. It does not prevent the pause | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Doesn't resume after a call | **Resume After Call**; the APK notes that some firmwares don't support **Pause In Call** | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Starts by itself when headphones or a car connect | 1. **Resume On Wired Headset** / **Resume On Bluetooth** · 2. **Last Processed Commands** · 3. **Ignore Bluetooth Commands** for a few seconds | [Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) |
| Starts when the app is opened | **Resume On Start**, **Resume On Reopen** | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Keeps playing on the speaker after unplugging | **Pause On Headset Disconnect** | [Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) |
| Another app's audio plays at the same time | **Permanent Audio Focus Change** on; **Ignore Audio Focus** off for this output | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Speaker stays on after a call (Hi-Res output) | **Force Speaker Off (for Hi-Res Output)** | [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Volume keys or lock-screen controls don't work (Hi-Res output) | **Emulate Media Stream (for Hi-Res output)** | [Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) |

## C. Track transitions

| Symptom | Check, in order | See |
|---|---|---|
| Gaps in gapless albums | 1. **Auto-advance Fading** = No fading · 2. **Silence Between Tracks** = 0 · 3. **Preload Gapless Tracks** up, for slow storage · 4. A fixed sample rate instead of Follow Track · 5. **Set BT Codec Parameters** off | [Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) |
| Songs overlap unexpectedly | **Auto-advance Fading**, **Manual Track Change Fading**, **Crossfade Length** | [Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md) |
| Clicks on seek, pause or skip | **Fade on Seek**, **Fade Play/Pause/Stop**; note that the output driver may override manual fading | [Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md) |
| Long pauses at track changes on a USB DAC | **Reconfiguration Delay** lower; warm-ups only if needed; avoid rate switching | [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |

## D. USB DAC, Bluetooth and Chromecast

| Symptom | Check, in order | See |
|---|---|---|
| Pop or noise when a USB DAC connects | **Pause On USB DAC connection** → **USB DAC Warmup on Startup** | [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Silence or distortion right after connecting | **USB DAC Warmup on Startup** → **USB DAC Sample Rate Quirk** | [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Distortion after a rate or PCM/DSD change | **USB DAC PCM/DSD Warmups** → **Reconfiguration Delay** | [Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Old DAC unstable | **Force USB 1.1**; **Audio Outputs Detection Log** | [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Loud noise instead of DSD | **Allow DSD DOP** / **Prefer DSD Raw** to match the DAC; Perfect Bit Perfect on; no system effects | [Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |
| Car or headset toggles shuffle or repeat | **Ignore Repeat/Shuffle** | [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) |
| Head unit sends stray pause/play | **Strict Resume/Pause/Stop**; inspect **Last Processed Commands** | [Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) |
| Lyrics or visualization lag on Bluetooth | **Visualization/Lyrics Delay** on the Bluetooth output | [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) |
| Silence after enabling Bluetooth codec parameters | **Set BT Codec Parameters** off | [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) |
| Chromecast interrupted by phone notifications | **Ignore Audio Focus** on the Chromecast output | [Chapter 15](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md) |
| Chromecast receiver shows no cover | **Force Send Album Art** | [Chapter 15](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md) |
| Casting stops when the phone sleeps | background measures in [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) | [Chapter 15](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md) |

## E. Library and metadata

| Symptom | Check, in order | See |
|---|---|---|
| Can't add a folder | add sub-folders (Android restriction); **Auto-Find Music Folders**; **File Access Legacy Mode** where allowed | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) |
| New files missing | **Auto-scan** and its triggers; **Rescan**; **System Media Scanner/MTP** | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) |
| Ringtones in the library | **Ignore Short Tracks** | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) |
| Multi-artist tags not split, or a band split wrongly | **Symbols to Split Multiple Artists**; **Unsplit Artists**; then Rescan | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) |
| Garbled titles or lyrics | **Tag Encoding**, then Rescan (Full Rescan only after a backup); **Always Use UTF-8** options, set to match how your files are encoded | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) |
| Compilation split into many albums | **Join Albums**; tag Album Artist | [Chapter 19](../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md) |
| Library wrong after an SD card or ROM change | Export settings and playlists, then **Full Rescan**. Its effect on ratings and play counts is not verified | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 35](35%20Backup,%20Restore%20and%20Maintenance.md) |
| Playlist entries unplayable after moving files | **Resolve Playlist Entries**; Rescan from the Playlists category | [Chapter 20](../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md) |
| Search results clear the Queue | expected behaviour even with **Never Clear On Add** | [Chapter 20](../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 22](../Part%204%20-%20Library%20and%20Playback/22%20Search.md) |

## F. Display, artwork and integration

| Symptom | Check, in order | See |
|---|---|---|
| Missing covers | folder or embedded art; **Download Album Art** (Wi-Fi only by default); **Reset Negative Status** | [Chapter 27](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md) |
| No covers in Android Auto or other apps | **API Compatibility**; lock screen **Album Art**; **Images for Categories** | [Chapter 27](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 32](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) |
| Watch shows no cover | **Always Send Album Art**; **Show Default Image** | [Chapter 31](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) |
| Notification text or icons invisible | **Notification Colors**; **Notification Type** | [Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) |
| Notification can't be dismissed | **Keep Inactive Media Notification** (a reboot may be needed after disabling, per the APK) | [Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) |
| Poweramp lock screen doesn't appear | **Show On Lock Screen**; **Open App Settings** for permissions | [Chapter 31](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md) |
| Lyrics missing | **Rescan Lyrics Tags**; **Scan LRC Files**; Lyrics Button = Always | [Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) |
| Visualization stutters or heats the phone | **HD** and **Strict** off; **Force 30 FPS** on | [Chapter 29](../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md) |
| Scrobbles missing | the scrobbler switch for the app you use; **Metachanged Intent** on | [Chapter 33](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md) |

## G. Recovery

| Situation | Action | See |
|---|---|---|
| One area misbehaves after many changes | that screen's **Restore Defaults** | [Chapter 35](35%20Backup,%20Restore%20and%20Maintenance.md) |
| Configuration broken everywhere | Export the current state, then **Import Settings/Data** from a known-good export (Import replaces current settings; its scope is not verified) | [Chapter 35](35%20Backup,%20Restore%20and%20Maintenance.md) |
| Purchase not recognised | **Already Purchased?** → the row for your store | [Chapter 36](36%20Purchases%20and%20Feature%20Packages.md) |
| Still unresolved | gather Audio Info, logs and steps; contact support | [Chapter 37](37%20About,%20Updates%20and%20Support.md) |

## Evidence and limitations

The steps above combine **APK VERIFIED** setting texts with **GENERAL PRINCIPLE** troubleshooting order. Whether a step fixes a given device's problem is always **RUNTIME VERIFICATION REQUIRED**. The linked chapters label the evidence for each setting.

## Related

- [Settings Reference Index](../Appendices/Settings%20Reference/Index.md) · [Preference Key Index](../Appendices/Preference%20Key%20Index.md)

---

← [Chapter 37 — About, Updates and Support](37%20About,%20Updates%20and%20Support.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Settings Reference](../Appendices/Settings%20Reference/Index.md) →
