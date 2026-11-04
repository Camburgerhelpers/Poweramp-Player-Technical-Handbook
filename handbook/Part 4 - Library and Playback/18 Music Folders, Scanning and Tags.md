---
title: "Music Folders, Scanning and Tags"
chapter: 18
part: "4 — Library and Playback"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "library"
  - "library_lists"
  - "library_scanner"
  - "ui_lyrics"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 4 — Library and Playback › Chapter 18

# 18. Music Folders, Scanning and Tags

Poweramp builds its library by scanning the folders you choose and reading each file's tags into a database. This chapter covers granting folder access, when and how scans run, which files are skipped, how multi-artist and multi-genre tags are split, how non-Unicode text is decoded, and how CUE sheets are handled. It also covers per-track progress and play counting. **RUNTIME VERIFICATION REQUIRED:** where Poweramp stores ratings, play counts and per-track progress, and whether **Full Rescan** preserves them, is not established by the evidence.

## Music folders and storage access

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Music Folders | `music_folders_button` | Information | — | — | — |
| Auto-Find Music Folders | `auto_find_button` | Action | — | — | — |
| File Access Legacy Mode | `file_access_legacy` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md).*


- **Music Folders** opens the folder selection dialog. The dialog itself is not part of the settings XML.
- The screen states an Android restriction: “Android may not allow certain folders to be added, such as Download or a storage root. In this case please add their subfolders instead. This restriction is imposed by Google”.
- **Auto-Find Music Folders:** “Use this option to find music folders automatically”.
- **File Access Legacy Mode:** “Direct file access mode. Requires extra permission” “This mode makes all storages directly accessible for a selection in the Music Folders dialog. This option is not supported on Android 13+ for the Play app edition”.

**GENERAL PRINCIPLE.** Modern Android grants apps access to folders through the Storage Access Framework (SAF) folder picker. Google blocks some locations, such as the storage root and Download, which is why Poweramp asks you to add their sub-folders instead. Legacy mode uses broad file permissions where the edition and Android version still allow it. Per the APK text, it is not available on Android 13+ for the Play edition.

## Scanning

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Rescan <sup>non-persistent</sup> | `rescan_folders` | Action | — | — | — |
| Full Rescan <sup>non-persistent</sup> | `erase_and_rescan` | Action | — | — | — |
| Auto-scan | `auto_scan` | Switch | On | — | — |
| Rescan Immediately | `scan_no_wait` | Switch | Off | — | Auto-scan (`auto_scan`) |
| Initial Scan | `initial_scan` | Switch | On | — | Auto-scan (`auto_scan`) |
| Scan Providers | `scan_providers` | Switch | Off | — | Auto-scan (`auto_scan`) |
| USB Disconnection/SD Card Mount | `scan_post_usb_mount` | Switch | On | — | Auto-scan (`auto_scan`) |
| System Media Scanner/MTP | `scan_post_system` | Switch | On | — | Auto-scan (`auto_scan`) |

*Source: APK build 1031 settings XML — reference: [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md), [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md).*


- **Rescan** scans the library folders again. **RUNTIME VERIFICATION REQUIRED:** whether it re-reads unchanged files (for example after you change split symbols or Tag Encoding) or only new and modified ones.
- **Full Rescan:** “Clear tag info database and rescan Library/Folders. Use when storage/SD card changed, on major ROM updates, or when folders are moved on storage”. The same action appears on the storage maintenance screen ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).

> [!CAUTION]
> **Full Rescan: treat as high risk until verified.**
> The APK text says Full Rescan clears the tag info database. Whether ratings, play counts, “last played” data, per-track progress and playlist links survive it has **not been verified**. Before you run it: (1) use **Export Settings/Data** and copy the file off the device, (2) export your playlists with **Export Poweramp Playlists**, and (3) try a normal **Rescan** first. Use Full Rescan only for the situations the APK names, or when a normal Rescan has not helped ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
- **Auto-scan** (on by default): “Enable automatic SD card/storages scan. If disabled, only manual Rescan is available”. Its triggers depend on it:
  - **Rescan Immediately:** “Rescan immediately when something changed on the storage. Tracks appear faster, but this may introduce more rescans when you upload multiple files to the device”.
  - **Initial Scan:** “Quick scan when Poweramp is started for first time”.
  - **Scan Providers:** “Automatically scan 3rd party track provider plugins on startup” ([Chapter 33 — Scrobbling and App Integration](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)).
  - **USB Disconnection/SD Card Mount:** “Scan on USB disconnection and/or SD card mount”.
  - **System Media Scanner/MTP:** “Scan once Android System/MTP Media Scanner finishes”. Files copied over USB from a computer appear after Android's own scanner has finished.

## What gets skipped

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Ignore Short Tracks (Notifications, etc.) | `scan_min_track_duration` | List | 6 (`6`) | Don't ignore - include all = `0`; 2 = `2`; 6 = `6`; 10 = `10`; 15 = `15`; 30 = `30`; 45 = `45`; 60 = `60` | — |
| Ignore Video Tracks | `skip_video` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md).*


The six-second default keeps most short notification sounds out of the library. Many ringtones last 20–30 seconds and pass a six-second filter; a higher threshold catches them but may also hide short interludes. Set it to “Don't ignore” if you keep very short tracks, such as sound effects or interludes.

## Multi-value tags: artists, composers, genres

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Symbols to Split Multiple Artists | `artists_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| Unsplit Artists | `artists_split_ignore` | Tag list | `AC/DC`, `+/-` | Up to 25 entries | — |
| Symbols to Split Multiple Composers | `composers_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| Symbols to Split Multiple Genres | `genres_split_chars` | Tag list | Not declared | Up to 25 entries | — |
| Show Unsplit Combined Categories | `show_unsplit_cats` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md), [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


When a tag holds several names (“Artist A; Artist B”), Poweramp can split it so each name gets its own entry in Artists, Composers or Genres. You supply the separator symbols: “One or multiple symbols like ; // $”. No separators are declared by default. **Unsplit Artists** protects names that contain a separator character. The declared defaults are `AC/DC` and `+/-`. Add names such as `Simon & Garfunkel` if you split on `&`. **Show Unsplit Combined Categories:** “Unsplit combined Artists, Album Artists, Composers are visible in the appropriate categories”.

After changing separators, run a **Rescan**. If entries still look stale, a **Full Rescan** may help; read the Full Rescan caution above first.

## Text encoding

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Tag Encoding | `tag_encoding` | List | Default (`_default_`) | 18 options (see appendix) | — |
| Always Use UTF-8 for .m3u | `m3u_utf8` | Switch | On | — | — |
| Always Use UTF-8 | `lrc_utf8` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md), [Lyrics Settings](../Appendices/Settings%20Reference/Lyrics%20Settings.md).*


**Tag Encoding:** “Encoding for non-Unicode tags and playlists”. The list offers the system default plus 17 legacy code pages: Big5, GB2312, GBK, ISO-8859-2, Windows-1250, ISO-8859-7, Windows-1253, ISO-8859-8, Windows-1255, Shift_JIS, ISO-2022-JP, EUC-JP, EUC-KR, Windows-1251, Windows-874 (TIS-620), Windows-1252 and ISO-8859-1. The list labels and their stored values are in the [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md) reference. **GENERAL PRINCIPLE:** this matters for text stored in a legacy, non-Unicode code page, typically ID3v1 tags, ID3v2 frames written in ISO-8859-1 by older taggers, and `.m3u` playlists. Some of these code pages are single-byte (ISO-8859-x, Windows-125x), others are multibyte (Big5, GBK, GB2312, Shift_JIS, EUC-JP, EUC-KR) or stateful (ISO-2022-JP). Text stored as Unicode (UTF-8 or UTF-16) is unaffected. Only one code page can be selected at a time. If titles show as garbled characters, choose the encoding the files were tagged in, then run a **Rescan**; use a **Full Rescan** only if that does not help, after reading the caution above.

- **Always Use UTF-8 for .m3u:** “If disabled, Tag Encoding setting is used for .m3u playlists. UTF-8 is always used for .m3u8 playlists”.
- **Always Use UTF-8** for LRC lyrics files: “If disabled, Tag Encoding setting is used for non-Unicode files” ([Chapter 28 — Lyrics](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)).

## CUE sheets

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Parse CUE Files | `process_cues` | Switch | On | — | — |
| Show CUE Disc Image Files | `show_cue_source` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md), [Library Lists](../Appendices/Settings%20Reference/Library%20Lists.md).*


**Parse CUE Files** (on by default): “Virtual folders are created for CUE files with multiple tracks”. **RUNTIME VERIFICATION REQUIRED:** exactly how the virtual tracks are presented. **Show CUE Disc Image Files** additionally lists the undivided image. **Silence Between Tracks** is not applied to CUE tracks ([Chapter 06 — Track Transitions and Gapless Playback](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)).

## Per-track progress and play statistics

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Store/Restore Per Track Progress | `restore_pos` | Switch | On | — | — |
| Track Duration For Per Track Progress and -10/+10s Buttons | `restore_pos_min_dur` | Slider | 45 min (`45`) | 0 min to 60 min, step not declared | — |
| -10/+10s Rewind Pro Buttons | `long_skip_rewind` | Switch | On | — | — |
| Count As Played | `played_dur` | Slider | 50% (`50`) | 0% to 100%, step not declared | — |
| Reset stats | `reset_stats` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md).*


- **Store/Restore Per Track Progress** is on by default and “useful for podcasts, long sets”. It applies to tracks at least as long as the duration setting (default 45 minutes, range 0–60).
- **-10/+10s Rewind Pro Buttons** turns the category-change pro buttons into 10-second skip buttons for long tracks. It requires the skin's Pro Buttons option ([Chapter 26 — The Player Screen](../Part%205%20-%20Interface%20and%20Visuals/26%20The%20Player%20Screen.md)).
- **Count As Played:** a track counts as played after 50% of it. This feeds play counts and “last played” data.
- **Reset stats:** “Reset tracks played times, last played, and related stats”. Treat it as irreversible unless you have a backup that you have confirmed contains statistics ([Chapter 35](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).

## Common problems

| Symptom | Check |
|---|---|
| A folder can't be added | Add its sub-folders (Android restriction); try Auto-Find; legacy mode where allowed |
| New files don't appear | Auto-scan and its triggers; Rescan; System Media Scanner/MTP for files copied from a PC |
| Ringtones appear as music | Ignore Short Tracks |
| “Artist A; Artist B” appears as one artist | Add `;` to Symbols to Split Multiple Artists, then rescan |
| A band name is split wrongly | Add it to Unsplit Artists |
| Garbled titles | Tag Encoding, then Rescan; Full Rescan only after a backup (see the caution above) |
| Library wrong after moving the SD card or a ROM update | Export settings and playlists first, then Full Rescan (as the APK recommends) |

## Evidence and limitations

- **APK VERIFIED:** keys, defaults, ranges, encoding list and quoted texts, including the Android 13+ Play-edition note.
- **GENERAL PRINCIPLE:** SAF behaviour and legacy encodings.
- **RUNTIME VERIFICATION REQUIRED:** what Full Rescan and Rescan preserve (ratings, play counts, progress, playlist links), the Music Folders dialog, the provider-plugin mechanism, and the default state of Ignore Video Tracks and the split lists.

## Related

- [Music Library Settings](../Appendices/Settings%20Reference/Music%20Library%20Settings.md) · [Music Scanner](../Appendices/Settings%20Reference/Music%20Scanner.md)
- [Chapter 19 — Browsing the Library](19%20Browsing%20the%20Library.md) · [Chapter 20 — Playlists and the Queue](20%20Playlists%20and%20the%20Queue.md) · [Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

---

← [Chapter 17 — Headphones and Hardware Buttons](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 19 — Browsing the Library](19%20Browsing%20the%20Library.md) →
