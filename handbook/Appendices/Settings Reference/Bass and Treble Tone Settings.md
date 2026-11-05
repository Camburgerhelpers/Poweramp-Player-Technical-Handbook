---
title: "Bass and Treble Tone Settings"
screen_id: "peq_equ_tone"
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

# Bass and Treble Tone Settings

Bass and treble tone-filter frequency and Q parameters.

| Property | Value |
|---|---|
| Screen ID | `peq_equ_tone` |
| In-app location | Entry point not declared in the settings XML (see notes) |
| Reached from | [Equalizer Settings](Equalizer%20Settings.md) → “Tone” (`peq_equ_tone`) |
| Declared entries | 5 — action or navigation 1, adjustable 4 |
| Resource files | `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml` |
| Explained in | [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `_bassFreq`) <sup>non-persistent</sup> | `_bassFreq` | Knob | Not declared | Not declared | — |
| 2 | (untitled `_bassQ`) <sup>non-persistent</sup> | `_bassQ` | Knob | Not declared | Not declared | — |
| 3 | (untitled `_trebleFreq`) <sup>non-persistent</sup> | `_trebleFreq` | Knob | Not declared | Not declared | — |
| 4 | (untitled `_trebleQ`) <sup>non-persistent</sup> | `_trebleQ` | Knob | Not declared | Not declared | — |
| 5 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. (untitled _bassFreq)

- **Key:** `_bassFreq`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** Not declared
- **Range:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. (untitled _bassQ)

- **Key:** `_bassQ`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** Not declared
- **Range:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. (untitled _trebleFreq)

- **Key:** `_trebleFreq`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** Not declared
- **Range:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 4. (untitled _trebleQ)

- **Key:** `_trebleQ`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** Not declared
- **Range:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 5. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/peq_equ_tone.xml`, `xml/peq_equ_tone.xml`

## Screen-level evidence notes

- The four tone knobs declare no titles, ranges or defaults in the XML; numeric values must not be inferred from this evidence.

---

← [Equalizer Band Settings](Equalizer%20Band%20Settings.md) · [Settings Reference Index](Index.md) · [ReplayGain Settings](ReplayGain%20Settings.md) →
