# Poweramp Player Technical Handbook

An **unofficial, community-maintained technical handbook** for [Poweramp Player](https://powerampapp.com/), focused on understanding its settings, audio-processing options, output paths, Android integration, and troubleshooting.

> **Status: Alpha release in preparation.** The initial documentation baseline is **Poweramp Player APK build 1031**. The repository is not yet a verified reference for newer builds. Check the eventual release notes for the actual publication status.

**Not affiliated with, endorsed by, or maintained by the Poweramp developer.** Poweramp and related trademarks belong to their respective owners. For product support and official downloads, use the [Poweramp website](https://powerampapp.com/) or [official forum](https://forum.powerampapp.com/).

## What this project covers

The manuscript contains **38 chapters across seven parts**, plus a settings-reference appendix covering **42 identified settings screens** and an index of **452 unique preference keys**. These figures reflect the current manuscript inventory and are subject to final release validation.

Topics include:

- Audio routing, Direct Volume Control (DVC), ReplayGain, EQ, resampling, DSD, and bit-perfect playback.
- Bluetooth audio, USB DACs, Chromecast, and device-specific output considerations.
- Library scanning, metadata, playlists, queues, shuffle, and search.
- Appearance, album art, lyrics, visualizations, and Android integration.
- Backups, maintenance, troubleshooting, and limits of what the APK reveals.

**Scope boundary:** This handbook documents **Poweramp Player**, not the separate Poweramp Equalizer app. An Equalizer-specific project may be considered later.

## Evidence and limitations

A preference key or settings-string extracted from an APK does **not** establish how a feature behaves on every Android device. The handbook distinguishes APK-derived evidence, broader technical explanations, and matters requiring runtime verification. Some default-value mappings and device-specific behavior remain provisional.

In particular, do not assume that Bluetooth codec rates, DVC behavior, USB audio capabilities, or Android audio paths are identical on every phone, firmware, and output device.

**Before trying any maintenance operation**, preserve your settings and library data. Full Rescan, imports, resets, and device-specific audio changes may have effects that are not fully verified by this project.

## Reading the handbook

The public chapter navigation and appendices will be linked here when the reviewed alpha manuscript is added. No release archive is available from this scaffold alone.

## Project status and future work

See [ROADMAP.md](ROADMAP.md) for the planned build-1031 alpha, subsequent accuracy corrections, device-tested findings, and a possible build-1035 update.

## Found a mistake?

Use [GitHub Issues](../../issues) for specific documentation errors or reproducible runtime observations. Include the chapter, setting name/key, app build, Android version, device/output, expected behavior, and what you actually observed. Please **do not post personal data, license details, or copyrighted APK files**.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the reporting format. For help using the actual app, the official Poweramp community may be a better first stop.

## Copyright and licensing

**Public licensing is under review.** No repository-wide open-content license has been selected. Any third-party Poweramp text, names, or graphics remain subject to their respective rights. Do not assume that this draft grants permission to redistribute third-party application resources. A publication license and quotation review must be resolved before the repository becomes public.
