---
title: "Poweramp Player Technical Handbook"
document: "Cover"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
version: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
---

# Poweramp Player Technical Handbook

## v0.1.0-alpha.1 · Documentation baseline: APK build 1031 · Unofficial community alpha

> [!WARNING]
> **Unofficial community alpha — technical verification ongoing.**
> This handbook is independently created. It is not affiliated with, endorsed, reviewed or verified by the developer of Poweramp. It documents build 1031 only; newer builds may differ. Settings descriptions derived from the APK do not prove how the app behaves on a given device, and many behaviours have not yet been tested at runtime. Export your settings before you change anything, and lower the volume before you test audio changes.

A technical handbook for Poweramp Player covering audio processing, outputs and devices, the music library, the interface, Android integration, and maintenance. It is written for music enthusiasts, audio engineers, power users and Android enthusiasts.

| Publication data | |
|---|---|
| Application | Poweramp Player (Android) |
| Application build documented | **1031** |
| Version | v0.1.0-alpha.1 |
| Status | Unofficial community alpha — technical verification ongoing |
| Affiliation | None. Not affiliated with or endorsed by the Poweramp developer |
| Content build date | 21 October 2026 (prepared for alpha release 4 November 2026) |
| Previous internal versions | 1.0.0 and 1.0.1 publication candidates (not released) |
| Structure | 7 parts · 38 chapters · 42 settings-reference pages plus index · glossary · key index |
| Evidence basis | Settings resources extracted from the build 1031 APK: 500 screen/key declarations on 42 screens (452 distinct keys), with string resources resolved during the research phase |
| Runtime status | Static evidence. Behaviour that depends on the device, Android version or connected hardware is labelled **RUNTIME VERIFICATION REQUIRED** throughout |

## Scope

**Covered.** Every settings screen declared in the Poweramp Player build 1031 resources that the research extracted, explained in chapters and listed exhaustively in the settings reference. This includes audio processing (volume and DVC, equalizer, ReplayGain, transitions, resampling, formats and dither, 64-bit processing, DSD, bit-perfect output), output devices (wired, speaker, USB DAC, Bluetooth, Chromecast), library and playback, interface and visuals, Android integration, purchases and support.

**Not covered.** The separate **Poweramp Equalizer** app, except where Player refers to it. Screens and controls that live outside the settings XML, such as the main Equalizer screen and the Music Folders dialog. Measurements and listening tests. Prices and storefront terms. Behaviour of other Poweramp builds.

**Independence.** This is independent documentation. It is not affiliated with or endorsed by the developer of Poweramp. “Poweramp” is a name and trademark of its owner and is used here only to identify the application being described.

**Third-party text.** This handbook quotes text from the Poweramp Player application. Setting titles, option labels, summaries and hint texts are reproduced verbatim in quotation marks, and the settings-reference appendices contain several hundred such quotations (marked **APK text**). That quoted material belongs to its owner and is not the handbook authors' original work. The application binary and its resource files are not included. The redistribution treatment of these quotations is an open release-review item.

**Scope.** The separate **Poweramp Equalizer** app is outside this handbook's primary scope.

## Start here

- [Quick Start](03%20Quick%20Start.md): a short, safe path through the handbook for new readers.
- [Master Table of Contents](01%20Master%20Table%20of%20Contents.md)
- [About This Edition](02%20About%20This%20Edition.md): evidence labels, conventions, and how to read the settings tables.
- [Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md): the settings map.
- [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md): symptom-based troubleshooting.
- [Settings Reference Index](../Appendices/Settings%20Reference/Index.md): the complete declaration reference.

---

[Contents](01%20Master%20Table%20of%20Contents.md) →
