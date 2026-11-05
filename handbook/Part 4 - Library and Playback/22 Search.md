---
title: "Search"
chapter: 22
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "library_queue"
  - "library_search"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 22

# 22. Search

Library search finds tracks, albums, artists and other categories. The search settings (screen `library_search`, reached from **Settings › Library › Search**) decide which categories are searched, which fields are matched, and what is played when you start playback from the results.

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Search Categories | `list_opts` | Action | — | — | — |
| Search Track Titles Only | `search_track_titles_only` | Switch | Not declared | — | — |
| Play Tracks Only | `search_play_tracks` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Search Settings](../Appendices/Settings%20Reference/Search%20Settings.md).*


- **Search Categories** opens a selector for the categories included in search. Its options are not declared in the XML.
- **Search Track Titles Only:** “If disabled, track album and artist are also used for the search”.
- **Play Tracks Only:** when track results exist, Play Tracks Only ignores category results; otherwise matching categories are played.

An information row (`msg`) at the top of the screen has runtime text.

## How search results interact with the Queue

Starting playback from search results involves the Queue:

- **Never Clear On Add** keeps the Queue on additions, but the APK adds “Search results playback still clears Queue” ([Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md)).
- **Ignore Shuffle** also “affects Search results Shuffle”.

## What plays when you start from the results

The two playback options and the Queue rules combine as follows (APK texts; exact result ordering is **RUNTIME VERIFICATION REQUIRED**):

| Search result contains | Play Tracks Only | What plays |
|---|---|---|
| Tracks and categories (albums, artists …) | on | only the found tracks; other found categories are ignored |
| Tracks and categories | off | the found tracks and the found categories (inferred; **RUNTIME VERIFICATION REQUIRED**) |
| Categories only (no tracks) | on or off | the found categories (“If there are no tracks, found categories will be played”) |

In every case, starting playback from search results clears the Queue, even with **Never Clear On Add** enabled. If **Ignore Shuffle** (Queue) is on, shuffle of search results is also affected ([Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md), [Chapter 21 — Shuffle](21%20Shuffle.md)).

## Tips

- If searches return too much, turn on **Search Track Titles Only**. Tracks then match by title only, instead of also by their album and artist. Album and artist *categories* may still match (see **Search Categories**).
- To find a specific song by title among many similarly named albums, combine **Search Track Titles Only** with **Play Tracks Only**.
- If you rely on the Queue, remember that playing from search results clears it. Prefer an enqueue action, such as the List Item Action “Enqueue and stay in the list” ([Chapter 19 — Browsing the Library](19%20Browsing%20the%20Library.md)). **RUNTIME VERIFICATION REQUIRED:** whether that option applies to search result lists.

## Settings search is a different feature

The Settings screens appear to have their own search (**RESEARCH SUPPORTED**, inferred from search-related attributes; see [Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)). The options in this chapter apply only to library search.

## Evidence and limitations

- **APK VERIFIED:** keys and quoted texts.
- **RUNTIME VERIFICATION REQUIRED:** the available search categories, the default states (none declared), and matching rules (prefix, substring, diacritics).

## Related

- [Search Settings](../Appendices/Settings%20Reference/Search%20Settings.md)
- [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) · [Chapter 21 — Shuffle](21%20Shuffle.md)

---

← [Chapter 21 — Shuffle](21%20Shuffle.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 23 — Network Streams](23%20Network%20Streams.md) →
