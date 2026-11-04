---
title: "Visualization"
chapter: 29
part: "5 — Interface and Visuals"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "vis"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 5 — Interface and Visuals › Chapter 29

# 29. Visualization

Poweramp can render music visualizations on the Player Screen and in the library, and it shows a spectrum on the Equalizer screen. The visualization settings cover two kinds of visualization: bar (spectrum) visualizations, and preset-based visualizations that use the MilkDrop `.milk` preset format, from the built-in set and from installed third-party packs. The settings are on **Settings › Visualization** (screen `vis`).

## Turning visualization on

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Visualization On Player Screen <sup>non-persistent</sup> | `enable_vis` | Switch | Not declared | — | — |
| Visualization in Library | `vis_in_lib` | Switch | Off | — | — |
| Equalizer Screen Spectrum | `vis_frs_type` | List | `2` → Rounded† | Disabled; Classic; Rounded (positional†) | — |

*Source: APK build 1031 settings XML — reference: [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Visualization On Player Screen:** “Visualization can be switched on with Player Screen button” “Visualization is shown when music is playing”.
- **Visualization in Library:** “Visible when visualization on Player Screen is enabled. Depending on visualization preset used, some UI elements may become poorly visible”.
- **Equalizer Screen Spectrum:** Disabled, Classic or Rounded. The declared default `2` is Rounded under the inferred † mapping (unverified).

## Presets

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Preset Duration | `vis_preset_change_sec` | Slider | 15 s (`15`) | 3 s to 120 s, step not declared | — |
| Hide Unliked Presets | `milk_hide_unliked` | Switch | Off | — | — |
| Rescan Presets <sup>non-persistent</sup> | `vis_rescan` | Action | — | — | — |
| Full Presets Rescan <sup>non-persistent</sup> | `vis_full_rescan` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md).*


- **Preset Duration:** “For By Duration and Shuffle modes” “Change each: %d s”, from 3 to 120 seconds (default 15).
- **Hide Unliked Presets:** “Unliked presets are completely hidden. Preset list is reloaded when closed”.
- **Rescan Presets** finds new presets. **Full Presets Rescan:** “Clear scanned presets info and do the full presets rescan”. The full rescan also appears on the storage maintenance screen ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
- The **Presets** and **3rd Party Presets** categories are filled at runtime.

## Faded controls and the UI during visualization

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Faded Controls Opacity | `vis_controls_faded_alpha` | Slider | 50% (`50`) | 0% to 100%, step not declared | — |
| Top Visualization Panel Opacity | `vis_panel_faded_alpha` | Slider | 60% (`60`) | 0% to 100%, step not declared | — |
| Track Opacity | `vis_list_faded_alpha` | Slider | 25% (`25`) | 0% to 100%, step not declared | — |
| UI Timeout | `vis_temp_ui_ms` | Slider | 1500 ms (`1500`) | 500 ms to 15000 ms, step 100 ms | — |
| Ignore Touch | `vis_ignore_touch_faded` | Switch | Not declared | — | — |
| Visible Album Art | `vis_aa_visible` | Switch | On | — | — |
| Scaled Bars For Faded Controls | `vis_use_compact_bars` | Switch | On | — | — |
| Hide System Bars For Full Screen <sup>Feature Pack</sup> | `vis_fs_hide_bars` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md).*


- **Faded Controls Opacity** (default 50 %), **Top Visualization Panel Opacity** (60 %) and **Track Opacity** (25 %; “Track labels, rating, menu, and album art (if visible) opacity”) set how visible the UI stays over the visualization.
- **UI Timeout:** “Time to show UI during active visualization” “%d ms”. The range is 0.5–15 s and the default is 1.5 s.
- **Ignore Touch:** “Ignore first touch in Fade Controls mode”. The first tap then only reveals the controls.
- **Visible Album Art** (on by default) keeps the cover visible during visualization.
- **Scaled Bars For Faded Controls:** “Scale bars visualization to album art area in Fade Controls mode. If disabled, bar visualization is always full-screen”.
- **Hide System Bars For Full Screen** (Feature Pack): “Hide status bar and navigation completely when in Full Screen mode”.

## Rendering quality and performance

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| HD | `milk_hd` | Switch | Off | — | — |
| Crop Aspect | `milk_crop_aspect` | Switch | Off | — | — |
| Force 30 FPS | `milk_30_fps` | Switch | Off | — | — |
| Strict | `milk_strict` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md).*


| Option | APK text | Trade-off |
|---|---|---|
| HD | “Increased visualization resolution, reduces performance” | sharper; more GPU load and heat |
| Crop Aspect | “Crop visualization instead of scaling it, reduces performance for a better visual match” | fills the screen; costs performance |
| Force 30 FPS | “Reduce frame rate to 30 frames per second” | caps rendering at 30 frames per second, which reduces GPU load compared with higher frame rates (**GENERAL PRINCIPLE**) |
| Strict | “Slower .milk presets rendering for a bit better visual match” | closer to the original MilkDrop look; slower |

All four are off by default. On a phone that heats up or stutters, keep HD and Strict off and turn **Force 30 FPS** on.

## Synchronization

**Visualization Delay**: “Extra delay for better audio/visualization/lyrics match is set per each Output/Device type”. The delay is the per-output **Visualization/Lyrics Delay** ([Chapter 12 — Choosing an Audio Output](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 14 — Bluetooth Audio](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)).

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, ranges, defaults, options and quoted texts.
- **GENERAL PRINCIPLE:** MilkDrop preset format, GPU cost.
- **RUNTIME VERIFICATION REQUIRED:** preset modes (the APK mentions “By Duration and Shuffle modes”, but no mode selector appears in the XML), the defaults of Visualization On Player Screen and Ignore Touch, the third-party preset sources, and Feature Pack gating.

## Related

- [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md)
- [Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md) · [Chapter 28 — Lyrics](28%20Lyrics.md) · [Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

---

← [Chapter 28 — Lyrics](28%20Lyrics.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 30 — Notifications and Media Buttons](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) →
