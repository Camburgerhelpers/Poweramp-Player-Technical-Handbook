---
title: "Lock Screen"
chapter: 31
part: "6 — Android Integration"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "aa"
  - "lockscreen"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 6 — Android Integration › Chapter 31

# 31. Lock Screen

There are two different lock-screen experiences. The **Android lock screen** shows media controls and album art supplied by Poweramp through Android's media APIs. **GENERAL PRINCIPLE:** on stock Android 11 and later the lock screen shows art inside the media controls rather than as a full-screen background, and device makers differ, so some lock-screen art options may have little visible effect (**RUNTIME VERIFICATION REQUIRED**). The **Poweramp lock screen** is an optional full Poweramp interface shown over the system lock screen. **Settings › Lock Screen** (screen `lockscreen`) configures both.

## Android lock screen

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Album Art | `ics_ls_aa` | Switch | On | — | — |
| Blur | `ls_aa_blur` | Switch | Off | — | Album Art (`ics_ls_aa`) |
| Show Default Image | `ls_default_aa` | Switch | Off | — | — |
| Buttons | `buttons` | Link | — | — | — |

*Source: APK build 1031 settings XML — reference: [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md).*


- **Album Art** (on by default): “Show album art on Android lock screen. This option may also affect Android Auto covers. Not supported by some devices/ROMs”.
- **Blur** (off by default; depends on Album Art): “Lock screen album art is blurred. The album art background isn't shown by some devices. This option is not recommended for smart watches or apps that use Poweramp album art”.
- **Show Default Image:** “Send default placeholder image when no album art exists for the track. Also affects smart watches, other apps utilizing media APIs. Default image is defined by skin”.
- **Buttons** opens the media action buttons ([Chapter 30 — Notifications and Media Buttons](30%20Notifications%20and%20Media%20Buttons.md)).

Related, on the Album Art screen: **Send High Resolution Album Art** sends high-resolution art to the lock screen, widgets and other media consumers, and “Lock Screen ➔ Blur has priority over this option” ([Chapter 27 — Album Art and Backgrounds](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)).

## Poweramp lock screen

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Show On Lock Screen | `ls_enable` | Switch | Off | — | — |
| Shorter Timeout | `ls_force_timeout` | Switch | On | — | Show On Lock Screen (`ls_enable`) |
| Landscape Layout | `ls_enable_land` | Switch | Off | — | Show On Lock Screen (`ls_enable`) |
| Direct Unlock | `direct_unlock` | Switch | Off | — | Show On Lock Screen (`ls_enable`) |
| Open App Settings <sup>non-persistent</sup> | `ls_app_settings` | Action | — | — | Show On Lock Screen (`ls_enable`) |

*Source: APK build 1031 settings XML — reference: [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md).*


- **Show On Lock Screen** (off by default): “Poweramp shows itself on top of system lock screen if music is playing. Settings, deletion, edit tag, etc. actions trigger device lock screen”.
- **Shorter Timeout** (on by default): “Apply shorter screen timeout when Poweramp is on lock screen”.
- **Landscape Layout:** “Enable rotation to landscape layout”.
- **Direct Unlock:** “Unlock directly to home screen (if possible) instead of Android lockscreen”.
- **Open App Settings** opens Android's settings page for Poweramp. **RESEARCH SUPPORTED** (not verified): this is presumably for granting the permissions an over-lock-screen display needs on some devices.

**GENERAL PRINCIPLE:** recent Android versions restrict apps that start activities from the background, and several device makers add their own lock-screen or overlay permissions. **RUNTIME VERIFICATION REQUIRED** for your device. If the Poweramp lock screen doesn't appear, check the app's permissions (Open App Settings) and any vendor lock-screen restrictions.

## Choosing

| Goal | Settings |
|---|---|
| Standard system media controls with cover | Album Art on; Poweramp lock screen off |
| Privacy (no cover on the lock screen) | Album Art off, or Blur on |
| Smartwatch or other device always gets a cover | Album Art on, Blur off, Show Default Image on, and **Always Send Album Art** ([Chapter 27](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)) |
| Full player over the lock screen, e.g. in a car dock | Show On Lock Screen on; Landscape Layout as needed |

## Evidence and limitations

- **APK VERIFIED:** keys, defaults, dependencies and quoted texts, including the priority note.
- **GENERAL PRINCIPLE:** lock-screen display permissions.
- **RUNTIME VERIFICATION REQUIRED:** system lock-screen rendering per Android version and vendor, permissions required for the Poweramp lock screen, and Direct Unlock behaviour with secure lock methods.

## Related

- [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md)
- [Chapter 27 — Album Art and Backgrounds](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md) · [Chapter 30 — Notifications and Media Buttons](30%20Notifications%20and%20Media%20Buttons.md) · [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md)

---

← [Chapter 30 — Notifications and Media Buttons](30%20Notifications%20and%20Media%20Buttons.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md) →
