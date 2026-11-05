---
title: "Shuffle Settings"
screen_id: "library_shuffle"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 6
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Shuffle Settings

Shuffle randomization, reshuffle behaviour, category shuffle mode, and folder-hierarchy shuffle.

| Property | Value |
|---|---|
| Screen ID | `library_shuffle` |
| In-app location | Settings › Library › Shuffle |
| Reached from | [Music Library Settings](Music%20Library%20Settings.md) → “Shuffle” (`library_shuffle`) |
| Declared entries | 6 — action or navigation 1, adjustable 2, toggle 3 |
| Resource files | `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml` |
| Explained in | [Chapter 21 — Shuffle](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Shuffle Randomization | `shuffle_random_factor` | Slider | Not declared | 0 to 12, step 2 (labels “Less Random” … “Full Random”) | — |
| 2 | No Reshuffle | `no_reshuffle` | Switch | Not declared | — | — |
| 3 | No Reshuffle For Large Lists | `no_reshuffle_for_large_lists` | Switch | Not declared | — | — |
| 4 | Category Items Shuffle | `category_shuffle` | List | Not declared | Shuffle Songs/Categories = `4`; Shuffle Categories = `3`; Shuffle Songs = `2` | — |
| 5 | Shuffle All Songs In Folder Hierarchy | `hier_flat_shf` | Switch | On | — | — |
| 6 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Shuffle Randomization

- **Key:** `shuffle_random_factor`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** Not declared
- **Range:** 0 to 12, step 2 (labels “Less Random” … “Full Random”)
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`
- **Discussed in:** [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. No Reshuffle

- **Key:** `no_reshuffle`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`
- **Discussed in:** [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. No Reshuffle For Large Lists

- **Key:** `no_reshuffle_for_large_lists`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`
- **Discussed in:** [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Category Items Shuffle

- **Key:** `category_shuffle`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Shuffle Songs/Categories — `4` — List header Shuffle button shuffles sub-categories and songs within those categories
  - Shuffle Categories — `3` — List header Shuffle button shuffles sub-categories only, songs are in order
  - Shuffle Songs — `2` — List header Shuffle button shuffles All (category) Songs instead of sub-Albums. Applied to Artists, Album Artists, Genres, Years, Composers
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`
- **Discussed in:** [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Shuffle All Songs In Folder Hierarchy

- **Key:** `hier_flat_shf`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`
- **Discussed in:** [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md)

### 6. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/library_shuffle.xml`, `xml/library_shuffle.xml`

## Screen-level evidence notes

- Only `hier_flat_shf` declares a default. The randomization slider stores 0–12 in steps of 2 (seven positions); its numeric meaning is not declared.

---

← [Search Settings](Search%20Settings.md) · [Settings Reference Index](Index.md) · [Lock Screen Settings](Lock%20Screen%20Settings.md) →
