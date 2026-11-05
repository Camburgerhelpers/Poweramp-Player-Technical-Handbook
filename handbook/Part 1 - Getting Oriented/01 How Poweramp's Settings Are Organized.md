---
title: "How Poweramp's Settings Are Organized"
chapter: 1
part: "1 — Getting Oriented"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_dvc"
  - "audio_equ"
  - "audio_focus"
  - "audio_output_device_opts"
  - "audio_outputs_tweaks"
  - "general"
  - "headset"
  - "library_lists"
  - "singlepane"
  - "support"
  - "ui"
  - "vis"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 1 — Getting Oriented › Chapter 01

# 01. How Poweramp's Settings Are Organized

Poweramp Player's configuration is spread over a tree of settings screens. In build 1031 the extracted resources declare **42 screens** holding **500 screen/key declarations** that use **452 distinct preference keys**. Not all of them are settings in the everyday sense. Many are categories, links, actions, or information rows. This chapter maps the tree, explains the two levels at which audio behaviour is configured, and shows how to read the settings entries quoted throughout this handbook.

## The settings tree

The top-level **Settings** menu (screen `singlepane`) opens the major areas. Each entry's in-app summary is quoted from the APK.

| Menu entry | Screen | In-app summary |
|---|---|---|
| Look and Feel | `ui` | “Skin, player interface, language, notifications” |
| Audio | `audio` | “Crossfade, replay gain, volume, output” |
| Visualization | `vis` | “Faded controls opacity, preset duration” |
| Background | `aa_bg` | “Blur, details, intensity, saturation” |
| Album Art | `aa` | “Download, quality, cache cleanup” |
| Library | `library` | “Rescan, music folders, list, queue options” |
| Headset/Bluetooth | `headset` | “Pause/resume on connection, headset buttons” |
| Lock Screen | `lockscreen` | “Poweramp lock screen options” |
| Misc | `misc` | “Scrobbling, Android Auto, other tweaks” |
| About | `general` | “Version/changelog, translations info” |

Below these, an **Other** category holds the link to the separate Poweramp Equalizer app (**Equalizer for Spotify and YouTube Music**), **Get Support**, **Export Settings/Data**, **Import Settings/Data** and **Send Errors To Developer**. Purchase-related entries (Full Version purchase buttons, **Feature Packages**, **Already Purchased?**) are declared with a `removeAsNeeded` attribute. **APK VERIFIED:** the attribute is present. **RUNTIME VERIFICATION REQUIRED:** the conditions under which each entry is hidden (for example after a purchase) are not declared.

The full navigation tree, reconstructed from the declared link targets:

- **Settings** (`singlepane`)
  - **Look and Feel** (`ui`)
    - Skin (`ui_theme`) · Player Screen (`ui_player`) · Lyrics (`ui_lyrics`) · Icon (`ui_icon`)
    - Notifications (`ui_notify`) → Buttons (`ui_mediaactions`)
  - **Audio** (`audio`)
    - Audio Info (runtime diagnostic page)
    - Crossfade, Fade, and Gapless (`fade`) · Replay Gain (`rg`) · Audio Focus (`audio_focus`) · Resampler (`audio_resampler`) · Direct Volume Control (`audio_dvc`) · Bit Perfect (`audio_bit_perfect`) · Advanced Tweaks (`audio_tweaks`)
    - Audio Outputs (`audio_outputs2`)
      - one button per output category → the per-output options screen (`audio_output_device_opts`)
      - Advanced Tweaks (`audio_outputs_tweaks`) → Audio Outputs Detection Log
  - **Visualization** (`vis`) · **Background** (`aa_bg`) · **Album Art** (`aa`)
  - **Library** (`library`) → Lists · Search · Queue · Playlists · Shuffle · Scanner
  - **Headset/Bluetooth** (`headset`) → Last Processed Commands; a link to Misc › Volume Keys Long Press
  - **Lock Screen** (`lockscreen`) → Buttons (`ui_mediaactions`)
  - **Misc** (`misc`) → Buttons (`ui_mediaactions`, for Android Auto)
  - **About** (`general`) → Translations; Feature Packages
  - **Get Support** (`support`) · **Feature Packages** · **Already Purchased?**

Three screens have **no entry point declared** in the settings XML: the Equalizer settings screen (`audio_equ`, with its sub-screens Graphic Equalizer Bands and Tone), the storage maintenance screen (`space`), and the purchase-methods screen (`buy_methods`). They are reached from other parts of the user interface. The equalizer settings are most likely opened from the Equalizer screen itself, but that is **RUNTIME VERIFICATION REQUIRED**. Four link targets point outside the 42 inventoried screens, so their contents are not documented here: `commands_history` (Last Processed Commands), `audio_platform_log` (Audio Outputs Detection Log), a Block Size setting at `settings/peq_equ#peq_blocksize` referenced from the equalizer band settings, and the skin Pro Buttons option at `settings/ui_theme#more_buttons`.

## Global settings and per-output settings

Audio behaviour is configured at two levels, and the distinction explains many "the setting didn't do anything" reports.

1. **Global settings** apply to playback in general. Examples are the switches on the Bit Perfect screen, **Enable Direct Volume Control**, the Audio Focus options, and the Resampler.
2. **Per-output settings** live on the options screen opened from each category on **Audio Outputs** (Wired Headset/AUX, Speaker, Bluetooth, USB DAC, Chromecast, Other Output Devices). The same 57-entry screen definition serves every category. It holds the output driver, sample rate and format, three-state (Auto/Enable/Disable) versions of the Bit Perfect switches, volume type, USB and Chromecast options, and per-output overrides such as **No DVC**, **No Equ/Tone**, **No Duck** and **Ignore Audio Focus**.

Some APK descriptions state the relationship outright. **Duck Volume** says during brief audio-focus interruptions, playback may be lowered unless an output setting overrides ducking. On the Visualization screen, **Visualization Delay** says “Extra delay for better audio/visualization/lyrics match is set per each Output/Device type”. **RESEARCH SUPPORTED:** a per-output “Auto” value presumably defers to the global switch, and a per-output “Enable/Disable” overrides it. The labels and the parallel structure support this reading, but the XML does not state it. Confirm it with **Audio Info** on the device ([Chapter 02 — The Poweramp Audio Path](02%20The%20Poweramp%20Audio%20Path.md)).

## Kinds of entries

| Entry kind | Count | What it is |
|---|---:|---|
| Switch | 184 | On/off preference |
| List | 61 | Single choice from a list (one is a multi-select list) |
| Action | 62 | Performs an operation (rescan, export, reset, restore defaults) |
| Link | 51 | Opens another screen, page or app |
| Information | 50 | Static or runtime-generated text; many show device status |
| Slider | 29 | Numeric value on a seek bar |
| Knob | 10 | Numeric value on a rotary control (gains, cutoff, tone) |
| Category | 18 | Heading that groups entries |
| Purchase and restore controls | 15 | Storefront purchase and restore rows |
| Other | 20 | Buttons, tag lists, text fields, colour picker, skin lists, status rows, warnings |

Only **287 entries** are switches or adjustable values. Of those, **168 declare a default** in the XML. The remaining 119 adjustable entries take their initial value from application code or from the device.

## Reading a settings entry

Every settings table in this handbook, and every appendix entry, uses the same fields.

- **Setting and key.** The title is the in-app label taken from the APK resources. The key is the internal preference name. Keys are stable identifiers and the reliable way to cross-reference a setting.
- **Declared default.** This is the `android:defaultValue` attribute. *Not declared* means the XML is silent. It does **not** mean Off. Even a declared default only describes a fresh configuration; it says nothing about the value on a device that has been used, restored from backup, or adjusted by the app.
- **Values and range.** List options are shown with their stored values. Numeric ranges are converted with the declared scale and display format: `no_dvc_gain_mb` stores `-600` and displays “%.1fdB” with scale 100, so its default is −6.0 dB.
- **Positional values (†).** Some lists declare labels but no values. This handbook then assumes the first label is `0`, the second `1`, and so on. **RESEARCH SUPPORTED** inference; it is marked † wherever it is used.
- **Depends on.** The Android `dependency` attribute. **GENERAL PRINCIPLE:** in standard Android preferences, a dependent entry is disabled (greyed out) while its parent switch is off. Poweramp uses custom preference classes, so the exact presentation is **RUNTIME VERIFICATION REQUIRED**.
- **Markers.** *Experiment* (six entries carry an “Experiment” badge), *Feature Pack* (nine entries associated with a paid Feature Package, see [Chapter 36 — Purchases and Feature Packages](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)), and *non-persistent* (73 entries declared `android:persistent="false"`, which mostly act on data such as presets rather than storing a simple preference).

## Restore Defaults

Thirty-one screens contain a **Restore Defaults** action. **APK VERIFIED:** placement on those screens. **RUNTIME VERIFICATION REQUIRED:** the actual reset scope, including whether each action resets only the settings on its own screen (RV-002). Three other things are often confused with it, and all three are covered in [Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md):

- **Export/Import Settings/Data** — settings backup and restore; export and restore coverage is unverified, including whether it covers the whole configuration. Import may overwrite current settings (RV-056).
- **Dedicated resets** — equalizer presets, reverb presets, play statistics, the album-art “not found” status, AutoEq suggestions.
- **Purchase restoration** — re-validates a licence with a storefront and never touches settings ([Chapter 36 — Purchases and Feature Packages](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)).

## Settings search and shortcuts

Fifty-one entries carry an `app:skipSearch` attribute and five carry an `app:searchSummary` text. Together these imply a settings search index: the first excludes entries from search results, the second supplies text for them. The research's source-discovery list also names `settings_search` drawable and `merge_settings_search` layout resources. **RESEARCH SUPPORTED** inference from attribute and resource names. A few `skipSearch` values name app editions rather than `true`/`false`: `play,huawei` on **Visit Website**, `play` on **Forum**, and `peq` on **Compensate DVC Volume**. The `peq` token suggests the preference framework is shared with the separate Poweramp Equalizer app. This handbook documents only the declarations extracted from Poweramp Player.

**Settings Shortcuts in Main Menu** on Look and Feel puts up to ten settings shortcuts into the main menu (0 to 10, step not declared). **Library List Options** notes that list options are “also available from Library header menu”.

## Poweramp Player is not Poweramp Equalizer

Poweramp Equalizer is a separate application that applies Poweramp's sound processing to other players. Player build 1031 refers to it twice: the **Equalizer for Spotify and YouTube Music** link, which opens its Google Play page, and **Export Presets to the Poweramp Equalizer app**, which exports Player presets to it. The Player APK evidence does not show how the two apps share settings, DVC state or presets beyond the one-way export action; treat any assumption about that as **RUNTIME VERIFICATION REQUIRED**. Every setting in this handbook belongs to Poweramp Player unless stated otherwise. Poweramp Equalizer is outside this handbook's primary scope.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** screen IDs, keys, titles, descriptions, link targets, declared defaults, dependencies, markers, counts.
- **RESEARCH SUPPORTED:** the per-output “Auto” relationship, positional list values, the settings-search interpretation, the meaning of the `peq` edition token.
- **RUNTIME VERIFICATION REQUIRED:** entry points of `audio_equ`, `space` and `buy_methods`; visibility rules for `removeAsNeeded` entries; the scope of each Restore Defaults; the presentation of dependent entries.

## Related

- [Main Settings Menu](../Appendices/Settings%20Reference/Main%20Settings%20Menu.md) — the top-level menu reference.
- [Settings Reference Index](../Appendices/Settings%20Reference/Index.md) — every screen with its location and chapters.
- [Chapter 02 — The Poweramp Audio Path](02%20The%20Poweramp%20Audio%20Path.md) — how the audio settings map onto the signal path.

---

← [About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 02 — The Poweramp Audio Path](02%20The%20Poweramp%20Audio%20Path.md) →
