---
title: "Headset and Bluetooth Settings"
screen_id: "headset"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 18
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Headset and Bluetooth Settings

Wired headset, Bluetooth and USB DAC connection behaviour, remote-button handling, Bluetooth command filtering, feedback, and the Last Processed Commands diagnostic.

| Property | Value |
|---|---|
| Screen ID | `headset` |
| In-app location | Settings › Headset/Bluetooth |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Headset/Bluetooth” (`headset`) |
| Links to | [Miscellaneous Settings](Miscellaneous%20Settings.md) (`long_volume_press`); `commands_history` — not inventoried (`commands_history`) |
| Declared entries | 18 — action or navigation 1, adjustable 3, category 1, other 2, toggle 11 |
| Resource files | `xml-v22/headset.xml`, `xml/headset.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 13 — USB DAC Setup and Compatibility](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17 — Headphones and Hardware Buttons](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 21 — Shuffle](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md), [Chapter 32 — Android Auto and Connected Apps](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) |

## Settings at a glance

**Category: Connection**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Resume On Wired Headset | `resume_on_headset` | Switch | Not declared | — | — |
| 2 | Resume On Bluetooth | `resume_on_bt` | Switch | Not declared | — | — |
| 3 | Pause On Headset Disconnect | `pause_on_headset` | Switch | Not declared | — | — |
| 4 | Pause On USB DAC connection | `pause_on_usb_connection` | Switch | Not declared | — | — |

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 5 | Buttons | `headset_buttons` | Category | — | — | — |
| 17 | Last Processed Commands | `commands_history` | Link | — | — | — |
| 18 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Buttons**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 6 | Respond To Buttons | `enable_headset_controls` | Switch | Not declared | — | — |
| 7 | Wired Headset | `headset_controls` | List | Not declared | Single press; Double/triple press for next/prev. track; Long press for next track (when playing) (positional†) | — |
| 8 | Bluetooth | `avrcp_controls` | List | Not declared | Single press; Double/triple press for next/prev. track; Long press for next track (when playing) (positional†) | — |
| 9 | (untitled `long_volume_press`) | `long_volume_press` | Link | — | — | — |
| 10 | Strict Resume/Pause/Stop | `follow_pl_exact` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| 11 | Ignore Bluetooth Commands | `ignore_bt_sec` | Slider | Not declared | 0 sec to 20 sec, step not declared (labels “0” … “20”) | — |
| 12 | Ignore Repeat/Shuffle | `bt_ignore_repeat_shuffle` | Switch | Not declared | — | — |
| 13 | Beep | `headset_beep` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| 14 | Beep More | `beep_more` | Switch | Not declared | — | Beep (`headset_beep`) |
| 15 | Vibrate | `headset_vibrate` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| 16 | Disable Default Long Press | `no_android_long_press` | Switch | Not declared | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Resume On Wired Headset

- **Key:** `resume_on_headset`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Connection
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 2. Resume On Bluetooth

- **Key:** `resume_on_bt`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Connection
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Pause On Headset Disconnect

- **Key:** `pause_on_headset`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Connection
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 4. Pause On USB DAC connection

- **Key:** `pause_on_usb_connection`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Connection
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 5. Buttons

- **Key:** `headset_buttons`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Evidence note:** Groups: Respond To Buttons, Wired Headset, Bluetooth, long_volume_press, Strict Resume/Pause/Stop, Ignore Bluetooth Commands, Ignore Repeat/Shuffle, Beep, Beep More, Vibrate, Disable Default Long Press.

### 6. Respond To Buttons

- **Key:** `enable_headset_controls`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Wired Headset

- **Key:** `headset_controls`
- **Control:** List (`TagListPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Options:**
  - Single press
  - Double/triple press for next/prev. track
  - Long press for next track (when playing)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 8. Bluetooth

- **Key:** `avrcp_controls`
- **Control:** List (`TagListPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Options:**
  - Single press
  - Double/triple press for next/prev. track
  - Long press for next track (when playing)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 9. (untitled long_volume_press)

- **Key:** `long_volume_press`
- **Control:** Link (`RedirectPreference`)
- **Category:** Buttons
- **Opens:** [Miscellaneous Settings](Miscellaneous%20Settings.md) (`misc#long_volume_controls`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`

### 10. Strict Resume/Pause/Stop

- **Key:** `follow_pl_exact`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Depends on:** Respond To Buttons (`enable_headset_controls`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 11. Ignore Bluetooth Commands

- **Key:** `ignore_bt_sec`
- **Control:** Slider (`SeekbarPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Range:** 0 sec to 20 sec, step not declared (labels “0” … “20”)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 12. Ignore Repeat/Shuffle

- **Key:** `bt_ignore_repeat_shuffle`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 21](../../Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md), [Chapter 32](../../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 13. Beep

- **Key:** `headset_beep`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Depends on:** Respond To Buttons (`enable_headset_controls`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 14. Beep More

- **Key:** `beep_more`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Depends on:** Beep (`headset_beep`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 15. Vibrate

- **Key:** `headset_vibrate`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Depends on:** Respond To Buttons (`enable_headset_controls`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 16. Disable Default Long Press

- **Key:** `no_android_long_press`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Buttons
- **Declared default:** Not declared
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 17. Last Processed Commands

- **Key:** `commands_history`
- **Control:** Link (`RedirectPreference`)
- **Opens:** `commands_history`
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)
- **Evidence note:** Navigation target `commands_history` is not one of the 42 inventoried screens; its content is outside the extracted evidence.

### 18. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/headset.xml`, `xml/headset.xml`

## Screen-level evidence notes

- No entry on this screen declares a default; the initial state of every connection and button option must be observed at runtime.
- `headset_controls` and `avrcp_controls` declare three option labels but no stored values or selection mode; whether they act as a single choice or as independent toggles is not established.
- `commands_history` opens a screen that is not among the inventoried screens.

---

← [About Poweramp](About%20Poweramp.md) · [Settings Reference Index](Index.md) · [Music Library Settings](Music%20Library%20Settings.md) →
