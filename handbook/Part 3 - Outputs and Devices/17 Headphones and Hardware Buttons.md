---
title: "Headphones and Hardware Buttons"
chapter: 17
part: "3 — Outputs and Devices"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "headset"
  - "misc"
  - "ui_player"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 17

# 17. Headphones and Hardware Buttons

Headphones and other external controls reach Poweramp in two ways: as **connection events** (a headset plugged in or a Bluetooth device connected) and as **media-button commands** (play/pause, next, previous, from a wired remote, a Bluetooth headset, a car or a watch). This chapter covers both, plus the phone's volume keys and the diagnostics for unexpected commands. Settings are on **Settings › Headset/Bluetooth** unless noted. None of them declares a default, so check their current state on your device.

## Connection events

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Resume On Wired Headset | `resume_on_headset` | Switch | Not declared | — | — |
| Resume On Bluetooth | `resume_on_bt` | Switch | Not declared | — | — |
| Pause On Headset Disconnect | `pause_on_headset` | Switch | Not declared | — | — |
| Pause On USB DAC connection | `pause_on_usb_connection` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md).*


| Event | Setting | APK text |
|---|---|---|
| Wired headset connected | Resume On Wired Headset | “Resume playing when wired headset is connected” |
| Bluetooth device connected | Resume On Bluetooth | “Resume playing when Bluetooth device is connected” |
| Wired, Bluetooth or USB DAC disconnected | Pause On Headset Disconnect | “Pause when wired/Bluetooth headset/USB DAC disconnected” |
| USB DAC connected | Pause On USB DAC connection | pausing as a USB DAC connects can prevent loud initialization noise |

**Pause On Headset Disconnect** is your protection against music suddenly playing from the loudspeaker. Keep it on. **RUNTIME VERIFICATION REQUIRED:** whether resume-on-connect fires only after a disconnect-pause or on any connection.

## Media buttons

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Respond To Buttons | `enable_headset_controls` | Switch | Not declared | — | — |
| Wired Headset | `headset_controls` | List | Not declared | Single press; Double/triple press for next/prev. track; Long press for next track (when playing) (positional†) | — |
| Bluetooth | `avrcp_controls` | List | Not declared | Single press; Double/triple press for next/prev. track; Long press for next track (when playing) (positional†) | — |
| Strict Resume/Pause/Stop | `follow_pl_exact` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| Ignore Bluetooth Commands | `ignore_bt_sec` | Slider | Not declared | 0 sec to 20 sec, step not declared (labels “0” … “20”) | — |
| Ignore Repeat/Shuffle | `bt_ignore_repeat_shuffle` | Switch | Not declared | — | — |
| Disable Default Long Press | `no_android_long_press` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Respond To Buttons:** “Enable Headset/Bluetooth controls”. It is the master switch. **Strict Resume/Pause/Stop**, **Beep** and **Vibrate** depend on it.
- **Wired Headset** and **Bluetooth** each list three behaviours: “Single press”, “Double/triple press for next/prev. track”, and “Long press for next track (when playing)”. **RUNTIME VERIFICATION REQUIRED:** the XML declares no stored values or selection mode, so it is not established whether these are alternatives or independent toggles.
- **Strict Resume/Pause/Stop:** the control accommodates head units sending stray transport commands interpreted as toggles or double presses.
- **Ignore Bluetooth Commands:** “Ignore all Bluetooth commands for a period of time after a connection” “%d sec”, adjustable 0 sec to 20 sec, step not declared.
- **Ignore Repeat/Shuffle:** “Ignore Bluetooth Repeat and Shuffle commands completely”.
- **Disable Default Long Press:** “Disable long press activated voice search while Poweramp is playing”.

**<< Button Resets Current Track** (Player Screen settings) also applies to hardware buttons: a first press can restart the current track and a second press can skip back; this also applies to headset and notification controls.

## Feedback

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Beep | `headset_beep` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| Beep More | `beep_more` | Switch | Not declared | — | Beep (`headset_beep`) |
| Vibrate | `headset_vibrate` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |

*Source: APK build 1031 settings XML — reference: [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md).*


**Beep More:** “Beep on all commands, such as from notifications or other controls”. Feedback is a simple way to confirm that a button press reached Poweramp at all.

## Volume keys: long press to change tracks

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Change Tracks By Long Volume Keys Press | `long_volume_controls` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


This lives on **Settings › Misc › Volume Keys Long Press**. The Headset screen links to it (“Press here for Volume keys long press option”). A hint row (`volume_keys_long_press_hint`) on that screen has runtime text. **RUNTIME VERIFICATION REQUIRED:** whether it works with the screen off and which key maps to next or previous. **GENERAL PRINCIPLE:** on many Android versions, long-press volume-key handling with the screen off needs special system support.

## Diagnosing unexpected commands

**Last Processed Commands** (`commands_history`) opens a log of the media commands Poweramp received. The screen is outside the inventoried resources, so its exact fields are not documented here.

1. Reproduce the problem (for example, playback starting when the car connects).
2. Open **Last Processed Commands** right away and note which command arrived and when.
3. Apply the narrowest fix:
   - a stray *play* on connect → **Ignore Bluetooth Commands** for a few seconds;
   - a head unit sending pause/play pairs → **Strict Resume/Pause/Stop**;
   - shuffle or repeat being changed → **Ignore Repeat/Shuffle**;
   - voice search on long press → **Disable Default Long Press**.
4. Turn on **Beep More** temporarily to hear every command as it arrives.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** all keys, texts, dependencies and the ignore window range; the cross-screen link to volume-key long press.
- **GENERAL PRINCIPLE:** media-button sources and screen-off volume-key limits.
- **RUNTIME VERIFICATION REQUIRED:** defaults (none declared), the selection semantics of the button lists, Last Processed Commands content, and screen-off volume-key behaviour.

## Related

- [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md) · [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md) · [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md)
- [Chapter 14 — Bluetooth Audio](14%20Bluetooth%20Audio.md) · [Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md) · [Chapter 32 — Android Auto and Connected Apps](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

---

← [Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 18 — Music Folders, Scanning and Tags](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) →
