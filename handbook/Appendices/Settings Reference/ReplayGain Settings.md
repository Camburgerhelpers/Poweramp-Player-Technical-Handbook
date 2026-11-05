---
title: "ReplayGain Settings"
screen_id: "rg"
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

# ReplayGain Settings

ReplayGain mode, source (album or track), preamp, and the preamp for files without ReplayGain information.

| Property | Value |
|---|---|
| Screen ID | `rg` |
| In-app location | Settings › Audio › Replay Gain (RG) |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Replay Gain (RG)” (`rg`) |
| Declared entries | 5 — action or navigation 1, adjustable 4 |
| Resource files | `xml-v22/rg.xml`, `xml/rg.xml` |
| Explained in | [Chapter 05 — ReplayGain and Loudness Normalization](../../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Replay Gain | `rg_type` | List | `0` → Don't apply† | Don't apply; Apply Gain; Apply Gain/prevent clipping according to Peak (positional†) | — |
| 2 | Source | `rg_source` | List | `0` → Album† | Album; Track (positional†) | — |
| 3 | RG preamp | `rg_preamp_mb` | Knob | 0.0 dB (`0`) | −16.0 dB to 16.0 dB, step 0.1 dB | — |
| 4 | Preamp for songs without RG info | `rg_default_mb` | Knob | 0.0 dB (`0`) | −16.0 dB to 16.0 dB, step 0.1 dB | — |
| 5 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Replay Gain

- **Key:** `rg_type`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → Don't apply†
- **Options:**
  - Don't apply
  - Apply Gain
  - Apply Gain/prevent clipping according to Peak
- **Source:** `xml-v22/rg.xml`, `xml/rg.xml`
- **Discussed in:** [Chapter 05](../../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 2. Source

- **Key:** `rg_source`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → Album†
- **Options:**
  - Album
  - Track
- **Source:** `xml-v22/rg.xml`, `xml/rg.xml`
- **Discussed in:** [Chapter 05](../../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 3. RG preamp

- **Key:** `rg_preamp_mb`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** 0.0 dB (`0`)
- **Range:** −16.0 dB to 16.0 dB, step 0.1 dB
- **Source:** `xml-v22/rg.xml`, `xml/rg.xml`
- **Discussed in:** [Chapter 05](../../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)

### 4. Preamp for songs without RG info

- **Key:** `rg_default_mb`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** 0.0 dB (`0`)
- **Range:** −16.0 dB to 16.0 dB, step 0.1 dB
- **Source:** `xml-v22/rg.xml`, `xml/rg.xml`
- **Discussed in:** [Chapter 05](../../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)

### 5. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/rg.xml`, `xml/rg.xml`

## Screen-level evidence notes

- Mode and source lists declare labels but no stored values; the declared default `0` is mapped positionally (Don’t apply; Album).

---

← [Bass and Treble Tone Settings](Bass%20and%20Treble%20Tone%20Settings.md) · [Settings Reference Index](Index.md) · [Main Settings Menu](Main%20Settings%20Menu.md) →
