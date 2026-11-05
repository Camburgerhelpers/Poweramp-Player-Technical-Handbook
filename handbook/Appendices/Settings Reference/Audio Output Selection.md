---
title: "Audio Output Selection"
screen_id: "audio_outputs2"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 8
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Audio Output Selection

The output category list (Wired Headset/AUX, Speaker, Bluetooth, USB DAC, Chromecast, Other Output Devices) and the link to output Advanced Tweaks.

| Property | Value |
|---|---|
| Screen ID | `audio_outputs2` |
| In-app location | Settings › Audio › Audio Outputs |
| Reached from | [Audio Settings](Audio%20Settings.md) → “Audio Outputs” (`audio_outputs2`) |
| Links to | [Audio Output Advanced Tweaks](Audio%20Output%20Advanced%20Tweaks.md) (`audio_outputs_tweaks`) |
| Declared entries | 8 — action or navigation 1, other 7 |
| Resource files | `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml` |
| Explained in | [Chapter 12 — Choosing an Audio Output](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Wired Headset/AUX <sup>non-persistent</sup> | `output_headset` | Button | — | — | — |
| 2 | Speaker <sup>non-persistent</sup> | `output_speaker` | Button | — | — | — |
| 3 | Bluetooth <sup>non-persistent</sup> | `output_bt` | Button | — | — | — |
| 4 | USB DAC <sup>non-persistent</sup> | `output_usb` | Button | — | — | — |
| 5 | Chromecast <sup>non-persistent</sup> | `output_chromecast` | Button | — | — | — |
| 6 | Other Output Devices <sup>non-persistent</sup> | `output_other` | Button | — | — | — |
| 8 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Advanced Tweaks | `audio_outputs_tweaks` | Link | — | — | — |

## Entry details

### 1. Wired Headset/AUX

- **Key:** `output_headset`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Speaker

- **Key:** `output_speaker`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Bluetooth

- **Key:** `output_bt`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 4. USB DAC

- **Key:** `output_usb`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 5. Chromecast

- **Key:** `output_chromecast`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 6. Other Output Devices

- **Key:** `output_other`
- **Control:** Button (`ButtonPref`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 7. Advanced Tweaks

- **Key:** `audio_outputs_tweaks`
- **Control:** Link (`RedirectPreference`)
- **Category:** Other
- **Opens:** [Audio Output Advanced Tweaks](Audio%20Output%20Advanced%20Tweaks.md) (`audio_outputs_tweaks`)
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`

### 8. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_outputs2.xml`, `xml/audio_outputs2.xml`

## Screen-level evidence notes

- The six output buttons are `ButtonPref` entries; each opens the per-output options screen for that category. The parameterization is runtime behaviour.

---

← [Individual Audio Output Settings](Individual%20Audio%20Output%20Settings.md) · [Settings Reference Index](Index.md) · [Audio Output Advanced Tweaks](Audio%20Output%20Advanced%20Tweaks.md) →
