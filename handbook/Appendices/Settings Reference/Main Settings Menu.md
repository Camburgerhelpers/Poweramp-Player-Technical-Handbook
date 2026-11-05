---
title: "Main Settings Menu"
screen_id: "singlepane"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 24
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Main Settings Menu

The top-level Settings menu: entry points to every major settings area, purchase entries, the Poweramp Equalizer link, support, settings export/import, and crash-report suggestion.

| Property | Value |
|---|---|
| Screen ID | `singlepane` |
| In-app location | Settings |
| Links to | [Purchase Restoration](Purchase%20Restoration.md) (`already_purchased`); [Feature Packages](Feature%20Packages.md) (`feature_packages`); [Look and Feel](Look%20and%20Feel.md) (`ui`); [Audio Settings](Audio%20Settings.md) (`audio`); [Visualization Settings](Visualization%20Settings.md) (`vis`); [Background Appearance Settings](Background%20Appearance%20Settings.md) (`aa_bg`); [Album Art Settings](Album%20Art%20Settings.md) (`aa`); [Music Library Settings](Music%20Library%20Settings.md) (`folders_library`); [Headset and Bluetooth Settings](Headset%20and%20Bluetooth%20Settings.md) (`headset`); [Lock Screen Settings](Lock%20Screen%20Settings.md) (`lockscreen`); [Miscellaneous Settings](Miscellaneous%20Settings.md) (`misc`); [About Poweramp](About%20Poweramp.md) (`general`); external Google Play page for the Poweramp Equalizer app (`equalizer_for_spot_ytm_etc`); [Support](Support.md) (`get_support`) |
| Declared entries | 24 — action or navigation 2, category 1, informational or dynamic 1, other 19, toggle 1 |
| Resource files | `xml/singlepane.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 33 — Scrobbling and App Integration](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md), [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md), [Chapter 37 — About, Updates and Support](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `manage_app_warn`) | `manage_app_warn` | Warning | — | — | — |
| 2 | (untitled `perm_warn`) | `perm_warn` | Information | — | — | — |
| 3 | (untitled `buy_play_fv`) | `buy_play_fv` | Purchase | — | — | — |
| 4 | (untitled `buy_rustore_fv`) | `buy_rustore_fv` | Purchase | — | — | — |
| 5 | (untitled `buy_huawei_fv`) | `buy_huawei_fv` | Purchase | — | — | — |
| 6 | (untitled `fp1`) | `fp1` | Purchase | — | — | — |
| 7 | Already Purchased? | `already_purchased` | Link | — | — | — |
| 8 | Feature Packages | `feature_packages` | Link | — | — | — |
| 19 | Other | `other` | Category | — | — | — |

**Category: Settings**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 9 | Look and Feel | `ui` | Link | — | — | — |
| 10 | Audio | `audio` | Link | — | — | — |
| 11 | Visualization | `vis` | Link | — | — | — |
| 12 | Background | `aa_bg` | Link | — | — | — |
| 13 | Album Art | `aa` | Link | — | — | — |
| 14 | Library | `folders_library` | Link | — | — | — |
| 15 | Headset/Bluetooth | `headset` | Link | — | — | — |
| 16 | Lock Screen | `lockscreen` | Link | — | — | — |
| 17 | Misc | `misc` | Link | — | — | — |
| 18 | About | `general` | Link | — | — | — |

**Category: Other**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 20 | Equalizer for Spotify and YouTube Music | `equalizer_for_spot_ytm_etc` | Link | — | — | — |
| 21 | Get Support | `get_support` | Link | — | — | — |
| 22 | Export Settings/Data <sup>non-persistent</sup> | `settings_export` | Action | — | — | — |
| 23 | Import Settings/Data <sup>non-persistent</sup> | `settings_import` | Action | — | — | — |
| 24 | Send Errors To Developer | `send_errors` | Switch | On | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. (untitled manage_app_warn)

- **Key:** `manage_app_warn`
- **Control:** Warning (`ManageAppWarnPref`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

### 2. (untitled perm_warn)

- **Key:** `perm_warn`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 3. (untitled buy_play_fv)

- **Key:** `buy_play_fv`
- **Control:** Purchase (`BuyPlayFvPref`)
- **Source:** `xml/singlepane.xml`

### 4. (untitled buy_rustore_fv)

- **Key:** `buy_rustore_fv`
- **Control:** Purchase (`BuyRustoreFvPref`)
- **Source:** `xml/singlepane.xml`

### 5. (untitled buy_huawei_fv)

- **Key:** `buy_huawei_fv`
- **Control:** Purchase (`BuyHuaweiFvPref`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 6. (untitled fp1)

- **Key:** `fp1`
- **Control:** Purchase (`FeaturePackPref`)
- **Source:** `xml/singlepane.xml`

### 7. Already Purchased?

- **Key:** `already_purchased`
- **Control:** Link (`AlreadyPurchasedRedirectPref`)
- **Opens:** [Purchase Restoration](Purchase%20Restoration.md) (`already_purchased`)
- **Source:** `xml/singlepane.xml`

### 8. Feature Packages

- **Key:** `feature_packages`
- **Control:** Link (`FeaturePackRedirectPref`)
- **Opens:** [Feature Packages](Feature%20Packages.md) (`feature_packages`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 9. Look and Feel

- **Key:** `ui`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Look and Feel](Look%20and%20Feel.md) (`ui`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 10. Audio

- **Key:** `audio`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Audio Settings](Audio%20Settings.md) (`audio`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 11. Visualization

- **Key:** `vis`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Visualization Settings](Visualization%20Settings.md) (`vis`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 12. Background

- **Key:** `aa_bg`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Background Appearance Settings](Background%20Appearance%20Settings.md) (`aa_bg`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 13. Album Art

- **Key:** `aa`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Album Art Settings](Album%20Art%20Settings.md) (`aa`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 14. Library

- **Key:** `folders_library`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Music Library Settings](Music%20Library%20Settings.md) (`library`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 15. Headset/Bluetooth

- **Key:** `headset`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Headset and Bluetooth Settings](Headset%20and%20Bluetooth%20Settings.md) (`headset`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 16. Lock Screen

- **Key:** `lockscreen`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Lock Screen Settings](Lock%20Screen%20Settings.md) (`lockscreen`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 17. Misc

- **Key:** `misc`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [Miscellaneous Settings](Miscellaneous%20Settings.md) (`misc`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 18. About

- **Key:** `general`
- **Control:** Link (`RedirectPreference`)
- **Category:** Settings
- **Opens:** [About Poweramp](About%20Poweramp.md) (`general`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 19. Other

- **Key:** `other`
- **Control:** Category (`PreferenceCategory`)
- **Source:** `xml/singlepane.xml`
- **Evidence note:** Groups: Equalizer for Spotify and YouTube Music, Get Support, Export Settings/Data, Import Settings/Data, Send Errors To Developer.

### 20. Equalizer for Spotify and YouTube Music

- **Key:** `equalizer_for_spot_ytm_etc`
- **Control:** Link (`RedirectPreference`)
- **Category:** Other
- **Opens:** `https://play.google.com/store/apps/details?id=com.maxmpz.equalizer&referrer=utm_source%3Dapp%26utm_medium%3Dapp%26utm_campaign%3Dpa1`
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 33](../../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)

### 21. Get Support

- **Key:** `get_support`
- **Control:** Link (`RedirectPreference`)
- **Category:** Other
- **Opens:** [Support](Support.md) (`support`)
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)

### 22. Export Settings/Data

- **Key:** `settings_export`
- **Control:** Action (`Preference`)
- **Category:** Other
- **Markers:** non-persistent
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 23. Import Settings/Data

- **Key:** `settings_import`
- **Control:** Action (`Preference`)
- **Category:** Other
- **Markers:** non-persistent
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 24. Send Errors To Developer

- **Key:** `send_errors`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Other
- **Declared default:** On
- **Source:** `xml/singlepane.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md), [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)

## Screen-level evidence notes

- Several entries are marked `removeAsNeeded`; they are hidden at runtime when they do not apply (for example, purchase entries after purchase). The exact conditions are not declared.
- `manage_app_warn` and `perm_warn` are runtime warnings (app management / permissions) with no static text.

---

← [ReplayGain Settings](ReplayGain%20Settings.md) · [Settings Reference Index](Index.md) · [Storage and Maintenance](Storage%20and%20Maintenance.md) →
