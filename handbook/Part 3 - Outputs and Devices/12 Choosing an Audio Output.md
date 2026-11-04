---
title: "Choosing an Audio Output"
chapter: 12
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
  - "audio_outputs2"
  - "audio_outputs_tweaks"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 12

# 12. Choosing an Audio Output

Poweramp keeps separate audio settings for each kind of output: built-in speaker, wired headphones, Bluetooth, USB DAC, Chromecast and others. Choosing the output well, and knowing what its options screen controls, is the foundation of every later chapter in this part.

## Output categories

**Settings › Audio › Audio Outputs** (screen `audio_outputs2`) lists six categories. Each opens the per-output options screen for that category.

| Category | Key | Covers | Detailed in |
|---|---|---|---|
| **Wired Headset/AUX** | `output_headset` | the analogue headphone jack, and adapters the system reports as wired | this chapter |
| **Speaker** | `output_speaker` | the device's loudspeaker | this chapter |
| **Bluetooth** | `output_bt` | Bluetooth audio devices | [Chapter 14](14%20Bluetooth%20Audio.md) |
| **USB DAC** | `output_usb` | USB audio devices (DACs, many USB-C headphone adapters) | [Chapter 13](13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| **Chromecast** | `output_chromecast` | Cast receivers | [Chapter 15](15%20Chromecast%20Output.md) |
| **Other Output Devices** | `output_other` | any route not covered above | runtime |

**APK VERIFIED:** the six categories. **RUNTIME VERIFICATION REQUIRED:** which physical devices fall into each category. **GENERAL PRINCIPLE:** many USB-C-to-3.5 mm adapters contain their own DAC and are USB audio devices, so Android may report them as USB, not wired. Check which category becomes active when you plug one in.

## The per-output options screen

The same 57-entry definition (`audio_output_device_opts`) serves every category. Rows appear or disappear depending on the output, the driver and the connected device. That visibility logic is decided at runtime and is not in the XML. Only one entry declares a default (**Visualization/Lyrics Delay**, 0 ms). Everything else comes from the app or the device.

| Group | Entries | Chapter |
|---|---|---|
| Driver and status | Output Driver; status and warning rows; per-output EQ preset button | here, [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md) |
| Rate | Sample Rate, Allowed Sample Rates, Base-Rate Synchronous Scaling, rate hints | [Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md) |
| Format | Sample Format, Float32 Sample Format | [Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) |
| Precision and modes | 64-bit Audio Pipeline, DSD Remastering (+ target rate, 48 kHz-based), Perfect Bit Perfect | [Chapter 09](../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)–[Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |
| Volume | Volume Type, Synchronize Hardware Volume, No DVC, No Headroom Gain Reduction | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md) |
| Bluetooth | Set BT Codec Parameters, codec hints | [Chapter 14](14%20Bluetooth%20Audio.md) |
| USB | Release USB DAC while paused, DSD DOP/Raw, warm-ups, Sample Rate Quirk, Force USB 1.1 | [Chapter 13](13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Chromecast | Force Send Album Art, Show Meta Information | [Chapter 15](15%20Chromecast%20Output.md) |
| Behaviour overrides | No Equ/Tone, No Duck, Ignore Audio Focus | [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 16](16%20Calls,%20Notifications%20and%20Interruptions.md) |
| Timing and stability | Buffer Size, Reconfiguration Delay, Visualization/Lyrics Delay, Play silence in background | here, [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Output driver

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Output Driver <sup>non-persistent</sup> | `output_api` | List | Not declared | Options populated at runtime | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


The driver list is filled in at runtime. **GENERAL PRINCIPLE:** Android offers several output paths: the classic mixer-based path, a low-latency path, high-resolution direct outputs on some devices, and direct USB access where an app implements its own USB audio driver. The driver determines which rates, formats and volume modes are possible, and whether Android's mixer and effects touch the signal at all. Driver names, and the drivers available on a given device, are runtime data and are not listed here.

The status rows on this screen (`top_output_info`, `top_output_info2`, `output_info`, `output_hint`, `bg_warn`, `sr_and_format_warnings`) display information generated at runtime. Read them before you change anything. They are where Poweramp explains, for that device, why an option is unavailable or forced.

## Buffering and timing

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Buffer Size <sup>non-persistent</sup> | `buffer_size` | Action | — | — | — |
| Reconfiguration Delay <sup>non-persistent</sup> | `reconfig_delay_ms` | Slider | Not declared | 0 ms to 500 ms, step not declared (minimum position labelled “Default delay”; labels “Default” … “500”) | — |
| Visualization/Lyrics Delay <sup>non-persistent</sup> | `vis_latency_ms` | Slider | 0 ms (`0`) | 0 ms to 2500 ms, step not declared | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **Buffer Size:** “Tweak if audio skips”. **GENERAL PRINCIPLE:** larger buffers tolerate CPU and scheduling hiccups better, at the cost of more latency (controls respond later, visualization lags). Enlarge it in steps only if you have dropouts.
- **Reconfiguration Delay:** “An additional delay between output reconfigurations. This is required for devices that fail to reconfigure quickly. Increases track change delay” “%d ms”.
- **Visualization/Lyrics Delay:** “Extra delay to apply to visualization/lyrics for a better sync: %d ms”. It is set per output because each path has its own latency. Bluetooth typically needs the most ([Chapter 14 — Bluetooth Audio](14%20Bluetooth%20Audio.md)).

## Output Advanced Tweaks

Reached from Audio Outputs › Advanced Tweaks (screen `audio_outputs_tweaks`).

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Show Poweramp for USB DACs <sup>non-persistent</sup> | `usb_activity` | Switch | Not declared | — | — |
| Force Speaker Off (for Hi-Res Output) | `force_no_speaker` | Switch | Not declared | — | — |
| Emulate Media Stream (for Hi-Res output) | `use_stream3_player` | Switch | Off | — | — |
| Audio Outputs Detection Log | `audio_platform_log` | Link | — | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md).*


- **Show Poweramp for USB DACs:** “Automatically activate Poweramp when USB DAC is attached. Allows the device to be remembered, so connection dialogs can be skipped in the future”.
- **Force Speaker Off (for Hi-Res Output):** “Enable this if speaker doesn't switch off after calls, some notifications, etc”.
- **Emulate Media Stream (for Hi-Res output):** “Enable this if volume or other media actions don't work for the lock screen or when screen is off”. Off by default.
- **Audio Outputs Detection Log** opens a screen that is not among the inventoried resources. It is the place to look when a device is not recognised or lands in the wrong category, and it is worth attaching to a support request ([Chapter 37 — About, Updates and Support](../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)).

The “for Hi-Res output” tag on two tweaks suggests that high-resolution driver paths bypass some of the system behaviour that normally handles speaker switching and media-volume keys. These options restore that behaviour. **RESEARCH SUPPORTED** interpretation.

## Speaker and wired headphones

- **Speaker.** **GENERAL PRINCIPLE:** phone loudspeakers usually pass through manufacturer processing (protection limiting, equalization) that sits outside Poweramp. Keep speaker settings separate from headphone settings. Per-output **No Equ/Tone** stops a headphone EQ curve from being applied to the speaker.
- **Wired headphones.** The built-in jack, where one exists, generally runs through Android's audio HAL. Output formats above 48 kHz/16-bit depend on the device ([Chapter 07 — Sample Rates and Resampling](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 08 — Bit Depth, Sample Format and Dither](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)).

## Per-output Restore Defaults

The per-output screen has its own **Restore Defaults**. **RUNTIME VERIFICATION REQUIRED:** that it resets only the current output's options. Before using it, write down any working driver, rate and quirk settings, or export your settings ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).

## Evidence and limitations

- **APK VERIFIED:** categories, entry keys and texts, the single declared default, the out-of-inventory log target.
- **RESEARCH SUPPORTED:** the interpretation of the Hi-Res tweak tags.
- **GENERAL PRINCIPLE:** Android output paths, buffering trade-offs, speaker processing, USB-C adapters.
- **RUNTIME VERIFICATION REQUIRED:** driver names and capabilities, which rows are visible per category, the scope of the per-output Restore Defaults, and log contents.

## Related

- [Audio Output Selection](../Appendices/Settings%20Reference/Audio%20Output%20Selection.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) · [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md)
- [Chapter 13 — USB DAC Setup and Compatibility](13%20USB%20DAC%20Setup%20and%20Compatibility.md) · [Chapter 14 — Bluetooth Audio](14%20Bluetooth%20Audio.md) · [Chapter 15 — Chromecast Output](15%20Chromecast%20Output.md)

---

← [Chapter 11 — Bit-Perfect Output](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 13 — USB DAC Setup and Compatibility](13%20USB%20DAC%20Setup%20and%20Compatibility.md) →
