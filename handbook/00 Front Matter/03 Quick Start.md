---
title: "Quick Start"
document: "Front matter"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
---

[Contents](01%20Master%20Table%20of%20Contents.md) › Front matter

# Quick Start

This page is a short, safe path into the handbook. It does not replace the chapters. Every step links to the chapter that explains it in full, with its evidence labels and limitations.

> [!WARNING]
> **Unofficial alpha for Poweramp Player build 1031.**
> Not affiliated with or endorsed by the Poweramp developer. Newer builds may differ. Settings descriptions come from the app's resources and do not prove how your device behaves.

## 1. Before you change anything

1. **Export your settings.** Settings › **Export Settings/Data**, then copy the file off the device. The export's exact scope is not verified, so also write down any per-output settings you rely on ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
2. **Export your playlists** with **Export Poweramp Playlists** ([Chapter 20](../Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md)).
3. **Record a baseline.** Play a known track and open **Audio Info** (Settings › Audio, or long-press the small meta info on the player screen). Note the output, driver, rate and format ([Chapter 02](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)).

> [!CAUTION]
> **Protect your hearing and your equipment.**
> Lower the volume of the phone, DAC or amplifier, and take headphones off, before you test volume type, hardware-volume sync, DVC, Bluetooth Absolute Volume, USB DAC or bit-perfect changes. Several of these can jump to full level.

## 2. Find your way

| You want to… | Go to |
|---|---|
| Understand how settings are organised (global vs per output) | [Chapter 01](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md) |
| See where each setting acts on the sound | [Chapter 02](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md) |
| Understand volume, DVC and headroom | [Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md) |
| Set up the equalizer sensibly | [Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md) |
| Use a USB DAC | [Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) |
| Use Bluetooth headphones or a car | [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 32](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) |
| Stop playback from being interrupted or killed in the background | [Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md), [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |
| Fix a specific symptom | [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) |
| Look up one setting | [Settings Reference Index](../Appendices/Settings%20Reference/Index.md) or [Preference Key Index](../Appendices/Preference%20Key%20Index.md) |
| Look up a term | [Glossary](../Appendices/Glossary.md) |

## 3. Read the labels

Statements carry an evidence label. **APK VERIFIED** means the statement matches the settings resources of build 1031, not that the behaviour was tested. **RESEARCH SUPPORTED** is an interpretation. **GENERAL PRINCIPLE** is background knowledge. **RUNTIME VERIFICATION REQUIRED** means it depends on your device or is not established. A dagger (†) marks a value inferred from option order, which may be wrong. Details: [About This Edition](02%20About%20This%20Edition.md).

## 4. Change one thing at a time

Change one setting, replay the same passage at a safe level, and compare Audio Info. Keep the change only if it helped. If an area misbehaves after many changes, that screen's **Restore Defaults** resets it (scope not verified). Importing an export **replaces** your current settings, so export the current state first ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).

## 5. Actions to treat with care

| Action | Why |
|---|---|
| **Full Rescan** | Clears the tag database. Its effect on ratings, play counts and progress is not verified. Back up first; try a normal Rescan first |
| **Import Settings/Data** | Replaces current settings |
| **Import Ratings** (playlists) | Can overwrite current ratings from old playlist files |
| **Restore Equalizer Presets** | Restores built-in and AutoEq presets to defaults |
| **Reset stats** | Clears play history |
| **Load custom .so library** | Loads native code; use only a library you trust completely |

---

← [About This Edition](02%20About%20This%20Edition.md) · [Contents](01%20Master%20Table%20of%20Contents.md) · [Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md) →
