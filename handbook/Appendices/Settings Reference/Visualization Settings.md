---
title: "Visualization Settings"
screen_id: "vis"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 24
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Visualization Settings

Visualization on the Player Screen, Equalizer spectrum, faded-controls behaviour, MilkDrop-format (`.milk`) preset rendering options, and preset scanning.

| Property | Value |
|---|---|
| Screen ID | `vis` |
| In-app location | Settings › Visualization |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Visualization” (`vis`) |
| Declared entries | 24 — action or navigation 1, adjustable 6, category 2, informational or dynamic 1, other 3, toggle 11 |
| Resource files | `xml-v22/vis.xml`, `xml/vis.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 29 — Visualization](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Visualization On Player Screen <sup>non-persistent</sup> | `enable_vis` | Switch | Not declared | — | — |
| 2 | Equalizer Screen Spectrum | `vis_frs_type` | List | `2` → Rounded† | Disabled; Classic; Rounded (positional†) | — |
| 3 | Visualization in Library | `vis_in_lib` | Switch | Off | — | — |
| 4 | Preset Duration | `vis_preset_change_sec` | Slider | 15 s (`15`) | 3 s to 120 s, step not declared | — |
| 5 | Top Visualization Panel Opacity | `vis_panel_faded_alpha` | Slider | 60% (`60`) | 0% to 100%, step not declared | — |
| 6 | Faded Controls Opacity | `vis_controls_faded_alpha` | Slider | 50% (`50`) | 0% to 100%, step not declared | — |
| 7 | UI Timeout | `vis_temp_ui_ms` | Slider | 1500 ms (`1500`) | 500 ms to 15000 ms, step 100 ms | — |
| 8 | Visible Album Art | `vis_aa_visible` | Switch | On | — | — |
| 9 | Ignore Touch | `vis_ignore_touch_faded` | Switch | Not declared | — | — |
| 10 | Track Opacity | `vis_list_faded_alpha` | Slider | 25% (`25`) | 0% to 100%, step not declared | — |
| 11 | Hide System Bars For Full Screen <sup>Feature Pack</sup> | `vis_fs_hide_bars` | Switch | Off | — | — |
| 12 | Scaled Bars For Faded Controls | `vis_use_compact_bars` | Switch | On | — | — |
| 13 | HD | `milk_hd` | Switch | Off | — | — |
| 14 | Crop Aspect | `milk_crop_aspect` | Switch | Off | — | — |
| 15 | Force 30 FPS | `milk_30_fps` | Switch | Off | — | — |
| 16 | Strict | `milk_strict` | Switch | Off | — | — |
| 17 | Visualization Delay <sup>non-persistent</sup> | `vis_extra_delay_info` | Link | — | — | — |
| 18 | Presets | `list` | Category | — | — | — |
| 23 | 3rd Party Presets | `list_3rdparty` | Category | — | — | — |
| 24 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Presets**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 19 | Rescan Presets <sup>non-persistent</sup> | `vis_rescan` | Action | — | — | — |
| 20 | (untitled `vis_rescan_hint`) | `vis_rescan_hint` | Information | — | — | — |
| 21 | Full Presets Rescan <sup>non-persistent</sup> | `vis_full_rescan` | Action | — | — | — |
| 22 | Hide Unliked Presets | `milk_hide_unliked` | Switch | Off | — | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Visualization On Player Screen

- **Key:** `enable_vis`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Visualization can be switched on with Player Screen button” “Visualization is shown when music is playing”
- **Markers:** non-persistent
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Equalizer Screen Spectrum

- **Key:** `vis_frs_type`
- **Control:** List (`TagListPreference`)
- **Declared default:** `2` → Rounded†
- **Options:**
  - Disabled
  - Classic
  - Rounded
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 3. Visualization in Library

- **Key:** `vis_in_lib`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Visible when visualization on Player Screen is enabled. Depending on visualization preset used, some UI elements may become poorly visible”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 4. Preset Duration

- **Key:** `vis_preset_change_sec`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 15 s (`15`)
- **APK text:** “For By Duration and Shuffle modes” “Change each: %d s”
- **Range:** 3 s to 120 s, step not declared
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 5. Top Visualization Panel Opacity

- **Key:** `vis_panel_faded_alpha`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 60% (`60`)
- **Range:** 0% to 100%, step not declared
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 6. Faded Controls Opacity

- **Key:** `vis_controls_faded_alpha`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 50% (`50`)
- **Range:** 0% to 100%, step not declared
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 7. UI Timeout

- **Key:** `vis_temp_ui_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 1500 ms (`1500`)
- **APK text:** “Time to show UI during active visualization” “%d ms”
- **Range:** 500 ms to 15000 ms, step 100 ms
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 8. Visible Album Art

- **Key:** `vis_aa_visible`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Keep album art visible during visualization”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 9. Ignore Touch

- **Key:** `vis_ignore_touch_faded`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **APK text:** “Ignore first touch in Fade Controls mode”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 10. Track Opacity

- **Key:** `vis_list_faded_alpha`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 25% (`25`)
- **APK text:** “Track labels, rating, menu, and album art (if visible) opacity”
- **Range:** 0% to 100%, step not declared
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 11. Hide System Bars For Full Screen

- **Key:** `vis_fs_hide_bars`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Hide status bar and navigation completely when in Full Screen mode”
- **Markers:** Feature Pack
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 12. Scaled Bars For Faded Controls

- **Key:** `vis_use_compact_bars`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Scale bars visualization to album art area in Fade Controls mode. If disabled, bar visualization is always full-screen”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 13. HD

- **Key:** `milk_hd`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Increased visualization resolution, reduces performance”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 14. Crop Aspect

- **Key:** `milk_crop_aspect`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Crop visualization instead of scaling it, reduces performance for a better visual match”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 15. Force 30 FPS

- **Key:** `milk_30_fps`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Reduce frame rate to 30 frames per second”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 16. Strict

- **Key:** `milk_strict`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Slower .milk presets rendering for a bit better visual match”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 17. Visualization Delay

- **Key:** `vis_extra_delay_info`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Extra delay for better audio/visualization/lyrics match is set per each Output/Device type”
- **Markers:** non-persistent
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 18. Presets

- **Key:** `list`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Evidence note:** Groups: Rescan Presets, vis_rescan_hint, Full Presets Rescan, Hide Unliked Presets.

### 19. Rescan Presets

- **Key:** `vis_rescan`
- **Control:** Action (`ProgressPreference`)
- **Category:** Presets
- **Markers:** non-persistent
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 20. (untitled vis_rescan_hint)

- **Key:** `vis_rescan_hint`
- **Control:** Information (`RawTextPreference`)
- **Category:** Presets
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 21. Full Presets Rescan

- **Key:** `vis_full_rescan`
- **Control:** Action (`ProgressPreference`)
- **Category:** Presets
- **APK text:** “Clear scanned presets info and do the full presets rescan”
- **Markers:** non-persistent
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 22. Hide Unliked Presets

- **Key:** `milk_hide_unliked`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Presets
- **Declared default:** Off
- **APK text:** “Unliked presets are completely hidden. Preset list is reloaded when closed”
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 29](../../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)

### 23. 3rd Party Presets

- **Key:** `list_3rdparty`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 24. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/vis.xml`, `xml/vis.xml`

## Screen-level evidence notes

- The `list` and `list_3rdparty` categories are filled at runtime with built-in and third-party presets.
- The per-output Visualization/Lyrics Delay is referenced here by `vis_extra_delay_info` but stored on the output options screen.

---

← [Theme Settings](Theme%20Settings.md) · [Settings Reference Index](Index.md) · [Glossary](../Glossary.md) →
