---
title: "Notification Settings"
screen_id: "ui_notify"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 14
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Notification Settings

Notification style, colours, buttons, priority, and keeping the notification or service alive.

| Property | Value |
|---|---|
| Screen ID | `ui_notify` |
| In-app location | Settings › Look and Feel › Notifications |
| Reached from | [Look and Feel](Look%20and%20Feel.md) → “Notifications” (`ui_notify`) |
| Links to | [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`buttons`) |
| Declared entries | 14 — action or navigation 1, adjustable 3, category 1, informational or dynamic 1, other 1, toggle 7 |
| Resource files | `xml-v22/ui_notify.xml`, `xml/ui_notify.xml` |
| Explained in | [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 30 — Notifications and Media Buttons](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Notification Type | `notification_type` | List | `0` → Auto† | Auto; Media / Colorized; Media with the custom cover; Legacy (positional†) | — |
| 2 | Notification Colors | `notification_colors` | List | `0` → Auto† | Auto; Black; White (positional†) | — |
| 3 | Colorize Notification | `notify_colorize` | Switch | On | — | — |
| 4 | Buttons | `buttons` | Link | — | — | — |
| 5 | Navigate to the List | `status_lib` | Switch | Off | — | — |
| 6 | Show Previous Track Action (<<) | `notify_prefer_nav` | Switch | Off | — | — |
| 7 | Notification Priority | `notify_prio` | List | Not declared | Max = `2`; High = `1`; Default = `0`; Low = `-1`; Min = `-2` | — |
| 8 | Notification Keeping | `notification_keeping` | Category | — | — | — |
| 14 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Notification Keeping**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 9 | Keep Notification | `keep_notification` | Switch | Not declared | — | — |
| 10 | Keep Inactive Media Notification | `notify_resume` | Switch | Not declared | — | — |
| 11 | (untitled `_notify_resume_hint`) | `_notify_resume_hint` | Information | — | — | — |
| 12 | Keep Service | `keep_service` | Switch | Not declared | — | — |
| 13 | Remove Notification on Disconnection | `no_keep_notif_on_dscn` | Switch | Not declared | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Notification Type

- **Key:** `notification_type`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → Auto†
- **Options:**
  - Auto
  - Media / Colorized
  - Media with the custom cover
  - Legacy
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 2. Notification Colors

- **Key:** `notification_colors`
- **Control:** List (`TagListPreference`)
- **Declared default:** `0` → Auto†
- **Options:**
  - Auto
  - Black
  - White
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 3. Colorize Notification

- **Key:** `notify_colorize`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)

### 4. Buttons

- **Key:** `buttons`
- **Control:** Link (`RedirectPreference`)
- **Opens:** [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) (`ui_mediaactions`)
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`

### 5. Navigate to the List

- **Key:** `status_lib`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)

### 6. Show Previous Track Action (<<)

- **Key:** `notify_prefer_nav`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)

### 7. Notification Priority

- **Key:** `notify_prio`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Max — `2`
  - High — `1`
  - Default — `0`
  - Low — `-1`
  - Min — `-2`
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 8. Notification Keeping

- **Key:** `notification_keeping`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Evidence note:** Groups: Keep Notification, Keep Inactive Media Notification, _notify_resume_hint, Keep Service, Remove Notification on Disconnection.

### 9. Keep Notification

- **Key:** `keep_notification`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Notification Keeping
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 10. Keep Inactive Media Notification

- **Key:** `notify_resume`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Notification Keeping
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 11. (untitled _notify_resume_hint)

- **Key:** `_notify_resume_hint`
- **Control:** Information (`RawTextPreference`)
- **Category:** Notification Keeping
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)

### 12. Keep Service

- **Key:** `keep_service`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Notification Keeping
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 13. Remove Notification on Disconnection

- **Key:** `no_keep_notif_on_dscn`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Notification Keeping
- **Declared default:** Not declared
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 30](../../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 14. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/ui_notify.xml`, `xml/ui_notify.xml`

## Screen-level evidence notes

- Several keep-alive options declare no default.

---

← [Media Buttons and Actions](Media%20Buttons%20and%20Actions.md) · [Settings Reference Index](Index.md) · [Player Screen](Player%20Screen.md) →
