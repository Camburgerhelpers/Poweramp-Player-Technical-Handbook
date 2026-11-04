---
title: "Feature Packages"
screen_id: "feature_packages"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 6
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Feature Packages

Feature Package purchase, Uberpatron badges, the option to move Feature Packages out of the top of Settings, and purchase restoration.

| Property | Value |
|---|---|
| Screen ID | `feature_packages` |
| In-app location | Settings › Feature Packages |
| Reached from | [About Poweramp](About%20Poweramp.md) → “Feature Packages” (`feature_packages`); [Main Settings Menu](Main%20Settings%20Menu.md) → “Feature Packages” (`feature_packages`) |
| Declared entries | 6 — informational or dynamic 1, other 4, toggle 1 |
| Resource files | `xml/feature_packages.xml` |
| Explained in | [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `isPriceReduced`) | `isPriceReduced` | Information | — | — | — |
| 2 | (untitled `fp1`) | `fp1` | Purchase | — | — | — |
| 3 | (untitled `move_fp1_to_about`) | `move_fp1_to_about` | Switch | Off | — | — |
| 6 | Restore Purchases | `restore_purchase` | Purchase restore | — | — | — |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 4 | Buy Uberpatron Badges | `buy_uber_badges` | Purchase | — | — | — |
| 5 | (untitled `uber_level`) | `uber_level` | Status | — | — | — |

## Entry details

### 1. (untitled isPriceReduced)

- **Key:** `isPriceReduced`
- **Control:** Information (`RawTextPreference`)
- **APK text:** “a discounted, minimal price, if you recently purchased Full Version”
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 2. (untitled fp1)

- **Key:** `fp1`
- **Control:** Purchase (`FeaturePackPref`)
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 3. (untitled move_fp1_to_about)

- **Key:** `move_fp1_to_about`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Hide Feature Packages from the Settings top”
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 4. Buy Uberpatron Badges

- **Key:** `buy_uber_badges`
- **Control:** Purchase (`BuyUberPref`)
- **Category:** Other
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 5. (untitled uber_level)

- **Key:** `uber_level`
- **Control:** Status (`UberLevelPref`)
- **Category:** Other
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 6. Restore Purchases

- **Key:** `restore_purchase`
- **Control:** Purchase restore (`RestoreFeaturePackPurchasePref`)
- **Source:** `xml/feature_packages.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

## Screen-level evidence notes

- `fp1` is the single Feature Package purchase control declared in build 1031; its contents and price are runtime/storefront data.
- Nine settings across the inventoried screens carry `app:featurePack="1"` (see Chapter 36 for the list).

---

← [Crossfade and Gapless Settings](Crossfade%20and%20Gapless%20Settings.md) · [Settings Reference Index](Index.md) · [About Poweramp](About%20Poweramp.md) →
