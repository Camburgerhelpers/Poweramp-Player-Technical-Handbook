---
title: "Bluetooth Audio"
chapter: 14
part: "3 — Outputs and Devices"
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
  - "audio_focus"
  - "audio_output_device_opts"
  - "headset"
  - "ui_notify"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 14

# 14. Bluetooth Audio

Bluetooth adds a wireless link, and usually a lossy codec, between Poweramp and your ears. Much of the chain is controlled by Android and by the headset, not by Poweramp. This chapter separates what Poweramp can influence (volume handling, codec-parameter requests, rate choice, connection and remote-control behaviour, synchronization) from what it cannot. It brings together Bluetooth-related settings from six screens.

## The Bluetooth chain

```text
Poweramp output (PCM) → Android Bluetooth stack → codec encoder (SBC, AAC, aptX, LDAC, LC3 …)
     → radio link → headset decoder → headset DAC and amplifier
```

**GENERAL PRINCIPLE.** The A2DP codec configuration (codec, sample rate, bit depth, and for LDAC the quality mode) is negotiated between Android's Bluetooth stack and the receiver, from the capabilities both support. Supported rates differ by codec and by device: SBC, AAC and aptX are normally used at 44.1 or 48 kHz, LDAC can also run at 88.2 or 96 kHz, and LE Audio's LC3 uses its own set of rates. Which rate is actually negotiated, and whether it follows the source, depends on the phone's Bluetooth and audio implementation, the receiver and the codec. Android's developer options show the active codec and rate, and let you request others; some devices revert those choices on reconnection. **APK VERIFIED:** Poweramp's own hint states that on most Android phones the system enforces 48 kHz-based rates even when the codec supports 44.1 kHz-based ones (summarized below). Because the signal is normally re-encoded by a lossy codec, a bit-perfect path over Bluetooth is generally not possible.

## What Poweramp controls

### Volume and DVC

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| No DVC for Bluetooth Absolute Volume | `no_dvc_bt_absvol` | Switch | On | — | Enable Direct Volume Control (`dvc_enabled`) |
| Enable Direct Volume Control | `dvc_enabled` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Direct Volume Control](../Appendices/Settings%20Reference/Direct%20Volume%20Control.md).*


With the defaults, DVC is switched off for Bluetooth outputs that have Absolute Volume (or where Poweramp cannot tell). The headset's own volume then sets the level. **RESEARCH SUPPORTED:** the −6 dB preamp reduction presumably applies as well, because it is “applied only when DVC is disabled for any reason” ([Chapter 03 — Volume Control and DVC](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)). Expect a few seconds of probing volume changes on connection; the APK says so.

### Codec sample rate and parameters

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Set BT Codec Parameters <sup>non-persistent</sup> | `set_codec_sr` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **Set BT Codec Parameters:** “When enabled, Poweramp will attempt to set Bluetooth codec sample rate and other parameters”.
- Its hint warns: “Introduces a short gap between tracks during codec parameters change” certain device, firmware and codec combinations reject requested parameters and may produce errors or silence the Bluetooth target must be connected and the required permission granted.
- The codec-rate hint on the same screen: many Android phones use 48-kHz-family Bluetooth rates, so requesting another codec rate can add resampling; this option chiefly targets dedicated audio players codec parameters can arrive too late, cause mid-track reconfiguration, or fail to arrive.

Practical reading: on a **phone** where Android enforces 48 kHz-based rates (check the negotiated rate in developer options), leave codec parameters alone and let the output run at the negotiated rate. Requesting 44.1 kHz from the codec may just add a second resampling stage. On a **digital audio player** whose Bluetooth stack honours 44.1 kHz, enabling the option can avoid resampling for CD-rate material. Expect a short gap whenever parameters change between tracks ([Chapter 06 — Track Transitions and Gapless Playback](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)).

### Resampling

The rate Bluetooth actually runs at is negotiated and device-dependent (see “The Bluetooth chain” above). Where it differs from the track rate, some stage must resample. **GENERAL PRINCIPLE:** resampling inside Poweramp (for example with the SoX resampler, [Chapter 07 — Sample Rates and Resampling](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)) only replaces the system's conversion if Poweramp's output rate matches the rate the Bluetooth path really uses; otherwise Android resamples again afterwards. Compare the rate in Audio Info with the codec rate in Android's developer options. **RUNTIME VERIFICATION REQUIRED:** which rates the Bluetooth output offers on your device.

### Synchronization of lyrics and visualization

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Visualization/Lyrics Delay <sup>non-persistent</sup> | `vis_latency_ms` | Slider | 0 ms (`0`) | 0 ms to 2500 ms, step not declared | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


Bluetooth adds latency, often a few hundred milliseconds depending on codec and device. Set **Visualization/Lyrics Delay** on the Bluetooth output until lyrics and visualization line up with the sound. The setting is kept per output, so wired playback is unaffected ([Chapter 28 — Lyrics](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 29 — Visualization](../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)).

### Equalization per device

**Suggest AutoEq Presets** works for Bluetooth devices: “Show suggestion to assign AutoEq preset for the connected Bluetooth/USB device”. **No Equ/Tone** can disable the equalizer for a Bluetooth output, such as a car head unit with its own EQ ([Chapter 04 — Equalizer and Tone Controls](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)).

## Connection and remote-control behaviour

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Resume On Bluetooth | `resume_on_bt` | Switch | Not declared | — | — |
| Pause On Headset Disconnect | `pause_on_headset` | Switch | Not declared | — | — |
| Ignore Bluetooth Commands | `ignore_bt_sec` | Slider | Not declared | 0 sec to 20 sec, step not declared (labels “0” … “20”) | — |
| Ignore Repeat/Shuffle | `bt_ignore_repeat_shuffle` | Switch | Not declared | — | — |
| Bluetooth | `avrcp_controls` | List | Not declared | Single press; Double/triple press for next/prev. track; Long press for next track (when playing) (positional†) | — |
| Strict Resume/Pause/Stop | `follow_pl_exact` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| Remove Notification on Disconnection | `no_keep_notif_on_dscn` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md), [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Resume On Bluetooth:** “Resume playing when Bluetooth device is connected”.
- **Ignore Bluetooth Commands:** “Ignore all Bluetooth commands for a period of time after a connection” “%d sec” (0 sec to 20 sec, step not declared). Useful when a headset or car sends a stray *play* during connection.
- **Ignore Repeat/Shuffle:** “Ignore Bluetooth Repeat and Shuffle commands completely”. Useful with head units that force their own shuffle state.
- **Bluetooth** button handling (`avrcp_controls`) offers single press, double/triple press for next/previous track, and long press for next track (when playing). **GENERAL PRINCIPLE:** AVRCP is the Bluetooth remote-control profile.
- **Strict Resume/Pause/Stop:** the control accommodates head units sending stray transport commands interpreted as toggles or double presses.
- **Remove Notification on Disconnection:** “Notification is removed on Headset/BT disconnection if player is paused” “This option may temporarily keep Poweramp idle service if required”.

Full button behaviour, feedback and diagnostics are in [Chapter 17 — Headphones and Hardware Buttons](17%20Headphones%20and%20Hardware%20Buttons.md). Car integration is in [Chapter 32 — Android Auto and Connected Apps](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md).

## Calls and notifications over Bluetooth

**Pause In Call** states: “Pause when phone call happens. Poweramp always pauses for call via Bluetooth” “Some firmwares may not support this option”. Per that text, Bluetooth calls pause playback whatever the setting, although some firmwares may behave differently (**RUNTIME VERIFICATION REQUIRED**). If notification sounds over Bluetooth cause glitches, the per-output **No Duck** option pauses briefly instead of ducking ([Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md)).

## What Poweramp cannot control

| Aspect | Controlled by |
|---|---|
| Codec selection (LDAC, aptX, AAC, SBC …) and LDAC quality mode | Android (developer options) and the headset |
| Radio link quality, dropouts from distance or interference | environment and devices |
| Headset DSP, ANC, built-in EQ | headset firmware or companion app |
| Absolute Volume on or off | Android (developer options) |

## Troubleshooting

| Symptom | Check |
|---|---|
| Volume too low, or adjusts in large jumps | Absolute Volume vs DVC: keep the default; if Absolute Volume is disabled system-wide, clear **No DVC for Bluetooth Absolute Volume** |
| Playback starts by itself when the headset connects | **Resume On Bluetooth**; open **Last Processed Commands**; set **Ignore Bluetooth Commands** to a few seconds |
| Car keeps toggling shuffle or repeat | **Ignore Repeat/Shuffle** |
| Stray pause/play from a head unit | **Strict Resume/Pause/Stop** |
| Gaps between tracks | **Set BT Codec Parameters** off; avoid Follow Track rate switching on Bluetooth |
| Silence or errors after enabling codec parameters | turn **Set BT Codec Parameters** off; the hint warns some rates “won't be accepted” |
| Lyrics or visualization out of sync | **Visualization/Lyrics Delay** on the Bluetooth output |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** all keys and texts, the Bluetooth call rule, the permission and connection prerequisites for codec parameters.
- **GENERAL PRINCIPLE:** codec negotiation, 48 kHz-family stacks, AVRCP, latency.
- **RUNTIME VERIFICATION REQUIRED:** which codec parameters Poweramp can set on a given phone, which per-output rows appear for Bluetooth, the default states of the connection options (none is declared), and actual latency values.

## Related

- [Direct Volume Control](../Appendices/Settings%20Reference/Direct%20Volume%20Control.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) · [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md)
- [Chapter 03 — Volume Control and DVC](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md) · [Chapter 17 — Headphones and Hardware Buttons](17%20Headphones%20and%20Hardware%20Buttons.md) · [Chapter 32 — Android Auto and Connected Apps](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

---

← [Chapter 13 — USB DAC Setup and Compatibility](13%20USB%20DAC%20Setup%20and%20Compatibility.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 15 — Chromecast Output](15%20Chromecast%20Output.md) →
