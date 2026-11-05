# Release Notes — v0.1.0-alpha.1

**Poweramp Player Technical Handbook · documentation baseline: Poweramp Player APK build 1031 · Unofficial community alpha — technical verification ongoing**

> [!WARNING]
> **Unofficial alpha.**
> Independently created; not affiliated with, endorsed, reviewed or verified by the Poweramp developer. It documents build 1031; newer builds may behave differently.

## What this release is

The first public-alpha preparation of a handbook whose content was built as internal candidate versions 1.0.0 and 1.0.1 (October 2026, not released). This alpha keeps that content and its structure — 38 chapters in 7 parts, 42 settings-reference pages plus an index, the Preference Key Index and the Glossary — and applies the corrections from an independent read-only audit.

The version series restarts at `v0.1.0-alpha.1` to reflect alpha maturity. The 1.0.x technical validation and publication QA reports are kept in the project's internal records and are not part of this preview. The editorial changelog keeps the 1.0.x history.

## Known limitations

1. **Evidence not included.** Statements labelled **APK VERIFIED** were checked against settings resources extracted from build 1031 during research. Those resources, the research notes and the APK are not distributed with the handbook, so readers cannot re-check the label from the published material.
2. **Runtime behaviour largely unverified.** No measurements, listening tests or systematic device tests were performed. A declared setting, default or description does not prove what the app does on a particular device. Open questions: [Runtime Verification Register](RUNTIME-VERIFICATION-REGISTER.md) (59 items).
3. **Inferred defaults (†).** 25 option lists declare no stored values. The handbook assumes first option = `0`, but the same build declares lists numbered from `1` or out of order, so † values and defaults may be wrong (RV-054).
4. **119 adjustable settings declare no default.** Their initial values come from the app or the device.
5. **Outside the evidence:** the main Equalizer screen (band gains, preamp, limiter, balance, reverb parameters), the Block Size setting, the casting pipeline, network-stream protocols, the export file's scope and format, Feature Pack enforcement, and several runtime-generated screens (Audio Info, Last Processed Commands, Audio Outputs Detection Log).
6. **Poweramp Equalizer** (the separate app) is outside the primary scope.
7. **Android-version statements.** Several GENERAL PRINCIPLE notes about Android behaviour (audio focus on Android 12+, media notifications on Android 11/13+, lock-screen art on Android 11+, bit-perfect USB on Android 14+) are general platform knowledge, not tested with Poweramp.
8. **Third-party text.** The handbook quotes Poweramp's own setting texts verbatim. Their treatment for redistribution is still under review, and no licence has been chosen.
9. **Rendering.** Alerts use GitHub alert syntax (`> [!WARNING]`), which Obsidian also renders. Tables use HTML `<sup>` markers. Other viewers may show these as plain text.

## Technical verification status

| Area | Status |
|---|---|
| Structure, links, tables, front matter | Checked by script for this release (see the manifest) |
| Settings keys, titles, types, declared defaults, ranges, dependencies | Consistent between chapters, appendices and the generated catalog. This is internal consistency, not independent APK verification |
| Declared defaults | From the extracted XML (not re-checkable from published material) |
| † defaults | Unverified inference |
| Runtime behaviour | Largely unverified; 59 open register items |

## Changes in this release

**Release identity and status**
- All reader pages now carry `v0.1.0-alpha.1`, the unofficial-alpha status and a non-affiliation statement; the earlier “unapproved publication candidate” labels are gone from reader pages.
- New README with scope, navigation, evidence labels, limitations and how to report mistakes.
- New [Quick Start](00%20Front%20Matter/03%20Quick%20Start.md) page.

**Third-party text**
- The Cover no longer says that application text is not reproduced. It now says that APK text is quoted verbatim and belongs to its owner.

**Data preservation**
- Full Rescan: prominent caution, rated high risk until verified, backup steps and a “try Rescan first” rule (Ch. 18, 35, 38).
- Export/Import: export and restore coverage remains unverified; Import may overwrite current settings, so export the current state to a separate file first (Ch. 35, 38, Quick Start). Replacement versus merge and restoration of per-output settings still need device testing (RV-056, Ch. 35). About This Edition also advises exporting first and recording per-output settings because export coverage is unverified.
- Import Ratings: caution that opening an old playlist can overwrite ratings (Ch. 20).

**Inferred defaults**
- Disclosure added to About This Edition and the settings-reference index; every chapter that uses † now says it is unverified.
- On Queue End (Ch. 20): the alternative reading of default `1` is stated.

**Technical qualifications and corrections**
- Ch. 01, 03: unsupported statements about Poweramp Equalizer replaced by an explicit evidence gap; Ch. 01 now lists four out-of-inventory targets.
- Ch. 03, 14: the −6 dB preamp reduction for Bluetooth Absolute Volume is labelled as an inference; the −10 dB limit of the preamp knob is stated.
- Ch. 04: `eq_preset` label corrected; “cuts cannot clip” qualified.
- Ch. 07, 08: SW/SoX engine identity and the Float32 interpretation relabelled from GENERAL PRINCIPLE to RESEARCH SUPPORTED.
- Ch. 11: bit-perfect path statement qualified (Android framework behaviour); Bluetooth statement qualified.
- Ch. 13: USB DAC capability statement qualified; new hearing-safety alert.
- Ch. 14: a remaining unqualified “stack usually runs at 48 kHz” claim replaced with negotiated-rate wording; resampling advice made conditional on the actual Bluetooth rate.
- Ch. 16: “both will be heard” qualified for Android 12+ focus behaviour.
- Ch. 18: encoding description corrected (single-byte, multibyte and stateful code pages; applies to tags and `.m3u`); ringtone filter claim softened; CUE statement now quotes the APK text.
- Ch. 19, 21, 22: overstatements corrected (Filename As Title, Click Restarts Track condition, Search Track Titles Only, settings search).
- Ch. 23: buffer units clarified as MiB; the unresolved step arithmetic recorded; artwork-download dependency labelled; high-bitrate buffer advice corrected.
- Ch. 24: separation scale and `.s3c` inference relabelled.
- Ch. 26: incorrect coverage claim removed.
- Ch. 27: key-name inferences relabelled; folder image names now match the APK text.
- Ch. 28: the garbled-lyrics fix is now conditional on how the files are encoded.
- Ch. 29: bar and MilkDrop-preset visualizations distinguished; 30 FPS statement corrected.
- Ch. 30, 31: Android-version caveats added; mislabelled inference corrected.
- Ch. 32: paraphrase replaced with the exact APK text; out-of-evidence screen labelled.
- Ch. 33, 34: scrobbling mechanisms separated; “metachanged” described accurately; shutdown-broadcast statements reconciled; security warning for loading a custom native library.
- Ch. 38: No Duck advice corrected; settings-precedence statement labelled.
- Glossary: noise shaping and `xml`/`xml-v22` corrected; terms added (Bluetooth codecs, Experiment marker, Hi-Res output, LRC offset, media session, metachanged broadcast, notification channel, skin); entries sorted.

**Editorial**
- Process-history sentences (“candidate draft”, research phase numbers) removed from reader pages.
- Duplicated option lists removed in Ch. 05 and 06; merged quotations repaired in Ch. 23.
- Obsidian callouts converted to GitHub alert syntax.

## Corrections planned after this alpha

- Device testing for the Runtime Verification Register, starting with RV-040 (Full Rescan), RV-054 († defaults) and RV-056 (Import).
- Decide the treatment of verbatim APK text and choose a licence.
- Reduce remaining generator artefacts: back-to-back APK quotations, raw format strings such as “%d ms”, untitled-entry rows, repeated value lists (Ch. 30).
- Add the missing chapter mappings in the coverage manifest (`download_album_art`, `_counter_hint`, `buttons`, `list_3rdparty`, `vis_latency_ms`).
- Further Android-version caveats where chapters describe platform behaviour.

## Reporting errors

See “Reporting mistakes” in the [README](README.md). Issues go to the project's GitHub issue tracker ([https://github.com/Camburgerhelpers/Poweramp-Player-Technical-Handbook/issues](https://github.com/Camburgerhelpers/Poweramp-Player-Technical-Handbook/issues)), using the **Documentation correction** or **Runtime observation** template. The repository is currently private, so the tracker is reachable only by invited collaborators until it is made public. Please do not contact the Poweramp developer about errors in this handbook.

## Publication blockers (open)

This is a **private preview candidate**. It is **not approved for public distribution**. Two decisions remain open:

1. **Licence.** No licence has been selected for the handbook's original text. No redistribution rights are granted beyond what applicable law allows.
2. **Quoted Poweramp text.** The handbook reproduces Poweramp Player's own interface text verbatim (setting titles, option labels, descriptions and hints). Their treatment for public distribution is under review. A copyright or trademark notice does not by itself grant permission to redistribute that material.

## Changes in the public-export candidate

- About This Edition: the description of the `xml`/`xml-v22` resource variants is corrected (74 declarations exist only in `xml/`; 43 shared declarations differ only in `android:singleLineTitle`), matching the Glossary and the settings-reference index.
- README and these notes: reporting now points to the project's GitHub issue tracker.
- Internal release-preparation records are not part of this file set; the manifest was regenerated for exactly the files distributed.
- Private GitHub preview: the historical technical validation and publication QA reports are excluded, and the references to them were updated.
