---
title: "Playlists and the Queue"
chapter: 20
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "library_playlists"
  - "library_queue"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 20

# 20. Playlists and the Queue

Poweramp distinguishes **playlists**, which are saved lists you build and keep, from the **Queue**, a temporary play-next list that interrupts the current category and then hands back. This chapter covers both: playlist import/export and entry handling, and the Queue's start, end, insertion and clearing rules.

## Playlists

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Import System Library Playlists <sup>non-persistent</sup> | `playlists_import` | Action | — | — | — |
| Export Poweramp Playlists <sup>non-persistent</sup> | `playlists_export` | Action | — | — | — |
| Import Ratings | `pl_import_ratings` | Switch | On | — | — |
| Playlist Insert Position | `playlist_insert_pos` | List | Not declared | Insert at start = `1`; Add to end = `0`; Shuffled = `2` | — |
| Don't Add Duplicates | `pl_no_dups` | Switch | Off | — | — |
| Remove Playlist Entries On Track Deletion | `pl_del_entry_w_track` | Switch | On | — | — |
| Resolve Playlist Entries | `pl_auto_resolve` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Playlist Settings](../Appendices/Settings%20Reference/Playlist%20Settings.md).*


- **Import System Library Playlists** and **Export Poweramp Playlists** move playlists between Poweramp and the Android media library or files. The file formats and locations used are not declared. **RUNTIME VERIFICATION REQUIRED.**
- **Import Ratings:** “Update track ratings from imported playlists (when new playlist is imported) or from playlists opened in file managers”.

> [!CAUTION]
> **Import Ratings can overwrite current ratings.**
> Per its APK text, ratings can be updated from an imported playlist, or simply from a playlist file opened in a file manager. An old playlist can therefore replace newer ratings. If your current ratings matter, turn **Import Ratings** off before importing or opening old playlists, and keep a backup ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)). **RUNTIME VERIFICATION REQUIRED:** which playlist formats carry ratings.
- **Playlist Insert Position:** where tracks added to a playlist go: Insert at start (`1`), Add to end (`0`) or Shuffled (`2`). No default is declared.
- **Don't Add Duplicates:** “Duplicates won't be added to playlist”.
- **Remove Playlist Entries On Track Deletion:** “Playlist entries are automatically removed for the deleted tracks. If disabled, non-playable items stay in the playlist and can be resolved to matching tracks later”.
- **Resolve Playlist Entries:** “Automatically match unresolved playlist entries on Folders/Library auto scan. If disabled, non-playable items may appear in playlists after a storage change, folders renaming/moving, etc. Playlist entries always can be corrected manually by the Rescan menu action from Playlists category”.

**Playlist encodings.** `.m3u8` playlists are always read as UTF-8. Plain `.m3u` uses UTF-8 too while **Always Use UTF-8 for .m3u** is on (the default), and otherwise uses Tag Encoding ([Chapter 18 — Music Folders, Scanning and Tags](18%20Music%20Folders,%20Scanning%20and%20Tags.md)).

**Keeping playlists intact after storage changes.** Leave **Resolve Playlist Entries** on so entries are re-matched after a scan. If entries still show as unplayable after you move folders or change SD cards, use the **Rescan** action on the Playlists category, as the APK text suggests.

## The Queue

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Start Playing Queue | `queue_start` | List | After the current song (`2`) | Immediately = `1`; After the current song = `2`; After the current category/folder/album/... = `3` | — |
| On Queue End | `queue_end` | List | `1` → Return to previous category† | Stay in Queue / repeat Queue; Return to previous category (positional†) | — |
| Queue Insert Position | `queue_insert_pos` | List | Not declared | Normal = `0`; Shuffled = `2` | — |
| Play Next Insert Position | `play_next_insert_pos` | List | Not declared | Normal = `0`; Shuffled = `2` | — |
| Play Next: Start Queue | `q_next_forces_after_song` | Switch | On | — | — |
| Always Clear On Add | `queue_clear_on_add` | Switch | Off | — | — |
| Never Clear On Add | `queue_never_clear_on_add` | Switch | Off | — | — |
| Ignore Shuffle | `queue_no_shuffle` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Playback Queue](../Appendices/Settings%20Reference/Playback%20Queue.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**Start Playing Queue** decides when queued tracks take over:

- **Immediately** — stored value `1`
- **After the current song** — stored value `2`
- **After the current category/folder/album/...** — stored value `3`

The default is **After the current song**. **On Queue End:**

- **Stay in Queue / repeat Queue**
- **Return to previous category**

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

The declared default is `1`. If the values follow option position (first = `0`), `1` is **Return to previous category**: when the Queue is exhausted, playback goes back to where you were. That mapping is an unverified inference: **Start Playing Queue** on the same screen numbers its options from `1`, and under that scheme `1` would be **Stay in Queue / repeat Queue**. Check **On Queue End** on your device.

- **Queue Insert Position** and **Play Next Insert Position** each offer Normal or Shuffled. Neither declares a default.
- **Play Next: Start Queue** (on by default): “Play Next forces option: After the current Song”. In other words, *Play Next* always starts the Queue after the current song, whatever **Start Playing Queue** is set to.
- **Clearing:** by default the Queue is cleared only once all its songs have been played. **Always Clear On Add** clears it on every addition. **Never Clear On Add** never clears it on addition, although “Search results playback still clears Queue” ([Chapter 22 — Search](22%20Search.md)). Enable at most one of the two.
- **Ignore Shuffle:** “Queue is always played in-order. Also affects Search results Shuffle”.

## Typical setups

| Habit | Settings |
|---|---|
| “Play these next, then carry on with my album” | Start: After the current song · End: Return to previous category (check the actual default on your device; see above) |
| DJ-style rolling queue | Never Clear On Add · End: Stay in Queue / repeat Queue |
| Queue is always played in order, even while the library shuffles | Ignore Shuffle |
| Each new selection replaces the old Queue | Always Clear On Add |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, defaults, options and quoted texts.
- **RUNTIME VERIFICATION REQUIRED:** import/export formats and paths, the defaults of the insert positions, and what happens if both clear options are enabled.

## Related

- [Playlist Settings](../Appendices/Settings%20Reference/Playlist%20Settings.md) · [Playback Queue](../Appendices/Settings%20Reference/Playback%20Queue.md)
- [Chapter 21 — Shuffle](21%20Shuffle.md) · [Chapter 22 — Search](22%20Search.md)

---

← [Chapter 19 — Browsing the Library](19%20Browsing%20the%20Library.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 21 — Shuffle](21%20Shuffle.md) →
