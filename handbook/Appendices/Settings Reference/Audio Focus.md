---
title: "Audio Focus"
screen_id: "audio_focus"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 12
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Audio Focus

How Poweramp reacts to Android audio focus: calls, short interruptions (notifications, navigation), permanent focus loss, ducking, and resume-on-start behaviour.

| Property | Value |
|---|---|
| Screen ID | `audio_focus` |
| In-app location | Settings › Audio › Audio Focus |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Audio Focus” (`audio_focus`) |
| Links to | [Individual Audio Output Settings](Individual%20Audio%20Output%20Settings.md) (`cc_af_warning`) |
| Declared entries | 12 — action or navigation 1, category 1, other 1, toggle 9 |
| Resource files | `xml-v22/audio_focus.xml`, `xml/audio_focus.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 15 — Chromecast Output](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 16 — Calls, Notifications and Interruptions](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Resume After Call | `resume_after_call` | Switch | On | — | — |
| 2 | Resume On Start | `resume_on_start` | Switch | Off | — | — |
| 3 | Resume On Reopen | `resume_on_resume` | Switch | On | — | Resume On Start (`resume_on_start`) |
| 4 | Wait For Storage | `resume_on_mount` | Switch | Off | — | Resume On Start (`resume_on_start`) |
| 5 | (untitled `cc_af_warning`) | `cc_af_warning` | Link | — | — | — |
| 6 | Audio Focus | `audio_focus_cat` | Category | — | — | — |
| 12 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Audio Focus**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Short Audio Focus Change / Calls | `af_short` | Switch | On | — | — |
| 8 | Pause In Call | `pause_in_call` | Switch | On | — | — |
| 9 | Resume On Focus Gain | `resume_on_focus` | Switch | On | — | Short Audio Focus Change / Calls (`af_short`) |
| 10 | Duck Volume | `af_short_duck` | Switch | On | — | Short Audio Focus Change / Calls (`af_short`) |
| 11 | Permanent Audio Focus Change | `af_permanent` | Switch | On | — | — |

## Entry details

### 1. Resume After Call

- **Key:** `resume_after_call`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Resume playing on hang up (if paused by call)”
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 2. Resume On Start

- **Key:** `resume_on_start`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Resume playing when Poweramp is started”
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 3. Resume On Reopen

- **Key:** `resume_on_resume`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Also resume when Poweramp is already running and reopened from the launcher”
- **Depends on:** Resume On Start (`resume_on_start`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 4. Wait For Storage

- **Key:** `resume_on_mount`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Wait for a storage (up to 30s.) to mount before resuming on start”
- **Depends on:** Resume On Start (`resume_on_start`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 5. (untitled cc_af_warning)

- **Key:** `cc_af_warning`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Chromecast output may ignore calls and short Audio Focus completely. Press here to configure”
- **Opens:** [Individual Audio Output Settings](Individual%20Audio%20Output%20Settings.md) (`audio_output_device_opts?uniqName=com.maxmpz.audioplayer/output.cc&device=chromecast#no_af`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 6. Audio Focus

- **Key:** `audio_focus_cat`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Evidence note:** Groups: Short Audio Focus Change / Calls, Pause In Call, Resume On Focus Gain, Duck Volume, Permanent Audio Focus Change.

### 7. Short Audio Focus Change / Calls

- **Key:** `af_short`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Audio Focus
- **Declared default:** On
- **APK text:** “Temporarily pause on short audio focus change (calls/notifications/navigation/etc.)”
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 8. Pause In Call

- **Key:** `pause_in_call`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Audio Focus
- **Declared default:** On
- **APK text:** “Pause when phone call happens. Poweramp always pauses for call via Bluetooth” “Some firmwares may not support this option”
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 9. Resume On Focus Gain

- **Key:** `resume_on_focus`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Audio Focus
- **Declared default:** On
- **APK text:** “Resume after getting back the focus. If disabled, player stays paused”
- **Depends on:** Short Audio Focus Change / Calls (`af_short`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 10. Duck Volume

- **Key:** `af_short_duck`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Audio Focus
- **Declared default:** On
- **APK text:** “When possible, allow lowering the volume on short audio focus. This option can be overridden by Audio output settings”
- **Depends on:** Short Audio Focus Change / Calls (`af_short`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 11. Permanent Audio Focus Change

- **Key:** `af_permanent`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Audio Focus
- **Declared default:** On
- **APK text:** “Pause on permanent audio focus change (other player/game/etc.)”
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)

### 12. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_focus.xml`, `xml/audio_focus.xml`

## Screen-level evidence notes

- `cc_af_warning` links directly to the Chromecast output options with the anchor `#no_af` (Ignore Audio Focus).

---

← [Equalizer Settings](Equalizer%20Settings.md) · [Settings Reference Index](Index.md) · [Individual Audio Output Settings](Individual%20Audio%20Output%20Settings.md) →
