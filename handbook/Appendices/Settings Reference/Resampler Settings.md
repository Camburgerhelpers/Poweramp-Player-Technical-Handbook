---
title: "Resampler Settings"
screen_id: "audio_resampler"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 4
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Resampler Settings

Resampler engine, resampler cutoff ratio, and dither type.

| Property | Value |
|---|---|
| Screen ID | `audio_resampler` |
| In-app location | Settings › Audio › Resampler |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Resampler” (`audio_resampler`) |
| Declared entries | 4 — action or navigation 1, adjustable 3 |
| Resource files | `xml-v22/audio_resampler.xml`, `xml/audio_resampler.xml` |
| Explained in | [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 07 — Sample Rates and Resampling](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 08 — Bit Depth, Sample Format and Dither](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Resampler Type | `resampler_type` | List | `0` → SW - high quality† | SW - high quality; SoX - very high quality (positional†) | — |
| 2 | Resampler Cutoff Frequency Ratio | `resampler_cutoff` | Knob | 97.0% (`970`) | 80.0% to 99.0%, step not declared | — |
| 3 | Dither | `dither` | List | `0` → None (fastest)† | None (fastest); Rectangular (fast); Triangular (fast); Triangular with high pass (fast); F-weighted noise shaping (slow); Modified-e-weighted noise shaping (slow); Improved-e-weighted noise shaping (slow); Shibata noise shaping (slow); Low shibata noise shaping (slow) (positional†) | — |
| 4 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Resampler Type

- **Key:** `resampler_type`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → SW - high quality†
- **Options:**
  - SW - high quality
  - SoX - very high quality
- **Source:** `xml-v22/audio_resampler.xml`, `xml/audio_resampler.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 2. Resampler Cutoff Frequency Ratio

- **Key:** `resampler_cutoff`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** 97.0% (`970`)
- **Range:** 80.0% to 99.0%, step not declared
- **Source:** `xml-v22/audio_resampler.xml`, `xml/audio_resampler.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)

### 3. Dither

- **Key:** `dither`
- **Control:** List (`NumberListPreference`)
- **Declared default:** `0` → None (fastest)†
- **APK text:** “Output driver can override this setting”
- **Options:**
  - None (fastest)
  - Rectangular (fast)
  - Triangular (fast)
  - Triangular with high pass (fast)
  - F-weighted noise shaping (slow)
  - Modified-e-weighted noise shaping (slow)
  - Improved-e-weighted noise shaping (slow)
  - Shibata noise shaping (slow)
  - Low shibata noise shaping (slow)
- **Source:** `xml-v22/audio_resampler.xml`, `xml/audio_resampler.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 08](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 4. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_resampler.xml`, `xml/audio_resampler.xml`

## Screen-level evidence notes

- The resampler names (“SW - high quality”, “SoX - very high quality”) come from resolved string resources. The underlying algorithms and filter parameters are not declared.
- `dither` notes that the output driver can override this setting.

---

← [Audio Output Advanced Tweaks](Audio%20Output%20Advanced%20Tweaks.md) · [Settings Reference Index](Index.md) · [Audio Advanced Tweaks](Audio%20Advanced%20Tweaks.md) →
