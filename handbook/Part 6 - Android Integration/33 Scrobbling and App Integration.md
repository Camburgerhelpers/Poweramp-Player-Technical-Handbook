---
title: "Scrobbling and App Integration"
chapter: 33
part: "6 — Android Integration"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_equ"
  - "general"
  - "library"
  - "library_scanner"
  - "misc"
  - "singlepane"
  - "ui_lyrics"
  - "ui_theme"
  - "vis"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 6 — Android Integration › Chapter 33

# 33. Scrobbling and App Integration

Poweramp exchanges information with other apps in several ways: it scrobbles plays to listening-history services, broadcasts track changes, provides artwork and state through its API, accepts a configurable shutdown broadcast, loads third-party skins and visualization presets, scans third-party track providers, hands lyrics searches to other apps, and exports presets to Poweramp Equalizer. This chapter brings together the integration points declared in build 1031; media buttons and the Now Playing list are covered in Chapters 30 and 32.

## Scrobbling

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Scrobble via Official Last.fm app | `scrobble_to_last_fm` | Switch | Off | — | — |
| Scrobble via Simple Scrobbler | `scrobble_to_simple_last_fm` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Scrobble via Official Last.fm app:** “Scrobble via Last.fm app”.
- **Scrobble via Simple Scrobbler:** “Scrobble to Last.fm/Libre.fm via Simple Scrobbler (previously Simple Last.fm)”.

Both are off by default, and each needs the named app to be installed and signed in. **GENERAL PRINCIPLE:** many other scrobbling apps work without these switches, through one of two mechanisms. Apps that read the Android media session need notification-listener (notification access) permission. Apps that listen for the “metachanged” broadcast need **Metachanged Intent** (below) to be on, and on Android 8 and later they must register for it while running. Check which mechanism your scrobbler uses.

**Count As Played** (Library) sets when a track counts as played in Poweramp's own statistics ([Chapter 18 — Music Folders, Scanning and Tags](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)). The scrobbling apps apply their own thresholds.

## Broadcasts and API

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Metachanged Intent | `send_metachanged` | Switch | On | — | — |
| Send Album Art for old API | `send_old_api_aa` | Switch | Off | — | — |
| Shutdown Intent | `shutdown_intent` | Text field | Empty (declared) | Free text | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Metachanged Intent** (on by default): “For external apps”. **GENERAL PRINCIPLE:** “metachanged” broadcasts are a de facto convention that dates back to the old AOSP Music app. They are not a formal platform API. Scrobblers and automation tools use them to learn the current track.
- **Send Album Art for old API:** the older version-2 API artwork option supports clients not yet using the newer, higher-resolution API. The text confirms that a Poweramp API exists in an old (v2) and an updated form.
- **Shutdown Intent:** “Listen to this shutdown intent and pauses itself/stores state when the intent is received”. Enter the action name of a broadcast that another app or device sends before power-off. **RUNTIME VERIFICATION REQUIRED:** which head units or tools send such a broadcast. It only helps if the broadcast arrives before power is lost; an abrupt power cut sends nothing.

## Extensions that Poweramp loads

| Integration | Setting or entry | Chapter |
|---|---|---|
| Third-party skins | 3rd Party Skins list (`theme_list_3rdparty`) | [Chapter 25](../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md) |
| Third-party visualization presets | 3rd Party Presets category (`list_3rdparty`) | [Chapter 29](../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md) |
| Third-party track providers | **Scan Providers**: “Automatically scan 3rd party track provider plugins on startup” | [Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md) |
| Lyrics apps | **Preferred Lyrics App**, **Lyrics Item In The Track Menu** | [Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) |
| Custom decoder library | **Load custom .so library** (*Experiment*) | [Chapter 34](34%20Background%20Operation%20and%20Compatibility.md) |
| Addons | the **Addons** category on About (`addons`), declared empty and filled at runtime | [Chapter 37](../Part%207%20-%20Maintenance%20and%20Support/37%20About,%20Updates%20and%20Support.md) |

## Poweramp Equalizer

- **Export Presets to the Poweramp Equalizer app**: “Export all equalizer presets directly to the Poweramp Equalizer app” ([Chapter 04 — Equalizer and Tone Controls](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)).
- **Equalizer for Spotify and YouTube Music** opens the Poweramp Equalizer app's store page.

The two apps are configured separately. How the export behaves (copy or synchronization, conflict handling) is **RUNTIME VERIFICATION REQUIRED**.

## Media session clients

Android Auto, smartwatches and media-control apps use the media session and media browser. Their options are in [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md).

## Evidence and limitations

- **APK VERIFIED:** every key and quoted text, including the API v2 reference and the empty Addons category.
- **GENERAL PRINCIPLE:** the metachanged convention, shutdown broadcasts, scrobbler behaviour.
- **RUNTIME VERIFICATION REQUIRED:** the broadcast action names and extras, the API surface, which provider plugins exist, Addons contents, and scrobble timing.

## Related

- [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md) · [About Poweramp](../Appendices/Settings%20Reference/About%20Poweramp.md)
- [Chapter 28 — Lyrics](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md) · [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md) · [Chapter 34 — Background Operation and Compatibility](34%20Background%20Operation%20and%20Compatibility.md)

---

← [Chapter 32 — Android Auto and Connected Apps](32%20Android%20Auto%20and%20Connected%20Apps.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 34 — Background Operation and Compatibility](34%20Background%20Operation%20and%20Compatibility.md) →
