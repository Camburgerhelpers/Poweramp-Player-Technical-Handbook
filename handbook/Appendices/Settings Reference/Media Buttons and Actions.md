---
title: "Media Buttons and Actions"
screen_id: "ui_mediaactions"
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

# Media Buttons and Actions

Up to six extra media-action buttons used by the notification, Android Auto and other media controllers.

| Property | Value |
|---|---|
| Screen ID | `ui_mediaactions` |
| In-app location | Settings › Lock Screen › Buttons |
| Reached from | [Lock Screen Settings](Lock%20Screen%20Settings.md) → “Buttons” (`buttons`); [Miscellaneous Settings](Miscellaneous%20Settings.md) → “Buttons” (`buttons`); [Notification Settings](Notification%20Settings.md) → “Buttons” (`buttons`) |
| Declared entries | 7 — action or navigation 1, adjustable 6 |
| Resource files | `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml` |
| Explained in | [Chapter 30 — Notifications and Media Buttons](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) |

## Settings at a glance

**Category: Notification/Android Auto**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Button 1 | `notify_action1` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| 2 | Button 2 | `notify_action2` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |

**Category: Android Auto/Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 3 | Button 3 | `notify_action3` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| 4 | Button 4 | `notify_action4` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| 5 | Button 5 | `notify_action5` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| 6 | Button 6 | `notify_action6` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. Button 1

- **Key:** `notify_action1`
- **Control:** List (`TagListPreference`)
- **Category:** Notification/Android Auto
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. Button 2

- **Key:** `notify_action2`
- **Control:** List (`TagListPreference`)
- **Category:** Notification/Android Auto
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Button 3

- **Key:** `notify_action3`
- **Control:** List (`TagListPreference`)
- **Category:** Android Auto/Other
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Button 4

- **Key:** `notify_action4`
- **Control:** List (`TagListPreference`)
- **Category:** Android Auto/Other
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Button 5

- **Key:** `notify_action5`
- **Control:** List (`TagListPreference`)
- **Category:** Android Auto/Other
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Button 6

- **Key:** `notify_action6`
- **Control:** List (`TagListPreference`)
- **Category:** Android Auto/Other
- **Declared default:** Not declared
- **Options:**
  - None — `0`
  - Repeat — `1`
  - Shuffle — `2`
  - Close — `3` — Pause player and remove the notification
  - Like — `4`
  - Unlike — `5`
  - Rating — `6` — Rating is switched between Like/Unlike/None
  - -10 — `8`
  - +10 — `7`
  - Prev. category — `10`
  - Next category — `9`
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/ui_mediaactions.xml`, `xml/ui_mediaactions.xml`

## Screen-level evidence notes

- Buttons 1–2 are categorized “Notification/Android Auto” and Buttons 3–6 “Android Auto/Other”.
- Stored values are not in label order (for example “-10” = `8` and “+10” = `7`), so the mapping must be taken from the value list, not from position.
- No button declares a default.

---

← [Lyrics Settings](Lyrics%20Settings.md) · [Settings Reference Index](Index.md) · [Notification Settings](Notification%20Settings.md) →
