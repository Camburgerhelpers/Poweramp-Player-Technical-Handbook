---
title: "Purchase Restoration"
screen_id: "already_purchased"
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

# Purchase Restoration

Purchase restoration for each storefront Poweramp supports: Google Play in-app purchases, the legacy Unlocker app, RuStore, Huawei AppGallery, and website purchases.

| Property | Value |
|---|---|
| Screen ID | `already_purchased` |
| In-app location | Settings › Already Purchased? |
| Reached from | [Purchase Methods](Purchase%20Methods.md) → “Already Purchased?” (`already_purchased`); [Main Settings Menu](Main%20Settings%20Menu.md) → “Already Purchased?” (`already_purchased`) |
| Declared entries | 6 — informational or dynamic 1, other 5 |
| Resource files | `xml/already_purchased.xml` |
| Explained in | [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | In-App Purchases on Google Play | `restore_purchase` | Purchase restore | — | — | — |
| 2 | Unlocker Purchase on Google Play | `restore_unlocker` | Purchase restore | — | — | — |
| 3 | RuStore | `rustore` | Purchase restore | — | — | — |
| 4 | Huawei AppGallery | `huawei` | Purchase restore | — | — | — |
| 5 | Website | `website` | Purchase restore | — | — | — |
| 6 | Purchase FAQ <sup>non-persistent</sup> | `get_support` | Information | — | — | — |

## Entry details

### 1. In-App Purchases on Google Play

- **Key:** `restore_purchase`
- **Control:** Purchase restore (`RestoreFvPurchasePref`)
- **APK text:** “Restore Purchases” “• Full Version In-App Purchase” “• Feature Packages” “• Uberpatron Badges”
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 2. Unlocker Purchase on Google Play

- **Key:** `restore_unlocker`
- **Control:** Purchase restore (`RestorePlayUnlockerPurchasePref`)
- **APK text:** “Restore Purchase” “• only applicable if you previously purchased Poweramp Unlocker app”
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 3. RuStore

- **Key:** `rustore`
- **Control:** Purchase restore (`RestoreRustoreFvPurchasePref`)
- **APK text:** “Restore Purchases” “• Full Version In-App Purchase” “• Uberpatron Badges”
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 4. Huawei AppGallery

- **Key:** `huawei`
- **Control:** Purchase restore (`RestoreHuaweiFvPurchasePref`)
- **APK text:** “Restore Purchases” “• Full Version In-App Purchase” “• Uberpatron Badges”
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 5. Website

- **Key:** `website`
- **Control:** Purchase restore (`RestoreWebsiteFvPurchasePref`)
- **APK text:** “Restore Purchase” “• only applicable for prior purchase on website”
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 6. Purchase FAQ

- **Key:** `get_support`
- **Control:** Information (`RawTextPreference`)
- **Markers:** non-persistent
- **Source:** `xml/already_purchased.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

## Screen-level evidence notes

- Which restore rows appear is storefront-dependent; the XML declares all five, but runtime visibility by app edition is not established.
- This screen restores purchases. It is unrelated to settings import/export and to per-screen Restore Defaults (see Chapter 35).

---

← [Background Appearance Settings](Background%20Appearance%20Settings.md) · [Settings Reference Index](Index.md) · [Audio Settings](Audio%20Settings.md) →
