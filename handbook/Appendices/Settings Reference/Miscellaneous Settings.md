---
title: "Miscellaneous Settings"
screen_id: "misc"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 26
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Miscellaneous Settings

Scrobbling, Android Auto browsing, compatibility tweaks (wakelock, intents, album art for the old API), network stream parameters, experimental options, and volume-key long press.

| Property | Value |
|---|---|
| Screen ID | `misc` |
| In-app location | Settings › Misc |
| Reached from | [Headset and Bluetooth Settings](Headset%20and%20Bluetooth%20Settings.md) → “long_volume_press” (`long_volume_press`); [Main Settings Menu](Main%20Settings%20Menu.md) → “Misc” (`misc`) |
| Links to | [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`buttons`) |
| Declared entries | 26 — action or navigation 1, adjustable 4, category 3, informational or dynamic 2, other 1, toggle 15 |
| Resource files | `xml-v22/misc.xml`, `xml/misc.xml` |
| Explained in | [Chapter 03 — Volume Control and DVC](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 17 — Headphones and Hardware Buttons](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 23 — Network Streams](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md), [Chapter 25 — Look and Feel](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md), [Chapter 27 — Album Art and Backgrounds](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 32 — Android Auto and Connected Apps](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Settings at a glance

**Category: Scrobbling**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Scrobble via Official Last.fm app | `scrobble_to_last_fm` | Switch | Off | — | — |
| 2 | Scrobble via Simple Scrobbler | `scrobble_to_simple_last_fm` | Switch | Off | — | — |

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 3 | Android Auto | `android_auto` | Category | — | — | — |
| 9 | Tweaks | `tweaks` | Category | — | — | — |
| 23 | Volume Keys Long Press | `volume_keys_long_press_cat` | Category | — | — | — |
| 26 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Android Auto**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 4 | Buttons | `buttons` | Link | — | — | — |
| 5 | Grid View for Categories | `mb_a_grid` | Switch | Not declared | — | — |
| 6 | Images for Categories | `mb_a_aa_cats` | Switch | On | — | — |
| 7 | Album Art for Tracks | `mb_a_aa_tracks` | Switch | On | — | — |
| 8 | Now Playing List For Connected Devices/Apps | `send_mediasession_q` | Switch | Not declared | — | — |

**Category: Tweaks**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 10 | Metachanged Intent | `send_metachanged` | Switch | On | — | — |
| 11 | Use Wakelock | `use_wakelock` | Switch | Not declared | — | — |
| 12 | Send Album Art for old API | `send_old_api_aa` | Switch | Off | — | — |
| 13 | Always Reload Skin | `check_for_skin_reload` | Switch | Off | — | — |
| 14 | Shutdown Intent | `shutdown_intent` | Text field | Empty (declared) | Free text | — |
| 15 | Pause on Screen Off <sup>Experiment</sup> | `pause_on_screen_off` | Switch | Off | — | — |
| 16 | Apply OP High Framerate <sup>Experiment</sup> | `op_framerate` | Switch | Not declared | — | — |
| 17 | Migrate Data to Android 10 <sup>non-persistent</sup> | `migrate_data_29` | Information | — | — | — |
| 18 | Network Stream Timeout | `stream_timeout_ms` | Slider | 30 s (`30000`) | Positions: 1 s, 5 s, 10 s, 15 s, 30 s, 60 s, 120 s, 300 s, Never | — |
| 19 | Network Stream Buffer | `stream_buffer_bytes` | Slider | 1.00 MB (`1048576`) | 0.50 MB to 4.00 MB, step 10 KiB (`10240` bytes) (labels “Small” … “More”) | — |
| 20 | User Agent | `user_agent` | Text field | Not declared | Free text | — |
| 21 | Load custom .so library <sup>Experiment, non-persistent</sup> | `load_user_so` | Switch | Off | — | — |
| 22 | Override Region | `override_region` | Switch | Off | — | — |

**Category: Volume Keys Long Press**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 24 | (untitled `volume_keys_long_press_hint`) <sup>non-persistent</sup> | `volume_keys_long_press_hint` | Information | — | — | — |
| 25 | Change Tracks By Long Volume Keys Press | `long_volume_controls` | Switch | Off | — | — |

## Entry details

### 1. Scrobble via Official Last.fm app

- **Key:** `scrobble_to_last_fm`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scrobbling
- **Declared default:** Off
- **APK text:** “Scrobble via Last.fm app”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 2. Scrobble via Simple Scrobbler

- **Key:** `scrobble_to_simple_last_fm`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scrobbling
- **Declared default:** Off
- **APK text:** “Scrobble to Last.fm/Libre.fm via Simple Scrobbler (previously Simple Last.fm)”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 3. Android Auto

- **Key:** `android_auto`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Evidence note:** Groups: Buttons, Grid View for Categories, Images for Categories, Album Art for Tracks, Now Playing List For Connected Devices/Apps.

### 4. Buttons

- **Key:** `buttons`
- **Control:** Link (`RedirectPreference`)
- **Category:** Android Auto
- **APK text:** “Media action buttons”
- **Opens:** [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`ui_mediaactions`)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 5. Grid View for Categories

- **Key:** `mb_a_grid`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Auto
- **Declared default:** Not declared
- **APK text:** “If enabled, Albums, Artists, Folders, etc. categories are shown as grid. May require category re-opening for view to apply”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Images for Categories

- **Key:** `mb_a_aa_cats`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Auto
- **Declared default:** On
- **APK text:** “If enabled, album art and other relevant images are shown for categories”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 7. Album Art for Tracks

- **Key:** `mb_a_aa_tracks`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Auto
- **Declared default:** On
- **APK text:** “If enabled, album art is shown for track entries”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 8. Now Playing List For Connected Devices/Apps

- **Key:** `send_mediasession_q`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Auto
- **Declared default:** Not declared
- **APK text:** “Enable Now Playing List/Queue for the connected devices (e.g. Wear) and apps (Android Auto). Poweramp activates this option if some device/app requests Now Playing list”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 9. Tweaks

- **Key:** `tweaks`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Evidence note:** Groups: Metachanged Intent, Use Wakelock, Send Album Art for old API, Always Reload Skin, Shutdown Intent, Pause on Screen Off, Apply OP High Framerate, Migrate Data to Android 10, Network Stream Timeout, Network Stream Buffer, User Agent, Load custom .so library, Override Region.

### 10. Metachanged Intent

- **Key:** `send_metachanged`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** On
- **APK text:** “For external apps”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 11. Use Wakelock

- **Key:** `use_wakelock`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Not declared
- **APK text:** “Check this if audio stops when screen is off”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 12. Send Album Art for old API

- **Key:** `send_old_api_aa`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Off
- **APK text:** “Send Album Art for old Poweramp v2 API. Updated Poweramp API allows much higher res images, but this may be needed for old API apps”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 13. Always Reload Skin

- **Key:** `check_for_skin_reload`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Off
- **APK text:** “For skin developers. Always check skin for a change when app activity goes background”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 14. Shutdown Intent

- **Key:** `shutdown_intent`
- **Control:** Text field (`EditTextPreference`)
- **Category:** Tweaks
- **Declared default:** Empty (declared)
- **APK text:** “Listen to this shutdown intent and pauses itself/stores state when the intent is received”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

### 15. Pause on Screen Off

- **Key:** `pause_on_screen_off`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Off
- **Markers:** Experiment
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 16. Apply OP High Framerate

- **Key:** `op_framerate`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Not declared
- **APK text:** “Force higher display framerate via non-standard APIs. May be required for some devices/firmwares”
- **Markers:** Experiment
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 17. Migrate Data to Android 10

- **Key:** `migrate_data_29`
- **Control:** Information (`RawTextPreference`)
- **Category:** Tweaks
- **Markers:** non-persistent
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 18. Network Stream Timeout

- **Key:** `stream_timeout_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Tweaks
- **Declared default:** 30 s (`30000`)
- **Options:**
  - 1 — `1000`
  - 5 — `5000`
  - 10 — `10000`
  - 15 — `15000`
  - 30 — `30000`
  - 60 — `60000`
  - 120 — `120000`
  - 300 — `300000`
  - Never — `2147483647`
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md)

### 19. Network Stream Buffer

- **Key:** `stream_buffer_bytes`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Tweaks
- **Declared default:** 1.00 MB (`1048576`)
- **Range:** 0.50 MB to 4.00 MB, step 10 KiB (`10240` bytes) (labels “Small” … “More”)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md)

### 20. User Agent

- **Key:** `user_agent`
- **Control:** Text field (`EditTextPreference`)
- **Category:** Tweaks
- **Declared default:** Not declared
- **APK text:** “User Agent header value to use for the streaming”
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 21. Load custom .so library

- **Key:** `load_user_so`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Off
- **APK text:** “Try to load custom ffmpeg_neon.so from the path:”
- **Markers:** Experiment, non-persistent
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 22. Override Region

- **Key:** `override_region`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Tweaks
- **Declared default:** Off
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

### 23. Volume Keys Long Press

- **Key:** `volume_keys_long_press_cat`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Evidence note:** Groups: volume_keys_long_press_hint, Change Tracks By Long Volume Keys Press.

### 24. (untitled volume_keys_long_press_hint)

- **Key:** `volume_keys_long_press_hint`
- **Control:** Information (`RawTextPreference`)
- **Category:** Volume Keys Long Press
- **Markers:** non-persistent
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 25. Change Tracks By Long Volume Keys Press

- **Key:** `long_volume_controls`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Volume Keys Long Press
- **Declared default:** Off
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)

### 26. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/misc.xml`, `xml/misc.xml`

## Screen-level evidence notes

- Three entries on this screen are marked Experiment: `pause_on_screen_off`, `op_framerate` and `load_user_so`.
- `load_user_so` names `ffmpeg_neon.so`; the path shown is runtime text.
- `override_region` has no description in the XML.

---

← [Lock Screen Settings](Lock%20Screen%20Settings.md) · [Settings Reference Index](Index.md) · [Equalizer Band Settings](Equalizer%20Band%20Settings.md) →
