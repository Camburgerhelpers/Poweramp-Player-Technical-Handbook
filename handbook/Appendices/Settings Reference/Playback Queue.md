---
title: "Playback Queue"
screen_id: "library_queue"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 9
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Playback Queue

When the Queue starts and ends, insert positions, clearing behaviour, and shuffle handling.

| Property | Value |
|---|---|
| Screen ID | `library_queue` |
| In-app location | Settings › Library › Queue |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Queue” (`library_queue`) |
| Declared entries | 9 — action or navigation 1, adjustable 4, toggle 4 |
| Resource files | `xml-v22/library_queue.xml`, `xml/library_queue.xml` |
| Explained in | [Chapter 20 — Playlists and the Queue](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 21 — Shuffle](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md), [Chapter 22 — Search](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Start Playing Queue | `queue_start` | List | After the current song (`2`) | Immediately = `1`; After the current song = `2`; After the current category/folder/album/... = `3` | — |
| 2 | On Queue End | `queue_end` | List | `1` → Return to previous category† | Stay in Queue / repeat Queue; Return to previous category (positional†) | — |
| 3 | Queue Insert Position | `queue_insert_pos` | List | Not declared | Normal = `0`; Shuffled = `2` | — |
| 4 | Play Next Insert Position | `play_next_insert_pos` | List | Not declared | Normal = `0`; Shuffled = `2` | — |
| 5 | Play Next: Start Queue | `q_next_forces_after_song` | Switch | On | — | — |
| 6 | Always Clear On Add | `queue_clear_on_add` | Switch | Off | — | — |
| 7 | Never Clear On Add | `queue_never_clear_on_add` | Switch | Off | — | — |
| 8 | Ignore Shuffle | `queue_no_shuffle` | Switch | Off | — | — |
| 9 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Start Playing Queue

- **Key:** `queue_start`
- **Control:** List (`TagListPreference`)
- **Declared default:** After the current song (`2`)
- **Options:**
  - Immediately — `1`
  - After the current song — `2`
  - After the current category/folder/album/... — `3`
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)

### 2. On Queue End

- **Key:** `queue_end`
- **Control:** List (`TagListPreference`)
- **Declared default:** `1` → Return to previous category†
- **Options:**
  - Stay in Queue / repeat Queue
  - Return to previous category
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 3. Queue Insert Position

- **Key:** `queue_insert_pos`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Normal — `0`
  - Shuffled — `2`
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Play Next Insert Position

- **Key:** `play_next_insert_pos`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Normal — `0`
  - Shuffled — `2`
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Play Next: Start Queue

- **Key:** `q_next_forces_after_song`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)

### 6. Always Clear On Add

- **Key:** `queue_clear_on_add`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)

### 7. Never Clear On Add

- **Key:** `queue_never_clear_on_add`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)

### 8. Ignore Shuffle

- **Key:** `queue_no_shuffle`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`
- **Discussed in:** [Chapter 20](../../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md), [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md), [Chapter 22](../../Part%204%20-%20Library%20and%20Playback/22%20Search.md)

### 9. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_queue.xml`, `xml/library_queue.xml`

## Screen-level evidence notes

- `queue_insert_pos` and `play_next_insert_pos` declare values but no default.

---

← [Playlist Settings](Playlist%20Settings.md) · [Settings Reference Index](Index.md) · [Music Scanner](Music%20Scanner.md) →
