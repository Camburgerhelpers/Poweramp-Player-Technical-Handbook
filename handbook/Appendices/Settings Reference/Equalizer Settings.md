---
title: "Equalizer Settings"
screen_id: "audio_equ"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 12
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Equalizer Settings

Equalizer configuration: band layout, tone parameters, value display, auto-save, gain smoothing, AutoEq suggestions and import, preset export to the separate Poweramp Equalizer app, and preset restoration.

| Property | Value |
|---|---|
| Screen ID | `audio_equ` |
| In-app location | Entry point not declared in the settings XML (see notes) |
| Links to | [Equalizer Band Settings](Equalizer%20Band%20Settings.md) (`peq_equ_bands`); [Bass and Treble Tone Settings](Bass%20and%20Treble%20Tone%20Settings.md) (`peq_equ_tone`) |
| Declared entries | 12 — action or navigation 1, adjustable 2, informational or dynamic 4, other 2, toggle 3 |
| Resource files | `xml-v22/audio_equ.xml`, `xml/audio_equ.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 03 — Volume Control and DVC](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Graphic Equalizer Bands | `peq_equ_bands` | Link | — | — | — |
| 2 | Tone <sup>non-persistent</sup> | `peq_equ_tone` | Link | — | — | — |
| 3 | Equalizer Values | `eq_labels` | List | `1` → dB† | Hidden; dB; % (positional†) | — |
| 4 | Tone Values | `tone_labels` | List | `2` → %† | Hidden; dB; % (positional†) | — |
| 5 | Auto Save <sup>non-persistent</sup> | `_autosave` | Switch | Not declared | — | — |
| 6 | Smooth Equalizer/Tone Gains | `dsp_border_gain` | Switch | On | — | — |
| 7 | Suggest AutoEq Presets | `suggest_autoeq` | Switch | Not declared | — | — |
| 8 | Reset the Disabled AutoEq Suggestions | `_clear_autoeq_known_devices` | Information | — | — | Suggest AutoEq Presets (`suggest_autoeq`) |
| 9 | Export Presets to the Poweramp Equalizer app | `_presets_to_peq` | Information | — | — | — |
| 10 | Import AutoEq Presets | `_import_autoeq` | Information | — | — | — |
| 11 | Restore Equalizer Presets | `reset_eq_presets` | Information | — | — | — |
| 12 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Graphic Equalizer Bands

- **Key:** `peq_equ_bands`
- **Control:** Link (`RedirectPreference`)
- **Opens:** [Equalizer Band Settings](Equalizer%20Band%20Settings.md) (`peq_equ_bands`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`

### 2. Tone

- **Key:** `peq_equ_tone`
- **Control:** Link (`RedirectPreference`)
- **Opens:** [Bass and Treble Tone Settings](Bass%20and%20Treble%20Tone%20Settings.md) (`peq_equ_tone`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Equalizer Values

- **Key:** `eq_labels`
- **Control:** List (`TagListPreference`)
- **Declared default:** `1` → dB†
- **Options:**
  - Hidden
  - dB
  - %
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 4. Tone Values

- **Key:** `tone_labels`
- **Control:** List (`TagListPreference`)
- **Declared default:** `2` → %†
- **Options:**
  - Hidden
  - dB
  - %
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 5. Auto Save

- **Key:** `_autosave`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 6. Smooth Equalizer/Tone Gains

- **Key:** `dsp_border_gain`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 7. Suggest AutoEq Presets

- **Key:** `suggest_autoeq`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 8. Reset the Disabled AutoEq Suggestions

- **Key:** `_clear_autoeq_known_devices`
- **Control:** Information (`RawTextPreference`)
- **Depends on:** Suggest AutoEq Presets (`suggest_autoeq`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 9. Export Presets to the Poweramp Equalizer app

- **Key:** `_presets_to_peq`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 10. Import AutoEq Presets

- **Key:** `_import_autoeq`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 11. Restore Equalizer Presets

- **Key:** `reset_eq_presets`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 12. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_equ.xml`, `xml/audio_equ.xml`

## Screen-level evidence notes

- No redirect in the 42 inventoried screens opens this screen; its entry point (presumably from the Equalizer UI) is not declared in the settings XML.
- `_number_of_bands_msg` (on the bands screen) links to a Block Size setting at `settings/peq_equ#peq_blocksize`, which is not among the inventoried screens.
- Several keys start with an underscore and are declared non-persistent; they act on presets rather than storing simple preferences.

---

← [Direct Volume Control](Direct%20Volume%20Control.md) · [Settings Reference Index](Index.md) · [Audio Focus](Audio%20Focus.md) →
