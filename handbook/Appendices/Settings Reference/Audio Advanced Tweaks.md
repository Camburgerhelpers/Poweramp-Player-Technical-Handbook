---
title: "Audio Advanced Tweaks"
screen_id: "audio_tweaks"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 10
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Audio Advanced Tweaks

Volume step count, the custom volume panel, pause/resume on zero volume, the MusicFX system-effects button, an audio-focus workaround, tracker-module decoder controls, and EQ/reverb preset restoration.

| Property | Value |
|---|---|
| Screen ID | `audio_tweaks` |
| In-app location | Settings › Audio › Advanced Tweaks |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Advanced Tweaks” (`audio_tweaks`) |
| Declared entries | 10 — action or navigation 3, adjustable 3, toggle 4 |
| Resource files | `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml` |
| Explained in | [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 03 — Volume Control and DVC](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 16 — Calls, Notifications and Interruptions](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md), [Chapter 24 — Tracker Module Playback](../../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

**Category: Volume**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Volume Levels | `volume_levels` | List | System Default (`0`) | System Default = `0`; 30 = `30`; 50 = `51`; 75 = `76`; 100 = `101` | — |
| 2 | Volume Panel | `volume_popup` | Switch | Not declared | — | — |
| 3 | Pause/Resume on Volume <sup>Experiment</sup> | `pause_on_volume` | Switch | Not declared | — | — |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 4 | MusicFX | `allow_platform_fx` | Switch | Off | — | — |
| 5 | Force Audio On Audio Focus Change | `force_audio_on_focus` | Switch | Not declared | — | — |
| 6 | Tracker Decoder Extra Gain | `mod_gain_mb` | Knob | Not declared | −10.0 dB to 10.0 dB, step 1.0 dB | — |
| 7 | Tracker Decoder Stereo Separation | `mod_separation` | Knob | Not declared | 0% to 200%, step 10% | — |
| 8 | Restore Equalizer Presets | `reset_eq_presets` | Action | — | — | — |
| 9 | Restore Reverb Presets | `reset_reverb_presets` | Action | — | — | — |
| 10 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. Volume Levels

- **Key:** `volume_levels`
- **Control:** List (`NumberListPreference`)
- **Category:** Volume
- **Declared default:** System Default (`0`)
- **APK text:** “Number of volume levels: %s”
- **Options:**
  - System Default — `0`
  - 30 — `30`
  - 50 — `51`
  - 75 — `76`
  - 100 — `101`
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)

### 2. Volume Panel

- **Key:** `volume_popup`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Volume
- **Declared default:** Not declared
- **APK text:** “Custom volume panel. Shown when volume is adjusted in Poweramp UI”
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 3. Pause/Resume on Volume

- **Key:** `pause_on_volume`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Volume
- **Declared default:** Not declared
- **APK text:** “Pause when volume is set to 0, resume when volume increased from 0” “This option works when the Poweramp UI or notification is visible”
- **Markers:** Experiment
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked “Experiment” in the APK; its explanatory text reference (`pref_experimental_msg`) did not resolve during the research phase.

### 4. MusicFX

- **Key:** `allow_platform_fx`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Other
- **Declared default:** Off
- **APK text:** “Enable MusicFX Button (Android system audio effects) in Volume tab”
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 5. Force Audio On Audio Focus Change

- **Key:** `force_audio_on_focus`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **APK text:** “Enable this if audio stops after notifications”
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Tracker Decoder Extra Gain

- **Key:** `mod_gain_mb`
- **Control:** Knob (`RoundKnobPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **APK text:** “Extra gain applied to tracker formats, such as .mod, *.s3c, *.xm, *.it”
- **Range:** −10.0 dB to 10.0 dB, step 1.0 dB
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 24](../../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Tracker Decoder Stereo Separation

- **Key:** `mod_separation`
- **Control:** Knob (`RoundKnobPreference`)
- **Category:** Other
- **Declared default:** Not declared
- **Range:** 0% to 200%, step 10%
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 24](../../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** `app:valueFormat` is `%.0f%%` (percent) while `app:label` is `%.1fdB`; the percent format matches the 0–200 range and is used here. Recorded as a resource inconsistency.

### 8. Restore Equalizer Presets

- **Key:** `reset_eq_presets`
- **Control:** Action (`Preference`)
- **Category:** Other
- **APK text:** “Built-in and AutoEq equalizer presets will be restored to defaults”
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 9. Restore Reverb Presets

- **Key:** `reset_reverb_presets`
- **Control:** Action (`Preference`)
- **Category:** Other
- **APK text:** “Built-in reverb presets will be restored/set to defaults”
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

### 10. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Category:** Other
- **Source:** `xml-v22/audio_tweaks.xml`, `xml/audio_tweaks.xml`

## Screen-level evidence notes

- `mod_gain_mb` and `mod_separation` declare ranges but no defaults.
- The tracker formats named in the APK text are “.mod, *.s3c, *.xm, *.it”. “s3c” is preserved verbatim; it is probably a typo for `.s3m` (ScreamTracker 3), but that is unconfirmed.

---

← [Resampler Settings](Resampler%20Settings.md) · [Settings Reference Index](Index.md) · [Purchase Methods](Purchase%20Methods.md) →
