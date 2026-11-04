---
title: "About, Updates and Support"
chapter: 37
part: "7 — Maintenance and Support"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "general"
  - "singlepane"
  - "support"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 7 — Maintenance and Support › Chapter 37

# 37. About, Updates and Support

This chapter covers the **About** screen (version, updates, links, translations, licences), the **Get Support** screen, crash reporting, and the diagnostic tools to use before you ask for help. It also explains what to include in a support request so that it can be acted on.

## About

**Settings › About** (screen `general`).

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Version/Changelog | `about_version` | Action | — | — | — |
| (untitled `uber_level`) | `uber_level` | Status | — | — | — |
| Feature Packages | `feature_packages` | Link | — | — | — |
| Visit Website | `visit_site_about` | Link | — | — | — |
| Translations | `translations` | Link | — | — | — |
| Open Source Licenses | `oss` | Action | — | — | — |
| Privacy Policy | `privacy` | Link | — | — | — |
| Addons | `addons` | Category | — | — | — |

*Source: APK build 1031 settings XML — reference: [About Poweramp](../Appendices/Settings%20Reference/About%20Poweramp.md).*


- **Version/Changelog** shows the installed version and its change history. Note the version shown there whenever you report a problem; this handbook describes build 1031.
- **Visit Website** carries `app:skipSearch="play,huawei"`, which suggests the Play and Huawei editions handle it differently. That is an inference ([Chapter 01 — How Poweramp's Settings Are Organized](../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md)).
- **Translations** opens the Crowdin project link ([Chapter 25 — Look and Feel](../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)).
- **Addons** is a category declared empty in the XML. Its contents are generated at runtime ([Chapter 33 — Scrobbling and App Integration](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)).

## Updates

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Check For Updates | `check_updates` | Switch | Not declared | — | — |
| Check For Beta Versions | `check_beta_updates` | Switch | Not declared | — | Check For Updates (`check_updates`) |
| Check Now <sup>non-persistent</sup> | `check_update` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [About Poweramp](../Appendices/Settings%20Reference/About%20Poweramp.md).*


- **Check For Updates:** “Check for updates once a week on startup”. No default is declared.
- **Check For Beta Versions** depends on it.
- **Check Now** runs a check immediately.

**GENERAL PRINCIPLE:** apps installed from a store normally update through that store. **RUNTIME VERIFICATION REQUIRED:** whether these options appear, or have any effect, in each storefront edition. The XML does not say which editions use the built-in checker.

## Get Support

**Settings › Get Support** (screen `support`).

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| FAQ <sup>non-persistent</sup> | `faq` | Action | — | — | — |
| Purchase FAQ <sup>non-persistent</sup> | `purchase_faq` | Action | — | — | — |
| Forum <sup>non-persistent</sup> | `poweramp_forum` | Action | — | — | — |
| Send Log <sup>non-persistent</sup> | `send_log` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Support](../Appendices/Settings%20Reference/Support.md).*


**Forum** is marked `skipSearch="play"`. **Send Log** sends a diagnostic log. Its contents and delivery method are not declared. **Purchase FAQ** is the same FAQ that is linked from the purchase screens ([Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md)).

## Crash reports

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Send Errors To Developer | `send_errors` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Main Settings Menu](../Appendices/Settings%20Reference/Main%20Settings%20Menu.md).*


**Send Errors To Developer** is on by default: “Suggest sending a crash log via email”. You are asked before anything is sent.

## Diagnostic toolbox

| Tool | Where | Use it for |
|---|---|---|
| **Audio Info** | Settings › Audio, or long-press the small meta info on the Player or Equalizer screen | the actual processing chain, output rate and format ([Chapter 02](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)) |
| **Status rows** on the per-output screen | Audio Outputs › (category) | why an option is unavailable or forced on this device ([Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)) |
| **Audio Outputs Detection Log** | Audio Outputs › Advanced Tweaks | device detection and routing problems ([Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)) |
| **Last Processed Commands** | Headset/Bluetooth | unexpected play, pause or skip from headsets and cars ([Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)) |
| **Bluetooth Absolute Volume status** | Direct Volume Control | whether DVC is active on Bluetooth ([Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)) |
| **Send Log** | Get Support | sending diagnostics to the developer |

## Writing a useful support request

Include:

1. **Device model, Android version, and Poweramp version/build** (Version/Changelog).
2. **The output involved** (category and device model), and the **Audio Info** contents while the problem occurs.
3. **Exact steps to reproduce** and what you expected to happen.
4. **What you already changed**, ideally one setting at a time, as in the protocol in [Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md).
5. The relevant log: Send Log, the Detection Log, or Last Processed Commands.

## Evidence and limitations

- **APK VERIFIED:** all keys, texts, dependencies and skipSearch attributes.
- **GENERAL PRINCIPLE:** store-managed updates.
- **RUNTIME VERIFICATION REQUIRED:** update-check defaults and availability per edition, Send Log contents, Addons contents, and link destinations (none declared in the XML).

## Related

- [About Poweramp](../Appendices/Settings%20Reference/About%20Poweramp.md) · [Support](../Appendices/Settings%20Reference/Support.md) · [Translations](../Appendices/Settings%20Reference/Translations.md)
- [Chapter 35 — Backup, Restore and Maintenance](35%20Backup,%20Restore%20and%20Maintenance.md) · [Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md) · [Chapter 38 — Troubleshooting Guide](38%20Troubleshooting%20Guide.md)

---

← [Chapter 36 — Purchases and Feature Packages](36%20Purchases%20and%20Feature%20Packages.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 38 — Troubleshooting Guide](38%20Troubleshooting%20Guide.md) →
