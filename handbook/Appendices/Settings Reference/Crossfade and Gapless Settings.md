---
title: "Crossfade and Gapless Settings"
screen_id: "fade"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 11
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Crossfade and Gapless Settings

Crossfade, manual-change fading, play/pause/stop and seek fades, gapless preloading, and inserted silence between tracks.

| Property | Value |
|---|---|
| Screen ID | `fade` |
| In-app location | Settings › Audio › Crossfade, Fade, and Gapless |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Crossfade, Fade, and Gapless” (`fade`) |
| Declared entries | 11 — action or navigation 1, adjustable 8, toggle 2 |
| Resource files | `xml-v22/fade.xml`, `xml/fade.xml` |
| Explained in | [Chapter 06 — Track Transitions and Gapless Playback](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 21 — Shuffle](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Auto-advance Fading | `crossfade_auto_advance` | List | `0` → No fading† | No fading; Non-gapless/cue; All songs; Shuffled songs (positional†) | — |
| 2 | Manual Track Change Fading | `fade_manual_advance` | List | `1` → Short crossfade† | No fading; Short crossfade; Crossfade (positional†) | — |
| 3 | Fade Play/Pause/Stop | `fade_play_pause` | Switch | On | — | — |
| 4 | Fade on Seek | `fade_seek` | Switch | On | — | — |
| 5 | Preload Gapless Tracks | `gapless_preload_ms` | Slider | 0 ms (`0`) | 0 ms to 5000 ms, step 100 ms (labels “None” … “Normal” … “More”) | — |
| 6 | Silence Between Tracks | `track_end_silence_ms` | Slider | 0 ms (`0`) | 0 ms to 5000 ms, step 100 ms | — |
| 7 | Crossfade Length | `crossfade_length_ms` | Slider | 5000 ms (`5000`) | 100 ms to 15000 ms, step 50 ms | — |
| 8 | Short Manual Crossfade Length | `fade_short_xfade_ms` | Slider | 400 ms (`400`) | 10 ms to 1000 ms, step 10 ms | — |
| 9 | Play/Pause/Stop Fade Length | `fade_short_ms` | Slider | 400 ms (`400`) | 10 ms to 1000 ms, step not declared | — |
| 10 | Seek Fade Length | `fade_seek_ms` | Slider | 100 ms (`100`) | 10 ms to 500 ms, step not declared | — |
| 11 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Auto-advance Fading

- **Key:** `crossfade_auto_advance`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → No fading†
- **Options:**
  - No fading
  - Non-gapless/cue
  - All songs
  - Shuffled songs
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 2. Manual Track Change Fading

- **Key:** `fade_manual_advance`
- **Control:** List (`TagListPreference`)
- **Declared default:** `1` → Short crossfade†
- **Options:**
  - No fading
  - Short crossfade
  - Crossfade
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 3. Fade Play/Pause/Stop

- **Key:** `fade_play_pause`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 4. Fade on Seek

- **Key:** `fade_seek`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 5. Preload Gapless Tracks

- **Key:** `gapless_preload_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 0 ms (`0`)
- **Range:** 0 ms to 5000 ms, step 100 ms (labels “None” … “Normal” … “More”)
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 6. Silence Between Tracks

- **Key:** `track_end_silence_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 0 ms (`0`)
- **Range:** 0 ms to 5000 ms, step 100 ms
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 7. Crossfade Length

- **Key:** `crossfade_length_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 5000 ms (`5000`)
- **Range:** 100 ms to 15000 ms, step 50 ms
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 8. Short Manual Crossfade Length

- **Key:** `fade_short_xfade_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 400 ms (`400`)
- **Range:** 10 ms to 1000 ms, step 10 ms
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 9. Play/Pause/Stop Fade Length

- **Key:** `fade_short_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 400 ms (`400`)
- **Range:** 10 ms to 1000 ms, step not declared
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 10. Seek Fade Length

- **Key:** `fade_seek_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 100 ms (`100`)
- **Range:** 10 ms to 500 ms, step not declared
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)

### 11. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/fade.xml`, `xml/fade.xml`

## Screen-level evidence notes

- `fade_short_ms` and `fade_seek_ms` declare no step attribute.
- `fade_manual_advance` notes that the output driver can override it.

---

← [Purchase Methods](Purchase%20Methods.md) · [Settings Reference Index](Index.md) · [Feature Packages](Feature%20Packages.md) →
