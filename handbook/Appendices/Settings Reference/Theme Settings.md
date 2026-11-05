---
title: "Theme Settings"
screen_id: "ui_theme"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 2
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Theme Settings

Built-in and third-party skin lists.

| Property | Value |
|---|---|
| Screen ID | `ui_theme` |
| In-app location | Settings › Look and Feel › Skin |
| Reached from | [Look and Feel](Look%20and%20Feel.md) → “Skin” (`ui_theme`) |
| Declared entries | 2 — category 2 |
| Resource files | `xml/ui_theme.xml` |
| Explained in | [Chapter 25 — Look and Feel](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Built-in Skins | `theme_list` | Skin list | — | — | — |
| 2 | 3rd Party Skins | `theme_list_3rdparty` | Skin list | — | — | — |

## Entry details

### 1. Built-in Skins

- **Key:** `theme_list`
- **Control:** Skin list (`BuiltinSkinsPreferenceCategory`)
- **Source:** `xml/ui_theme.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)

### 2. 3rd Party Skins

- **Key:** `theme_list_3rdparty`
- **Control:** Skin list (`ThirdPartySkinsPreferenceCategory`)
- **Source:** `xml/ui_theme.xml`
- **Discussed in:** [Chapter 25](../../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

## Screen-level evidence notes

- Only the two skin-list categories are declared; skins and per-skin options (Pro Buttons, Static Seekbar, as named in the Skin summary on `ui`) are runtime content.

---

← [Player Screen](Player%20Screen.md) · [Settings Reference Index](Index.md) · [Visualization Settings](Visualization%20Settings.md) →
