# Roadmap

This is a planning document, not a release schedule. Work is ordered by evidence and user impact; version names beyond the first alpha are deliberately not promised.

## Gate 1 — First public alpha (APK build 1031)

- [x] Preserve the original manuscript and prepare a separate release copy.
- [x] Correct instructions that may cause accidental data loss (rescan, reset, import).
- [x] Qualify inferred preference defaults and unverified Android behavior.
- [x] Fix misleading audio-routing statements and documented inconsistencies.
- [x] Complete the public README, release notes, and navigation.
- [ ] Resolve the publication license and third-party quotation review.
- [ ] Validate all chapters, appendices, links, metadata, and release archive.
- [ ] Publish **v0.1.0-alpha.1** only after an explicit final review.

## After alpha — Reliability and usability

- Record reproducible runtime observations against specific devices, Android releases, and output paths.
- Improve the chapter index, glossary, quick-start, and settings-to-chapter navigation.
- Review reported mistakes and publish corrections with a clear changelog.
- Replace assumptions about preference value mappings with direct evidence where available.
- Improve explanations of DVC, ReplayGain, EQ, sample-rate conversion, and Bluetooth audio.

## Separate version track — Poweramp Player build 1035

- Obtain and examine authoritative build-1035 evidence.
- Compare relevant settings, resources, defaults, and behavior with build 1031.
- Identify additions, removals, and changed descriptions without silently rewriting the historical baseline.
- Add Android 17 / Bluetooth observations only where actually tested or officially documented.
- Publish an explicitly versioned update **after** that comparison is complete.

## Possible future additions

- Tested hardware notes (Bluetooth headphones, USB DACs, Android versions).
- A guide to interpreting audio-path readouts and avoiding misleading "fidelity scores."
- Troubleshooting decision trees and safe baseline configurations.
- Community-supplied reproducible test cases.
- A **separate** Poweramp Equalizer reference, if enough trustworthy source material is available.

## Out of scope for the initial alpha

- Claiming comprehensive support for every Poweramp or Android version.
- Publishing the Poweramp APK, decompiled assets, or proprietary resource dumps.
- Providing a universal EQ preset or claiming one audio configuration is objectively best.
- Replacing official Poweramp support or guaranteeing device-specific audio behavior.
