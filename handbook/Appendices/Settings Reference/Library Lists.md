---
title: "Library Lists"
screen_id: "library_lists"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 29
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Library Lists

Library list appearance and behaviour: navigation bar, headers, A–Z scroll, track numbering, click actions, album and artist grouping, folder hierarchy behaviour, sorting, CUE images, and stream titles.

| Property | Value |
|---|---|
| Screen ID | `library_lists` |
| In-app location | Settings › Library › Lists |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Lists” (`library_lists`) |
| Declared entries | 29 — action or navigation 2, adjustable 4, category 1, toggle 22 |
| Resource files | `xml-v22/library_lists.xml`, `xml/library_lists.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 06 — Track Transitions and Gapless Playback](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 18 — Music Folders, Scanning and Tags](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 19 — Browsing the Library](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 21 — Shuffle](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md), [Chapter 23 — Network Streams](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Look and Feel | `pref_look_and_feel` | Category | — | — | — |
| 29 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Look and Feel**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 2 | Library List Options | `library_list_opts` | Action | — | — | — |
| 3 | Static Navbar | `static_navbar` | Switch | Off | — | — |
| 4 | Seekbar in Navbar | `navbar_seekbar` | Switch | Off | — | — |
| 5 | Headers With Meta | `headers_meta` | Switch | On | — | — |
| 6 | A-Z Scroll | `az_scroll` | Switch | On | — | — |
| 7 | Localized A-Z Scroll | `localized_az` | Switch | Off | — | A-Z Scroll (`az_scroll`) |
| 8 | Header Buttons | `list_header_buttons` | List | Not declared | Disabled; Enabled (positional†) | — |
| 9 | Bottom Buttons | `list_bottom_toolbar` | List | Not declared | Disabled; Semi-transparent; Enabled (positional†) | — |
| 10 | Show Track Number | `track_num_type` | List | `0` → Disabled† | Disabled; Separate number - relevant categories; In the meta - relevant categories; In the title - everywhere (positional†) | — |
| 11 | Show Disc | `track_disc_meta` | Switch | Off | — | Show Track Number (`track_num_type`) |
| 12 | Filename As Title | `title_filename` | Switch | Off | — | — |
| 13 | Click Restarts Track | `list_action_resets` | Switch | Off | — | — |
| 14 | List Item Action | `list_item_action` | List | Play and go to Main UI (`1`) | Play and go to Main UI = `1`; Play and stay in the list = `2`; Enqueue and stay in the list = `3` | — |
| 15 | Delete Action | `enable_deletion` | Switch | On | — | — |

**Category: Albums**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 16 | Join Albums | `join_albums` | Switch | On | — | — |
| 17 | Album Artist Label for Tracks | `use_albumartist` | Switch | Off | — | — |
| 18 | Album Artist Label for Albums | `use_albumartist_albums` | Switch | Off | — | — |
| 19 | Album Artist Label for Album Artist Tracks | `use_albumartist_albumartists` | Switch | On | — | — |
| 20 | Hide Unknown Album | `hide_unknown_album` | Switch | On | — | — |
| 21 | Hide Unknown Artist <sup>Feature Pack</sup> | `hide_unknown_artist` | Switch | Off | — | Hide Unknown Album (`hide_unknown_album`) |

**Category: Advanced**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 22 | Show Unsplit Combined Categories | `show_unsplit_cats` | Switch | Off | — | — |
| 23 | No "Play All Categories" For Hier Folders | `hier_no_advance` | Switch | Off | — | — |
| 24 | Folders Hierarchy Immediate Root | `root_hier_immediate` | Switch | Off | — | — |
| 25 | Hierarchy Files Zoom Level | `hier_files_zoom` | Switch | Off | — | — |
| 26 | Don't Ignore Articles For Sort | `no_sort_field` | Switch | Off | — | — |
| 27 | Show CUE Disc Image Files | `show_cue_source` | Switch | Off | — | — |
| 28 | Stream Name In Title | `stream_name_in_title` | Switch | Not declared | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Look and Feel

- **Key:** `pref_look_and_feel`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Evidence note:** Groups: Library List Options, Static Navbar, Seekbar in Navbar, Headers With Meta, A-Z Scroll, Localized A-Z Scroll, Header Buttons, Bottom Buttons, Show Track Number, Show Disc, Filename As Title, Click Restarts Track, List Item Action, Delete Action.

### 2. Library List Options

- **Key:** `library_list_opts`
- **Control:** Action (`Preference`)
- **Category:** Look and Feel
- **APK text:** “Select top visible Library categories. Also available from Library header menu”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 3. Static Navbar

- **Key:** `static_navbar`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “Don't move Navbar away in lists”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 4. Seekbar in Navbar

- **Key:** `navbar_seekbar`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “Show track seekbar in Navbar. Increases Navbar size”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 5. Headers With Meta

- **Key:** `headers_meta`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** On
- **APK text:** “Show number of songs and some other meta information in headers”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 6. A-Z Scroll

- **Key:** `az_scroll`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** On
- **APK text:** “Use alphabetical A-Z scroll in lists”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 7. Localized A-Z Scroll

- **Key:** `localized_az`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “A-Z scroll includes alphabet for the selected UI language”
- **Depends on:** A-Z Scroll (`az_scroll`)
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 8. Header Buttons

- **Key:** `list_header_buttons`
- **Control:** List (`TagListPreference`)
- **Category:** Look and Feel
- **Declared default:** Not declared
- **APK text:** “Action buttons shown in the list header”
- **Options:**
  - Disabled
  - Enabled
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.
- **Evidence note:** The raw XML title attribute holds an option array; the title shown here was resolved during the research phase and is not independently confirmed in the UI.

### 9. Bottom Buttons

- **Key:** `list_bottom_toolbar`
- **Control:** List (`TagListPreference`)
- **Category:** Look and Feel
- **Declared default:** Not declared
- **APK text:** “Action buttons are displayed on the bottom of lists when header is scrolled away or header buttons are disabled”
- **Options:**
  - Disabled
  - Semi-transparent
  - Enabled
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.
- **Evidence note:** The raw XML title attribute holds an option array; the title shown here was resolved during the research phase and is not independently confirmed in the UI.

### 10. Show Track Number

- **Key:** `track_num_type`
- **Control:** List (`TagListPreference`)
- **Category:** Look and Feel
- **Declared default:** `0` → Disabled†
- **Options:**
  - Disabled
  - Separate number - relevant categories
  - In the meta - relevant categories
  - In the title - everywhere
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 11. Show Disc

- **Key:** `track_disc_meta`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “Disc tag is shown in the track meta”
- **Depends on:** Show Track Number (`track_num_type`)
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 12. Filename As Title

- **Key:** `title_filename`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “Always use track filename instead of tag. Applies to all categories as well”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 13. Click Restarts Track

- **Key:** `list_action_resets`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** Off
- **APK text:** “If disabled, continue playing the same track, but still change category and re-shuffle if needed”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)

### 14. List Item Action

- **Key:** `list_item_action`
- **Control:** List (`TagListPreference`)
- **Category:** Look and Feel
- **Declared default:** Play and go to Main UI (`1`)
- **Options:**
  - Play and go to Main UI — `1`
  - Play and stay in the list — `2`
  - Enqueue and stay in the list — `3`
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 15. Delete Action

- **Key:** `enable_deletion`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Look and Feel
- **Declared default:** On
- **APK text:** “Enable the Delete menu action that deletes song files (after confirmation)”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 16. Join Albums

- **Key:** `join_albums`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** On
- **APK text:** “If disabled, separate albums are shown for tracks without album artist tag”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 17. Album Artist Label for Tracks

- **Key:** `use_albumartist`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** Off
- **APK text:** “Show Album Artist tag (if exists) instead of just Artist tag for tracks”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 18. Album Artist Label for Albums

- **Key:** `use_albumartist_albums`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** Off
- **APK text:** “Show Album Artist tag (if exists) instead of just Artist tag for Albums. Also changes sorting by Artist”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 19. Album Artist Label for Album Artist Tracks

- **Key:** `use_albumartist_albumartists`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** On
- **APK text:** “Show Album Artist tag (if exists) instead of just Artist tag for Album Artists tracks. Also changes sorting by Artist”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 20. Hide Unknown Album

- **Key:** `hide_unknown_album`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** On
- **APK text:** “No Unknown Album shown in track labels”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 21. Hide Unknown Artist

- **Key:** `hide_unknown_artist`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Albums
- **Declared default:** Off
- **APK text:** “No Unknown Artist shown in track labels when possible. This may hide the 2nd track label completely”
- **Depends on:** Hide Unknown Album (`hide_unknown_album`)
- **Markers:** Feature Pack
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 22. Show Unsplit Combined Categories

- **Key:** `show_unsplit_cats`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “Unsplit combined Artists, Album Artists, Composers are visible in the appropriate categories”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)

### 23. No "Play All Categories" For Hier Folders

- **Key:** `hier_no_advance`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “Don't apply Play All Categories mode when Folders Hierarchy playback started with the list header play button”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)
- **Evidence note:** The XML title is wrapped in quotation marks or contains escaped quotes (Android string escaping); shown here without the escaping.

### 24. Folders Hierarchy Immediate Root

- **Key:** `root_hier_immediate`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “If only one root music folder exists, show its contents immediately in top Folders Hierarchy category. This option will go deeper until folder with tracks or multiple subfolders”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 25. Hierarchy Files Zoom Level

- **Key:** `hier_files_zoom`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “Apply Folder Files zoom level for Folders Hierarchy category when a folder contains files only”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 26. Don't Ignore Articles For Sort

- **Key:** `no_sort_field`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “Don't ignore articles ("the", "a", "an") in the beginning of albums, artists, and composers”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)
- **Evidence note:** The XML title is wrapped in quotation marks or contains escaped quotes (Android string escaping); shown here without the escaping.

### 27. Show CUE Disc Image Files

- **Key:** `show_cue_source`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Off
- **APK text:** “Big undivided CUE disc image files will be visible in lists”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 18](../../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md), [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)

### 28. Stream Name In Title

- **Key:** `stream_name_in_title`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Not declared
- **APK text:** “Use "Stream - Track Title" pattern for stream titles, instead of just "Track Title". Applied to the next played stream”
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 23](../../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 29. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_lists.xml`, `xml/library_lists.xml`

## Screen-level evidence notes

- Two titles (`list_header_buttons`, `list_bottom_toolbar`) were resolved during the research phase because their raw title attribute holds an option array. The displayed in-app titles remain unconfirmed.
- `hide_unknown_artist` is the only Feature Pack–marked entry on this screen.

---

← [Music Library Settings](Music%20Library%20Settings.md) · [Settings Reference Index](Index.md) · [Playlist Settings](Playlist%20Settings.md) →
