---
title: "The Player Screen"
chapter: 26
part: "5 — Interface and Visuals"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "ui_player"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 5 — Interface and Visuals › Chapter 26

# 26. The Player Screen

The Player Screen is Poweramp's main “now playing” view: cover, track labels, transport controls, seek bar, and a row of configurable buttons. **Settings › Look and Feel › Player Screen** (screen `ui_player`) controls its animations, button layout, ratings, menu and lyrics buttons, what tapping the second text line does, and how the previous-track button behaves. This chapter covers the configurable entries of this screen; the full declaration list is in the [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md) reference.

## Animation

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Album Art Animation | `aa_anim` | Switch | On | — | — |
| Animate Long Labels | `anim_long_labels` | Switch | On | — | — |
| Animate Long Labels Everywhere | `anim_long_labels_in_lists` | Switch | On | — | Animate Long Labels (`anim_long_labels`) |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).*


**Album Art Animation:** “Animate on track advance. Also applies to bottom bar”. Long titles scroll by default. **Animate Long Labels Everywhere** extends scrolling to lists and the mini-player.

## Player Screen buttons

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Edit Player Screen Buttons <sup>Feature Pack</sup> | `edit_player_screen_buttons` | Link | — | — | — |
| Prefer No Gap <sup>Feature Pack</sup> | `sub_aa_buttons_no_gap` | Switch | Not declared | — | — |
| Do Not Edit On Long Press <sup>Feature Pack</sup> | `sub_aa_buttons_no_lp_edit` | Switch | Not declared | — | — |
| Track Counter | `show_counter` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).*


All three button-layout options are marked as Feature Pack options ([Chapter 36 — Purchases and Feature Packages](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)).

- **Edit Player Screen Buttons** opens the button editor.
- **Prefer No Gap:** “Minimize gaps between buttons for the centered layout”.
- **Do Not Edit On Long Press:** “Prevents accidental long press started button editing”. This implies that a long press on a button starts editing unless this option is on.
- **Track Counter:** “Show track number/total tracks counter (if supported by skin)”. A hint adds: “Track Counter is available via Player Screen Buttons customization”.

## Other buttons

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Chromecast Button | `cc_button` | List | Player Screen (`1`) | Disabled = `0`; Player Screen = `1`; Player Screen Button = `4`; Main Menu = `2`; Player Screen and Main Menu = `3` | — |
| Rating Type | `rating_type` | List | `1` → Like/unlike thumbs† | Disabled; Like/unlike thumbs; 5 stars; 5 stars (menu/lists only) (positional†) | — |
| Menu Button | `hide_menu` | List | Not declared | Disabled = `1`; Enabled = `0` | — |
| Menu Button Long Press <sup>Feature Pack</sup> | `menu_button_long_press` | List | Not declared | Disabled; Delete; Add to Playlist; Info/Tags; Album Art; Artist; Album; Folder; Genre; Share; Like; Unlike (positional†) | Menu Button (`hide_menu`) |
| Lyrics Button | `main_lyrics_button` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Chromecast Button:** placement of the Cast button ([Chapter 15 — Chromecast Output](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md)).
- **Rating Type:** Disabled, Like/unlike thumbs, 5 stars, or 5 stars (menu/lists only). The declared default `1` maps by position to **Like/unlike thumbs**. For 5-star ratings the screen explains the gestures: rating gestures include swiping over stars, tapping empty star positions and long-pressing to toggle five versus zero.
- **Menu Button:** “Menu can be opened by long pressing the cover”. The control is stored inverted: Disabled = `1`, Enabled = `0`. When it is Disabled (`1`), **Menu Button Long Press** is unavailable.
- **Menu Button Long Press** (Feature Pack) assigns a long-press action to the track-menu button. The choices are Disabled, Delete, Add to Playlist, Info/Tags, Album Art, Artist, Album, Folder, Genre, Share, Like and Unlike.
- **Lyrics Button:** Disabled, When local lyrics available, or Always ([Chapter 28 — Lyrics](28%20Lyrics.md)).

## Second-line actions

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Line2 Press <sup>Feature Pack</sup> | `line2_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |
| Line2 Long Press <sup>Feature Pack</sup> | `line2_long_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).*


The second text line normally shows artist and album. A tap or long press on it can jump to the track's Artist, Album, Folder or Genre. Both options are Feature Pack items.

## Transport and navigation behaviour

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| << Button Resets Current Track | `previous_resets` | Switch | Off | — | — |
| -10/+10s Rewind Pro Buttons | `long_skip_rewind` | Switch | On | — | — |
| Navigate to the Folders | `menu_nav_to_folders` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).*


- **<< Button Resets Current Track:** a first press can restart the current track and a second press can skip back; this also applies to headset and notification controls. With the default (Off), << always goes to the previous track.
- **-10/+10s Rewind Pro Buttons** (on by default): the extra category controls become ±10-second seek buttons for long tracks, including long-category playback “Requires Pro Buttons skin option enabled”. It requires the skin's Pro Buttons option, which links to the skin settings (`settings/ui_theme#more_buttons`). The track-length threshold is set on the Library screen ([Chapter 18 — Music Folders, Scanning and Tags](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)).
- **Navigate to the Folders:** “Track menu ➔ Folders button navigates to the Folders category instead of the Folders Hierarchy”.

## Related options on other screens

- Visualization on the Player Screen: [Chapter 29 — Visualization](29%20Visualization.md).
- Lyrics swipe on the cover: [Chapter 28 — Lyrics](28%20Lyrics.md).
- Start at Library instead of the Player Screen: [Chapter 25 — Look and Feel](25%20Look%20and%20Feel.md).

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** every entry on the screen, with its options, values, defaults and texts.
- **RUNTIME VERIFICATION REQUIRED:** Feature Pack gating, defaults of the entries that declare none (button layout options, menu, lyrics button, second-line actions), and which skins support the track counter and Pro Buttons.

## Related

- [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md)
- [Chapter 25 — Look and Feel](25%20Look%20and%20Feel.md) · [Chapter 28 — Lyrics](28%20Lyrics.md) · [Chapter 36 — Purchases and Feature Packages](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)

---

← [Chapter 25 — Look and Feel](25%20Look%20and%20Feel.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 27 — Album Art and Backgrounds](27%20Album%20Art%20and%20Backgrounds.md) →
