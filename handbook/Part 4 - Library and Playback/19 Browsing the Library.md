---
title: "Browsing the Library"
chapter: 19
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "library_lists"
  - "ui_player"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 19

# 19. Browsing the Library

The library is browsed through categories: Folders, Folders Hierarchy, Albums, Artists, Album Artists, Composers, Genres, Years, Playlists and others. **Settings › Library › Lists** (screen `library_lists`) controls how these lists look, how albums and artists are grouped, what a tap does, and how folders and sorting behave.

## Look and feel of lists

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Library List Options | `library_list_opts` | Action | — | — | — |
| Static Navbar | `static_navbar` | Switch | Off | — | — |
| Seekbar in Navbar | `navbar_seekbar` | Switch | Off | — | — |
| Headers With Meta | `headers_meta` | Switch | On | — | — |
| A-Z Scroll | `az_scroll` | Switch | On | — | — |
| Localized A-Z Scroll | `localized_az` | Switch | Off | — | A-Z Scroll (`az_scroll`) |
| Header Buttons | `list_header_buttons` | List | Not declared | Disabled; Enabled (positional†) | — |
| Bottom Buttons | `list_bottom_toolbar` | List | Not declared | Disabled; Semi-transparent; Enabled (positional†) | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Library List Options:** “Select top visible Library categories. Also available from Library header menu”.
- **A-Z Scroll** and **Localized A-Z Scroll** control the alphabetical scroller. The localized version adds the alphabet of the selected UI language.
- **Header Buttons** and **Bottom Buttons** choose where list actions (play, shuffle and so on) appear. The bottom buttons are shown “when header is scrolled away or header buttons are disabled”. The raw XML title attribute of both entries holds an option array, so the titles and option labels shown here are a research interpretation. The exact in-app labels are **RUNTIME VERIFICATION REQUIRED**.

## Track labels

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Show Track Number | `track_num_type` | List | `0` → Disabled† | Disabled; Separate number - relevant categories; In the meta - relevant categories; In the title - everywhere (positional†) | — |
| Show Disc | `track_disc_meta` | Switch | Off | — | Show Track Number (`track_num_type`) |
| Filename As Title | `title_filename` | Switch | Off | — | — |
| Hide Unknown Album | `hide_unknown_album` | Switch | On | — | — |
| Hide Unknown Artist <sup>Feature Pack</sup> | `hide_unknown_artist` | Switch | Off | — | Hide Unknown Album (`hide_unknown_album`) |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**Show Track Number** options:

- **Disabled**
- **Separate number - relevant categories**
- **In the meta - relevant categories**
- **In the title - everywhere**

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

**Filename As Title** uses the file name instead of the title tag: “Always use track filename instead of tag. Applies to all categories as well”. Whether other tags (artist, album) are still read is not stated. **Hide Unknown Artist** depends on **Hide Unknown Album** and is marked as a Feature Pack option ([Chapter 36 — Purchases and Feature Packages](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)).

## What a tap does

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| List Item Action | `list_item_action` | List | Play and go to Main UI (`1`) | Play and go to Main UI = `1`; Play and stay in the list = `2`; Enqueue and stay in the list = `3` | — |
| Click Restarts Track | `list_action_resets` | Switch | Off | — | — |
| Delete Action | `enable_deletion` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


- **Play and go to Main UI** — stored value `1`
- **Play and stay in the list** — stored value `2`
- **Enqueue and stay in the list** — stored value `3`

- **Click Restarts Track:** “If disabled, continue playing the same track, but still change category and re-shuffle if needed”.
- **Delete Action:** “Enable the Delete menu action that deletes song files (after confirmation)”. Turn it off if you never want file deletion available from menus.

## Albums and artists

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Join Albums | `join_albums` | Switch | On | — | — |
| Album Artist Label for Tracks | `use_albumartist` | Switch | Off | — | — |
| Album Artist Label for Albums | `use_albumartist_albums` | Switch | Off | — | — |
| Album Artist Label for Album Artist Tracks | `use_albumartist_albumartists` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


- **Join Albums** (on by default): “If disabled, separate albums are shown for tracks without album artist tag”. **GENERAL PRINCIPLE:** compilations and soundtracks tagged without a consistent Album Artist split into one “album” per track artist unless joined. Tagging Album Artist properly (for example “Various Artists”) is the robust fix.
- The three **Album Artist Label** switches choose, per context, whether the Album Artist tag is shown instead of the track Artist. The two for albums and album-artist tracks also change sorting by artist.

## Folders and hierarchy

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| No "Play All Categories" For Hier Folders | `hier_no_advance` | Switch | Off | — | — |
| Folders Hierarchy Immediate Root | `root_hier_immediate` | Switch | Off | — | — |
| Hierarchy Files Zoom Level | `hier_files_zoom` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


- **No “Play All Categories” For Hier Folders:** “Don't apply Play All Categories mode when Folders Hierarchy playback started with the list header play button”.
- **Folders Hierarchy Immediate Root:** “If only one root music folder exists, show its contents immediately in top Folders Hierarchy category. This option will go deeper until folder with tracks or multiple subfolders”.
- **Hierarchy Files Zoom Level:** “Apply Folder Files zoom level for Folders Hierarchy category when a folder contains files only”.

**Navigate to the Folders** (Player Screen settings) decides whether the track menu's Folders button opens Folders or Folders Hierarchy ([Chapter 26 — The Player Screen](../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)).

## Sorting and special files

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Don't Ignore Articles For Sort | `no_sort_field` | Switch | Off | — | — |
| Show CUE Disc Image Files | `show_cue_source` | Switch | Off | — | — |
| Stream Name In Title | `stream_name_in_title` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


- **Don't Ignore Articles For Sort:** “Don't ignore articles ("the", "a", "an") in the beginning of albums, artists, and composers”. By default “The Beatles” sorts under B.
- **Show CUE Disc Image Files:** see [Chapter 18 — Music Folders, Scanning and Tags](18%20Music%20Folders,%20Scanning%20and%20Tags.md).
- **Stream Name In Title:** see [Chapter 23 — Network Streams](23%20Network%20Streams.md).

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, defaults, options and quoted texts.
- **RESEARCH SUPPORTED:** the two resolved list titles (Header Buttons, Bottom Buttons).
- **RUNTIME VERIFICATION REQUIRED:** defaults of Header and Bottom Buttons and Stream Name In Title (none declared), the categories available in Library List Options, and Feature Pack gating of Hide Unknown Artist.

## Related

- [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md)
- [Chapter 18 — Music Folders, Scanning and Tags](18%20Music%20Folders,%20Scanning%20and%20Tags.md) · [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) · [Chapter 21 — Shuffle](21%20Shuffle.md)

---

← [Chapter 18 — Music Folders, Scanning and Tags](18%20Music%20Folders,%20Scanning%20and%20Tags.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) →
