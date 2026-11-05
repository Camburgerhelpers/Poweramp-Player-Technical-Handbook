---
title: "Shuffle"
chapter: 21
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "fade"
  - "headset"
  - "library_lists"
  - "library_queue"
  - "library_shuffle"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 21

# 21. Shuffle

Shuffle in Poweramp is more than a random order. You can tune how random it is, whether a manual pick reshuffles the list, how categories (albums, artists) are shuffled as units, and whether a folder hierarchy is flattened first. The settings are on **Settings › Library › Shuffle** (screen `library_shuffle`). Related options elsewhere control the Queue, crossfades and Bluetooth commands.

## The settings

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Shuffle Randomization | `shuffle_random_factor` | Slider | Not declared | 0 to 12, step 2 (labels “Less Random” … “Full Random”) | — |
| No Reshuffle | `no_reshuffle` | Switch | Not declared | — | — |
| No Reshuffle For Large Lists | `no_reshuffle_for_large_lists` | Switch | Not declared | — | — |
| Category Items Shuffle | `category_shuffle` | List | Not declared | Shuffle Songs/Categories = `4`; Shuffle Categories = `3`; Shuffle Songs = `2` | — |
| Shuffle All Songs In Folder Hierarchy | `hier_flat_shf` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Shuffle Settings](../Appendices/Settings%20Reference/Shuffle%20Settings.md).*


### Shuffle Randomization

A slider from “Less Random” to “Full Random”, stored as 0–12 in steps of 2 (seven positions), with no declared default. **RUNTIME VERIFICATION REQUIRED:** what “less random” does. **GENERAL PRINCIPLE:** players commonly reduce randomness by spreading out tracks from the same artist or album, so that true randomness doesn't produce clusters that feel non-random.

### Reshuffling

- **No Reshuffle:** “Don't apply a new shuffle when any track is selected from the current playing list”.
- **No Reshuffle For Large Lists:** “Don't reset shuffle order when a new track is manually selected from a very large list”.

### Category shuffle

**Category Items Shuffle** sets what the list-header Shuffle button does in categories such as Artists or Genres:

- **Shuffle Songs/Categories** — stored value `4`: List header Shuffle button shuffles sub-categories and songs within those categories
- **Shuffle Categories** — stored value `3`: List header Shuffle button shuffles sub-categories only, songs are in order
- **Shuffle Songs** — stored value `2`: List header Shuffle button shuffles All (category) Songs instead of sub-Albums. Applied to Artists, Album Artists, Genres, Years, Composers

Its note: “Not applied in Folders Hierarchy”.

### Folder hierarchy

**Shuffle All Songs In Folder Hierarchy** (on by default): the mode shuffles throughout a folder hierarchy and can be activated by its header Shuffle button.

## Related behaviour elsewhere

| Setting | Screen | Effect on shuffle |
|---|---|---|
| **Ignore Shuffle** | Queue | the Queue always plays in order; also affects shuffle of search results ([Chapter 20](20%20Playlists%20and%20the%20Queue.md), [Chapter 22](22%20Search.md)) |
| **Auto-advance Fading** = Shuffled songs | Fade | crossfade only while shuffling ([Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)) |
| **Ignore Repeat/Shuffle** | Headset/Bluetooth | ignores shuffle and repeat commands from Bluetooth devices ([Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)) |
| Notification and Android Auto buttons | Buttons | a Shuffle action can be assigned to a media button ([Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)) |
| **Click Restarts Track** | Lists | when this option is disabled, a list tap continues the same track “but still change[s] category and re-shuffle[s] if needed” ([Chapter 19](19%20Browsing%20the%20Library.md)) |

## Evidence and limitations

- **APK VERIFIED:** keys, options, stored values, summaries and the hierarchy default.
- **RUNTIME VERIFICATION REQUIRED:** the randomization algorithm and its default, and the defaults of the reshuffle options and category mode.

## Related

- [Shuffle Settings](../Appendices/Settings%20Reference/Shuffle%20Settings.md)
- [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) · [Chapter 22 — Search](22%20Search.md)

---

← [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 22 — Search](22%20Search.md) →
