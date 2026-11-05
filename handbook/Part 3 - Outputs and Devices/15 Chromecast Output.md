---
title: "Chromecast Output"
chapter: 15
part: "3 — Outputs and Devices"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_focus"
  - "audio_output_device_opts"
  - "ui_player"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 15

# 15. Chromecast Output

Poweramp can send playback to Google Cast (Chromecast) receivers: Chromecast devices, Cast-enabled speakers and TVs. Build 1031 declares a small set of Chromecast settings: where the Cast button appears, what metadata and artwork are sent, and how audio focus is handled. Much of Cast behaviour is decided by the receiver and the network, and the extracted evidence is correspondingly limited. This chapter documents what is declared and states plainly what is not.

## Getting the Cast button

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Chromecast Button | `cc_button` | List | Player Screen (`1`) | Disabled = `0`; Player Screen = `1`; Player Screen Button = `4`; Main Menu = `2`; Player Screen and Main Menu = `3` | — |

*Source: APK build 1031 settings XML — reference: [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md).*


- **Disabled** — stored value `0`
- **Player Screen** — stored value `1`
- **Player Screen Button** — stored value `4`
- **Main Menu** — stored value `2`
- **Player Screen and Main Menu** — stored value `3`

The default (`1`) puts the Cast button on the **Player Screen**. Moving it to the main menu frees space on the player. **Disabled** hides it.

## Chromecast output options

The Chromecast category on **Settings › Audio › Audio Outputs** opens the per-output options screen. Two entries there are Chromecast-specific:

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Force Send Album Art <sup>non-persistent</sup> | `cc_force_aa` | Switch | Not declared | — | — |
| Show Meta Information <sup>non-persistent</sup> | `cc_show_meta` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **Force Send Album Art:** “Send album art to Chromecast device even if it reports it has no display”. Audio-only Cast devices often report no display. Enable it when the receiver is in fact a screen (or forwards artwork to one) but shows no cover.
- **Show Meta Information:** Chromecast screens can display track format, category and upcoming-track information.

## Audio focus and interruptions

The Audio Focus screen carries an explicit warning: “Chromecast output may ignore calls and short Audio Focus completely. Press here to configure”. The link opens the Chromecast output options at **Ignore Audio Focus**:

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Ignore Audio Focus <sup>non-persistent</sup> | `no_af` | Switch | Not declared | — | — |
| No Duck <sup>non-persistent</sup> | `no_duck` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


**GENERAL PRINCIPLE:** while casting, sound comes from the receiver, not the phone. Pausing or ducking the cast stream for a phone notification is often undesirable, and some receivers handle focus changes poorly. **Ignore Audio Focus** keeps the cast stream playing through calls and notification sounds. **No Duck** pauses briefly instead of lowering the volume ([Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md)).

## Keeping a cast session alive

**GENERAL PRINCIPLE:** with local files, the phone acts as the media source for the receiver throughout playback. If Android suspends Poweramp in the background, the cast stops. If casting stops when the screen turns off, apply the background-operation measures in [Chapter 34 — Background Operation and Compatibility](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md): allow background activity in Android's battery settings first, then consider the keep-alive options.

## What the evidence does not establish

| Question | Status |
|---|---|
| Whether Poweramp sends the original file, a transcoded stream, or processed PCM to the receiver | not declared |
| Whether the equalizer, ReplayGain, crossfade or gapless playback apply while casting | not declared; the per-output overrides exist, but their effect on Cast is not established |
| How receiver volume relates to the phone's volume keys and to DVC | not declared |
| Supported formats and maximum rates per receiver | receiver-dependent; not declared |
| Multi-room or group casting | not declared |

All of these are **RUNTIME VERIFICATION REQUIRED**. This chapter documents every Chromecast declaration in build 1031 and lists the gaps explicitly rather than filling them.

## Evidence and limitations

- **APK VERIFIED:** button placement options and default, the two Chromecast output options, the audio-focus warning, and the deep link target (`audio_output_device_opts?uniqName=com.maxmpz.audioplayer/output.cc&device=chromecast#no_af`).
- **GENERAL PRINCIPLE:** Cast session architecture and background requirements.
- **RUNTIME VERIFICATION REQUIRED:** everything in the table above, and the default states of the two Chromecast options.

## Related

- [Player Screen](../Appendices/Settings%20Reference/Player%20Screen.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) · [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md)
- [Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md) · [Chapter 26 — The Player Screen](../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md) · [Chapter 34 — Background Operation and Compatibility](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

---

← [Chapter 14 — Bluetooth Audio](14%20Bluetooth%20Audio.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 16 — Calls, Notifications and Interruptions](16%20Calls,%20Notifications%20and%20Interruptions.md) →
