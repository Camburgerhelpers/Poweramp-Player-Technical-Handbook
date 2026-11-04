---
title: "Direct Volume Control"
screen_id: "audio_dvc"
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

# Direct Volume Control

Direct Volume Control (DVC): the global enable switch, Bluetooth Absolute Volume handling, the preamp reduction used whenever DVC is not active, and an Android 15+ low-volume compensation.

| Property | Value |
|---|---|
| Screen ID | `audio_dvc` |
| In-app location | Settings › Audio › Direct Volume Control (DVC) |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Direct Volume Control (DVC)” (`audio_dvc`) |
| Declared entries | 11 — action or navigation 1, adjustable 1, category 1, informational or dynamic 5, toggle 3 |
| Resource files | `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 03 — Volume Control and DVC](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Enable Direct Volume Control | `dvc_enabled` | Switch | On | — | — |
| 2 | (untitled `dvc_devices`) | `dvc_devices` | Information | — | — | — |
| 3 | Bluetooth | `bluetooth_headset` | Category | — | — | — |
| 4 | (untitled `bt_absvol_status`) | `bt_absvol_status` | Information | — | — | — |
| 5 | No DVC for Bluetooth Absolute Volume | `no_dvc_bt_absvol` | Switch | On | — | Enable Direct Volume Control (`dvc_enabled`) |
| 6 | (untitled `no_dvc_bt_absvol_hint`) | `no_dvc_bt_absvol_hint` | Information | — | — | — |
| 7 | (untitled `no_dvc_bt_absvol_hint_15`) | `no_dvc_bt_absvol_hint_15` | Information | — | — | — |
| 8 | Disable Bluetooth Absolute Volume | `dvc_bt_msg` | Information | — | — | — |
| 9 | No DVC - Preamp Reduction | `no_dvc_gain_mb` | Knob | −6.0 dB (`-600`) | −10.0 dB to 0.0 dB, step 0.5 dB | — |
| 10 | Compensate DVC Volume | `compensate_dvc_vol` | Switch | Off | — | — |
| 11 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

### 1. Enable Direct Volume Control

- **Key:** `dvc_enabled`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)

### 2. (untitled dvc_devices)

- **Key:** `dvc_devices`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 3. Bluetooth

- **Key:** `bluetooth_headset`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`

### 4. (untitled bt_absvol_status)

- **Key:** `bt_absvol_status`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 5. No DVC for Bluetooth Absolute Volume

- **Key:** `no_dvc_bt_absvol`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Automatically disable DVC for Bluetooth when Absolute Volume is detected or it's not possible to detect it”
- **Depends on:** Enable Direct Volume Control (`dvc_enabled`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)

### 6. (untitled no_dvc_bt_absvol_hint)

- **Key:** `no_dvc_bt_absvol_hint`
- **Control:** Information (`RawTextPreference`)
- **APK text:** “• to detect Absolute Volume this option may temporarily change volume for a few seconds on Bluetooth connection” “• volume may be constantly changed and probed on this page”
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)

### 7. (untitled no_dvc_bt_absvol_hint_15)

- **Key:** `no_dvc_bt_absvol_hint_15`
- **Control:** Information (`RawTextPreference`)
- **APK text:** “• it's not possible to detect Absolute Volume on your device” “• on you device this option just disables DVC for Bluetooth by default” “• uncheck if you know that Absolute Volume is disabled for your device”
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)

### 8. Disable Bluetooth Absolute Volume

- **Key:** `dvc_bt_msg`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 9. No DVC - Preamp Reduction

- **Key:** `no_dvc_gain_mb`
- **Control:** Knob (`RoundKnobPreference`)
- **Declared default:** −6.0 dB (`-600`)
- **APK text:** “Allows equalization/basses without distortion. Set to 0 dB to match other players’ volume, though this makes equalization less effective” “Applied only when DVC is disabled for any reason”
- **Range:** −10.0 dB to 0.0 dB, step 0.5 dB
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)

### 10. Compensate DVC Volume

- **Key:** `compensate_dvc_vol`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Specifically compensate low volume in DVC mode on some Android 15+ firmwares. Applied only when the issue is detected”
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** `app:skipSearch="peq"` names specific app editions; interpretation (hidden from settings search in those editions) is inferred.

### 11. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_dvc.xml`, `xml/audio_dvc.xml`

## Screen-level evidence notes

- `dvc_devices` and `bt_absvol_status` are runtime status rows; their content is not in the XML.
- Two alternative hint rows exist (`no_dvc_bt_absvol_hint` and `no_dvc_bt_absvol_hint_15`). Their text implies one is shown when Absolute Volume can be probed and the other when it cannot. Which one appears on a given device is a runtime matter.

---

← [Bit-Perfect and Precision Settings](Bit-Perfect%20and%20Precision%20Settings.md) · [Settings Reference Index](Index.md) · [Equalizer Settings](Equalizer%20Settings.md) →
