---
title: "Look and Feel"
screen_id: "ui"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 16
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Look and Feel

Look and Feel: skin, day/night following, settings theme and font, language, launcher icon, orientation, animations, startup screen, status bar, screen-on behaviour, and settings shortcuts.

| Property | Value |
|---|---|
| Screen ID | `ui` |
| In-app location | Settings › Look and Feel |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Look and Feel” (`ui`) |
| Links to | [Theme Settings](Theme%20Settings.md) (`ui_theme`); [Player Screen](Player%20Screen.md) (`ui_player`); [Lyrics Settings](Lyrics%20Settings.md) (`ui_lyrics`); [Notification Settings](Notification%20Settings.md) (`ui_notify`); [Application Icon](Application%20Icon.md) (`ui_icon`) |
| Declared entries | 16 — action or navigation 1, adjustable 6, other 5, toggle 4 |
| Resource files | `xml-v22/ui.xml`, `xml/ui.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 25 — Look and Feel](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Skin | `ui_theme` | Link | — | — | — |
| 2 | Follow Day/Night Mode | `follow_night_mode` | Switch | Off | — | — |
| 3 | Settings Theme | `settings_theme` | List | `0` → Default† | Default; Light; Dark; Follow Day/Night Mode (positional†) | — |
| 4 | Settings Font | `settings_font` | List | `2` → Bold† | Default; Alternative font; Bold; Bold+ (positional†) | — |

**Category: General**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 5 | Player Screen | `ui_player` | Link | — | — | — |
| 6 | Lyrics | `ui_lyrics` | Link | — | — | — |
| 7 | Notifications | `ui_notify` | Link | — | — | — |

**Category: Misc**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 8 | Language | `lang` | List | Auto (``) | 31 options (see appendix) | — |
| 9 | Icon | `ui_icon` | Link | — | — | — |
| 10 | Screen Orientation | `orientation` | List | `0` → Default† | Default; Portrait (Vertical); Landscape (Horizontal) (positional†) | — |
| 11 | Animations <sup>Feature Pack</sup> | `anim_speed` | List | `false` (does not match any declared value) | Disabled = `0`; Fast = `2`; Default = `1` | — |
| 12 | Start at Library | `start_at_lib` | Switch | Off | — | — |
| 13 | Hide Status Bar | `hide_status_bar` | Switch | Off | — | — |
| 14 | Keep Screen On | `keep_screen_on` | Switch | Not declared | — | — |
| 15 | Settings Shortcuts in Main Menu | `num_settings_tags` | Slider | Not declared | 0 to 10, step not declared (minimum position labelled “Disabled”; labels “Disabled” … “Max”) | — |
| 16 | Restore Defaults | `restore_defaults` | Action | — | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Skin

- **Key:** `ui_theme`
- **Control:** Link (`RedirectPreference`)
- **Opens:** [Theme Settings](Theme%20Settings.md) (`ui_theme`)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 2. Follow Day/Night Mode

- **Key:** `follow_night_mode`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 3. Settings Theme

- **Key:** `settings_theme`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → Default†
- **Options:**
  - Default
  - Light
  - Dark
  - Follow Day/Night Mode
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 4. Settings Font

- **Key:** `settings_font`
- **Control:** List (`TagListPreference`)
- **Declared default:** `2` → Bold†
- **Options:**
  - Default
  - Alternative font
  - Bold
  - Bold+
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 5. Player Screen

- **Key:** `ui_player`
- **Control:** Link (`RedirectPreference`)
- **Category:** General
- **Opens:** [Player Screen](Player%20Screen.md) (`ui_player`)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`

### 6. Lyrics

- **Key:** `ui_lyrics`
- **Control:** Link (`RedirectPreference`)
- **Category:** General
- **Opens:** [Lyrics Settings](Lyrics%20Settings.md) (`ui_lyrics`)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`

### 7. Notifications

- **Key:** `ui_notify`
- **Control:** Link (`RedirectPreference`)
- **Category:** General
- **Opens:** [Notification Settings](Notification%20Settings.md) (`ui_notify`)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`

### 8. Language

- **Key:** `lang`
- **Control:** List (`ListPreference`)
- **Category:** Misc
- **Declared default:** Auto (``)
- **Options:**
  - Auto — ``
  - العربية — `ar`
  - বাংলা — `bn`
  - Bahasa Indonesia — `in`
  - Čeština — `cs`
  - 中文(简体) — `zh_CN`
  - 中文(繁體) — `zh_TW`
  - Dansk — `da`
  - Deutsch — `de`
  - English — `en_US`
  - Español — `es`
  - فارسی — `fa`
  - Français — `fr`
  - ελληνικά — `el`
  - עברית — `iw`
  - हिन्दी — `hi`
  - Italiano — `it`
  - Limba română — `ro`
  - Magyar — `hu`
  - Nederlands — `nl`
  - 日本語 — `ja`
  - 한국어 — `ko`
  - Polski — `pl`
  - Português brasileiro — `pt_BR`
  - Русский — `ru`
  - Slovenčina — `sk`
  - Cрпски — `sr`
  - ไทย — `th`
  - Tiếng Việt — `vi`
  - Türkçe — `tr`
  - Українська мова — `uk`
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 9. Icon

- **Key:** `ui_icon`
- **Control:** Link (`RedirectPreference`)
- **Category:** Misc
- **Opens:** [Application Icon](Application%20Icon.md) (`ui_icon`)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 10. Screen Orientation

- **Key:** `orientation`
- **Control:** List (`TagListPreference`)
- **Category:** Misc
- **Declared default:** `0` → Default†
- **Options:**
  - Default
  - Portrait (Vertical)
  - Landscape (Horizontal)
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 11. Animations

- **Key:** `anim_speed`
- **Control:** List (`TagListPreference`)
- **Category:** Misc
- **Declared default:** `false` (does not match any declared value)
- **Options:**
  - Disabled — `0`
  - Fast — `2`
  - Default — `1`
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Declared default `false` does not match any declared stored value — recorded as an APK resource anomaly.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 12. Start at Library

- **Key:** `start_at_lib`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Misc
- **Declared default:** Off
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 13. Hide Status Bar

- **Key:** `hide_status_bar`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Misc
- **Declared default:** Off
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 14. Keep Screen On

- **Key:** `keep_screen_on`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Misc
- **Declared default:** Not declared
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 15. Settings Shortcuts in Main Menu

- **Key:** `num_settings_tags`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Misc
- **Declared default:** Not declared
- **Options:**
  - Disabled
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 16. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Category:** Misc
- **Source:** `xml-v22/ui.xml`, `xml/ui.xml`

## Screen-level evidence notes

- `anim_speed` declares the default `false`, which matches none of its declared values (`0`, `2`, `1`). This is recorded as an APK resource anomaly; the effective default must be observed.
- `settings_font` declares default `2` (Bold); `settings_theme` declares `0` (Default). Both are positional mappings.
- This reference page and Chapter 25 (Look and Feel) are separate documents by design.

---

← [Translations](Translations.md) · [Settings Reference Index](Index.md) · [Application Icon](Application%20Icon.md) →
