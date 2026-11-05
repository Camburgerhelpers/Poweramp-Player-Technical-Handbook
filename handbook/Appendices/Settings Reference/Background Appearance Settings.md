---
title: "Background Appearance Settings"
screen_id: "aa_bg"
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

# Background Appearance Settings

Blurred album-art backgrounds and background gradients for the Player Screen, lists, and lyrics.

| Property | Value |
|---|---|
| Screen ID | `aa_bg` |
| In-app location | Settings › Background |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Background” (`aa_bg`) |
| Declared entries | 11 — action or navigation 1, adjustable 5, other 1, toggle 4 |
| Resource files | `xml-v22/aa_bg.xml`, `xml/aa_bg.xml` |
| Explained in | [Chapter 27 — Album Art and Backgrounds](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 28 — Lyrics](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Enable Blurred Backgrounds | `aa_blur_enabled` | Switch | Not declared | — | — |
| 2 | List Background | `list_aa_blur_enabled` | Switch | Not declared | — | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 3 | Lyrics Background | `lyrics_aa_blur_enabled` | Switch | Not declared | — | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 4 | Background Gradient | `aa_bg_gradient` | Slider | Not declared | 0 to 10, step not declared (labels “None” … “Max”) | — |
| 5 | Background Gradient Color | `aa_bg_gradient_color` | Color | Not declared | — | — |
| 6 | Background Gradient For Lists | `aa_bg_gradient_for_list` | Switch | Not declared | — | — |
| 7 | Background Blur | `aa_blur` | Slider | `5` | 0 to 15, step not declared (labels “Less” … “More”) | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 8 | Background Details | `aa_blur_scale` | Slider | `5` | 0 to 10, step not declared (labels “Solid Color” … “Detailed”) | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 9 | Background Intensity | `aa_blur_intensity` | Slider | 100% (`100`) | 0% to 250%, step not declared | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 10 | Background Saturation | `aa_blur_saturation` | Slider | 150% (`150`) | 0% to 300%, step 10% | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| 11 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Enable Blurred Backgrounds

- **Key:** `aa_blur_enabled`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. List Background

- **Key:** `list_aa_blur_enabled`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Lyrics Background

- **Key:** `lyrics_aa_blur_enabled`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md), [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Background Gradient

- **Key:** `aa_bg_gradient`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** Not declared
- **Range:** 0 to 10, step not declared (labels “None” … “Max”)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Background Gradient Color

- **Key:** `aa_bg_gradient_color`
- **Control:** Color (`ColorPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Background Gradient For Lists

- **Key:** `aa_bg_gradient_for_list`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Background Blur

- **Key:** `aa_blur`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** `5`
- **Range:** 0 to 15, step not declared (labels “Less” … “More”)
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 8. Background Details

- **Key:** `aa_blur_scale`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** `5`
- **Range:** 0 to 10, step not declared (labels “Solid Color” … “Detailed”)
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 9. Background Intensity

- **Key:** `aa_blur_intensity`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 100% (`100`)
- **Range:** 0% to 250%, step not declared
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 10. Background Saturation

- **Key:** `aa_blur_saturation`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 150% (`150`)
- **Range:** 0% to 300%, step 10%
- **Depends on:** Enable Blurred Backgrounds (`aa_blur_enabled`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`
- **Discussed in:** [Chapter 27](../../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)

### 11. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/aa_bg.xml`, `xml/aa_bg.xml`

## Screen-level evidence notes

- `aa_blur_enabled`, `list_aa_blur_enabled`, `lyrics_aa_blur_enabled`, `aa_bg_gradient`, `aa_bg_gradient_color` and `aa_bg_gradient_for_list` declare no default; their initial state must be observed on the device.

---

← [Album Art Settings](Album%20Art%20Settings.md) · [Settings Reference Index](Index.md) · [Purchase Restoration](Purchase%20Restoration.md) →
