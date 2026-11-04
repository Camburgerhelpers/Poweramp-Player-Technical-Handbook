---
title: "Album Art Settings"
screen_id: "aa"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 18
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Album Art Settings

Album art downloading, image cache maintenance, and advanced image handling for the player, lists, streams, and external media consumers (lock screen, widgets, Android Auto, smartwatches).

| Property | Value |
|---|---|
| Screen ID | `aa` |
| In-app location | Settings › Album Art |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Album Art” (`aa`) |
| Declared entries | 18 — action or navigation 3, adjustable 1, category 1, toggle 13 |
| Resource files | `xml-v22/aa.xml`, `xml/aa.xml` |
| Explained in | [Chapter 23 — Network Streams](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md), [Chapter 27 — Album Art and Backgrounds](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 31 — Lock Screen](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32 — Android Auto and Connected Apps](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Download | `pref_aa_downloading` | Category | — | — | — |
| 18 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Download**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 2 | Download Album Art | `download_album_art` | Switch | Off | — | — |
| 3 | Download Artist Images | `download_artist_art` | Switch | Off | — | — |
| 4 | High Resolution | `aa_download_hd` | Switch | Off | — | — |
| 5 | Download Only On Wi-Fi | `download_aa_wifi_only` | Switch | On | — | — |
| 6 | Reset Negative Status <sup>non-persistent</sup> | `reset_negative_aa_status` | Action | — | — | — |
| 7 | Delete Cache <sup>non-persistent</sup> | `clear_aa_cache` | Action | — | — | — |

**Category: Advanced Tweaks**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 8 | Force Default Image | `aa_force_default` | Switch | Off | — | — |
| 9 | Use 24-bit RGB | `aa_8888` | Switch | Off | — | — |
| 10 | Send High Resolution Album Art | `aa_hi_res_for_apis` | Switch | Off | — | — |
| 11 | Always Send Album Art | `aa_always` | Switch | Off | — | — |
| 12 | API Compatibility <sup>Experiment</sup> | `aa_no_ashmem` | Switch | Off | — | — |
| 13 | Also Search By Title/Filename | `download_if_no_tags` | Switch | On | — | — |
| 14 | Prefer Downloaded Album Art | `prefer_downloaded_aa` | Switch | Off | — | — |
| 15 | Aspect Ratio | `aa_aspect` | List | `0` → Default† | Default; Keep Aspect Ratio; Square (positional†) | — |
| 16 | Increase Resolution <sup>Experiment</sup> | `aa_higher_res` | Switch | Off | — | — |
| 17 | Prefer Track Cover for Streams | `aa_per_stream_track` | Switch | Off | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Download

- **Key:** `pref_aa_downloading`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Evidence note:** Groups: Download Album Art, Download Artist Images, High Resolution, Download Only On Wi-Fi, Reset Negative Status, Delete Cache.

### 2. Download Album Art

- **Key:** `download_album_art`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Download
- **Declared default:** Off
- **APK text:** “Automatically search and download missing album art”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 3. Download Artist Images

- **Key:** `download_artist_art`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Download
- **Declared default:** Off
- **APK text:** “Includes Album Artists and Composers. If disabled, track album art is used”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 4. High Resolution

- **Key:** `aa_download_hd`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Download
- **Declared default:** Off
- **APK text:** “Higher downloaded album art resolution, increases storage/connection bandwidth usage”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 5. Download Only On Wi-Fi

- **Key:** `download_aa_wifi_only`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Download
- **Declared default:** On
- **APK text:** “Album art will be downloaded only when wi-fi is connected”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md), [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 6. Reset Negative Status

- **Key:** `reset_negative_aa_status`
- **Control:** Action (`Preference`)
- **Category:** Download
- **APK text:** “Clear stored "not-found" status for album/artist images”
- **Markers:** non-persistent
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 7. Delete Cache

- **Key:** `clear_aa_cache`
- **Control:** Action (`Preference`)
- **Category:** Download
- **APK text:** “Poweramp images cache will be deleted”
- **Markers:** non-persistent
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 8. Force Default Image

- **Key:** `aa_force_default`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Always show default image instead of any album art”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 9. Use 24-bit RGB

- **Key:** `aa_8888`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Higher color resolution for album art. Requires 2x more memory per image”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 10. Send High Resolution Album Art

- **Key:** `aa_hi_res_for_apis`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “High resolution album art is sent to Android lock screen, app widgets, and other media API consumers. Lock Screen ➔ Blur has priority over this option”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 31](../../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 11. Always Send Album Art

- **Key:** `aa_always`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “For smartwatches/other devices which should always receive album art, even when screen is off”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)

### 12. API Compatibility

- **Key:** `aa_no_ashmem`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Change if album art is not visible in Android Auto/3rd party apps”
- **Markers:** Experiment
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 13. Also Search By Title/Filename

- **Key:** `download_if_no_tags`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** On
- **APK text:** “Search for album art even if no tags are found in the track”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 14. Prefer Downloaded Album Art

- **Key:** `prefer_downloaded_aa`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Prefer downloaded album art over in-folder Cover.jpg/AlbumArt.jpg, etc”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 15. Aspect Ratio

- **Key:** `aa_aspect`
- **Control:** List (`TagListPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** `0` → Default†
- **Options:**
  - Default — Keep landscape and square album art / images ratio
  - Keep Aspect Ratio — Keep album art / images aspect ratio as is. Tall images won't fit fully some UI elements
  - Square — Album art / images are always square
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 16. Increase Resolution

- **Key:** `aa_higher_res`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Increase image quality for high resolution embedded/in-folder images” “Consumes more RAM. Poweramp may crash due to insufficient memory on the devices with not enough RAM”
- **Markers:** Experiment
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 17. Prefer Track Cover for Streams

- **Key:** `aa_per_stream_track`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced Tweaks
- **Declared default:** Off
- **APK text:** “Show album art based on stream track title/artist instead of the stream name” “Increases traffic usage”
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`
- **Discussed in:** [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md), [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 18. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/aa.xml`, `xml/aa.xml`

## Screen-level evidence notes

- Three entries are actions (Reset Negative Status, Delete Cache, Restore Defaults); two are marked Experiment (`aa_no_ashmem`, `aa_higher_res`).
- `aa_hi_res_for_apis` states that Lock Screen ➔ Blur takes priority over it; see the `lockscreen` reference.

---

← [Index](Index.md) · [Settings Reference Index](Index.md) · [Background Appearance Settings](Background%20Appearance%20Settings.md) →
