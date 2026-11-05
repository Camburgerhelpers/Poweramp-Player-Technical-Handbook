---
title: "Application Icon"
screen_id: "ui_icon"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 1
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Application Icon

Launcher icon selection.

| Property | Value |
|---|---|
| Screen ID | `ui_icon` |
| In-app location | Settings › Look and Feel › Icon |
| Reached from | [Look and Feel](Look%20and%20Feel.md) → “Icon” (`ui_icon`) |
| Declared entries | 1 — category 1 |
| Resource files | `xml/ui_icon.xml` |
| Explained in | — |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Icons | `icon_list` | Category | — | — | — |

## Entry details

### 1. Icons

- **Key:** `icon_list`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml/ui_icon.xml`

## Screen-level evidence notes

- Only the `icon_list` category is declared; the icons are populated at runtime.

---

← [Look and Feel](Look%20and%20Feel.md) · [Settings Reference Index](Index.md) · [Lyrics Settings](Lyrics%20Settings.md) →
