---
title: "About This Edition"
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

# About This Edition

## Purpose and audience

This handbook explains what each Poweramp Player setting does, why and when it matters, and how the settings interact. It assumes a reader who is comfortable with Android and wants technical depth. Background is given before implementation detail, so newcomers to audio terminology can follow along. The [Glossary](../Appendices/Glossary.md) defines the terms used.

## Evidence hierarchy

Statements in this edition rest on the following sources, in descending order of authority:

1. **APK-extracted resources.** The settings XML of Poweramp Player build 1031: keys, control classes, titles, descriptions, defaults, dependencies, ranges, option lists and link targets, plus string resources resolved during the research.
2. **Original research analysis** of those resources.
3. **QA records** from the research project.
4. **The candidate publication drafts**, used for structure only.
5. **General technical knowledge**, used to *interpret* the evidence. It is never used to invent application-specific facts.

Where sources disagreed, the directly extracted evidence was preferred. Those corrections were recorded in the project's internal technical validation report, which is not part of this preview; the main ones are summarised in the [Editorial Changelog](../EDITORIAL-CHANGELOG.md).

## Evidence labels

| Label | Meaning |
|---|---|
| **APK VERIFIED** | Directly established by the extracted application resources. All settings tables are of this kind. |
| **RESEARCH SUPPORTED** | An inference drawn from the evidence that goes beyond the literal declaration. Examples: mapping a list's default by option position (marked †), interpreting a key name. Not verified. Qualifiers in parentheses (for example “from the key name only”) say what the inference rests on. |
| **RUNTIME VERIFICATION REQUIRED** | Depends on the device, Android version, hardware, installed components or user configuration, or is simply not determined by the evidence. |
| **GENERAL PRINCIPLE** | Background engineering or platform knowledge used to explain a setting. It describes how such things generally work, not a verified Poweramp behaviour. |

Unlabelled sentences that quote or paraphrase an APK description carry the **APK VERIFIED** status of the quoted text.

> [!IMPORTANT]
> **What “APK VERIFIED” does and does not mean in this alpha.**
> It means the statement matches the settings resources extracted from build 1031 during the research phase. Those extracted files, the research notes and the APK itself are **not included** in this publication, so readers cannot re-check the label from the published material alone. It also says nothing about runtime behaviour: a declared setting, default or description does not prove what the app does on a particular device. Agreement between the chapters and the generated appendices is internal consistency, not independent verification.

## Reading the settings tables

Every chapter includes generated tables with these columns:

| Column | Meaning |
|---|---|
| **Setting** | The in-app title. Untitled entries appear as *(untitled `key`)*. Superscript markers: *Experiment*, *Feature Pack*, *non-persistent*. |
| **Key** | The internal preference key: the stable identifier, and the way to find an entry in the appendices. |
| **Type** | Switch, List, Multi-select list, Slider, Knob, Text field, Tag list, Color, Action, Link, Information, Category, and purchase controls. |
| **Declared default** | The `android:defaultValue` from the XML. *Not declared* means the XML is silent, **not** “Off”. A declared default describes a fresh configuration, not your device's current state. |
| **Values / range** | Options with their stored values, or a numeric range converted with the declared scale and format. Raw values are kept in back-ticks. |
| **Depends on** | The parent setting named by the XML `dependency` attribute. |

A dagger (†) marks a list whose stored values are not declared. Its values are inferred from option position (first = `0`). Treat every † value, and every default derived from it, as an **unverified inference**. Build 1031 itself contains lists whose declared values do not follow that pattern: `queue_start` uses `1`/`2`/`3`, `queue_insert_pos` uses `0`/`2`, `cc_button` uses `0`/`1`/`4`/`2`/`3`, and `anim_speed` uses `0`/`2`/`1`. A † default can therefore point at the wrong option. Check the setting on your device before relying on it.

Each table is followed by a link to the matching settings-reference page. That page is generated directly from the extracted catalog and is the authoritative lookup.

## Conventions

- In-app paths are written **Settings › Audio › Audio Outputs**.
- Setting names are **bold** and keys are `monospaced`.
- Quotation marks “…” enclose APK text quoted verbatim, including its original spelling and capitalisation.
- Callouts mark safety notes and working models. In Obsidian they render as coloured boxes; elsewhere they appear as block quotes.
- Links are relative Markdown links. They work in Obsidian and in standard Markdown viewers. Links target files, not headings, so they remain valid in every viewer.

## What this edition is and is not

- **Is:** a complete, technically grounded reference for the settings declared in build 1031, with practical guidance where the evidence supports it.
- **Is not:** a record of measurements or listening tests (none were performed), a guide to Poweramp Equalizer, or a description of other builds. Settings in other builds may differ in name, default or presence. Newer Poweramp builds exist; a statement about build 1031 is not automatically wrong for them, but it is not verified for them either.
- **Is not:** official documentation. It is not affiliated with, endorsed, reviewed or verified by the Poweramp developer.

> [!CAUTION]
> **Preserve your configuration.** Before you follow any procedure in this handbook, use **Export Settings/Data** and copy the exported file off the device ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)). The export's exact scope is not verified, so also note any per-output settings you rely on. Lower the volume before testing audio changes.

## Provenance

- Source collection: `Poweramp Technical Handbook - STAGING` archive, SHA-256 `293c0c792c8cd1ba90aa270c3ab308983b3278d5c5f1438b1adffdba0f5c1ea8`.
- The file hashes recorded in the Phase 8J inventory were re-checked against the archive before work began. All 105 recorded files (38 chapters, 24 research files, 43 appendix files) matched.
- Settings data: `poweramp-player-1031-settings-v2.csv`. It contains 500 declarations in `xml/` and 426 corresponding declarations in `xml-v22/`. Seventy-four declarations are present only in `xml/`. Among the shared declarations, 43 differ only in the `android:singleLineTitle` attribute. Labels come from `poweramp-player-1031-catalog-v3-CANDIDATE.json` and `Phase 3 Resource Resolution.json`.
- The original archive was not modified. This edition is a new, independent publication.
- The source archive, the research files and the settings data named above are **not distributed** with this handbook. The hashes are recorded for provenance only.

## Version history

| Version | Date | Notes |
|---|---|---|
| 1.0.0 | 2026-10-21 | First full build of the publication candidate from the staging archive. Retained unmodified as a separate archive. |
| 1.0.1 | 2026-10-21 | Corrected candidate: Bluetooth sample-rate guidance (Ch. 38, with the same claim corrected in Ch. 14); premature publication-date metadata replaced with build and approval-status metadata. Not released. |
| v0.1.0-alpha.1 | 2026-11-04 (prepared) | First public-alpha preparation of the 1.0.1 content: release identity, data-preservation cautions, evidence-label corrections and technical qualifications from an independent audit. See the [Release Notes](../RELEASE-NOTES-v0.1.0-alpha.1.md). |

The 1.0.x numbers were internal candidate versions. The public version series restarts at `v0.1.0-alpha.1` to reflect alpha maturity.

**Status:** unofficial community alpha — technical verification ongoing. Not affiliated with or endorsed by the Poweramp developer.

---

← [Contents](01%20Master%20Table%20of%20Contents.md) · [Quick Start](03%20Quick%20Start.md) · [Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md) →
