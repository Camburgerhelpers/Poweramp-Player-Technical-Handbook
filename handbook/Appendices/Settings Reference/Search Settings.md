---
title: "Search Settings"
screen_id: "library_search"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 5
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Search Settings

Search categories and how search results are played.

| Property | Value |
|---|---|
| Screen ID | `library_search` |
| In-app location | Settings › Library › Search |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Search” (`library_search`) |
| Declared entries | 5 — action or navigation 2, informational or dynamic 1, toggle 2 |
| Resource files | `xml-v22/library_search.xml`, `xml/library_search.xml` |
| Explained in | [Chapter 22 — Search](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `msg`) | `msg` | Information | — | — | — |
| 2 | Search Categories | `list_opts` | Action | — | — | — |
| 3 | Play Tracks Only | `search_play_tracks` | Switch | Not declared | — | — |
| 4 | Search Track Titles Only | `search_track_titles_only` | Switch | Not declared | — | — |
| 5 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. (untitled msg)

- **Key:** `msg`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/library_search.xml`, `xml/library_search.xml`
- **Discussed in:** [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 2. Search Categories

- **Key:** `list_opts`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_search.xml`, `xml/library_search.xml`
- **Discussed in:** [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)

### 3. Play Tracks Only

- **Key:** `search_play_tracks`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “If some tracks are found, play only the tracks and ignore other found categories. If there are no tracks, found categories will be played”
- **Source:** `xml-v22/library_search.xml`, `xml/library_search.xml`
- **Discussed in:** [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Search Track Titles Only

- **Key:** `search_track_titles_only`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “If disabled, track album and artist are also used for the search”
- **Source:** `xml-v22/library_search.xml`, `xml/library_search.xml`
- **Discussed in:** [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_search.xml`, `xml/library_search.xml`

## Screen-level evidence notes

- `msg` is an information row with no static text.
- `list_opts` opens the search-category selector; its options are not declared in the XML.

---

← [Music Scanner](Music%20Scanner.md) · [Settings Reference Index](Index.md) · [Shuffle Settings](Shuffle%20Settings.md) →
