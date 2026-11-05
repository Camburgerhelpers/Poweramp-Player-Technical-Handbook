---
title: "Audio Output Advanced Tweaks"
screen_id: "audio_outputs_tweaks"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 5
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Audio Output Advanced Tweaks

Output-level compatibility workarounds: USB DAC auto-activation, forcing the speaker off for Hi-Res output, media-stream emulation, and the output detection log.

| Property | Value |
|---|---|
| Screen ID | `audio_outputs_tweaks` |
| In-app location | Settings › Audio › Audio Outputs › Advanced Tweaks |
| Reached from | [Audio Output Selection](Audio%20Output%20Selection.md) → “Advanced Tweaks” (`audio_outputs_tweaks`) |
| Links to | `audio_platform_log` — not inventoried (`audio_platform_log`) |
| Declared entries | 5 — action or navigation 1, other 1, toggle 3 |
| Resource files | `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 12 — Choosing an Audio Output](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13 — USB DAC Setup and Compatibility](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 16 — Calls, Notifications and Interruptions](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Show Poweramp for USB DACs <sup>non-persistent</sup> | `usb_activity` | Switch | Not declared | — | — |
| 2 | Force Speaker Off (for Hi-Res Output) | `force_no_speaker` | Switch | Not declared | — | — |
| 3 | Emulate Media Stream (for Hi-Res output) | `use_stream3_player` | Switch | Off | — | — |
| 4 | Audio Outputs Detection Log | `audio_platform_log` | Link | — | — | — |
| 5 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Show Poweramp for USB DACs

- **Key:** `usb_activity`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Force Speaker Off (for Hi-Res Output)

- **Key:** `force_no_speaker`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Source:** `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Emulate Media Stream (for Hi-Res output)

- **Key:** `use_stream3_player`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **Source:** `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

### 4. Audio Outputs Detection Log

- **Key:** `audio_platform_log`
- **Control:** Link (`RedirectPreference`)
- **Opens:** `audio_platform_log`
- **Source:** `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Navigation target `audio_platform_log` is not one of the 42 inventoried screens; its content is outside the extracted evidence.

### 5. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_outputs_tweaks.xml`, `xml/audio_outputs_tweaks.xml`

## Screen-level evidence notes

- `audio_platform_log` opens a log screen that is not among the inventoried screens; its content is not documented by the extracted evidence.

---

← [Audio Output Selection](Audio%20Output%20Selection.md) · [Settings Reference Index](Index.md) · [Resampler Settings](Resampler%20Settings.md) →
