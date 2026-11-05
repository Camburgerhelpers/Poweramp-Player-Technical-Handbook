---
title: "About Poweramp"
screen_id: "general"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 13
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# About Poweramp

About: version and changelog, update checks (including beta), website, translations, open-source licences, privacy policy, and the Addons category.

| Property | Value |
|---|---|
| Screen ID | `general` |
| In-app location | Settings › About |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “About” (`general`) |
| Links to | [Feature Packages](Feature%20Packages.md) (`feature_packages`); [Translations](Translations.md) (`translations`) |
| Declared entries | 13 — action or navigation 2, category 3, other 6, toggle 2 |
| Resource files | `xml/general.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 37 — About, Updates and Support](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Feature Packages | `feature_packages` | Link | — | — | — |
| 2 | Version/Changelog | `about_version` | Action | — | — | — |
| 3 | (untitled `uber_level`) | `uber_level` | Status | — | — | — |
| 4 | Update | `updates` | Category | — | — | — |
| 8 | Other | `other` | Category | — | — | — |
| 13 | Addons | `addons` | Category | — | — | — |

**Category: Update**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 5 | Check For Updates | `check_updates` | Switch | Not declared | — | — |
| 6 | Check For Beta Versions | `check_beta_updates` | Switch | Not declared | — | Check For Updates (`check_updates`) |
| 7 | Check Now <sup>non-persistent</sup> | `check_update` | Action | — | — | — |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 9 | Visit Website | `visit_site_about` | Link | — | — | — |
| 10 | Translations | `translations` | Link | — | — | — |
| 11 | Open Source Licenses | `oss` | Action | — | — | — |
| 12 | Privacy Policy | `privacy` | Link | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. Feature Packages

- **Key:** `feature_packages`
- **Control:** Link (`FeaturePackRedirectPref`)
- **Opens:** [Feature Packages](Feature%20Packages.md) (`feature_packages`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 2. Version/Changelog

- **Key:** `about_version`
- **Control:** Action (`Preference`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 3. (untitled uber_level)

- **Key:** `uber_level`
- **Control:** Status (`UberLevelPref`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 4. Update

- **Key:** `updates`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml/general.xml`
- **Evidence note:** Groups: Check For Updates, Check For Beta Versions, Check Now.

### 5. Check For Updates

- **Key:** `check_updates`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Update
- **Declared default:** Not declared
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 6. Check For Beta Versions

- **Key:** `check_beta_updates`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Update
- **Declared default:** Not declared
- **Depends on:** Check For Updates (`check_updates`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 7. Check Now

- **Key:** `check_update`
- **Control:** Action (`ProgressPreference`)
- **Category:** Update
- **Markers:** non-persistent
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 8. Other

- **Key:** `other`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml/general.xml`
- **Evidence note:** Groups: Visit Website, Translations, Open Source Licenses, Privacy Policy.

### 9. Visit Website

- **Key:** `visit_site_about`
- **Control:** Link (`PreferenceScreen`)
- **Category:** Other
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** `app:skipSearch="play,huawei"` names specific app editions; interpretation (hidden from settings search in those editions) is inferred.

### 10. Translations

- **Key:** `translations`
- **Control:** Link (`RedirectPreference`)
- **Category:** Other
- **Opens:** [Translations](Translations.md) (`translations`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 11. Open Source Licenses

- **Key:** `oss`
- **Control:** Action (`Preference`)
- **Category:** Other
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 12. Privacy Policy

- **Key:** `privacy`
- **Control:** Link (`PreferenceScreen`)
- **Category:** Other
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

### 13. Addons

- **Key:** `addons`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml/general.xml`
- **Discussed in:** [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

## Screen-level evidence notes

- `visit_site_about` carries `app:skipSearch="play,huawei"`, which suggests edition-specific handling in the Play and Huawei editions. This is an inference.
- The `addons` category is declared empty; its runtime contents are not established.
- Update-check behaviour per storefront edition is not established by the XML.

---

← [Feature Packages](Feature%20Packages.md) · [Settings Reference Index](Index.md) · [Headset and Bluetooth Settings](Headset%20and%20Bluetooth%20Settings.md) →
