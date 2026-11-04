---
title: "Player Screen"
screen_id: "ui_player"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 20
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Player Screen

Player Screen behaviour: animations, button layout editing, Chromecast button placement, ratings, menu button, lyrics button, second-line actions, track counter, and previous-button behaviour.

| Property | Value |
|---|---|
| Screen ID | `ui_player` |
| In-app location | Settings › Look and Feel › Player Screen |
| Reached from | [Look and Feel](Look%20and%20Feel.md) → “Player Screen” (`ui_player`) |
| Declared entries | 20 — action or navigation 1, adjustable 7, informational or dynamic 2, other 1, toggle 9 |
| Resource files | `xml-v22/ui_player.xml`, `xml/ui_player.xml` |
| Explained in | [Chapter 15 — Chromecast Output](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 17 — Headphones and Hardware Buttons](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 19 — Browsing the Library](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 26 — The Player Screen](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36 — Purchases and Feature Packages](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Album Art Animation | `aa_anim` | Switch | On | — | — |
| 2 | Animate Long Labels | `anim_long_labels` | Switch | On | — | — |
| 3 | Animate Long Labels Everywhere | `anim_long_labels_in_lists` | Switch | On | — | Animate Long Labels (`anim_long_labels`) |
| 13 | Line2 Press <sup>Feature Pack</sup> | `line2_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |
| 14 | Line2 Long Press <sup>Feature Pack</sup> | `line2_long_click` | List | Not declared | Disabled = `0`; Artist = `1`; Album = `2`; Folder = `3`; Genre = `4` | — |
| 15 | Track Counter | `show_counter` | Switch | Off | — | — |
| 16 | (untitled `_counter_hint`) | `_counter_hint` | Information | — | — | — |
| 17 | << Button Resets Current Track | `previous_resets` | Switch | Off | — | — |
| 18 | -10/+10s Rewind Pro Buttons | `long_skip_rewind` | Switch | On | — | — |
| 19 | Navigate to the Folders | `menu_nav_to_folders` | Switch | Off | — | — |
| 20 | Restore Defaults | `restore_defaults` | Action | — | — | — |

**Category: Player Screen Buttons**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 4 | Edit Player Screen Buttons <sup>Feature Pack</sup> | `edit_player_screen_buttons` | Link | — | — | — |
| 5 | Prefer No Gap <sup>Feature Pack</sup> | `sub_aa_buttons_no_gap` | Switch | Not declared | — | — |
| 6 | Do Not Edit On Long Press <sup>Feature Pack</sup> | `sub_aa_buttons_no_lp_edit` | Switch | Not declared | — | — |

**Category: Other Buttons**

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 7 | Chromecast Button | `cc_button` | List | Player Screen (`1`) | Disabled = `0`; Player Screen = `1`; Player Screen Button = `4`; Main Menu = `2`; Player Screen and Main Menu = `3` | — |
| 8 | Rating Type | `rating_type` | List | `1` → Like/unlike thumbs† | Disabled; Like/unlike thumbs; 5 stars; 5 stars (menu/lists only) (positional†) | — |
| 9 | (untitled `hint_5stars`) | `hint_5stars` | Information | — | — | — |
| 10 | Menu Button | `hide_menu` | List | Not declared | Disabled = `1`; Enabled = `0` | — |
| 11 | Menu Button Long Press <sup>Feature Pack</sup> | `menu_button_long_press` | List | Not declared | Disabled; Delete; Add to Playlist; Info/Tags; Album Art; Artist; Album; Folder; Genre; Share; Like; Unlike (positional†) | Menu Button (`hide_menu`) |
| 12 | Lyrics Button | `main_lyrics_button` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |

*† Stored value inferred from option position; the XML declares no explicit value list.*

## Entry details

### 1. Album Art Animation

- **Key:** `aa_anim`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Animate on track advance. Also applies to bottom bar”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 2. Animate Long Labels

- **Key:** `anim_long_labels`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Animate long track title and album/artist labels”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 3. Animate Long Labels Everywhere

- **Key:** `anim_long_labels_in_lists`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Animate long track labels also in lists and the miniplayer”
- **Depends on:** Animate Long Labels (`anim_long_labels`)
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 4. Edit Player Screen Buttons

- **Key:** `edit_player_screen_buttons`
- **Control:** Link (`EditButtonsRedirPref`)
- **Category:** Player Screen Buttons
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 5. Prefer No Gap

- **Key:** `sub_aa_buttons_no_gap`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Player Screen Buttons
- **Declared default:** Not declared
- **APK text:** “Minimize gaps between buttons for the centered layout”
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 6. Do Not Edit On Long Press

- **Key:** `sub_aa_buttons_no_lp_edit`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Category:** Player Screen Buttons
- **Declared default:** Not declared
- **APK text:** “Prevents accidental long press started button editing”
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 7. Chromecast Button

- **Key:** `cc_button`
- **Control:** List (`TagListPreference`)
- **Category:** Other Buttons
- **Declared default:** Player Screen (`1`)
- **Options:**
  - Disabled — `0`
  - Player Screen — `1`
  - Player Screen Button — `4`
  - Main Menu — `2`
  - Player Screen and Main Menu — `3`
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 8. Rating Type

- **Key:** `rating_type`
- **Control:** List (`TagListPreference`)
- **Category:** Other Buttons
- **Declared default:** `1` → Like/unlike thumbs†
- **Options:**
  - Disabled
  - Like/unlike thumbs
  - 5 stars
  - 5 stars (menu/lists only)
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.

### 9. (untitled hint_5stars)

- **Key:** `hint_5stars`
- **Control:** Information (`RawTextPreference`)
- **Category:** Other Buttons
- **APK text:** “Swipe over stars to select rating. Touch an empty space where star should be placed for immediate rating. Long press to toggle between 5 or 0 stars”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 10. Menu Button

- **Key:** `hide_menu`
- **Control:** List (`TagListPreference`)
- **Category:** Other Buttons
- **Declared default:** Not declared
- **APK text:** “Menu can be opened by long pressing the cover”
- **Options:**
  - Disabled — `1`
  - Enabled — `0`
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 11. Menu Button Long Press

- **Key:** `menu_button_long_press`
- **Control:** List (`TagListPreference`)
- **Category:** Other Buttons
- **Declared default:** Not declared
- **APK text:** “Long press action for the track menu button”
- **Options:**
  - Disabled
  - Delete
  - Add to Playlist
  - Info/Tags
  - Album Art
  - Artist
  - Album
  - Folder
  - Genre
  - Share
  - Like
  - Unlike
- **Depends on:** Menu Button (`hide_menu`)
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 12. Lyrics Button

- **Key:** `main_lyrics_button`
- **Control:** List (`TagListPreference`)
- **Category:** Other Buttons
- **Declared default:** Not declared
- **APK text:** “Button on the Player Screen/cover”
- **Options:**
  - Disabled — `0`
  - When local lyrics available — `1`
  - Always — `2`
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.

### 13. Line2 Press

- **Key:** `line2_click`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **APK text:** “Handle press on the 2nd track text line”
- **Options:**
  - Disabled — `0`
  - Artist — `1`
  - Album — `2`
  - Folder — `3`
  - Genre — `4`
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 14. Line2 Long Press

- **Key:** `line2_long_click`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **APK text:** “Handle long press on the 2nd track text line”
- **Options:**
  - Disabled — `0`
  - Artist — `1`
  - Album — `2`
  - Folder — `3`
  - Genre — `4`
- **Markers:** Feature Pack
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md), [Chapter 36](../../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Marked with `app:featurePack="1"`: associated with a Feature Pack (see Chapter 36). Whether it is locked without the pack requires runtime verification.

### 15. Track Counter

- **Key:** `show_counter`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Show track number/total tracks counter (if supported by skin)”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 16. (untitled _counter_hint)

- **Key:** `_counter_hint`
- **Control:** Information (`RawTextPreference`)
- **APK text:** “Track Counter is available via Player Screen Buttons customization”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`

### 17. << Button Resets Current Track

- **Key:** `previous_resets`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “First press rewinds track, second press changes track. Includes headset/bluetooth button presses, notification button”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 17](../../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 18. -10/+10s Rewind Pro Buttons

- **Key:** `long_skip_rewind`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** On
- **APK text:** “Change <<< >>> (category change) pro buttons to -10/+10s rewinding buttons for long tracks. Also applies to Long category” “Requires Pro Buttons skin option enabled”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 19. Navigate to the Folders

- **Key:** `menu_nav_to_folders`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Off
- **APK text:** “Track menu ➔ Folders button navigates to the Folders category instead of the Folders Hierarchy”
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`
- **Discussed in:** [Chapter 19](../../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md), [Chapter 26](../../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)

### 20. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/ui_player.xml`, `xml/ui_player.xml`

## Screen-level evidence notes

- Six entries are Feature Pack–marked.
- `long_skip_rewind` and its summary refer to a “Pro Buttons” skin option at `settings/ui_theme#more_buttons`; per-skin options are not part of the inventoried XML.

---

← [Notification Settings](Notification%20Settings.md) · [Settings Reference Index](Index.md) · [Theme Settings](Theme%20Settings.md) →
