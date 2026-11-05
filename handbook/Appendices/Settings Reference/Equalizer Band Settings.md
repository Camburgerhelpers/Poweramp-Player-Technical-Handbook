---
title: "Equalizer Band Settings"
screen_id: "peq_equ_bands"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 7
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Equalizer Band Settings

Graphic equalizer band count and custom band layout.

| Property | Value |
|---|---|
| Screen ID | `peq_equ_bands` |
| In-app location | Entry point not declared in the settings XML (see notes) |
| Reached from | [Equalizer Settings](Equalizer%20Settings.md) → “Graphic Equalizer Bands” (`peq_equ_bands`) |
| Declared entries | 7 — action or navigation 1, adjustable 4, informational or dynamic 1, toggle 1 |
| Resource files | `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml` |
| Explained in | [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Number of Bands | `equ_bands_num` | List | 10 (ISO) (`10`) | 5 = `5`; 10 (ISO) = `10`; 12 = `12`; 15 (ISO) = `15`; 16 = `16`; 24 = `24`; 31 (ISO) = `31`; 32 = `32` | — |
| 2 | (untitled `_number_of_bands_msg`) | `_number_of_bands_msg` | Information | — | — | — |
| 7 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Advanced**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 3 | Enable Custom Bands | `equ_custom_bands` | Switch | Not declared | — | — |
| 4 | Custom Number of Bands | `equ_custom_bands_num` | Slider | `10` | 5 to 32, step not declared (labels “5” … “32”) | Enable Custom Bands (`equ_custom_bands`) |
| 5 | First Frequency | `equ_custom_bands_first_fr` | Slider | 20 Hz (`20`) | 5 Hz to 200 Hz, step not declared (labels “5” … “200”) | Enable Custom Bands (`equ_custom_bands`) |
| 6 | Last Frequency | `equ_custom_bands_last_fr` | Slider | 16.0 kHz (`16000`) | 14.0 kHz to 20.0 kHz, step 0.5 kHz (labels “14K” … “20K”) | Enable Custom Bands (`equ_custom_bands`) |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Number of Bands

- **Key:** `equ_bands_num`
- **Control:** List (`TagListPreference`)
- **Declared default:** 10 (ISO) (`10`)
- **Options:**
  - 5 — `5`
  - 10 (ISO) — `10`
  - 12 — `12`
  - 15 (ISO) — `15`
  - 16 — `16`
  - 24 — `24`
  - 31 (ISO) — `31`
  - 32 — `32`
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 2. (untitled _number_of_bands_msg)

- **Key:** `_number_of_bands_msg`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`

### 3. Enable Custom Bands

- **Key:** `equ_custom_bands`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Advanced
- **Declared default:** Not declared
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Custom Number of Bands

- **Key:** `equ_custom_bands_num`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Advanced
- **Declared default:** `10`
- **Range:** 5 to 32, step not declared (labels “5” … “32”)
- **Depends on:** Enable Custom Bands (`equ_custom_bands`)
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 5. First Frequency

- **Key:** `equ_custom_bands_first_fr`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Advanced
- **Declared default:** 20 Hz (`20`)
- **Range:** 5 Hz to 200 Hz, step not declared (labels “5” … “200”)
- **Depends on:** Enable Custom Bands (`equ_custom_bands`)
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 6. Last Frequency

- **Key:** `equ_custom_bands_last_fr`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Advanced
- **Declared default:** 16.0 kHz (`16000`)
- **Range:** 14.0 kHz to 20.0 kHz, step 0.5 kHz (labels “14K” … “20K”)
- **Depends on:** Enable Custom Bands (`equ_custom_bands`)
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 7. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/peq_equ_bands.xml`, `xml/peq_equ_bands.xml`

## Screen-level evidence notes

- Center-frequency tables for the predefined band counts are not declared in the XML.

---

← [Miscellaneous Settings](Miscellaneous%20Settings.md) · [Settings Reference Index](Index.md) · [Bass and Treble Tone Settings](Bass%20and%20Treble%20Tone%20Settings.md) →
