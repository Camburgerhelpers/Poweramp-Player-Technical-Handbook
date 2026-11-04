---
title: "Bit-Perfect and Precision Settings"
screen_id: "audio_bit_perfect"
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

# Bit-Perfect and Precision Settings

Global switches for the 64-bit pipeline, Follow Track Sample Rate, DSD Remastering, and Perfect Bit Perfect. Each switch has a per-output counterpart on the output options screen.

| Property | Value |
|---|---|
| Screen ID | `audio_bit_perfect` |
| In-app location | Settings › Audio › Bit Perfect |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Bit Perfect” (`audio_bit_perfect`) |
| Declared entries | 9 — action or navigation 1, informational or dynamic 4, toggle 4 |
| Resource files | `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml` |
| Explained in | [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 07 — Sample Rates and Resampling](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 09 — 64-bit Floating-Point Processing](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md), [Chapter 10 — DSD Playback and Remastering](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 11 — Bit-Perfect Output](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | 64-bit Audio Pipeline | `global_pipeline64` | Switch | Not declared | — | — |
| 2 | (untitled `pipeline64_opts`) | `pipeline64_opts` | Information | — | — | — |
| 3 | Follow Track Sample Rate | `global_follow_sr` | Switch | Not declared | — | — |
| 4 | (untitled `follow_sr_opts`) | `follow_sr_opts` | Information | — | — | — |
| 5 | DSD Remastering | `global_dsd_remaster` | Switch | Not declared | — | — |
| 6 | (untitled `dsd_remaster_opts`) | `dsd_remaster_opts` | Information | — | — | — |
| 7 | Perfect Bit Perfect | `global_perfect_bit_perfect` | Switch | Not declared | — | — |
| 8 | (untitled `perfect_bit_perfect_opts`) | `perfect_bit_perfect_opts` | Information | — | — | — |
| 9 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. 64-bit Audio Pipeline

- **Key:** `global_pipeline64`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Enables Float 64-bit audio pipeline from decoder to the output”
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 09](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. (untitled pipeline64_opts)

- **Key:** `pipeline64_opts`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 09](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 3. Follow Track Sample Rate

- **Key:** `global_follow_sr`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Enables track sample rate matching for the compatible outputs”
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. (untitled follow_sr_opts)

- **Key:** `follow_sr_opts`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 5. DSD Remastering

- **Key:** `global_dsd_remaster`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Remasters PCM to DSD”
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. (untitled dsd_remaster_opts)

- **Key:** `dsd_remaster_opts`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 7. Perfect Bit Perfect

- **Key:** `global_perfect_bit_perfect`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Direct decoder-to-output path. Enables DSD output for DSD tracks. No Equalizer, no DSP, no software volume control”
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 11](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 8. (untitled perfect_bit_perfect_opts)

- **Key:** `perfect_bit_perfect_opts`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`
- **Discussed in:** [Chapter 11](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 9. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_bit_perfect.xml`, `xml/audio_bit_perfect.xml`

## Screen-level evidence notes

- None of the four global switches declares a default.
- The four `*_opts` entries are runtime-filled information rows with no static text.
- Each global switch has a per-output three-state counterpart (Auto/Enable/Disable) on the output options screen. That “Auto” defers to the global switch is an inference that requires runtime confirmation.

---

← [Audio Settings](Audio%20Settings.md) · [Settings Reference Index](Index.md) · [Direct Volume Control](Direct%20Volume%20Control.md) →
