---
title: "Purchases and Feature Packages"
chapter: 36
part: "7 — Maintenance and Support"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "already_purchased"
  - "buy_methods"
  - "feature_packages"
  - "library_lists"
  - "singlepane"
  - "support"
  - "ui"
  - "ui_player"
  - "vis"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 7 — Maintenance and Support › Chapter 36

# 36. Purchases and Feature Packages

Poweramp Player is sold through several storefronts. On top of the Full Version it offers optional **Feature Packages** and **Uberpatron badges**. Build 1031 declares purchase buttons, restore options for each storefront, a Feature Packages screen, and three entry points to a Purchase FAQ. This chapter explains them and lists the settings associated with Feature Packages. Prices, trial terms and storefront policies are not part of the settings XML and are not covered.

## Where purchases are offered

| Storefront | Purchase entry | Restore entry |
|---|---|---|
| Google Play (in-app purchase) | `buy_play_fv` (main menu and purchase methods) | **In-App Purchases on Google Play** (`restore_purchase`): Full Version in-app purchase, Feature Packages, Uberpatron badges |
| Google Play (legacy Unlocker app) | — | **Unlocker Purchase on Google Play** (`restore_unlocker`): “only applicable if you previously purchased Poweramp Unlocker app” |
| RuStore | `buy_rustore_fv` | **RuStore** (`rustore`): Full Version, Uberpatron badges |
| Huawei AppGallery | `buy_huawei_fv` (main menu) | **Huawei AppGallery** (`huawei`): Full Version, Uberpatron badges |
| Website | `buy_from_website` (purchase methods) | **Website** (`website`): “only applicable for prior purchase on website” |

**APK VERIFIED:** all rows and their texts. The main-menu purchase entries are marked `removeAsNeeded`. **RUNTIME VERIFICATION REQUIRED:** which rows a given installation shows. That depends on the edition and the purchase state.

## Purchase methods screen

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| (untitled `buy_play_fv`) | `buy_play_fv` | Purchase | — | — | — |
| (untitled `buy_rustore_fv`) | `buy_rustore_fv` | Purchase | — | — | — |
| (untitled `buy_from_website`) | `buy_from_website` | Purchase | — | — | — |
| Already Purchased? | `already_purchased` | Link | — | — | — |
| Purchase FAQ <sup>non-persistent</sup> | `get_support` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Purchase Methods](../Appendices/Settings%20Reference/Purchase%20Methods.md).*


## Restoring a purchase

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| In-App Purchases on Google Play | `restore_purchase` | Purchase restore | — | — | — |
| Unlocker Purchase on Google Play | `restore_unlocker` | Purchase restore | — | — | — |
| RuStore | `rustore` | Purchase restore | — | — | — |
| Huawei AppGallery | `huawei` | Purchase restore | — | — | — |
| Website | `website` | Purchase restore | — | — | — |
| Purchase FAQ <sup>non-persistent</sup> | `get_support` | Information | — | — | — |

*Source: APK build 1031 settings XML — reference: [Purchase Restoration](../Appendices/Settings%20Reference/Purchase%20Restoration.md).*


How to choose the right row:

1. **Bought inside Poweramp from Google Play** (Full Version, a Feature Package, or badges) → **In-App Purchases on Google Play**. Use the same Google account as for the purchase.
2. **Bought the separate “Poweramp Unlocker” app** years ago → **Unlocker Purchase on Google Play**.
3. **Bought on RuStore or Huawei AppGallery** → the matching row, signed in to that store.
4. **Bought on the website** → **Website**.

Restoring a purchase re-validates a licence. It does not restore settings, presets or the library. For those, see [Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md).

## Feature Packages

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| (untitled `fp1`) | `fp1` | Purchase | — | — | — |
| (untitled `isPriceReduced`) | `isPriceReduced` | Information | — | — | — |
| (untitled `move_fp1_to_about`) | `move_fp1_to_about` | Switch | Off | — | — |
| Buy Uberpatron Badges | `buy_uber_badges` | Purchase | — | — | — |
| (untitled `uber_level`) | `uber_level` | Status | — | — | — |
| Restore Purchases | `restore_purchase` | Purchase restore | — | — | — |

*Source: APK build 1031 settings XML — reference: [Feature Packages](../Appendices/Settings%20Reference/Feature%20Packages.md).*


- `fp1` is the single Feature Package purchase control declared in build 1031. What it contains, and its price, are storefront data.
- A price note reads: “a discounted, minimal price, if you recently purchased Full Version”.
- **Hide Feature Packages from the Settings top** (`move_fp1_to_about`, off by default) hides the Feature Packages entry at the top of Settings. **RESEARCH SUPPORTED:** the key name says it moves the entry to About, and the About screen does declare its own Feature Packages entry ([Chapter 37 — About, Updates and Support](37%20About,%20Updates%20and%20Support.md)).
- **Buy Uberpatron Badges** and the Uberpatron level row (`uber_level`, also shown on About) concern supporter badges. No setting in the XML depends on them.

### Settings marked as Feature Pack options

Nine settings carry `app:featurePack="1"`:

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Hide Unknown Artist <sup>Feature Pack</sup> | `hide_unknown_artist` | Switch | Off | — | Hide Unknown Album (`hide_unknown_album`) |
| Animations <sup>Feature Pack</sup> | `anim_speed` | List | `false` (does not match any declared value) | Disabled = `0`; Fast = `2`; Default = `1` | — |
| Edit Player Screen Buttons <sup>Feature Pack</sup> | `edit_player_screen_buttons` | Link | — | — | — |
| Prefer No Gap <sup>Feature Pack</sup> | `sub_aa_buttons_no_gap` | Switch | Not declared | — | — |
| Do Not Edit On Long Press <sup>Feature Pack</sup> | `sub_aa_buttons_no_lp_edit` | Switch | Not declared | — | — |
| Menu Button Long Press <sup>Feature Pack</sup> | `menu_button_long_press` | List | Not declared | Disabled; Delete; Add to Playlist; Info/Tags; Album Art; Artist; Album; Folder; Genre; Share; Like; Unlike (positional†) | Menu Button (`hide_menu`) |
| Line2 Press <sup>Feature Pack</sup> | `line2_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |
| Line2 Long Press <sup>Feature Pack</sup> | `line2_long_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |
| Hide System Bars For Full Screen <sup>Feature Pack</sup> | `vis_fs_hide_bars` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md), [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md), [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md), [Visualization Settings](../Appendices/Settings%20Reference/Visualization%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**RUNTIME VERIFICATION REQUIRED:** whether these settings are locked, hidden or merely badged without the pack. The attribute marks the association. It does not show the enforcement.

## The Purchase FAQ appears three times

The Purchase FAQ is declared three times, but it appears to be one destination reachable from three places:

| Entry | Screen | Key |
|---|---|---|
| Purchase FAQ | purchase methods (`buy_methods`), category “Get Support” | `get_support` |
| Purchase FAQ | Already Purchased? (`already_purchased`) | `get_support` |
| Purchase FAQ | Get Support (`support`) | `purchase_faq` |

**RESEARCH SUPPORTED:** all three lead to the same FAQ. The title is identical, but the targets are not declared in the XML.

## Common purchase problems

| Symptom | Check |
|---|---|
| Full Version not recognised after reinstalling | Restore on the row for the store you bought from, signed in to the same account |
| Bought the old Unlocker app | Use the Unlocker row, not In-App Purchases |
| Feature Pack options still unavailable | Feature Packages › Restore Purchases |
| Purchase made on the website | Website row |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** every purchase and restore entry, its line texts, the Feature Pack markers, and the three Purchase FAQ declarations.
- **RESEARCH SUPPORTED:** that the three FAQ entries share one destination.
- **RUNTIME VERIFICATION REQUIRED:** visibility per edition, Feature Pack contents and enforcement, prices and trial terms.

## Related

- [Purchase Methods](../Appendices/Settings%20Reference/Purchase%20Methods.md) · [Purchase Restoration](../Appendices/Settings%20Reference/Purchase%20Restoration.md) · [Feature Packages](../Appendices/Settings%20Reference/Feature%20Packages.md)
- [Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md) · [Chapter 37 — About, Updates and Support](37%20About,%20Updates%20and%20Support.md)

---

← [Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 37 — About, Updates and Support](37%20About,%20Updates%20and%20Support.md) →
