---
title: "Lyrics Settings"
screen_id: "ui_lyrics"
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

# Lyrics Settings

Lyrics access from the Player Screen, display size and offset, external lyrics apps, and lyrics scanning (tags and LRC files).

| Property | Value |
|---|---|
| Screen ID | `ui_lyrics` |
| In-app location | Settings › Look and Feel › Lyrics |
| Reached from | [Look and Feel](Look%20and%20Feel.md) → “Lyrics” (`ui_lyrics`) |
| Declared entries | 12 — action or navigation 1, adjustable 7, other 1, toggle 3 |
| Resource files | `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml` |
| Explained in | [Chapter 18 — Music Folders, Scanning and Tags](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 28 — Lyrics](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Lyrics Swipe Up | `main_lyrics_swipe` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |
| 2 | Lyrics Button | `main_lyrics_button` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |
| 3 | Lyrics Item In The Track Menu | `lyrics_in_menu` | List | Not declared | Open lyrics UI = `0`; Open 3rd party app = `1` | — |
| 4 | Keep Screen On | `lyrics_keep_screen` | Switch | Not declared | — | — |
| 5 | Lyrics Time Offset | `lyrics_offset` | Slider | Not declared | −5000 ms to 5000 ms, step 50 ms (labels “-5000” … “0” … “5000”) | — |
| 6 | Lyrics Size | `list_zoom_lyrics` | List | Not declared | Small Font = `-1`; Default = `0`; Large Font = `1` | — |
| 7 | Preferred Lyrics App | `lyrics_plugin` | List | Not declared | None = `-1`; Browser via custom URL = `6`; Google = `2`; Google (Web) = `3`; MusiXmatch = `0`; Genius = `1`; QuickLyric = `4`; Walkman Lyrics Extension = `5` | — |
| 8 | Custom URL | `lyrics_custom_url` | Text field | Not declared | Free text | — |
| 12 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Scanner**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 9 | Rescan Lyrics Tags <sup>non-persistent</sup> | `rescan_lyrics_tags` | Action | — | — | — |
| 10 | Scan LRC Files | `lrc_scan` | Switch | Not declared | — | — |
| 11 | Always Use UTF-8 | `lrc_utf8` | Switch | Not declared | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Lyrics Swipe Up

- **Key:** `main_lyrics_swipe`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Disabled — `0`
  - When local lyrics available — `1`
  - Always — `2`
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. Lyrics Button

- **Key:** `main_lyrics_button`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Disabled — `0`
  - When local lyrics available — `1`
  - Always — `2`
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Lyrics Item In The Track Menu

- **Key:** `lyrics_in_menu`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Open lyrics UI — `0`
  - Open 3rd party app — `1`
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Keep Screen On

- **Key:** `lyrics_keep_screen`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Lyrics Time Offset

- **Key:** `lyrics_offset`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** Not declared
- **Range:** −5000 ms to 5000 ms, step 50 ms (labels “-5000” … “0” … “5000”)
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Lyrics Size

- **Key:** `list_zoom_lyrics`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Small Font — `-1`
  - Default — `0`
  - Large Font — `1`
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Preferred Lyrics App

- **Key:** `lyrics_plugin`
- **Control:** List (`NumberListPreference`)
- **Declared default:** Not declared
- **Options:**
  - None — `-1`
  - Browser via custom URL — `6`
  - Google — `2`
  - Google (Web) — `3`
  - MusiXmatch — `0`
  - Genius — `1`
  - QuickLyric — `4`
  - Walkman Lyrics Extension — `5`
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 8. Custom URL

- **Key:** `lyrics_custom_url`
- **Control:** Text field (`EditTextPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 9. Rescan Lyrics Tags

- **Key:** `rescan_lyrics_tags`
- **Control:** Action (`ProgressPreference`)
- **Category:** Scanner
- **Markers:** non-persistent
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 10. Scan LRC Files

- **Key:** `lrc_scan`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 11. Always Use UTF-8

- **Key:** `lrc_utf8`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 12. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/ui_lyrics.xml`, `xml/ui_lyrics.xml`

## Screen-level evidence notes

- `main_lyrics_button` also appears on `ui_player`; the two declarations are identical.
- Lyrics delay relative to audio is set per output (`vis_latency_ms` on the output options screen), separately from `lyrics_offset` here.

---

← [Application Icon](Application%20Icon.md) · [Settings Reference Index](Index.md) · [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) →
