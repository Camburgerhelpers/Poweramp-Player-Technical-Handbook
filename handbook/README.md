# Poweramp Player Technical Handbook

**Version:** `v0.1.0-alpha.1` · **Documentation baseline:** Poweramp Player APK build 1031 · **Status:** Unofficial community alpha — technical verification ongoing

> [!WARNING]
> **Unofficial and unverified.**
> This handbook is independently created. It is **not** affiliated with, endorsed, reviewed or verified by the developer of Poweramp. “Poweramp” is a name and trademark of its owner and is used only to identify the application being documented.

## What this is

A technical reference to the settings of **Poweramp Player build 1031** for Android. It explains what each declared setting does, when it matters and how settings interact. It covers audio processing (volume and DVC, equalizer, ReplayGain, transitions, resampling, dither, 64-bit processing, DSD, bit-perfect output), outputs (wired, speaker, USB DAC, Bluetooth, Chromecast), the music library, the interface, Android integration, and maintenance.

- **38 chapters** in 7 parts, plus front matter.
- **42 settings-reference pages** (one per declared settings screen) plus an index, a **Preference Key Index** (452 keys) and a **Glossary**.

## Read this before you use it

- **Build-specific.** It documents build 1031. Newer Poweramp builds exist and may differ in names, defaults, options or behaviour. A build-1031 statement is not automatically wrong for a newer build, but it is not verified for one either.
- **Settings evidence, not runtime proof.** Most content is derived from the settings resources extracted from the build 1031 APK. A declared setting, default or description does not prove how the app behaves on a particular device, Android version or output.
- **Runtime testing is incomplete.** No measurements or listening tests were performed. Open questions are listed in the [Runtime Verification Register](RUNTIME-VERIFICATION-REGISTER.md).
- **Some defaults are inferred.** Values marked † are inferred from option order and are unverified ([About This Edition](00%20Front%20Matter/02%20About%20This%20Edition.md)).
- **Poweramp Equalizer is out of scope.** The separate Poweramp Equalizer app is outside this handbook's primary scope. Controls on Player's main Equalizer screen that are not in the settings XML (such as band gains, preamp, limiter, balance and reverb parameters) are not documented.
- **Preserve your settings.** Before you change anything, use **Export Settings/Data** and copy the file off the device. Its exact scope is not verified, so also note any per-output settings you rely on. Treat **Full Rescan** as high risk until its effect on ratings and play counts is verified ([Chapter 35](Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
- **Protect your hearing.** Lower the volume before you test volume, DVC, Bluetooth, USB DAC or bit-perfect changes. Several of them can jump to full level.

## How to navigate

| If you want to… | Start with |
|---|---|
| A short, safe path through the handbook | [Quick Start](00%20Front%20Matter/03%20Quick%20Start.md) |
| The full list of chapters | [Master Table of Contents](00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) |
| How to read evidence labels and settings tables | [About This Edition](00%20Front%20Matter/02%20About%20This%20Edition.md) |
| Fix a specific problem | [Chapter 38 — Troubleshooting Guide](Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) |
| Look up a setting by screen | [Settings Reference Index](Appendices/Settings%20Reference/Index.md) |
| Look up a setting by key | [Preference Key Index](Appendices/Preference%20Key%20Index.md) |
| Look up a term | [Glossary](Appendices/Glossary.md) |

| Part | Chapters |
|---|---|
| 1 — Getting Oriented | 01–02: the settings map and the audio path |
| 2 — Sound and Audio Processing | 03–11: DVC, EQ, ReplayGain, transitions, resampling, dither, 64-bit, DSD, bit-perfect |
| 3 — Outputs and Devices | 12–17: outputs, USB DAC, Bluetooth, Chromecast, interruptions, buttons |
| 4 — Library and Playback | 18–24: scanning and tags, browsing, playlists and queue, shuffle, search, streams, tracker modules |
| 5 — Interface and Visuals | 25–29: look and feel, player screen, album art, lyrics, visualization |
| 6 — Android Integration | 30–34: notifications, lock screen, Android Auto, scrobbling, background operation |
| 7 — Maintenance and Support | 35–38: backup and restore, purchases, about and support, troubleshooting |

The files are plain Markdown with relative links. They render in GitHub-style viewers and can be opened as an Obsidian vault.

## Evidence labels

| Label | Meaning |
|---|---|
| **APK VERIFIED** | Matches the settings resources extracted from build 1031 during research. Those resources are **not** distributed here, and a declaration does not prove runtime behaviour. |
| **RESEARCH SUPPORTED** | An interpretation that goes beyond the literal declaration (for example the meaning of a key name, or a value inferred from option order, marked †). Not verified. |
| **GENERAL PRINCIPLE** | Background audio or Android knowledge. It describes how such things generally work, not verified Poweramp behaviour. |
| **RUNTIME VERIFICATION REQUIRED** | Depends on the device, Android version, hardware or configuration, or is simply not established. |

## Known limitations

See [Release Notes — v0.1.0-alpha.1](RELEASE-NOTES-v0.1.0-alpha.1.md) for the full list. In short: the extracted evidence and research files are not included; runtime behaviour is largely unverified; † defaults are inferences; the main Equalizer screen, the casting pipeline, stream protocols, export scope and Feature Pack enforcement are outside the evidence; and the treatment of quoted application text is still under review.

## Reporting mistakes

Corrections are welcome, especially device test results for items in the [Runtime Verification Register](RUNTIME-VERIFICATION-REGISTER.md). A useful report names:

1. the chapter or settings-reference page and the exact sentence;
2. the Poweramp version/build, device model and Android version;
3. what you observed (Audio Info contents or screenshots help) and how you tested it.

Report them through the project's GitHub issue tracker: [https://github.com/Camburgerhelpers/Poweramp-Player-Technical-Handbook/issues](https://github.com/Camburgerhelpers/Poweramp-Player-Technical-Handbook/issues). Two issue templates are provided: **Documentation correction** and **Runtime observation**. The repository is currently private, so the tracker is reachable only by invited collaborators until the repository is made public. Please remove personal data, licence details and private paths before posting, and do not upload APK files. Please do not contact the Poweramp developer about errors in this handbook: it is not their publication.

## Third-party text and licence

The independently authored handbook text is licensed under [CC BY 4.0](../LICENSE). The [third-party notice](../THIRD-PARTY-NOTICE.md) clarifies exclusions for Poweramp proprietary material, interface labels and limited necessary quotations. Full application hints have been omitted from the settings-reference pages, and longer quotations in chapters paraphrased. Settings keys, declared values, ranges and dependencies remain documented; consult Poweramp for exact in-app wording.

## Layout

```text
00 Front Matter/                      cover, contents, about this edition, quick start
Part 1 - Getting Oriented/            chapters 01–02
Part 2 - Sound and Audio Processing/  chapters 03–11
Part 3 - Outputs and Devices/         chapters 12–17
Part 4 - Library and Playback/        chapters 18–24
Part 5 - Interface and Visuals/       chapters 25–29
Part 6 - Android Integration/         chapters 30–34
Part 7 - Maintenance and Support/     chapters 35–38
Appendices/Settings Reference/        Index + 42 screen reference pages + Coverage Manifest.json
Appendices/                           Glossary, Preference Key Index
RELEASE-NOTES-v0.1.0-alpha.1.md       current release notes
RUNTIME-VERIFICATION-REGISTER.md      open runtime questions
EDITORIAL-CHANGELOG.md                change history
PUBLICATION-MANIFEST.json             file list with sizes and SHA-256
```

## Release documents

- [Release Notes — v0.1.0-alpha.1](RELEASE-NOTES-v0.1.0-alpha.1.md)
- [Runtime Verification Register](RUNTIME-VERIFICATION-REGISTER.md) (still maintained) · [Editorial Changelog](EDITORIAL-CHANGELOG.md) · [Manifest](PUBLICATION-MANIFEST.json)
- The 1.0.x technical validation and publication QA reports are kept in the project's internal records and are not part of this preview.
