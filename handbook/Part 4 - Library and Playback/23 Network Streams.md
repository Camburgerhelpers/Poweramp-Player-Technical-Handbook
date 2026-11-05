---
title: "Network Streams"
chapter: 23
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "aa"
  - "library_lists"
  - "misc"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 23

# 23. Network Streams

Besides local files, Poweramp can play network streams such as internet radio and other HTTP audio streams. Build 1031 declares a small group of stream settings: connection timeout, buffer size, the HTTP User-Agent, how stream titles are formed, and how artwork is chosen. Stream handling beyond these settings (how streams are added, which protocols and playlist formats are supported, metadata parsing) is not part of the extracted settings XML, so this chapter documents the declared controls and marks the rest as outside the evidence.

## Connection and buffering

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Network Stream Timeout | `stream_timeout_ms` | Slider | 30 s (`30000`) | Positions: 1 s, 5 s, 10 s, 15 s, 30 s, 60 s, 120 s, 300 s, Never | — |
| Network Stream Buffer | `stream_buffer_bytes` | Slider | 1.00 MB (`1048576`) | 0.50 MB to 4.00 MB, step 10 KiB (`10240` bytes) (labels “Small” … “More”) | — |
| User Agent | `user_agent` | Text field | Not declared | Free text | — |

*Source: APK build 1031 settings XML — reference: [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Network Stream Timeout** is a slider with fixed positions: 1, 5, 10, 15, 30, 60, 120 and 300 seconds, or **Never**. The default is 30 s. **GENERAL PRINCIPLE:** this is how long Poweramp waits on a stalled connection before giving up. A longer timeout rides out brief network drops (for example on a train) at the cost of slower failure. “Never” effectively disables the timeout.
- **Network Stream Buffer** ranges 0.50 MB to 4.00 MB, step 10 KiB (`10240` bytes), default 1.00 MB. Here “MB” is a binary megabyte (MiB): the declared default `1048576` bytes is exactly 1 MiB. **Unresolved evidence point:** the raw minimum and maximum are not preserved in this publication, and if the minimum is 0.5 MiB the default is not a whole number of 10 KiB steps above it ((1048576 − 524288) ÷ 10240 = 51.2). The exact slider positions are **RUNTIME VERIFICATION REQUIRED**. A larger buffer absorbs longer interruptions. **GENERAL PRINCIPLE:** it also delays the start of playback and uses more memory.
- **User Agent:** “User Agent header value to use for the streaming”. Leave it empty unless a stream server rejects Poweramp's default identification. Some servers deliver different formats or refuse unknown clients depending on the User-Agent.

All three are on **Settings › Misc** under Tweaks.

## Titles and artwork

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Stream Name In Title | `stream_name_in_title` | Switch | Not declared | — | — |
| Prefer Track Cover for Streams | `aa_per_stream_track` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md), [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md).*


- **Stream Name In Title:** the next stream may display both the stream name and current track title.
- **Prefer Track Cover for Streams:** “Show album art based on stream track title/artist instead of the stream name”, which “Increases traffic usage”. With it off, artwork is chosen by the stream name.
- **Download Album Art** is Off by default ([Chapter 27 — Album Art and Backgrounds](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md)). **RUNTIME VERIFICATION REQUIRED:** whether stream artwork depends on it. **Download Only On Wi-Fi** is On by default, so when downloading is enabled, covers are not fetched over mobile data.

## Recommended settings by situation

| Situation | Timeout | Buffer | Notes |
|---|---|---|---|
| Stable Wi-Fi | 30 s (default) | 1 MB (default) | — |
| Mobile data while travelling | 60–120 s | 2–4 MB | rides out coverage gaps; slower start |
| High-bitrate lossless streams | default | 2–4 MB | at a high bitrate a given buffer holds fewer seconds of audio, so a larger buffer helps (**GENERAL PRINCIPLE**; whether the buffer holds compressed or decoded data is not declared) |
| A server rejects the client | — | — | try a browser-like User Agent string |

These are reasoned suggestions based on general networking behaviour, not measured results.

## Outside the extracted evidence

The settings XML does not document how streams are opened (URL entry, playlist files, or links from other apps), the supported protocols and container formats, ICY/HLS metadata handling, or whether stream playback uses the gapless and ReplayGain paths.

## Evidence and limitations

- **APK VERIFIED:** keys, timeout positions and stored values, buffer range and step, default values, and quoted texts.
- **GENERAL PRINCIPLE:** timeout and buffer trade-offs; User-Agent behaviour.
- **RUNTIME VERIFICATION REQUIRED:** everything in the section above, and the default of Stream Name In Title (not declared).

## Related

- [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md) · [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md) · [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md)
- [Chapter 27 — Album Art and Backgrounds](../Part%205%20-%20Interface%20and%20Visuals/27%20Album%20Art%20and%20Backgrounds.md) · [Chapter 34 — Background Operation and Compatibility](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)

---

← [Chapter 22 — Search](22%20Search.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 24 — Tracker Module Playback](24%20Tracker%20Module%20Playback.md) →
