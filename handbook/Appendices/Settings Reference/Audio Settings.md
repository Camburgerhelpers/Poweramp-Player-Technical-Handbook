---
title: "Audio Settings"
screen_id: "audio"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 9
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Audio Settings

The Audio hub. It links to every audio sub-screen and exposes the Audio Info diagnostic page.

| Property | Value |
|---|---|
| Screen ID | `audio` |
| In-app location | Settings › Audio |
| Reached from | [Main Settings Menu](Main%20Settings%20Menu.md) → “Audio” (`audio`) |
| Links to | [Crossfade and Gapless Settings](Crossfade%20and%20Gapless%20Settings.md) (`fade`); [ReplayGain Settings](ReplayGain%20Settings.md) (`rg`); [Audio Focus](Audio%20Focus.md) (`audio_focus`); [Resampler Settings](Resampler%20Settings.md) (`audio_resampler`); [Direct Volume Control](Direct%20Volume%20Control.md) (`audio_dvc`); [Audio Output Selection](Audio%20Output%20Selection.md) (`audio_outputs2`); [Bit-Perfect and Precision Settings](Bit-Perfect%20and%20Precision%20Settings.md) (`audio_bit_perfect`); [Audio Advanced Tweaks](Audio%20Advanced%20Tweaks.md) (`audio_tweaks`) |
| Declared entries | 9 — other 9 |
| Resource files | `xml/audio.xml` |
| Explained in | [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | Audio Info | `audio_info` | Link | — | — | — |
| 2 | Crossfade, Fade, and Gapless | `fade` | Link | — | — | — |
| 3 | Replay Gain (RG) | `rg` | Link | — | — | — |
| 4 | Audio Focus | `audio_focus` | Link | — | — | — |
| 5 | Resampler | `audio_resampler` | Link | — | — | — |
| 6 | Direct Volume Control (DVC) | `audio_dvc` | Link | — | — | — |
| 7 | Audio Outputs | `audio_outputs2` | Link | — | — | — |
| 8 | Bit Perfect | `audio_bit_perfect` | Link | — | — | — |
| 9 | Advanced Tweaks | `audio_tweaks` | Link | — | — | — |

## Entry details

### 1. Audio Info

- **Key:** `audio_info`
- **Control:** Link (`PreferenceScreen`)
- **APK text:** “Detailed info about the audio processing. Also available by long press on small meta info on the Main and Equalizer screens”
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 2. Crossfade, Fade, and Gapless

- **Key:** `fade`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Crossfade options, fade type and length, gapless”
- **Opens:** [Crossfade and Gapless Settings](Crossfade%20and%20Gapless%20Settings.md) (`fade`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 3. Replay Gain (RG)

- **Key:** `rg`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Enable RG, set source, preamp values”
- **Opens:** [ReplayGain Settings](ReplayGain%20Settings.md) (`rg`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 4. Audio Focus

- **Key:** `audio_focus`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Pause/Resume/Duck volume on calls/notifications/start”
- **Opens:** [Audio Focus](Audio%20Focus.md) (`audio_focus`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 5. Resampler

- **Key:** `audio_resampler`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Resampling/dither settings”
- **Opens:** [Resampler Settings](Resampler%20Settings.md) (`audio_resampler`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 6. Direct Volume Control (DVC)

- **Key:** `audio_dvc`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “DVC options, DVC for Bluetooth”
- **Opens:** [Direct Volume Control](Direct%20Volume%20Control.md) (`audio_dvc`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 7. Audio Outputs

- **Key:** `audio_outputs2`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Wired Headset, Bluetooth, USB, Chromecast, and other outputs”
- **Opens:** [Audio Output Selection](Audio%20Output%20Selection.md) (`audio_outputs2`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 8. Bit Perfect

- **Key:** `audio_bit_perfect`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “64-bit audio pipeline, Perfect Bit Perfect”
- **Opens:** [Bit-Perfect and Precision Settings](Bit-Perfect%20and%20Precision%20Settings.md) (`audio_bit_perfect`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

### 9. Advanced Tweaks

- **Key:** `audio_tweaks`
- **Control:** Link (`RedirectPreference`)
- **APK text:** “Volume levels, MusicFX, equalizer/reverb presets reset”
- **Opens:** [Audio Advanced Tweaks](Audio%20Advanced%20Tweaks.md) (`audio_tweaks`)
- **Source:** `xml/audio.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)

## Screen-level evidence notes

- `audio_info` is a `PreferenceScreen` whose content is generated at runtime. Its summary says the same information is available by long-pressing the small meta info on the Main and Equalizer screens.
- The Equalizer settings screen (`audio_equ`) is not linked from this hub in the XML.

---

← [Purchase Restoration](Purchase%20Restoration.md) · [Settings Reference Index](Index.md) · [Bit-Perfect and Precision Settings](Bit-Perfect%20and%20Precision%20Settings.md) →
