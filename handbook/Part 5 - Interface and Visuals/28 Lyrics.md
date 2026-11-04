---
title: "Lyrics"
chapter: 28
part: "5 — Interface and Visuals"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "aa_bg"
  - "audio_output_device_opts"
  - "ui_lyrics"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 5 — Interface and Visuals › Chapter 28

# 28. Lyrics

Poweramp shows lyrics from tags inside the audio files and from `.lrc` files, synchronized where timing information exists. For tracks without local lyrics it can hand off to an external lyrics app or a web search. The settings are on **Settings › Look and Feel › Lyrics** (screen `ui_lyrics`), with timing and background options on other screens.

## Opening lyrics

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Lyrics Swipe Up | `main_lyrics_swipe` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |
| Lyrics Button | `main_lyrics_button` | List | Not declared | Disabled = `0`; When local lyrics available = `1`; Always = `2` | — |
| Lyrics Item In The Track Menu | `lyrics_in_menu` | List | Not declared | Open lyrics UI = `0`; Open 3rd party app = `1` | — |

*Source: APK build 1031 settings XML — reference: [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md).*


Both the swipe and the button offer Disabled, When local lyrics available, or Always. **Lyrics Item In The Track Menu** chooses between “Open lyrics UI” and “Open 3rd party app”. The same **Lyrics Button** setting also appears on the Player Screen settings ([Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md)).

## Display

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Lyrics Size | `list_zoom_lyrics` | List | Not declared | Small Font = `-1`; Default = `0`; Large Font = `1` | — |
| Keep Screen On | `lyrics_keep_screen` | Switch | Not declared | — | — |
| Lyrics Background | `lyrics_aa_blur_enabled` | Switch | Not declared | — | Enable Blurred Backgrounds (`aa_blur_enabled`) |

*Source: APK build 1031 settings XML — reference: [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md), [Background Appearance Settings](../Appendices/Settings%20Reference/Background%20Appearance%20Settings.md).*


**Lyrics Size** offers Small Font, Default or Large Font. The screen notes that pinch-to-zoom works too. **Keep Screen On** applies only while lyrics are shown. **Lyrics Background** (Background settings) uses the blurred album-art background behind lyrics ([Chapter 27 — Album Art and Backgrounds](27%20Album%20Art%20and%20Backgrounds.md)).

## Timing

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Lyrics Time Offset | `lyrics_offset` | Slider | Not declared | −5000 ms to 5000 ms, step 50 ms (labels “-5000” … “0” … “5000”) | — |
| Visualization/Lyrics Delay <sup>non-persistent</sup> | `vis_latency_ms` | Slider | 0 ms (`0`) | 0 ms to 2500 ms, step not declared | — |

*Source: APK build 1031 settings XML — reference: [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md), [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


There are two separate corrections:

1. **Lyrics Time Offset:** “Applied to synced lyrics in addition to the offset tag” “%d ms”, adjustable −5000 ms to 5000 ms, step 50 ms. Use it when lyrics are consistently early or late for *all* tracks.
2. **Visualization/Lyrics Delay** on each output's options screen compensates for the output's own latency (0 ms to 2500 ms, step not declared, default 0 ms). Bluetooth typically needs the most ([Chapter 14 — Bluetooth Audio](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)).

**GENERAL PRINCIPLE:** fix output latency per output first, then use the global offset for any remaining error that is the same everywhere. A per-file offset tag, where the lyrics file provides one, corrects a single track.

## Scanning local lyrics

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Rescan Lyrics Tags <sup>non-persistent</sup> | `rescan_lyrics_tags` | Action | — | — | — |
| Scan LRC Files | `lrc_scan` | Switch | Not declared | — | — |
| Always Use UTF-8 | `lrc_utf8` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md).*


- **Rescan Lyrics Tags:** “Force rescan tracks which may contain lyrics tags, including SYLT”. **GENERAL PRINCIPLE:** SYLT is the ID3v2 frame for synchronized lyrics. Unsynchronized lyrics use USLT (ID3) or LYRICS-type comments.
- **Scan LRC Files:** “If enabled, Poweramp searches for LRC files in the Music Folders, matching LRC files by their tags, file names, and folders”.
- **Always Use UTF-8:** “If disabled, Tag Encoding setting is used for non-Unicode files”.

## External lyrics apps

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Preferred Lyrics App | `lyrics_plugin` | List | Not declared | None = `-1`; Browser via custom URL = `6`; Google = `2`; Google (Web) = `3`; MusiXmatch = `0`; Genius = `1`; QuickLyric = `4`; Walkman Lyrics Extension = `5` | — |
| Custom URL | `lyrics_custom_url` | Text field | Not declared | Free text | — |

*Source: APK build 1031 settings XML — reference: [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md).*


**Preferred Lyrics App:** “3rd party app to search lyrics when no lyrics found (if installed): %s”. The options are None, Browser via custom URL, Google, Google (Web), MusiXmatch, Genius, QuickLyric and Walkman Lyrics Extension. **Custom URL** is “For the Browser via custom URL”. The URL's placeholder syntax is not declared. **RUNTIME VERIFICATION REQUIRED.**

## Common problems

| Symptom | Check |
|---|---|
| Lyrics exist in the files but don't show | **Rescan Lyrics Tags**; the Lyrics Button setting “When local lyrics available” vs “Always” |
| `.lrc` files are ignored | **Scan LRC Files**; file names and tags must match the track |
| Garbled lyrics text | If your LRC files are saved in a legacy code page, turn the LRC **Always Use UTF-8** option off and set **Tag Encoding** to that code page ([Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)). If they are UTF-8, leave the option on; turning it off can cause garbling |
| Lyrics drift on Bluetooth only | per-output **Visualization/Lyrics Delay** |
| Lyrics early or late on every output | **Lyrics Time Offset** |

## Evidence and limitations

- **APK VERIFIED:** keys, options, stored values, ranges and quoted texts.
- **GENERAL PRINCIPLE:** SYLT/USLT and the order of latency correction.
- **RUNTIME VERIFICATION REQUIRED:** defaults (none declared on this screen), LRC matching rules, custom URL syntax, and the external app integrations.

## Related

- [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md)
- [Chapter 14 — Bluetooth Audio](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md) · [Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md) · [Chapter 29 — Visualization](29%20Visualization.md)

---

← [Chapter 27 — Album Art and Backgrounds](27%20Album%20Art%20and%20Backgrounds.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 29 — Visualization](29%20Visualization.md) →
