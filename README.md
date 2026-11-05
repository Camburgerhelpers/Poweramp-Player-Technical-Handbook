# Poweramp Player Technical Handbook

An **unofficial, community-maintained technical handbook** for [Poweramp Player](https://powerampapp.com/), focused on understanding its settings, audio-processing options, output paths, Android integration, and troubleshooting.

> **Release: `v0.1.0-alpha.1` — community alpha.** Documentation baseline: **Poweramp Player APK build 1031**. Technical verification is ongoing, with 59 open runtime questions. Newer builds may differ.

**Not affiliated with, endorsed by, or maintained by the Poweramp developer.** Poweramp and related trademarks belong to their respective owners. For product support and official downloads, use the [Poweramp website](https://powerampapp.com/) or [official forum](https://forum.powerampapp.com/).

## What this project covers

The manuscript contains **38 chapters across seven parts**, plus a settings-reference appendix covering **42 identified settings screens** and an index of **452 unique preference keys**.

Topics include:

- Audio routing, Direct Volume Control (DVC), ReplayGain, EQ, resampling, DSD, and bit-perfect playback.
- Bluetooth audio, USB DACs, Chromecast, and device-specific output considerations.
- Library scanning, metadata, playlists, queues, shuffle, and search.
- Appearance, album art, lyrics, visualizations, and Android integration.
- Backups, maintenance, troubleshooting, and limits of what the APK reveals.

**Scope boundary:** This handbook documents **Poweramp Player**, not the separate Poweramp Equalizer app. An Equalizer-specific project may be considered later.

## Reading the handbook

The manuscript lives in [`handbook/`](handbook/README.md).

| Start here | |
|---|---|
| [Quick Start](handbook/00%20Front%20Matter/03%20Quick%20Start.md) | a short, safe path for new readers |
| [Master Table of Contents](handbook/00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) | all 38 chapters |
| [About This Edition](handbook/00%20Front%20Matter/02%20About%20This%20Edition.md) | evidence labels, conventions, how to read the settings tables |
| [Troubleshooting Guide](handbook/Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) | symptom-based fixes |
| [Settings Reference Index](handbook/Appendices/Settings%20Reference/Index.md) · [Preference Key Index](handbook/Appendices/Preference%20Key%20Index.md) · [Glossary](handbook/Appendices/Glossary.md) | reference |
| [Release Notes — v0.1.0-alpha.1](handbook/RELEASE-NOTES-v0.1.0-alpha.1.md) | known limitations and verification status |
| [Runtime Verification Register](handbook/RUNTIME-VERIFICATION-REGISTER.md) | open questions that need device testing |

## Evidence and limitations

A preference key or settings string extracted from an APK does **not** establish how a feature behaves on every Android device. The handbook labels statements as **APK VERIFIED**, **RESEARCH SUPPORTED**, **GENERAL PRINCIPLE** or **RUNTIME VERIFICATION REQUIRED** (definitions in [About This Edition](handbook/00%20Front%20Matter/02%20About%20This%20Edition.md)). Values marked † are inferred from option order and are unverified.

In particular, do not assume that Bluetooth codec rates, DVC behavior, USB audio capabilities, or Android audio paths are identical on every phone, firmware, and output device.

**Before trying any maintenance operation**, preserve your settings and library data. Full Rescan, imports, resets, and device-specific audio changes may have effects that are not fully verified by this project.

## Project status and future work

See [ROADMAP.md](ROADMAP.md) for the planned build-1031 alpha, subsequent accuracy corrections, device-tested findings, and a possible build-1035 update.

## Found a mistake?

Use [GitHub Issues](https://github.com/Camburgerhelpers/Poweramp-Player-Technical-Handbook/issues) for specific documentation errors (template: **Documentation correction**) or reproducible runtime observations (template: **Runtime observation**). Include the chapter, setting name/key, app build, Android version, device/output, expected behavior, and what you actually observed. Please **do not post personal data, license details, or copyrighted APK files**.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the reporting format. For help using the actual app, the official Poweramp community may be a better first stop.

## Copyright and licensing

The handbook's **original writing** is licensed under [CC BY 4.0](LICENSE). The [third-party notice](THIRD-PARTY-NOTICE.md) explains exclusions for Poweramp proprietary resources, functional labels and necessary short excerpts. Full in-app hints have been removed from settings-reference pages and longer chapter quotations paraphrased. This license does not authorize redistribution of the Poweramp application's own resources.
