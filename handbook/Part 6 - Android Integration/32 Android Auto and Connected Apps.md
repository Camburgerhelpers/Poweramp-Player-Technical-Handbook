---
title: "Android Auto and Connected Apps"
chapter: 32
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
  - "headset"
  - "lockscreen"
  - "misc"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 6 — Android Integration › Chapter 32

# 32. Android Auto and Connected Apps

Poweramp publishes its playback state, artwork and library to other devices and apps through Android's media session and media-browser interfaces. Android Auto, smartwatches (Wear OS), car head units over Bluetooth, and media-control apps all use them. This chapter collects the settings that shape that integration. They are spread over the Misc, Album Art, Lock Screen, Buttons and Headset screens.

## Android Auto browsing

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Grid View for Categories | `mb_a_grid` | Switch | Not declared | — | — |
| Images for Categories | `mb_a_aa_cats` | Switch | On | — | — |
| Album Art for Tracks | `mb_a_aa_tracks` | Switch | On | — | — |
| Buttons | `buttons` | Link | — | — | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Grid View for Categories:** Android Auto categories can use grids, and an already open category may need reopening.
- **Images for Categories** (on by default): “If enabled, album art and other relevant images are shown for categories”.
- **Album Art for Tracks** (on by default): “If enabled, album art is shown for track entries”.
- **Buttons** opens the media action buttons. Buttons 3–6 are grouped “Android Auto/Other” ([Chapter 30 — Notifications and Media Buttons](30%20Notifications%20and%20Media%20Buttons.md)).

## Now Playing list for connected devices

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Now Playing List For Connected Devices/Apps | `send_mediasession_q` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


connected media clients can request a Now Playing list or queue, which Poweramp may enable automatically. Poweramp turns this on by itself when a device or app requests the list. Turning it off may hide the queue view on a watch or in Android Auto until the next request.

## Artwork for cars, watches and other apps

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| API Compatibility <sup>Experiment</sup> | `aa_no_ashmem` | Switch | Off | — | — |
| Album Art | `ics_ls_aa` | Switch | On | — | — |
| Always Send Album Art | `aa_always` | Switch | Off | — | — |
| Show Default Image | `ls_default_aa` | Switch | Off | — | — |
| Send High Resolution Album Art | `aa_hi_res_for_apis` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md), [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md).*


| Problem | Setting | APK text |
|---|---|---|
| No covers in Android Auto or third-party apps | API Compatibility (*Experiment*) | “Change if album art is not visible in Android Auto/3rd party apps” |
| Android Auto covers missing | Lock screen **Album Art** | “This option may also affect Android Auto covers” |
| Watch loses cover when the phone screen is off | Always Send Album Art | “For smartwatches/other devices which should always receive album art, even when screen is off” |
| Watch shows nothing for tracks without art | Show Default Image | a skin-defined placeholder may be sent to watches or Android media clients when a track has no artwork |
| Low-resolution covers on the lock screen, widgets and other media consumers | Send High Resolution Album Art | “Lock Screen ➔ Blur has priority over this option” |

## Car head units over Bluetooth

Head units vary widely in the commands they send. These options, covered in [Chapter 17 — Headphones and Hardware Buttons](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md), exist mainly for cars:

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Strict Resume/Pause/Stop | `follow_pl_exact` | Switch | Not declared | — | Respond To Buttons (`enable_headset_controls`) |
| Ignore Bluetooth Commands | `ignore_bt_sec` | Slider | Not declared | 0 sec to 20 sec, step not declared (labels “0” … “20”) | — |
| Ignore Repeat/Shuffle | `bt_ignore_repeat_shuffle` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Headset and Bluetooth Settings](../Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md).*


Use **Last Processed Commands** (Headset/Bluetooth) to see what the car sends before you change anything. That screen is outside the extracted evidence, so its exact content is **RUNTIME VERIFICATION REQUIRED**.

## What happens in Android Auto itself

**GENERAL PRINCIPLE.** Android Auto renders its own interface from the media browser tree and the media session. Layout, how many items fit, and driver-distraction limits are set by Android Auto, not by Poweramp. Poweramp's options decide what it *offers*: grid or list presentation, images, the queue, and custom actions.

## Evidence and limitations

- **APK VERIFIED:** keys, defaults and quoted texts, including the Android Auto references in the lock-screen and album-art texts.
- **GENERAL PRINCIPLE:** media browser and session architecture.
- **RUNTIME VERIFICATION REQUIRED:** how the Android Auto category tree is structured, which custom actions Android Auto shows, the default of Grid View and of the Now Playing list, and Wear OS behaviour.

## Related

- [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md) · [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md) · [Lock Screen Settings](../Appendices/Settings%20Reference/Lock%20Screen%20Settings.md) · [Media Buttons and Actions](../Appendices/Settings%20Reference/Media%20Buttons%20and%20Actions.md)
- [Chapter 17 — Headphones and Hardware Buttons](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) · [Chapter 30 — Notifications and Media Buttons](30%20Notifications%20and%20Media%20Buttons.md) · [Chapter 31 — Lock Screen](31%20Lock%20Screen.md)

---

← [Chapter 31 — Lock Screen](31%20Lock%20Screen.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 33 — Scrobbling and App Integration](33%20Scrobbling%20and%20App%20Integration.md) →
