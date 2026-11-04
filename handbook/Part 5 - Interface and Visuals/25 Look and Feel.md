---
title: "Look and Feel"
chapter: 25
part: "5 — Interface and Visuals"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "misc"
  - "translations"
  - "ui"
  - "ui_theme"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 5 — Interface and Visuals › Chapter 25

# 25. Look and Feel

Look and Feel (screen `ui`, **Settings › Look and Feel**) is the hub for Poweramp's appearance: the skin, day/night behaviour, the look of the Settings screens themselves, language, launcher icon, orientation, animations and a few screen behaviours. This chapter explains those settings and maps the appearance options that live on other screens. The settings reference page of the same name is a separate document that lists the declarations. This chapter is the explanation.

## Skin and theme

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Skin | `ui_theme` | Link | — | — | — |
| Follow Day/Night Mode | `follow_night_mode` | Switch | Off | — | — |
| Built-in Skins | `theme_list` | Skin list | — | — | — |
| 3rd Party Skins | `theme_list_3rdparty` | Skin list | — | — | — |
| Always Reload Skin | `check_for_skin_reload` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md), [Theme Settings](../Appendices/Settings%20Reference/Theme%20Settings.md), [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Skin:** “Change Poweramp visual theme. Set per-skin options like extra Pro Buttons, Static Seekbar”. The skin screen (`ui_theme`) lists **Built-in Skins** and **3rd Party Skins**. Both lists are filled at runtime, and per-skin options (such as the extra **Pro Buttons** and **Static Seekbar** named in the summary) are not part of the inventoried XML. **RUNTIME VERIFICATION REQUIRED** for skin names and options.
- **Follow Day/Night Mode:** “Follow system Day/Night Mode if selected skin supports light/dark themes”.
- **Always Reload Skin** (Misc › Tweaks) is for skin developers: “For skin developers. Always check skin for a change when app activity goes background”.

**GENERAL PRINCIPLE:** third-party Poweramp skins are distributed as separate Android apps that Poweramp detects. Which skins appear depends on what is installed.

## The Settings screens' own appearance

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Settings Theme | `settings_theme` | List | `0` → Default† | Default; Light; Dark; Follow Day/Night Mode (positional†) | — |
| Settings Font | `settings_font` | List | `2` → Bold† | Default; Alternative font; Bold; Bold+ (positional†) | — |
| Settings Shortcuts in Main Menu | `num_settings_tags` | Slider | Not declared | 0 to 10, step not declared (minimum position labelled “Disabled”; labels “Disabled” … “Max”) | — |

*Source: APK build 1031 settings XML — reference: [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**Settings Theme** and **Settings Font** style only the Settings screens. **Settings Shortcuts in Main Menu** adds up to ten shortcut entries to the main menu (0 to 10, step not declared). No default is declared.

## Language and icon

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Language | `lang` | List | Auto (``) | 31 options (see appendix) | — |
| Icon | `ui_icon` | Link | — | — | — |
| Poweramp Crowdin Project | `visit_crowdin` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md), [Translations](../Appendices/Settings%20Reference/Translations.md).*


- **Language** offers Auto (follow the system) plus 30 languages: Arabic, Bengali, Indonesian, Czech, Chinese (Simplified and Traditional), Danish, German, English, Spanish, Persian, French, Greek, Hebrew, Hindi, Italian, Romanian, Hungarian, Dutch, Japanese, Korean, Polish, Brazilian Portuguese, Russian, Slovak, Serbian, Thai, Vietnamese, Turkish and Ukrainian. Translations are community work; **Poweramp Crowdin Project** (“Visit/join Poweramp translation project at Crowdin.net”) is on About › Translations.
- **Icon** (“Set launcher icon”) opens a list of launcher icons populated at runtime.

## Screen behaviour

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Screen Orientation | `orientation` | List | `0` → Default† | Default; Portrait (Vertical); Landscape (Horizontal) (positional†) | — |
| Animations <sup>Feature Pack</sup> | `anim_speed` | List | `false` (does not match any declared value) | Disabled = `0`; Fast = `2`; Default = `1` | — |
| Start at Library | `start_at_lib` | Switch | Off | — | — |
| Hide Status Bar | `hide_status_bar` | Switch | Off | — | — |
| Keep Screen On | `keep_screen_on` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Screen Orientation:** Default, Portrait or Landscape. The declared default `0` is Default under the inferred † mapping. What “Default” does (for example whether it follows the system rotation lock) is **RUNTIME VERIFICATION REQUIRED**.
- **Animations:** “Disable/enable or change UI animation speed where possible”. Options are Disabled (`0`), Fast (`2`) and Default (`1`). It is marked as a Feature Pack option. **APK anomaly:** the declared default is `false`, which matches none of the stored values. Check the effective setting on your device (**RUNTIME VERIFICATION REQUIRED**).
- **Start at Library:** “Changes startup screen. Back action returns from the Player Screen to the current list”.
- **Hide Status Bar** and **Keep Screen On** (“Always keep screen on in the app”) are app-wide. Lyrics and the Poweramp lock screen have their own screen-on and timeout options ([Chapter 28 — Lyrics](28%20Lyrics.md), [Chapter 31 — Lock Screen](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)).

## Where other appearance settings live

| To change… | Go to | Chapter |
|---|---|---|
| Player Screen buttons, labels, ratings and animations | Look and Feel › Player Screen | [Chapter 26](26%20The%20Player%20Screen.md) |
| Blurred backgrounds, gradients | Settings › Background | [Chapter 27](27%20Album%20Art%20and%20Backgrounds.md) |
| Album art quality and aspect ratio | Settings › Album Art | [Chapter 27](27%20Album%20Art%20and%20Backgrounds.md) |
| Lyrics size and background | Look and Feel › Lyrics; Background | [Chapter 28](28%20Lyrics.md) |
| Visualization and the Equalizer spectrum | Settings › Visualization | [Chapter 29](29%20Visualization.md) |
| List headers, navbar, A–Z scroll, track numbers | Library › Lists | [Chapter 19](../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md) |
| Notification style and colours | Look and Feel › Notifications | [Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md) |
| Poweramp lock screen layout | Settings › Lock Screen | [Chapter 31](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md) |
| High display refresh rate on some devices | Misc › Apply OP High Framerate (*Experiment*) | [Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, options, defaults and quoted texts; the `anim_speed` default anomaly; the language list.
- **GENERAL PRINCIPLE:** skins installed as separate apps.
- **RUNTIME VERIFICATION REQUIRED:** skin lists and per-skin options, available icons, the effective Animations default, and Feature Pack gating.

## Related

- [Look and Feel](../Appendices/Settings%20Reference/Look%20and%20Feel.md) (the declaration reference for this screen) · [Theme Settings](../Appendices/Settings%20Reference/Theme%20Settings.md) · [Application Icon](../Appendices/Settings%20Reference/Application%20Icon.md) · [Translations](../Appendices/Settings%20Reference/Translations.md)
- [Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md) · [Chapter 27 — Album Art and Backgrounds](27%20Album%20Art%20and%20Backgrounds.md)

---

← [Chapter 24 — Tracker Module Playback](../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md) →
