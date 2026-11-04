---
title: "Lock Screen Settings"
screen_id: "lockscreen"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 12
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Lock Screen Settings

Album art sent to the Android lock screen and the optional Poweramp lock screen.

| Property | Value |
|---|---|
| Screen ID | `lockscreen` |
| In-app location | Settings › Lock Screen |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Lock Screen” (`lockscreen`) |
| Links to | [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`buttons`) |
| Declared entries | 12 — action or navigation 2, category 2, other 1, toggle 7 |
| Resource files | `xml-v22/lockscreen.xml`, `xml/lockscreen.xml` |
| Explained in | [Chapter 31 — Lock Screen](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32 — Android Auto and Connected Apps](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Android Lock Screen | `ics_ls_cat` | Category | — | — | — |
| 6 | Poweramp Lock Screen | `pref_poweramp_ls` | Category | — | — | — |
| 12 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Android Lock Screen**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 2 | Album Art | `ics_ls_aa` | Switch | On | — | — |
| 3 | Blur | `ls_aa_blur` | Switch | Off | — | Album Art (`ics_ls_aa`) |
| 4 | Show Default Image | `ls_default_aa` | Switch | Off | — | — |
| 5 | Buttons | `buttons` | Link | — | — | — |

**Category: Poweramp Lock Screen**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Show On Lock Screen | `ls_enable` | Switch | Off | — | — |
| 8 | Shorter Timeout | `ls_force_timeout` | Switch | On | — | Show On Lock Screen (`ls_enable`) |
| 9 | Open App Settings <sup>non-persistent</sup> | `ls_app_settings` | Action | — | — | Show On Lock Screen (`ls_enable`) |
| 10 | Landscape Layout | `ls_enable_land` | Switch | Off | — | Show On Lock Screen (`ls_enable`) |
| 11 | Direct Unlock | `direct_unlock` | Switch | Off | — | Show On Lock Screen (`ls_enable`) |

## Entry details

### 1. Android Lock Screen

- **Key:** `ics_ls_cat`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Evidence note:** Groups: Album Art, Blur, Show Default Image, Buttons.

### 2. Album Art

- **Key:** `ics_ls_aa`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Lock Screen
- **Declared default:** On
- **APK text:** “Show album art on Android lock screen. This option may also affect Android Auto covers. Not supported by some devices/ROMs”
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 3. Blur

- **Key:** `ls_aa_blur`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Lock Screen
- **Declared default:** Off
- **APK text:** “Lock screen album art is blurred. The album art background isn't shown by some devices. This option is not recommended for smart watches or apps that use Poweramp album art”
- **Depends on:** Album Art (`ics_ls_aa`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 4. Show Default Image

- **Key:** `ls_default_aa`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Android Lock Screen
- **Declared default:** Off
- **APK text:** “Send default placeholder image when no album art exists for the track. Also affects smart watches, other apps utilizing media APIs. Default image is defined by skin”
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 5. Buttons

- **Key:** `buttons`
- **Control:** Link (`RedirectPreference`)
- **Category:** Android Lock Screen
- **APK text:** “Media action buttons”
- **Opens:** [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`ui_mediaactions`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 6. Poweramp Lock Screen

- **Key:** `pref_poweramp_ls`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Evidence note:** Groups: Show On Lock Screen, Shorter Timeout, Open App Settings, Landscape Layout, Direct Unlock.

### 7. Show On Lock Screen

- **Key:** `ls_enable`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Poweramp Lock Screen
- **Declared default:** Off
- **APK text:** “Poweramp shows itself on top of system lock screen if music is playing. Settings, deletion, edit tag, etc. actions trigger device lock screen”
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 8. Shorter Timeout

- **Key:** `ls_force_timeout`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Poweramp Lock Screen
- **Declared default:** On
- **APK text:** “Apply shorter screen timeout when Poweramp is on lock screen”
- **Depends on:** Show On Lock Screen (`ls_enable`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 9. Open App Settings

- **Key:** `ls_app_settings`
- **Control:** Action (`Preference`)
- **Category:** Poweramp Lock Screen
- **Depends on:** Show On Lock Screen (`ls_enable`)
- **Markers:** non-persistent
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 10. Landscape Layout

- **Key:** `ls_enable_land`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Poweramp Lock Screen
- **Declared default:** Off
- **APK text:** “Enable rotation to landscape layout”
- **Depends on:** Show On Lock Screen (`ls_enable`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 11. Direct Unlock

- **Key:** `direct_unlock`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Poweramp Lock Screen
- **Declared default:** Off
- **APK text:** “Unlock directly to home screen (if possible) instead of Android lockscreen”
- **Depends on:** Show On Lock Screen (`ls_enable`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`
- **Discussed in:** [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)

### 12. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/lockscreen.xml`, `xml/lockscreen.xml`

## Screen-level evidence notes

- The Poweramp lock screen options depend on `ls_enable`.

---

← [Shuffle Settings](Shuffle%20Settings.md) · [Settings Reference Index](Index.md) · [Miscellaneous Settings](Miscellaneous%20Settings.md) →
