---
title: "Support"
screen_id: "support"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 4
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Support

Support links: FAQ, Purchase FAQ, forum, and log sending.

| Property | Value |
|---|---|
| Screen ID | `support` |
| In-app location | Settings › Get Support |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Get Support” (`get_support`) |
| Declared entries | 4 — action or navigation 4 |
| Resource files | `xml/support.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md), [Chapter 37 — About, Updates and Support](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | FAQ <sup>non-persistent</sup> | `faq` | Action | — | — | — |
| 2 | Purchase FAQ <sup>non-persistent</sup> | `purchase_faq` | Action | — | — | — |
| 3 | Forum <sup>non-persistent</sup> | `poweramp_forum` | Action | — | — | — |
| 4 | Send Log <sup>non-persistent</sup> | `send_log` | Action | — | — | — |

## Entry details

### 1. FAQ

- **Key:** `faq`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml/support.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Purchase FAQ

- **Key:** `purchase_faq`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml/support.xml`
- **Discussed in:** [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md), [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Forum

- **Key:** `poweramp_forum`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml/support.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.
- **Evidence note:** `app:skipSearch="play"` names specific app editions; interpretation (hidden from settings search in those editions) is inferred.

### 4. Send Log

- **Key:** `send_log`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml/support.xml`
- **Discussed in:** [Chapter 37](../../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

## Screen-level evidence notes

- The four entries are actions with no static targets in the XML.

---

← [Storage and Maintenance](Storage%20and%20Maintenance.md) · [Settings Reference Index](Index.md) · [Translations](Translations.md) →
