---
title: "Playlist Settings"
screen_id: "library_playlists"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 8
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Playlist Settings

Playlist import/export and playlist entry handling (ratings import, insert position, duplicates, entry resolution).

| Property | Value |
|---|---|
| Screen ID | `library_playlists` |
| In-app location | Settings › Library › Playlists |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Playlists” (`library_playlists`) |
| Declared entries | 8 — action or navigation 3, adjustable 1, toggle 4 |
| Resource files | `xml-v22/library_playlists.xml`, `xml/library_playlists.xml` |
| Explained in | [Chapter 20 — Playlists and the Queue](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Import System Library Playlists <sup>non-persistent</sup> | `playlists_import` | Action | — | — | — |
| 2 | Export Poweramp Playlists <sup>non-persistent</sup> | `playlists_export` | Action | — | — | — |
| 3 | Import Ratings | `pl_import_ratings` | Switch | On | — | — |
| 4 | Playlist Insert Position | `playlist_insert_pos` | List | Not declared | Insert at start = `1`; Add to end = `0`; Shuffled = `2` | — |
| 5 | Remove Playlist Entries On Track Deletion | `pl_del_entry_w_track` | Switch | On | — | — |
| 6 | Resolve Playlist Entries | `pl_auto_resolve` | Switch | On | — | — |
| 7 | Don't Add Duplicates | `pl_no_dups` | Switch | Off | — | — |
| 8 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Import System Library Playlists

- **Key:** `playlists_import`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Export Poweramp Playlists

- **Key:** `playlists_export`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Import Ratings

- **Key:** `pl_import_ratings`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)

### 4. Playlist Insert Position

- **Key:** `playlist_insert_pos`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Insert at start — `1`
  - Add to end — `0`
  - Shuffled — `2`
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Remove Playlist Entries On Track Deletion

- **Key:** `pl_del_entry_w_track`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 6. Resolve Playlist Entries

- **Key:** `pl_auto_resolve`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)

### 7. Don't Add Duplicates

- **Key:** `pl_no_dups`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** The XML title is wrapped in quotation marks or contains escaped quotes (Android string escaping); shown here without the escaping.

### 8. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_playlists.xml`, `xml/library_playlists.xml`

## Screen-level evidence notes

- `playlist_insert_pos` declares values but no default.

---

← [Library Lists](Library%20Lists.md) · [Settings Reference Index](Index.md) · [Playback Queue](Playback%20Queue.md) →
