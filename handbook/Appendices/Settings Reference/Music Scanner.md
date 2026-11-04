---
title: "Music Scanner"
screen_id: "library_scanner"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 14
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Music Scanner

Automatic scanning triggers, multi-value tag splitting, tag encoding for non-Unicode files, `.m3u` encoding, and CUE parsing.

| Property | Value |
|---|---|
| Screen ID | `library_scanner` |
| In-app location | Settings › Library › Scanner |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Scanner” (`library_scanner`) |
| Declared entries | 14 — action or navigation 1, adjustable 1, other 4, toggle 8 |
| Resource files | `xml-v22/library_scanner.xml`, `xml/library_scanner.xml` |
| Explained in | [Chapter 18 — Music Folders, Scanning and Tags](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md) |

## Settings at a glance

**Category: Scanner**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Auto-scan | `auto_scan` | Switch | On | — | — |
| 2 | Rescan Immediately | `scan_no_wait` | Switch | Off | — | Auto-scan (`auto_scan`) |
| 3 | Initial Scan | `initial_scan` | Switch | On | — | Auto-scan (`auto_scan`) |
| 4 | Scan Providers | `scan_providers` | Switch | Off | — | Auto-scan (`auto_scan`) |
| 5 | USB Disconnection/SD Card Mount | `scan_post_usb_mount` | Switch | On | — | Auto-scan (`auto_scan`) |
| 6 | System Media Scanner/MTP | `scan_post_system` | Switch | On | — | Auto-scan (`auto_scan`) |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Symbols to Split Multiple Artists | `artists_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| 8 | Unsplit Artists | `artists_split_ignore` | Tag list | `AC/DC`, `+/-` | Up to 25 entries | — |
| 9 | Symbols to Split Multiple Composers | `composers_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| 10 | Symbols to Split Multiple Genres | `genres_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| 11 | Tag Encoding | `tag_encoding` | List | Default (`_default_`) | 18 options (see appendix) | — |
| 12 | Always Use UTF-8 for .m3u | `m3u_utf8` | Switch | On | — | — |
| 13 | Parse CUE Files | `process_cues` | Switch | On | — | — |

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 14 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. Auto-scan

- **Key:** `auto_scan`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** On
- **APK text:** “Enable automatic SD card/storages scan. If disabled, only manual Rescan is available”
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 2. Rescan Immediately

- **Key:** `scan_no_wait`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** Off
- **APK text:** “Rescan immediately when something changed on the storage. Tracks appear faster, but this may introduce more rescans when you upload multiple files to the device”
- **Depends on:** Auto-scan (`auto_scan`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 3. Initial Scan

- **Key:** `initial_scan`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** On
- **APK text:** “Quick scan when Poweramp is started for first time”
- **Depends on:** Auto-scan (`auto_scan`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 4. Scan Providers

- **Key:** `scan_providers`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** Off
- **APK text:** “Automatically scan 3rd party track provider plugins on startup”
- **Depends on:** Auto-scan (`auto_scan`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 5. USB Disconnection/SD Card Mount

- **Key:** `scan_post_usb_mount`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** On
- **APK text:** “Scan on USB disconnection and/or SD card mount”
- **Depends on:** Auto-scan (`auto_scan`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 6. System Media Scanner/MTP

- **Key:** `scan_post_system`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Scanner
- **Declared default:** On
- **APK text:** “Scan once Android System/MTP Media Scanner finishes”
- **Depends on:** Auto-scan (`auto_scan`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 7. Symbols to Split Multiple Artists

- **Key:** `artists_split_chars`
- **Control:** Tag list (`TagsPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **APK text:** “One or multiple symbols like ; // $”
- **Range:** Up to 25 entries
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 8. Unsplit Artists

- **Key:** `artists_split_ignore`
- **Control:** Tag list (`TagsPreference`)
- **Category:** Other
- **Declared default:** `AC/DC`, `+/-`
- **Range:** Up to 25 entries
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 9. Symbols to Split Multiple Composers

- **Key:** `composers_split_chars`
- **Control:** Tag list (`TagsPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **APK text:** “One or multiple symbols like ; // $”
- **Range:** Up to 25 entries
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 10. Symbols to Split Multiple Genres

- **Key:** `genres_split_chars`
- **Control:** Tag list (`TagsPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **APK text:** “One or multiple symbols like ; // $”
- **Range:** Up to 25 entries
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 11. Tag Encoding

- **Key:** `tag_encoding`
- **Control:** List (`ListPreference`)
- **Category:** Other
- **Declared default:** Default (`_default_`)
- **APK text:** “Encoding for non-Unicode tags and playlists”
- **Options:**
  - Default — `_default_`
  - Chinese Traditional (Big5) — `Big5`
  - Chinese Simplified (GB2312) — `GB2312`
  - Chinese Simplified (GBK) — `GBK`
  - Eastern European (ISO-8859-2) — `ISO-8859-2`
  - Eastern European (Win-1250) — `Windows-1250`
  - Greek (ISO-8859-7) — `ISO-8859-7`
  - Greek (Windows-1253) — `Windows-1253`
  - Hebrew (ISO-8859-8) — `ISO-8859-8`
  - Hebrew (Win-1255) — `Windows-1255`
  - Japanese (Shift_JIS) — `SJIS`
  - Japanese (ISO-2022-JP) — `ISO-2022-JP`
  - Japanese (EUC-JP) — `EUC-JP`
  - Korean (EUC-KR) — `EUC-KR`
  - Russian (Win-1251) — `Windows-1251`
  - Thai (Win-874) — `TIS-620`
  - Western (Win-1252) — `Windows-1252`
  - Western (ISO-8859-1) — `ISO-8859-1`
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 12. Always Use UTF-8 for .m3u

- **Key:** `m3u_utf8`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Other
- **Declared default:** On
- **APK text:** “If disabled, Tag Encoding setting is used for .m3u playlists. UTF-8 is always used for .m3u8 playlists”
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 13. Parse CUE Files

- **Key:** `process_cues`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Other
- **Declared default:** On
- **APK text:** “Virtual folders are created for CUE files with multiple tracks”
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 14. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_scanner.xml`, `xml/library_scanner.xml`

## Screen-level evidence notes

- `artists_split_ignore` declares the default list “AC/DC | +/-”, separated by “ | ”, so two entries are protected from artist splitting by default.
- The three split-character lists declare no default.

---

← [Playback Queue](Playback%20Queue.md) · [Settings Reference Index](Index.md) · [Search Settings](Search%20Settings.md) →
