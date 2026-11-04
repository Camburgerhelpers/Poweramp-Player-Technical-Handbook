---
title: "Music Library Settings"
screen_id: "library"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 21
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Music Library Settings

Library maintenance and behaviour: rescans, music folders, legacy file access, track filtering, per-track progress, play counting, and links to the Lists, Search, Queue, Playlists, Shuffle and Scanner screens.

| Property | Value |
|---|---|
| Screen ID | `library` |
| In-app location | Settings › Library |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Library” (`folders_library`) |
| Links to | [Library Lists](Library%20Lists.md) (`library_lists`); [Search Settings](Search%20Settings.md) (`library_search`); [Playback Queue](Playback%20Queue.md) (`library_queue`); [Playlist Settings](Playlist%20Settings.md) (`library_playlists`); [Shuffle Settings](Shuffle%20Settings.md) (`library_shuffle`); [Music Scanner](Music%20Scanner.md) (`library_scanner`) |
| Declared entries | 21 — action or navigation 3, adjustable 3, informational or dynamic 3, other 8, toggle 4 |
| Resource files | `xml-v22/library.xml`, `xml/library.xml` |
| Explained in | [Chapter 18 — Music Folders, Scanning and Tags](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Rescan <sup>non-persistent</sup> | `rescan_folders` | Action | — | — | — |
| 2 | Full Rescan <sup>non-persistent</sup> | `erase_and_rescan` | Action | — | — | — |
| 3 | Music Folders | `music_folders_button` | Information | — | — | — |
| 4 | (untitled `some_saf_folders_unavailable`) | `some_saf_folders_unavailable` | Information | — | — | — |
| 5 | File Access Legacy Mode | `file_access_legacy` | Switch | Off | — | — |
| 6 | (untitled `_legacy_access_warning`) | `_legacy_access_warning` | Information | — | — | — |
| 7 | Ignore Short Tracks (Notifications, etc.) | `scan_min_track_duration` | List | 6 (`6`) | Don't ignore - include all = `0`; 2 = `2`; 6 = `6`; 10 = `10`; 15 = `15`; 30 = `30`; 45 = `45`; 60 = `60` | — |
| 8 | Ignore Video Tracks | `skip_video` | Switch | Not declared | — | — |
| 9 | Auto-Find Music Folders | `auto_find_button` | Action | — | — | — |
| 20 | Reset stats | `reset_stats` | Action | — | — | — |
| 21 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Advanced**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 10 | Store/Restore Per Track Progress | `restore_pos` | Switch | On | — | — |
| 11 | -10/+10s Rewind Pro Buttons | `long_skip_rewind` | Switch | On | — | — |
| 12 | Track Duration For Per Track Progress and -10/+10s Buttons | `restore_pos_min_dur` | Slider | 45 min (`45`) | 0 min to 60 min, step not declared | — |
| 13 | Count As Played | `played_dur` | Slider | 50% (`50`) | 0% to 100%, step not declared | — |
| 14 | Lists | `library_lists` | Link | — | — | — |
| 15 | Search | `library_search` | Link | — | — | — |
| 16 | Queue | `library_queue` | Link | — | — | — |
| 17 | Playlists | `library_playlists` | Link | — | — | — |
| 18 | Shuffle | `library_shuffle` | Link | — | — | — |
| 19 | Scanner | `library_scanner` | Link | — | — | — |

## Entry details

### 1. Rescan

- **Key:** `rescan_folders`
- **Control:** Action (`ProgressPreference`)
- **Markers:** non-persistent
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Full Rescan

- **Key:** `erase_and_rescan`
- **Control:** Action (`ProgressPreference`)
- **APK text:** “Clear tag info database and rescan Library/Folders. Use when storage/SD card changed, on major ROM updates, or when folders are moved on storage”
- **Markers:** non-persistent
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Music Folders

- **Key:** `music_folders_button`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 4. (untitled some_saf_folders_unavailable)

- **Key:** `some_saf_folders_unavailable`
- **Control:** Information (`RawTextPreference`)
- **APK text:** “Android may not allow certain folders to be added, such as Download or a storage root. In this case please add their subfolders instead. This restriction is imposed by Google”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 5. File Access Legacy Mode

- **Key:** `file_access_legacy`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Direct file access mode. Requires extra permission” “This mode makes all storages directly accessible for a selection in the Music Folders dialog. This option is not supported on Android 13+ for the Play app edition”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

### 6. (untitled _legacy_access_warning)

- **Key:** `_legacy_access_warning`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 7. Ignore Short Tracks (Notifications, etc.)

- **Key:** `scan_min_track_duration`
- **Control:** List (`NumberListPreference`)
- **Declared default:** 6 (`6`)
- **APK text:** “Less than (seconds): %s”
- **Options:**
  - Don't ignore - include all — `0`
  - 2 — `2`
  - 6 — `6`
  - 10 — `10`
  - 15 — `15`
  - 30 — `30`
  - 45 — `45`
  - 60 — `60`
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 8. Ignore Video Tracks

- **Key:** `skip_video`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Tracks with video stream will be ignored”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 9. Auto-Find Music Folders

- **Key:** `auto_find_button`
- **Control:** Action (`Preference`)
- **APK text:** “Use this option to find music folders automatically”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 10. Store/Restore Per Track Progress

- **Key:** `restore_pos`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** On
- **APK text:** “Useful for podcasts, long sets”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 11. -10/+10s Rewind Pro Buttons

- **Key:** `long_skip_rewind`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** On
- **APK text:** “Change <<< >>> (category change) pro buttons to -10/+10s rewinding buttons for long tracks. Also applies to Long category” “Requires Pro Buttons skin option enabled”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 12. Track Duration For Per Track Progress and -10/+10s Buttons

- **Key:** `restore_pos_min_dur`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Advanced
- **Declared default:** 45 min (`45`)
- **APK text:** “At least: %d min.”
- **Range:** 0 min to 60 min, step not declared
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 13. Count As Played

- **Key:** `played_dur`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Advanced
- **Declared default:** 50% (`50`)
- **APK text:** “Count track as played after playing at least: %d%%”
- **Range:** 0% to 100%, step not declared
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 14. Lists

- **Key:** `library_lists`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “List click action, lists/categories options”
- **Opens:** [Library Lists](Library%20Lists.md) (`library_lists`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 15. Search

- **Key:** `library_search`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “Search results playback options”
- **Opens:** [Search Settings](Search%20Settings.md) (`library_search`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 16. Queue

- **Key:** `library_queue`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “Queue options”
- **Opens:** [Playback Queue](Playback%20Queue.md) (`library_queue`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 17. Playlists

- **Key:** `library_playlists`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “User created playlists import/export and options”
- **Opens:** [Playlist Settings](Playlist%20Settings.md) (`library_playlists`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 18. Shuffle

- **Key:** `library_shuffle`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “Shuffle options”
- **Opens:** [Shuffle Settings](Shuffle%20Settings.md) (`library_shuffle`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 19. Scanner

- **Key:** `library_scanner`
- **Control:** Link (`RedirectPreference`)
- **Category:** Advanced
- **APK text:** “Poweramp folders and library scanner options”
- **Opens:** [Music Scanner](Music%20Scanner.md) (`library_scanner`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

### 20. Reset stats

- **Key:** `reset_stats`
- **Control:** Action (`Preference`)
- **APK text:** “Reset tracks played times, last played, and related stats”
- **Source:** `xml-v22/library.xml`, `xml/library.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 21. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library.xml`, `xml/library.xml`

## Screen-level evidence notes

- `music_folders_button` is an information/action row; the Music Folders dialog itself is not part of the settings XML.
- Two keys on this screen also appear elsewhere: `erase_and_rescan` (also on `space`) and `long_skip_rewind` (also on `ui_player`).

---

← [Headset and Bluetooth Settings](Headset%20and%20Bluetooth%20Settings.md) · [Settings Reference Index](Index.md) · [Library Lists](Library%20Lists.md) →
