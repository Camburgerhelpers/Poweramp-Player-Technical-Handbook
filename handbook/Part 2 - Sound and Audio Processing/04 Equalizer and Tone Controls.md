---
title: "Equalizer and Tone Controls"
chapter: 4
part: "2 — Sound and Audio Processing"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
settings_screens:
  - "audio_equ"
  - "audio_output_device_opts"
  - "audio_tweaks"
  - "peq_equ_bands"
  - "peq_equ_tone"
  - "singlepane"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 2 — Sound and Audio Processing › Chapter 04

# 04. Equalizer and Tone Controls

Poweramp Player has a multi-band graphic equalizer with separate Bass and Treble tone controls, preset management, AutoEq integration, and a preset export path to the separate Poweramp Equalizer app. The equalizer's main screen (band sliders, preset list) is part of the user interface rather than the settings XML. This chapter therefore documents the **configuration** of the equalizer as declared in build 1031, and states where the extracted evidence stops.

## Where the settings are

The equalizer settings screen (`audio_equ`) is **not linked from Settings › Audio** in the XML, and no inventoried screen links to it. It has two sub-screens: **Graphic Equalizer Bands** and **Tone**. **RUNTIME VERIFICATION REQUIRED:** it is most likely opened from the Equalizer screen. Related settings also sit on the Audio › Advanced Tweaks screen and on each output's options screen.

## Band layout

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Number of Bands | `equ_bands_num` | List | 10 (ISO) (`10`) | 5 = `5`; 10 (ISO) = `10`; 12 = `12`; 15 (ISO) = `15`; 16 = `16`; 24 = `24`; 31 (ISO) = `31`; 32 = `32` | — |
| Enable Custom Bands | `equ_custom_bands` | Switch | Not declared | — | — |
| Custom Number of Bands | `equ_custom_bands_num` | Slider | `10` | 5 to 32, step not declared (labels “5” … “32”) | Enable Custom Bands (`equ_custom_bands`) |
| First Frequency | `equ_custom_bands_first_fr` | Slider | 20 Hz (`20`) | 5 Hz to 200 Hz, step not declared (labels “5” … “200”) | Enable Custom Bands (`equ_custom_bands`) |
| Last Frequency | `equ_custom_bands_last_fr` | Slider | 16.0 kHz (`16000`) | 14.0 kHz to 20.0 kHz, step 0.5 kHz (labels “14K” … “20K”) | Enable Custom Bands (`equ_custom_bands`) |

*Source: APK build 1031 settings XML — reference: [Equalizer Band Settings](../Appendices/Settings%20Reference/Equalizer%20Band%20Settings.md).*


The predefined counts are 5, 10, 12, 15, 16, 24, 31 and 32. Three are marked ISO: 10, 15 and 31. **GENERAL PRINCIPLE:** ISO 266 preferred frequencies give the familiar octave (10-band), two-thirds-octave (15-band) and third-octave (31-band) layouts. The exact centre frequencies Poweramp uses are not declared in the XML.

**Custom bands** let you choose the number of bands and the first and last centre frequencies. All three depend on **Enable Custom Bands**, which declares no default. How the intermediate bands are spaced between the end points is not declared. **GENERAL PRINCIPLE:** logarithmic spacing is the norm.

A note on the bands screen warns: a large number of EQ bands can require a bigger block size for sufficient frequency resolution. It links to `settings/peq_equ#peq_blocksize`, a screen that is not among the inventoried resources. **GENERAL PRINCIPLE:** narrow bands at low frequencies need longer processing blocks (more frequency resolution) in block-based filter designs. This is why a high band count may call for a larger block size. The Block Size setting itself is outside this handbook's evidence.

## Tone controls

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| (untitled `_bassFreq`) <sup>non-persistent</sup> | `_bassFreq` | Knob | Not declared | Not declared | — |
| (untitled `_bassQ`) <sup>non-persistent</sup> | `_bassQ` | Knob | Not declared | Not declared | — |
| (untitled `_trebleFreq`) <sup>non-persistent</sup> | `_trebleFreq` | Knob | Not declared | Not declared | — |
| (untitled `_trebleQ`) <sup>non-persistent</sup> | `_trebleQ` | Knob | Not declared | Not declared | — |

*Source: APK build 1031 settings XML — reference: [Bass and Treble Tone Settings](../Appendices/Settings%20Reference/Bass%20and%20Treble%20Tone%20Settings.md).*


The Tone screen's purpose is declared as “Set Bass/Treble frequencies and Q factors”. The four knobs declare **no titles, ranges or defaults** in the XML, and they are non-persistent, so their values belong to the preset or tone state rather than to simple preferences. This handbook gives no numeric values for them.

**GENERAL PRINCIPLE:** bass and treble controls are usually shelving filters. The frequency sets the transition point and Q shapes the transition. A higher Q gives a steeper shelf and, in many designs, some overshoot near the corner. Use the tone controls for broad balance and the bands for local corrections.

## Display, saving and gain protection

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Equalizer Values | `eq_labels` | List | `1` → dB† | Hidden; dB; % (positional†) | — |
| Tone Values | `tone_labels` | List | `2` → %† | Hidden; dB; % (positional†) | — |
| Auto Save <sup>non-persistent</sup> | `_autosave` | Switch | Not declared | — | — |
| Smooth Equalizer/Tone Gains | `dsp_border_gain` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Equalizer Settings](../Appendices/Settings%20Reference/Equalizer%20Settings.md).* *† Stored value inferred from option position; the XML declares no explicit value list. Unverified: build 1031 also contains lists numbered from `1` or out of order ([About This Edition](../00%20Front%20Matter/02%20About%20This%20Edition.md)).*


- **Equalizer Values** and **Tone Values** only change how values are labelled (Hidden, dB or %). Equalizer values default to dB and tone values to %. They do not change processing.
- **Auto Save** (“Auto save current preset”) declares no default and is non-persistent. **RUNTIME VERIFICATION REQUIRED:** its effect when you switch presets.
- **Smooth Equalizer/Tone Gains** (On by default) does exactly what its text says: “Automatically reduce Equalizer/Tone band gains near maximum volume to avoid overloading”. The applied boost is therefore not constant across the volume range. Keep this in mind when you measure an EQ curve: measure at a fixed, moderate volume, or switch the option off for the measurement and back on afterwards.

## AutoEq presets

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Suggest AutoEq Presets | `suggest_autoeq` | Switch | Not declared | — | — |
| Reset the Disabled AutoEq Suggestions | `_clear_autoeq_known_devices` | Information | — | — | Suggest AutoEq Presets (`suggest_autoeq`) |
| Import AutoEq Presets | `_import_autoeq` | Information | — | — | — |

*Source: APK build 1031 settings XML — reference: [Equalizer Settings](../Appendices/Settings%20Reference/Equalizer%20Settings.md).*


- **Suggest AutoEq Presets:** “Show suggestion to assign AutoEq preset for the connected Bluetooth/USB device”. The suggestion is tied to a *device*, so presets can evidently be associated with specific outputs. See the per-output preset button below.
- **Reset the Disabled AutoEq Suggestions:** “AutoEq preset suggestions will reappear for all devices”.
- **Import AutoEq Presets:** “Import presets from a zip file”. The required ZIP layout is not declared.

**GENERAL PRINCIPLE:** AutoEq presets are computed corrections toward a target response, based on published headphone measurements. They are a starting point. Unit variation, fit and seal, and personal preference all limit how exact the correction can be.

## Per-output equalizer controls

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| No Equ/Tone <sup>non-persistent</sup> | `no_equ` | Switch | Not declared | — | — |
| (untitled `eq_preset`) | `eq_preset` | Button | — | — | — |
| No Headroom Gain Reduction <sup>non-persistent</sup> | `no_headroom` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **No Equ/Tone** disables the equalizer and tone DSP for one output only. An example is turning it off for a car head unit while keeping it on headphones.
- `eq_preset` is an untitled, borderless button with a close icon at the top of the per-output screen. **RESEARCH SUPPORTED** (behaviour **RUNTIME VERIFICATION REQUIRED**): the key name and the AutoEq “assign … for the connected device” text suggest it shows a preset assigned to that output and lets you clear the assignment. Its behaviour is not declared.
- **No Headroom Gain Reduction** is explained in [Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md).

## Presets: export, restore and reverb

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Export Presets to the Poweramp Equalizer app | `_presets_to_peq` | Information | — | — | — |
| Restore Equalizer Presets | `reset_eq_presets` | Information | — | — | — |
| Restore Equalizer Presets | `reset_eq_presets` | Action | — | — | — |
| Restore Reverb Presets | `reset_reverb_presets` | Action | — | — | — |

*Source: APK build 1031 settings XML — reference: [Equalizer Settings](../Appendices/Settings%20Reference/Equalizer%20Settings.md), [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md).*


- **Export Presets to the Poweramp Equalizer app:** “Export all equalizer presets directly to the Poweramp Equalizer app”. This is a one-time copy into a separate application, not a live link. The transfer format and how name conflicts are handled are not declared.
- **Restore Equalizer Presets** appears on two screens with the same text: “Built-in and AutoEq equalizer presets will be restored to defaults”. Treat it as destructive for customised built-in and AutoEq presets. Export your settings first ([Chapter 35 — Backup, Restore and Maintenance](../Part%207%20-%20Maintenance%20and%20Support/35%20Backup,%20Restore%20and%20Maintenance.md)).
- **Restore Reverb Presets** (“Built-in reverb presets will be restored/set to defaults”) shows that build 1031 includes reverb presets. The reverb controls themselves are not part of the settings XML.

## System effects and the Poweramp Equalizer app

- **MusicFX** (Off by default): “Enable MusicFX Button (Android system audio effects) in Volume tab”. MusicFX is Android's own effect chain, separate from Poweramp's equalizer.
- **Equalizer for Spotify and YouTube Music** on the main Settings menu links to the Poweramp Equalizer app on Google Play: the separate Poweramp Equalizer app is promoted for streaming services including Spotify and YouTube Music. That app processes the output of other players. Its settings are outside this handbook.

## Gain staging

1. **Start flat.** Enable the equalizer only for a specific correction.
2. **Prefer cuts to boosts** where the result is equivalent. **GENERAL PRINCIPLE:** cuts add no gain, so they rarely cause clipping, although filter phase shift can still raise some peaks slightly.
3. **Account for combined boosts.** Adjacent bands and the tone shelves add up.
4. **Know your volume mode.** With DVC active, headroom comes from the volume setting. Near maximum volume, Smooth Gains reduces the boosts for you. With DVC off, the preamp reduction must cover your largest boost, and it stops at −10 dB ([Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md)).
5. **Compare at matched loudness.** A boosted curve sounds “better” partly because it is louder.

## Evidence and limitations

- **RESEARCH SUPPORTED (†), not verified:** list values and defaults marked † assume that the first option is `0`. Build 1031 contains lists numbered differently, so every † value is **RUNTIME VERIFICATION REQUIRED**.
- **APK VERIFIED:** every listed key, option, range, default and quoted text; the Block Size link target; the existence of reverb presets.
- **RESEARCH SUPPORTED:** that presets can be associated per device (from the AutoEq text and the `eq_preset` key).
- **RUNTIME VERIFICATION REQUIRED:** the entry point of the equalizer settings, centre frequencies, intermediate band spacing, tone-filter ranges and topology, Auto Save behaviour, the AutoEq ZIP format, the export format, and the per-output preset button.
- **Not in the extracted evidence:** the main Equalizer screen's controls (band gains, preamp, reverb parameters) and the Block Size setting.

## Related

- [Equalizer Settings](../Appendices/Settings%20Reference/Equalizer%20Settings.md) · [Equalizer Band Settings](../Appendices/Settings%20Reference/Equalizer%20Band%20Settings.md) · [Bass and Treble Tone Settings](../Appendices/Settings%20Reference/Bass%20and%20Treble%20Tone%20Settings.md)
- [Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md) — DVC, headroom and the preamp reduction.
- [Chapter 11 — Bit-Perfect Output](11%20Bit-Perfect%20Output.md) — Perfect Bit Perfect disables the equalizer entirely.

---

← [Chapter 03 — Volume Control and DVC](03%20Volume%20Control%20and%20DVC.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 05 — ReplayGain and Loudness Normalization](05%20ReplayGain%20and%20Loudness%20Normalization.md) →
