---
title: "Backup, Restore and Maintenance"
chapter: 35
part: "7 — Maintenance and Support"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "aa"
  - "audio_equ"
  - "audio_tweaks"
  - "library"
  - "library_lists"
  - "library_playlists"
  - "singlepane"
  - "space"
  - "ui_lyrics"
  - "vis"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 7 — Maintenance and Support › Chapter 35

# 35. Backup, Restore and Maintenance

“Restore” means four different things in Poweramp, and mixing them up is the most common way to lose a working configuration. This chapter separates them: **backing up and restoring your configuration**, **Restore Defaults (reset scope unverified)**, **dedicated resets and destructive maintenance actions**, and **restoring purchases**. The last is a licensing matter and is covered in [Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md). The chapter ends with a maintenance routine and a safe-change protocol.

## Four kinds of “restore”

| Operation | What it affects | Where | Reversible? |
|---|---|---|---|
| **Export / Import Settings/Data** | your configuration (scope not verified, see below) | Settings › Other | only for whatever the export actually contains; Import may overwrite current settings |
| **Restore Defaults** | reset scope unverified (RV-002) | the bottom of 31 individual screens (APK-verified placement) | only through a prior export that covers those settings, or your own notes |
| **Dedicated resets and rescans** | specific data: presets, statistics, caches, the tag database | various screens | mostly no |
| **Restore purchases** | your licence or entitlement with a storefront | Already Purchased? and Feature Packages | does not touch settings or data |

## Backing up: Export and Import

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Export Settings/Data <sup>non-persistent</sup> | `settings_export` | Action | — | — | — |
| Import Settings/Data <sup>non-persistent</sup> | `settings_import` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Main Settings Menu](../Appendices/Settings%20Reference/Main%20Settings%20Menu.md).*


These two actions on the main Settings menu provide settings export and import in build 1031; whole-configuration coverage is unverified. **RUNTIME VERIFICATION REQUIRED:** the XML declares no description, so the file format, the location, and whether the export includes equalizer presets, the library database, playlists, ratings, play statistics or per-output settings are not established by the evidence. Treat the export as a settings backup until you have confirmed more on your device.

> [!WARNING]
> **Import may overwrite your current settings.**
> Whether Import Settings/Data replaces or merges the current configuration, and whether it restores per-output settings, still need device testing (**RUNTIME VERIFICATION REQUIRED:** RV-056). Before importing, export the *current* state to a separate file so you can go back. An export made on a different build may not restore every setting.

Recommended practice:

1. Export **before** any significant change: a new output setup, a large equalizer rework, or an Android upgrade.
2. Copy the exported file off the device.
3. Export playlists separately with **Export Poweramp Playlists** ([Chapter 20 — Playlists and the Queue](../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)).
4. After importing, check a few key settings (output driver, DVC, ReplayGain) before you trust the result.

## Restore Defaults

Thirty-one screens have a **Restore Defaults** action, always the last entry. **APK VERIFIED:** placement on those screens. **RUNTIME VERIFICATION REQUIRED:** the actual reset scope, including whether each action resets only its own screen (RV-002).

| Area | Screens with Restore Defaults |
|---|---|
| Audio | [Crossfade and Gapless Settings](../Appendices/Settings%20Reference/Crossfade%20and%20Gapless%20Settings.md) · [ReplayGain Settings](../Appendices/Settings%20Reference/ReplayGain%20Settings.md) · [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md) · [Resampler Settings](../Appendices/Settings%20Reference/Resampler%20Settings.md) · [Direct Volume Control](../Appendices/Settings%20Reference/Direct%20Volume%20Control.md) · [Bit-Perfect and Precision Settings](../Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) · [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md) |
| Outputs | [Audio Output Selection](../Appendices/Settings%20Reference/Audio%20Output%20Selection.md) · [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) (per output) |
| Equalizer | [Equalizer Settings](../Appendices/Settings%20Reference/Equalizer%20Settings.md) · [Equalizer Band Settings](../Appendices/Settings%20Reference/Equalizer%20Band%20Settings.md) · [Bass and Treble Tone Settings](../Appendices/Settings%20Reference/Bass%20and%20Treble%20Tone%20Settings.md) |
| Library | [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md) · [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md) · [Playlist Settings](../Appendices/Settings%20Reference/Playlist%20Settings.md) · [Playback Queue](../Appendices/Settings%20Reference/Playback%20Queue.md) · [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md) · [Search Settings](../Appendices/Settings%20Reference/Search%20Settings.md) · [Shuffle Settings](../Appendices/Settings%20Reference/Shuffle%20Settings.md) |
| Interface | [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md) · [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md) · [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md) · [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md) · [Media Buttons and Actions](../Appendices/Settings%20Reference/Media%20Buttons%20and%20Actions.md) · [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md) · [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md) · [Background Appearance Settings](../Appendices/Settings%20Reference/Background%20Appearance%20Settings.md) |
| Other | [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md) · [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md) · [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md) |

If you consider Restore Defaults when one area is misbehaving, remember that its placement on a screen does not establish its reset scope (RV-002). Record working settings before any reset, including any working per-output driver, rate and quirk settings.

## Dedicated resets and destructive actions

| Action | Key | Effect (APK text) | Risk |
|---|---|---|---|
| **Restore Equalizer Presets** | `reset_eq_presets` (two screens) | “Built-in and AutoEq equalizer presets will be restored to defaults” | **high:** customised presets lost |
| **Restore Reverb Presets** | `reset_reverb_presets` | “Built-in reverb presets will be restored/set to defaults” | medium |
| **Reset stats** | `reset_stats` | “Reset tracks played times, last played, and related stats” | **high:** history lost |
| **Full Rescan** | `erase_and_rescan` (two screens) | “Clear tag info database and rescan Library/Folders. Use when storage/SD card changed, on major ROM updates, or when folders are moved on storage” | **high until verified:** long rescan; the effect on ratings, play counts, progress and playlist links is not verified (RV-040). Export settings and playlists first; try a normal Rescan first |
| **Delete Cache** | `clear_aa_cache` (two screens) | “Poweramp images cache will be deleted” | low: images regenerated or re-downloaded |
| **Full Presets Rescan** | `vis_full_rescan` (two screens) | “Clear scanned presets info and do the full presets rescan” | low |
| **Reset Negative Status** | `reset_negative_aa_status` | “Clear stored "not-found" status for album/artist images” | none |
| **Reset the Disabled AutoEq Suggestions** | `_clear_autoeq_known_devices` | “AutoEq preset suggestions will reappear for all devices” | none |
| **Rescan Lyrics Tags** | `rescan_lyrics_tags` | “Force rescan tracks which may contain lyrics tags, including SYLT” | none |
| **Delete** (track menu) | `enable_deletion` | “deletes song files (after confirmation)” | **irreversible:** files removed |

Related: **Remove Playlist Entries On Track Deletion** decides whether deleting a track also removes it from playlists ([Chapter 20 — Playlists and the Queue](../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)).

## The storage maintenance screen

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Delete Cache <sup>non-persistent</sup> | `clear_aa_cache` | Action | — | — | — |
| Full Rescan <sup>non-persistent</sup> | `erase_and_rescan` | Action | — | — | — |
| Full Presets Rescan <sup>non-persistent</sup> | `vis_full_rescan` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Storage and Maintenance](../Appendices/Settings%20Reference/Storage%20and%20Maintenance.md).*


The `space` screen groups three space-related actions that also exist on their home screens. No inventoried screen links to it, so how it is opened is not declared. **RUNTIME VERIFICATION REQUIRED.**

## Maintenance routine

| When | Do |
|---|---|
| Before changing outputs or EQ, and before Android updates | Export Settings/Data |
| After adding or reorganising music | Rescan (automatic if Auto-scan is on) |
| After changing split characters or tag encoding | Rescan; Full Rescan only if lists still look stale, after a backup |
| After an SD card swap, moving folders, or a major ROM update | Export settings and playlists, then Full Rescan, as the APK advises |
| Covers missing after you added art | Reset Negative Status, then rescan |
| Storage tight | Delete Cache (images regenerate on demand) |
| New visualization presets not showing | Rescan Presets; Full Presets Rescan if needed |

## Safe-change protocol

1. **Baseline:** note the current behaviour, open Audio Info, and export settings ([Chapter 02 — The Poweramp Audio Path](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)).
2. **One change:** alter one setting only.
3. **Test:** use the same track, the same output and a safe volume.
4. **Keep or revert:** revert immediately if the change didn't help. Don't stack unproven changes.
5. **Escalate gradually:** individual setting → consider Restore Defaults (placement verified on 31 screens; reset scope unverified, RV-002; record working settings first) → Import a known-good export (after exporting the current state to a separate file, because Import may overwrite it; replacement versus merge and per-output restoration remain unverified, RV-056).

## Evidence and limitations

- **APK VERIFIED:** the 31 Restore Defaults locations, all action texts, and the duplicate placements.
- **RUNTIME VERIFICATION REQUIRED:** the export scope and format, the scope of each Restore Defaults, what Full Rescan preserves, and the entry point of the storage screen.

## Related

- [Main Settings Menu](../Appendices/Settings%20Reference/Main%20Settings%20Menu.md) · [Storage and Maintenance](../Appendices/Settings%20Reference/Storage%20and%20Maintenance.md)
- [Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md) · [Chapter 37 — About, Updates and Support](37%20About,%20Updates%20and%20Support.md) · [Chapter 38 — Troubleshooting Guide](38%20Troubleshooting%20Guide.md)

---

← [Chapter 34 — Background Operation and Compatibility](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md) →
