# Editorial Changelog

**Poweramp Player Technical Handbook · documentation baseline APK build 1031**

The newest entry is first. Entries for 1.0.0 and 1.0.1 are historical records of internal candidate versions that were not released.

## v0.1.0-alpha.1 — public-export candidate (2026-11-04)

Changes after independent review of the private alpha:

| Area | Change |
|---|---|
| About This Edition | Corrected the `xml`/`xml-v22` description: 500 `xml/` and 426 `xml-v22/` declarations; 74 only in `xml/`; 43 shared declarations differ only in `android:singleLineTitle`. |
| README, release notes | Error reporting now points to the project's GitHub issue tracker and its two templates; open publication blockers (licence, quoted text) stated. |
| File set and manifest | Internal release-preparation records are excluded from the distribution file set; `PUBLICATION-MANIFEST.json` regenerated for the distributed files only. |
| Setting titles | `hier_no_advance`, `no_sort_field`, `pl_no_dups` kept as displayed; differences from the raw research catalog are consistent with Android string escaping. |
| Private GitHub preview | The historical technical validation and publication QA reports are excluded from the preview and kept in internal records; references in the contents page, README, About This Edition and release notes updated. |

## v0.1.0-alpha.1 (alpha release preparation, 2026-11-04)

First public-alpha preparation of the 1.0.1 content, following an independent read-only audit. Summary below; full list in the [Release Notes — v0.1.0-alpha.1](RELEASE-NOTES-v0.1.0-alpha.1.md).

| Area | Change |
|---|---|
| Release identity | All 86 YAML headers: `edition: "v0.1.0-alpha.1"`, `publication_status: "Unofficial community alpha — technical verification ongoing"`, `affiliation` added, `build_date` renamed `content_build_date`, `release_prep_date` added. Cover, contents, About This Edition and README rewritten for the alpha identity and non-affiliation. |
| Third-party text | Cover no longer claims that application text is not reproduced; it states that APK text is quoted verbatim and belongs to its owner. |
| Data preservation | Full Rescan cautions (Ch. 18, 35, 38); Export/Import scope and overwrite warnings (Ch. 35, 38, About This Edition); Import Ratings caution (Ch. 20). |
| Inferred defaults (†) | Disclosure in About This Edition and the settings index; footnotes and evidence sections of 16 chapters; prose in Ch. 05, 06, 08, 20, 25, 29, 30 no longer states † defaults as fact. |
| Technical qualifications | Ch. 01, 03, 04, 07, 08, 11, 13, 14, 16, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38 and the Glossary (see release notes). |
| Editorial | Process-history sentences removed from reader pages; callouts converted to GitHub alert syntax; Quick Start page added; glossary terms added and sorted. |

---

## Historical entries (1.0.x candidates)

**Poweramp Player Technical Handbook · APK build 1031 · Edition 1.0.1 · unapproved publication candidate · build date 2026-10-21**

This changelog summarises the substantive changes from the candidate publication (`PUBLICATION - CANDIDATE`, 38 drafts plus 43 appendix files) to this edition. Line counts for the candidate come from the Phase 8J inventory. Word counts for this edition come from the built files.

## Version 1.0.1 (correction pass, 2026-10-21)

| File | Change |
|---|---|
| [38 Troubleshooting Guide](Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) | Section A: replaced “Bluetooth on phones is 48 kHz by design” with codec-negotiation guidance (rate negotiated per codec and device; check developer options and Audio Info; link to Ch. 14). |
| [14 Bluetooth Audio](Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) | “The Bluetooth chain”: replaced the unqualified 48 kHz claim with A2DP negotiation guidance; kept the APK hint as an attributed statement. “Codec sample rate and parameters”: the phone recommendation is now conditional on observed 48 kHz enforcement. Same factual error as in Ch. 38, corrected for consistency. |
| All 86 reader-facing pages with YAML properties | `published` removed; `build_date`, `publication_status` and `approval: not granted` added; edition now “Edition 1.0.1 (publication candidate)”. |
| Cover, Master Table of Contents, About This Edition, README | Visible notice that this is an unapproved publication candidate; version history row added. |
| `Coverage Manifest.json`, reports, manifest | Regenerated; build and approval-status metadata in place of the publication date. |

The version 1.0.0 changes from the candidate drafts follow.

## Publication-wide changes

- Every chapter was rewritten for readers. Raw JSON attribute blocks, “Editorial status” banners, research checklists and “Record runtime observations here” scaffolding were removed.
- Settings tables are generated from the evidence database. Keys, defaults and ranges cannot drift from the APK evidence.
- Option labels are resolved from APK strings throughout. No `@string/` references remain.
- A uniform evidence-label scheme (APK VERIFIED, RESEARCH SUPPORTED, RUNTIME VERIFICATION REQUIRED, GENERAL PRINCIPLE) and an “Evidence and limitations” section in every chapter.
- Navigation: front matter (cover, master contents, About This Edition), breadcrumbs, previous/next links on every chapter and appendix page, and “Related” sections. Links are relative Markdown links checked against the built files. Obsidian wikilinks to research notes were removed.
- YAML properties on every page: title, chapter/part, application, build, edition, date.
- The seven-part structure and all 38 chapter titles and filenames were kept.

## Appendices

- The 43 appendix files were regenerated with the **same filenames**: Index plus one page per screen. Each page now has a purpose statement, a location and navigation table, an “at a glance” table grouped by category, entry details (APK text, options with stored values, converted ranges, dependencies, markers, sources, chapters), automatic evidence notes, and screen-level notes.
- Raw JSON inventory records and the `<details>` blocks were removed. Synthesized title-case names for untitled entries were replaced by “(untitled `key`)”.
- `Coverage Manifest.json` was regenerated in the same folder with per-declaration chapter coverage.
- New appendices: **Glossary** and **Preference Key Index** (all 452 keys).
- The Look and Feel appendix and Chapter 25 remain separate documents.

## Chapters

| Ch. | Title | Candidate (lines, status) | This edition (words) | Substantive changes |
|---:|---|---|---:|---|
| 01 | [01 How Poweramp's Settings Are Organized](Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md) | 81 lines, source-derived draft | 1668 | Rewritten. Added the reconstructed navigation tree, screens without declared entry points, the global vs per-output model, entry-kind statistics, how to read an entry (defaults, †, units, dependencies, markers), per-screen Restore Defaults, settings search and shortcuts, and the Player/Equalizer distinction. The research counts were kept and reconciled. |
| 02 | [02 The Poweramp Audio Path](Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md) | 218 lines, source-derived draft | 1653 | Rewritten from an output-category list into a signal-path map: stage diagram with chapter pointers, Audio hub table, Audio Info as the verification tool, system-override warnings, a processing-mode comparison, and a baseline procedure with a safety callout. Output-category detail moved to Ch. 12, troubleshooting to Ch. 38. |
| 03 | [03 Volume Control and DVC](Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md) | 125 lines, editorial rewrite, unverified | 1920 | Substantially rewritten. Added a labelled DVC working model synthesising all related APK texts, Bluetooth Absolute Volume hint rows and probing caution, per-output volume settings (Volume Type with resolved summaries, hardware sync with a maximum-volume warning), Volume Levels value interpretation, and a configuration table. The broken research link was removed. |
| 04 | [04 Equalizer and Tone Controls](Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md) | 156 lines, editorial rewrite, unverified | 1759 | Corrected the Smooth Gains description; resolved value-display labels; added band-count/ISO context, the Block Size note, tone parameters and their evidence limits, the AutoEq workflow, per-output EQ controls including `eq_preset`, preset export/restore with risk notes, the existence of reverb presets, and MusicFX vs Poweramp Equalizer. |
| 05 | [05 ReplayGain and Loudness Normalization](Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md) | 145 lines, editorial rewrite, unverified | 1037 | Resolved mode and source labels and both preamp ranges (previously “not established”). Added peak-protection explanation, untagged preamp guidance, tag and analysis notes, interactions, and a recipe table. Positional mapping marked. |
| 06 | [06 Track Transitions and Gapless Playback](Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md) | 364 lines, source-derived draft | 1245 | Restructured into concepts, automatic and manual changes (resolved labels), fades, preload and silence, external causes of gaps (rate switching, codec changes, reconfiguration delay, PCM/DSD warm-ups), and recipes. Troubleshooting moved to Ch. 38. |
| 07 | [07 Sample Rates and Resampling](Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md) | 220 lines, source-derived draft | 1442 | Rewritten: resolved resampler labels, cutoff ratio explanation with the libswresample correspondence (labelled), Follow Track algorithm from APK hints, a worked illustration, platform-imposed rates, the DSD override, gapless side effects, and a choice table. |
| 08 | [08 Bit Depth, Sample Format and Dither](Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md) | 129 lines, source-derived draft | 936 | Expanded from rate/format extracts to sample format, Float32, the nine resolved dither options with a method comparison, when dither matters, and the relation to bit-perfect output. |
| 09 | [09 64-bit Floating-Point Processing](Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md) | 61 lines, source-derived draft | 692 | Expanded: global and per-output controls, precision figures (corrected), what 64-bit processing does and does not do, and a usage recommendation with runtime caveats. |
| 10 | [10 DSD Playback and Remastering](Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md) | 147 lines, source-derived draft | 1156 | Rewritten to separate native DSD playback, DoP vs raw transport, and PCM-to-DSD remastering (override and PCM-only rules), with USB switching aids and a safe test sequence. |
| 11 | [11 Bit-Perfect Output](Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md) | 88 lines, source-derived draft | 945 | Rewritten: what Perfect Bit Perfect disables (evidence-labelled table), six prerequisites (volume, rate, DVC, system effects, driver, DSD Remaster), verification methods, and when not to use it. |
| 12 | [12 Choosing an Audio Output](Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md) | 166 lines, source-derived draft | 1505 | Rewritten: output categories, a grouped map of all 57 per-output entries, output driver, status rows, buffering and timing, output Advanced Tweaks, speaker/wired notes, and per-output Restore Defaults. |
| 13 | [13 USB DAC Setup and Compatibility](Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md) | 93 lines, source-derived draft | 1347 | Expanded from a short extract to the complete USB DAC treatment: connection behaviour, two-stage volume, rates and formats, compatibility quirks with USB Audio Class background, and an ordered troubleshooting table. |
| 14 | [14 Bluetooth Audio](Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) | 67 lines, source-derived draft | 1686 | Rewritten to address the handoff concern: the Bluetooth chain, what Poweramp controls (DVC/Absolute Volume, codec parameters, resampling, latency, per-device EQ), connection and remote-control options, calls, uncontrollable aspects, and troubleshooting. |
| 15 | [15 Chromecast Output](Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md) | 34 lines, source-derived draft | 849 | Rewritten from a 34-line stub: Cast button placement, Chromecast output options, the audio-focus link, session keep-alive, and an explicit table of evidence gaps. |
| 16 | [16 Calls, Notifications and Interruptions](Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md) | 211 lines, source-derived draft | 1112 | Rewritten around Android focus types, with sections for short interruptions, permanent loss, calls, output overrides, workarounds and resume-on-start, plus recipes. Research checklists removed. |
| 17 | [17 Headphones and Hardware Buttons](Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) | 654 lines, source-derived draft | 1063 | Condensed from 654 lines: a connection-event table, media buttons, feedback, volume-key long press, and a diagnostic procedure using Last Processed Commands. Raw per-key dumps were replaced by generated tables. |
| 18 | [18 Music Folders, Scanning and Tags](Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) | 1154 lines, source-derived draft | 1674 | Condensed from 1,154 lines of per-key dumps into explained sections: folder access (SAF), scanning triggers, filtering, multi-value tags, encodings, CUE, progress and statistics, common problems. |
| 19 | [19 Browsing the Library](Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md) | 894 lines, source-derived draft | 1136 | Condensed from 894 lines: list appearance, track labels, tap actions, album/artist grouping, folder hierarchy, sorting; resolved list titles flagged as research-supported. |
| 20 | [20 Playlists and the Queue](Part%204%20-%20Library%20and%20Playback/20%20Playlists%20and%20the%20Queue.md) | 562 lines, source-derived draft | 909 | Condensed from 562 lines: playlists (import/export, entry resolution, encodings) and the Queue (start, end, insertion, clearing, shuffle) with typical setups. |
| 21 | [21 Shuffle](Part%204%20-%20Library%20and%20Playback/21%20Shuffle.md) | 144 lines, source-derived draft | 609 | Rewritten: randomization, reshuffle, category shuffle with resolved summaries, hierarchy shuffle, and related behaviour elsewhere. |
| 22 | [22 Search](Part%204%20-%20Library%20and%20Playback/22%20Search.md) | 63 lines, source-derived draft | 582 | Expanded: search options, Queue interactions, a playback-outcome table, tips, and the distinction from settings search. |
| 23 | [23 Network Streams](Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md) | 159 lines, source-derived draft | 789 | Rewritten: timeout positions and buffer converted to readable units, User Agent added, titles and artwork with the Wi-Fi-only download default, situational guidance, and an explicit evidence-gap section. |
| 24 | [24 Tracker Module Playback](Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md) | 81 lines, source-derived draft | 530 | Rewritten: extra gain and stereo separation with ranges, the “*.s3c” and dB/percent anomalies recorded, and tracker background. |
| 25 | [25 Look and Feel](Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md) | 129 lines, source-derived draft | 1086 | Expanded from four extracted settings to the complete Look and Feel screen, skins, icon, translations, the `anim_speed` anomaly, and a map of appearance settings on other screens. Kept distinct from the Look and Feel appendix. |
| 26 | [26 The Player Screen](Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md) | 193 lines, source-derived draft | 1090 | Expanded from six to all twenty Player Screen entries: animation, button editing (Feature Pack), other buttons with resolved options, second-line actions, transport behaviour. |
| 27 | [27 Album Art and Backgrounds](Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md) | 916 lines, source-derived draft | 1402 | Condensed from 916 lines: art sources, cache, quality and memory, art for other apps and devices, backgrounds with ranges, common problems. |
| 28 | [28 Lyrics](Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) | 433 lines, source-derived draft | 961 | Condensed from 433 lines: opening lyrics, display, two-level timing correction, scanning, external apps, problems. |
| 29 | [29 Visualization](Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md) | 745 lines, source-derived draft | 932 | Condensed from 745 lines: enabling, presets, faded controls, rendering trade-off table, synchronization. |
| 30 | [30 Notifications and Media Buttons](Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) | 881 lines, source-derived draft | 1092 | Condensed from 881 lines: notification style and colours (resolved labels), behaviour, keep options, and the six media buttons with their non-sequential stored values. |
| 31 | [31 Lock Screen](Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md) | 381 lines, source-derived draft | 726 | Condensed from 381 lines: Android lock screen vs Poweramp lock screen, the hi-res art priority note, permissions, and a choice table. |
| 32 | [32 Android Auto and Connected Apps](Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) | 569 lines, source-derived draft | 874 | Rewritten: Android Auto browsing, Now Playing list, artwork for cars and watches, head-unit command options, and the Android Auto rendering boundary. Button details moved to Ch. 30. |
| 33 | [33 Scrobbling and App Integration](Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md) | 95 lines, source-derived draft | 825 | Expanded from three settings to all integration points (scrobblers, broadcasts, API art, shutdown intent, provider plugins, lyrics apps, skins, presets, Addons, Poweramp Equalizer). |
| 34 | [34 Background Operation and Compatibility](Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) | 112 lines, source-derived draft | 1149 | Rewritten as a two-step method (system settings first, then keep-alive options in escalating order), with audio-stop workarounds, version- and device-specific switches with an Experiment warning, shutdown handling, and crash reports. |
| 35 | [35 Backup, Restore and Maintenance](Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) | 524 lines, source-derived draft | 1394 | Rewritten to separate four kinds of “restore”: export/import, the 31 per-screen Restore Defaults (listed), rated destructive actions, and the storage screen. Maintenance routine and safe-change protocol added; purchase restoration moved to Ch. 36. |
| 36 | [36 Purchases and Feature Packages](Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) | 240 lines, source-derived draft | 1119 | Rewritten: a storefront table, purchase methods, choosing the right restore row, Feature Packages with the nine marked settings, and the three Purchase FAQ entries consolidated. |
| 37 | [37 About, Updates and Support](Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md) | 68 lines, source-derived draft | 907 | Expanded from two misassigned entries to the complete About and Get Support screens, updates, crash reports, a diagnostic toolbox, and a support-request checklist. The website purchase row moved to Ch. 36. |
| 38 | [38 Troubleshooting Guide](Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md) | 174 lines, source-derived draft | 2448 | Rebuilt by symptom (sections A–G) from per-topic lists; duplicates merged; every step uses in-app names and links to its chapter. |
