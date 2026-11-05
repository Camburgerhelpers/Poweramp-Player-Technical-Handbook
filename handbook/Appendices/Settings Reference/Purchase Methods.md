---
title: "Purchase Methods"
screen_id: "buy_methods"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 5
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Purchase Methods

Purchase options for the Full Version (Google Play, RuStore, website) with links to purchase restoration and the Purchase FAQ.

| Property | Value |
|---|---|
| Screen ID | `buy_methods` |
| In-app location | Entry point not declared in the settings XML (see notes) |
| Links to | [Purchase Restoration](Purchase%20Restoration.md) (`already_purchased`) |
| Declared entries | 5 — action or navigation 1, other 4 |
| Resource files | `xml/buy_methods.xml` |
| Explained in | [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `buy_play_fv`) | `buy_play_fv` | Purchase | — | — | — |
| 2 | (untitled `buy_rustore_fv`) | `buy_rustore_fv` | Purchase | — | — | — |
| 3 | (untitled `buy_from_website`) | `buy_from_website` | Purchase | — | — | — |
| 4 | Already Purchased? | `already_purchased` | Link | — | — | — |

**Category: Get Support**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 5 | Purchase FAQ <sup>non-persistent</sup> | `get_support` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. (untitled buy_play_fv)

- **Key:** `buy_play_fv`
- **Control:** Purchase (`BuyPlayFvPref`)
- **Source:** `xml/buy_methods.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 2. (untitled buy_rustore_fv)

- **Key:** `buy_rustore_fv`
- **Control:** Purchase (`BuyRustoreFvPref`)
- **Source:** `xml/buy_methods.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 3. (untitled buy_from_website)

- **Key:** `buy_from_website`
- **Control:** Purchase (`BuyWebsiteFvPref`)
- **Source:** `xml/buy_methods.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 4. Already Purchased?

- **Key:** `already_purchased`
- **Control:** Link (`AlreadyPurchasedRedirectPref`)
- **Opens:** [Purchase Restoration](Purchase%20Restoration.md) (`already_purchased`)
- **Source:** `xml/buy_methods.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

### 5. Purchase FAQ

- **Key:** `get_support`
- **Control:** Action (`Preference`)
- **Category:** Get Support
- **Markers:** non-persistent
- **Source:** `xml/buy_methods.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

## Screen-level evidence notes

- Three purchase buttons are declared “button only”. Storefront visibility by edition is not established.
- This is one of three places that declare a Purchase FAQ entry (`get_support` here, `get_support` on `already_purchased`, `purchase_faq` on `support`).

---

← [Audio Advanced Tweaks](Audio%20Advanced%20Tweaks.md) · [Settings Reference Index](Index.md) · [Crossfade and Gapless Settings](Crossfade%20and%20Gapless%20Settings.md) →
