---
title: "Storage and Maintenance"
screen_id: "space"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 3
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Storage and Maintenance

Storage-related maintenance actions: deleting the image cache, a full library rescan, and a full visualization preset rescan.

| Property | Value |
|---|---|
| Screen ID | `space` |
| In-app location | Entry point not declared in the settings XML (see notes) |
| Declared entries | 3 — action or navigation 1, other 2 |
| Resource files | `xml/space.xml` |
| Explained in | [Chapter 35 — Backup, Restore and Maintenance](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Delete Cache <sup>non-persistent</sup> | `clear_aa_cache` | Action | — | — | — |
| 2 | Full Rescan <sup>non-persistent</sup> | `erase_and_rescan` | Action | — | — | — |
| 3 | Full Presets Rescan <sup>non-persistent</sup> | `vis_full_rescan` | Action | — | — | — |

## Entry details

### 1. Delete Cache

- **Key:** `clear_aa_cache`
- **Control:** Action (`Preference`)
- **APK text:** “Poweramp images cache will be deleted”
- **Markers:** non-persistent
- **Source:** `xml/space.xml`
- **Discussed in:** [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 2. Full Rescan

- **Key:** `erase_and_rescan`
- **Control:** Action (`ProgressPreference`)
- **APK text:** “Clear tag info database and rescan Library/Folders. Use when storage/SD card changed, on major ROM updates, or when folders are moved on storage”
- **Markers:** non-persistent
- **Source:** `xml/space.xml`
- **Discussed in:** [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. Full Presets Rescan

- **Key:** `vis_full_rescan`
- **Control:** Action (`ProgressPreference`)
- **APK text:** “Clear scanned presets info and do the full presets rescan”
- **Markers:** non-persistent
- **Source:** `xml/space.xml`
- **Discussed in:** [Chapter 35](../../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

## Screen-level evidence notes

- No redirect in the inventoried screens opens this screen; how it is reached is not declared in the settings XML. All three actions also appear on other screens.

---

← [Main Settings Menu](Main%20Settings%20Menu.md) · [Settings Reference Index](Index.md) · [Support](Support.md) →
