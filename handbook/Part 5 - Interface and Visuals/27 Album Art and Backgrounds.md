---
title: "Album Art and Backgrounds"
chapter: 27
part: "5 — Interface and Visuals"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "aa"
  - "aa_bg"
  - "misc"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 5 — Interface and Visuals › Chapter 27

# 27. Album Art and Backgrounds

Album art appears throughout Poweramp: on the Player Screen, in lists, as blurred backgrounds, on the lock screen and in notifications, on Android Auto and smartwatches, and on Chromecast receivers. Two settings screens manage it. **Album Art** (screen `aa`) covers sources, downloading, cache and image quality. **Background** (screen `aa_bg`) covers the blurred and gradient backgrounds built from the art.

## Where images come from

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Prefer Downloaded Album Art | `prefer_downloaded_aa` | Switch | Off | — | — |
| Download Album Art | `download_album_art` | Switch | Off | — | — |
| Download Artist Images | `download_artist_art` | Switch | Off | — | — |
| High Resolution | `aa_download_hd` | Switch | Off | — | — |
| Download Only On Wi-Fi | `download_aa_wifi_only` | Switch | On | — | — |
| Also Search By Title/Filename | `download_if_no_tags` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md).*


**GENERAL PRINCIPLE.** A player usually looks for art in three places: images embedded in the file's tags, image files in the album folder (`cover.jpg`, `folder.jpg` and similar), and online lookups. **APK VERIFIED:** Poweramp reads in-folder images. The text of **Prefer Downloaded Album Art** names “in-folder Cover.jpg/AlbumArt.jpg, etc”.

- Downloading is **off by default** for both album art and artist images. When enabled, it is limited to Wi-Fi by default.
- **Download Artist Images:** “Includes Album Artists and Composers. If disabled, track album art is used”.
- **High Resolution:** “Higher downloaded album art resolution, increases storage/connection bandwidth usage”.
- **Also Search By Title/Filename** (on by default): “Search for album art even if no tags are found in the track”.

## Cache and failed lookups

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Reset Negative Status <sup>non-persistent</sup> | `reset_negative_aa_status` | Action | — | — | — |
| Delete Cache <sup>non-persistent</sup> | `clear_aa_cache` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md).*


- **Reset Negative Status:** “Clear stored "not-found" status for album/artist images”. Use it after you add art or fix tags, so that previously failed lookups are tried again.
- **Delete Cache:** “Poweramp images cache will be deleted”. The same action is on the storage maintenance screen ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).

## Image quality and memory

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Use 24-bit RGB | `aa_8888` | Switch | Off | — | — |
| Increase Resolution <sup>Experiment</sup> | `aa_higher_res` | Switch | Off | — | — |
| Aspect Ratio | `aa_aspect` | List | `0` → Default† | Default; Keep Aspect Ratio; Square (positional†) | — |
| Force Default Image | `aa_force_default` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Use 24-bit RGB:** “Higher color resolution for album art. Requires 2x more memory per image”. **RESEARCH SUPPORTED** (inferred from the key name `aa_8888` and the “2x more memory” text): with it off, images presumably use a 16-bit format (RGB 565), which can show banding in gradients; with it on, a 32-bit format (ARGB 8888, 24-bit colour plus alpha).
- **Increase Resolution** (*Experiment*): “Increase image quality for high resolution embedded/in-folder images” “Consumes more RAM. Poweramp may crash due to insufficient memory on the devices with not enough RAM”.
- **Aspect Ratio:**

- **Default**: Keep landscape and square album art / images ratio
- **Keep Aspect Ratio**: Keep album art / images aspect ratio as is. Tall images won't fit fully some UI elements
- **Square**: Album art / images are always square

*Stored values are not declared for this list. Values and any default shown here assume first option = `0`; this is an unverified inference ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*

- **Force Default Image:** “Always show default image instead of any album art”.

## Art sent to other apps and devices

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Send High Resolution Album Art | `aa_hi_res_for_apis` | Switch | Off | — | — |
| Always Send Album Art | `aa_always` | Switch | Off | — | — |
| API Compatibility <sup>Experiment</sup> | `aa_no_ashmem` | Switch | Off | — | — |
| Send Album Art for old API | `send_old_api_aa` | Switch | Off | — | — |
| Prefer Track Cover for Streams | `aa_per_stream_track` | Switch | Off | — | — |

*Source: APK build 1031 settings XML — reference: [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md), [Miscellaneous Settings](../Appendices/Settings%20Reference/Miscellaneous%20Settings.md).*


- **Send High Resolution Album Art:** high-resolution artwork is sent to lock-screen, widget and media clients, although lock-screen blur can override it.
- **Always Send Album Art:** “For smartwatches/other devices which should always receive album art, even when screen is off”.
- **API Compatibility** (*Experiment*): “Change if album art is not visible in Android Auto/3rd party apps”. **RESEARCH SUPPORTED** (from the key name only, not verified): `aa_no_ashmem` suggests Android shared memory (ashmem), so the option may change how images are passed to other processes. **GENERAL PRINCIPLE:** large images passed between apps can hit inter-process size limits, which is one reason covers sometimes fail to appear in other apps.
- **Send Album Art for old API** (Misc): the older version-2 API artwork option supports clients not yet using the newer, higher-resolution API ([Chapter 33 — Scrobbling and App Integration](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)).
- **Prefer Track Cover for Streams:** [Chapter 23 — Network Streams](../Part%204%20-%20Library%20and%20Playback/23%20Network%20Streams.md).

The lock-screen options (album art, blur, default image) are in [Chapter 31 — Lock Screen](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md). Android Auto image options are in [Chapter 32 — Android Auto and Connected Apps](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md). Chromecast art is in [Chapter 15 — Chromecast Output](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md).

## Backgrounds

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Enable Blurred Backgrounds | `aa_blur_enabled` | Switch | Not declared | — | — |
| List Background | `list_aa_blur_enabled` | Switch | Not declared | — | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Lyrics Background | `lyrics_aa_blur_enabled` | Switch | Not declared | — | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Background Blur | `aa_blur` | Slider | `5` | 0 to 15, step not declared (labels “Less” … “More”) | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Background Details | `aa_blur_scale` | Slider | `5` | 0 to 10, step not declared (labels “Solid Color” … “Detailed”) | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Background Intensity | `aa_blur_intensity` | Slider | 100% (`100`) | 0% to 250%, step not declared | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Background Saturation | `aa_blur_saturation` | Slider | 150% (`150`) | 0% to 300%, step 10% | Enable Blurred Backgrounds (`aa_blur_enabled`) |
| Background Gradient | `aa_bg_gradient` | Slider | Not declared | 0 to 10, step not declared (labels “None” … “Max”) | — |
| Background Gradient Color | `aa_bg_gradient_color` | Color | Not declared | — | — |
| Background Gradient For Lists | `aa_bg_gradient_for_list` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Background Appearance Settings](../Appendices/Settings%20Reference/Background%20Appearance%20Settings.md).*


- **Enable Blurred Backgrounds** is the master switch. The list and lyrics variants depend on it. None of the three declares a default.
- **Background Blur** (0–15, default 5) sets the blur strength. **Background Details** runs from “Solid Color” to “Detailed” (0–10, default 5).
- **Background Intensity** (0–250 %, default 100 %) and **Background Saturation** (0–300 % in 10 % steps, default 150 %) set brightness and colourfulness.
- **Background Gradient** (0–10, “None” … “Max”) adds a gradient in **Background Gradient Color**. **Background Gradient For Lists** extends it to list backgrounds.

**GENERAL PRINCIPLE:** strong blur, high saturation and gradients cost GPU time. On low-end devices, reduce them if scrolling stutters.

## Common problems

| Symptom | Check |
|---|---|
| No covers for some albums | add an in-folder image (the APK names “Cover.jpg/AlbumArt.jpg, etc”) or embed art; enable downloading; **Reset Negative Status** |
| Covers missing in Android Auto or other apps | **API Compatibility**; **Album Art** on the lock screen ([Chapter 31](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md)); **Images for Categories** ([Chapter 32](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md)) |
| Smartwatch shows no art with the screen off | **Always Send Album Art** |
| Banding in covers | **Use 24-bit RGB** |
| Crashes with large images | turn off **Increase Resolution** |
| Tall covers cropped | **Aspect Ratio** → Keep Aspect Ratio |

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** all keys, options, ranges, defaults and quoted texts.
- **RESEARCH SUPPORTED** (from key names only, not verified): the ashmem and 24-bit RGB interpretations.
- **GENERAL PRINCIPLE:** art sources, colour formats, GPU cost.
- **RUNTIME VERIFICATION REQUIRED:** the online art provider, embedded-art priority, the exact folder image names searched, and the defaults of the background switches and gradient settings.

## Related

- [Album Art Settings](../Appendices/Settings%20Reference/Album%20Art%20Settings.md) · [Background Appearance Settings](../Appendices/Settings%20Reference/Background%20Appearance%20Settings.md)
- [Chapter 31 — Lock Screen](../Part%206%20-%20Android%20Integration/31%20Lock%20Screen.md) · [Chapter 32 — Android Auto and Connected Apps](../Part%206%20-%20Android%20Integration/32%20Android%20Auto%20and%20Connected%20Apps.md) · [Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)

---

← [Chapter 26 — The Player Screen](26%20The%20Player%20Screen.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 28 — Lyrics](28%20Lyrics.md) →
