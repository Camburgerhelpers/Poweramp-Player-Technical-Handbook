---
title: "Notifications and Media Buttons"
chapter: 30
part: "6 — Android Integration"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "ui_mediaactions"
  - "ui_notify"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 6 — Android Integration › Chapter 30

# 30. Notifications and Media Buttons

Poweramp's media notification is the main control surface outside the app. It drives the notification shade, the Android media controls, and (through the same media session) many connected devices. **Settings › Look and Feel › Notifications** (screen `ui_notify`) sets its style, colours, priority and persistence. **Buttons** (screen `ui_mediaactions`, also reached from Lock Screen and Misc) assigns up to six extra media actions.

## Style and colours

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Notification Type | `notification_type` | List | `0` → Auto† | Auto; Media / Colorized; Media with the custom cover; Legacy (positional†) | — |
| Notification Colors | `notification_colors` | List | `0` → Auto† | Auto; Black; White (positional†) | — |
| Colorize Notification | `notify_colorize` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


**Notification Type:**

- **Auto**
- **Media / Colorized**
- **Media with the custom cover**
- **Legacy**

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

The declared default `0` is **Auto** under the inferred † mapping (unverified). **GENERAL PRINCIPLE:** since about Android 11, media notifications are shown in a standard system media player built from the app's media session, and Android 13 and later build its controls from the session's playback state. On those versions the custom and legacy styles, **Notification Colors** and **Colorize Notification** may have little or no visible effect. **RUNTIME VERIFICATION REQUIRED** per Android version and device.

- **Notification Colors:** “Adjust if notification text/icons are not visible due to the non-standard colors”. The options are Auto, Black and White.
- **Colorize Notification** (on by default): “Match notification colors and background to the track album art image”.

## Behaviour

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Navigate to the List | `status_lib` | Switch | Off | — | — |
| Show Previous Track Action (<<) | `notify_prefer_nav` | Switch | Off | — | — |
| Notification Priority | `notify_prio` | List | Not declared | Max = `2`; High = `1`; Default = `0`; Low = `-1`; Min = `-2` | — |

*Source: APK build 1031 settings XML — reference: [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md).*


- **Navigate to the List:** “Notification navigates to the current list on touch”.
- **Show Previous Track Action (<<):** “<< is shown instead of close action (x) in the small notification”.
- **Notification Priority:** “Defines Poweramp notification position”. Options run from Max (`2`) through High, Default and Low to Min (`-2`). No default is declared. **GENERAL PRINCIPLE:** since Android 8, notification ordering is largely governed by notification channels and, for media, by the system media controls, so this option's effect is version-dependent (**RUNTIME VERIFICATION REQUIRED**).

## Keeping the notification and service

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Keep Notification | `keep_notification` | Switch | Not declared | — | — |
| Keep Inactive Media Notification | `notify_resume` | Switch | Not declared | — | — |
| Keep Service | `keep_service` | Switch | Not declared | — | — |
| Remove Notification on Disconnection | `no_keep_notif_on_dscn` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md).*


- **Keep Notification:** “Notification stays even if Poweramp paused in its UI, when playback auto-ends, etc”.
- **Keep Inactive Media Notification:** a firmware-dependent media suggestion may permit resuming the player while it is inactive. Its hint: “Media Notification for an inactive player has only the play button” an inactive notification may persist after pausing, and changing the setting may require a restart.
- **Keep Service:** “Poweramp player service won't be unloaded when in idle” “On Android 8+ this option works reliable only with the active notification”.
- **Remove Notification on Disconnection:** “Notification is removed on Headset/BT disconnection if player is paused” “This option may temporarily keep Poweramp idle service if required”.

These options trade convenience against clutter and battery. Their background-operation role is discussed in [Chapter 34 — Background Operation and Compatibility](34%20Background%20Operation%20and%20Compatibility.md).

## Media action buttons

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Button 1 | `notify_action1` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| Button 2 | `notify_action2` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| Button 3 | `notify_action3` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| Button 4 | `notify_action4` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| Button 5 | `notify_action5` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |
| Button 6 | `notify_action6` | List | Not declared | None = `0`; Repeat = `1`; Shuffle = `2`; Close = `3`; Like = `4`; Unlike = `5`; Rating = `6`; -10 = `8`; +10 = `7`; Prev. category = `10`; Next category = `9` | — |

*Source: APK build 1031 settings XML — reference: [Media Buttons and Actions](../Appendices/Settings%20Reference/Media%20Buttons%20and%20Actions.md).*


Each button can be set to one of these actions. Stored values are listed because they are **not** in label order:

- **None** — stored value `0`
- **Repeat** — stored value `1`
- **Shuffle** — stored value `2`
- **Close** — stored value `3`: Pause player and remove the notification
- **Like** — stored value `4`
- **Unlike** — stored value `5`
- **Rating** — stored value `6`: Rating is switched between Like/Unlike/None
- **-10** — stored value `8`
- **+10** — stored value `7`
- **Prev. category** — stored value `10`
- **Next category** — stored value `9`

Buttons 1–2 are grouped under “Notification/Android Auto”, and Buttons 3–6 under “Android Auto/Other”. **RESEARCH SUPPORTED:** the first two appear in the phone notification, and all six are offered to Android Auto and other media controllers that show more actions. No button declares a default.

**GENERAL PRINCIPLE:** in a media notification the play/pause, previous and next controls are standard. Extra actions appear as additional buttons, and how many fit depends on the Android version and on whether the notification is expanded or compact.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** keys, options, stored values, summaries and texts; the button grouping.
- **RESEARCH SUPPORTED:** which surfaces show Buttons 3–6.
- **GENERAL PRINCIPLE:** Android media notification and media-control behaviour.
- **RUNTIME VERIFICATION REQUIRED:** the rendering of each notification type on current Android versions, the defaults of priority and keep options, and the number of buttons shown per surface.

## Related

- [Notification Settings](../Appendices/Settings%20Reference/Notification%20Settings.md) · [Media Buttons and Actions](../Appendices/Settings%20Reference/Media%20Buttons%20and%20Actions.md)
- [Chapter 31 — Lock Screen](31%20Lock%20Screen.md) · [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md) · [Chapter 34 — Background Operation and Compatibility](34%20Background%20Operation%20and%20Compatibility.md)

---

← [Chapter 29 — Visualization](../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 31 — Lock Screen](31%20Lock%20Screen.md) →
