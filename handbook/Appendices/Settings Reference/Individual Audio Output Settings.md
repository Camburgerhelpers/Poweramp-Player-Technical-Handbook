---
title: "Individual Audio Output Settings"
screen_id: "audio_output_device_opts"
document: "Settings reference appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
declared_entries: 57
---

[Contents](../../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Index.md) › Settings Reference

# Individual Audio Output Settings

The per-output (per-device) options screen opened from an output category on Audio Outputs. It holds the output driver, sample rate and format, the per-output 64-bit, DSD and Perfect Bit Perfect modes, volume type, buffering, USB DAC quirks, Chromecast options, and per-output DVC, EQ, ducking and audio-focus overrides.

| Property | Value |
|---|---|
| Screen ID | `audio_output_device_opts` |
| In-app location | Settings › Audio › Audio Outputs › (output category button) |
| Reached from | [Audio Focus](Audio%20Focus.md) → “cc_af_warning” (`cc_af_warning`) |
| Declared entries | 57 — action or navigation 2, adjustable 11, informational or dynamic 23, other 1, toggle 20 |
| Resource files | `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml` |
| Explained in | [Chapter 01 — How Poweramp's Settings Are Organized](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 02 — The Poweramp Audio Path](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 03 — Volume Control and DVC](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04 — Equalizer and Tone Controls](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md), [Chapter 06 — Track Transitions and Gapless Playback](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 07 — Sample Rates and Resampling](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 08 — Bit Depth, Sample Format and Dither](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md), [Chapter 09 — 64-bit Floating-Point Processing](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md), [Chapter 10 — DSD Playback and Remastering](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 11 — Bit-Perfect Output](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md), [Chapter 12 — Choosing an Audio Output](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13 — USB DAC Setup and Compatibility](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md), [Chapter 14 — Bluetooth Audio](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 15 — Chromecast Output](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 16 — Calls, Notifications and Interruptions](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md), [Chapter 28 — Lyrics](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md), [Chapter 34 — Background Operation and Compatibility](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) |

## Settings at a glance

| # | Setting | Key | Type | Declared default | Values / range | Depends on |
|---:|---|---|---|---|---|---|
| 1 | (untitled `eq_preset`) | `eq_preset` | Button | — | — | — |
| 2 | Output Driver <sup>non-persistent</sup> | `output_api` | List | Not declared | Options populated at runtime | — |
| 3 | (untitled `bg_warn`) | `bg_warn` | Information | — | — | — |
| 4 | (untitled `output_hint`) | `output_hint` | Information | — | — | — |
| 5 | (untitled `top_output_info`) | `top_output_info` | Information | — | — | — |
| 6 | (untitled `top_output_info2`) | `top_output_info2` | Information | — | — | — |
| 7 | (untitled `output_info`) | `output_info` | Information | — | — | — |
| 8 | Sample Rate <sup>non-persistent</sup> | `sample_rate` | List | Not declared | Options populated at runtime | — |
| 9 | (untitled `sample_rate_static`) | `sample_rate_static` | Information | — | — | — |
| 10 | (untitled `follow_sr_hint1`) | `follow_sr_hint1` | Information | — | — | — |
| 11 | (untitled `codec_sr_hint`) | `codec_sr_hint` | Information | — | — | — |
| 12 | Allowed Sample Rates <sup>non-persistent</sup> | `allowed_srs` | Multi-select list | Not declared | Options populated at runtime (multi-select) | — |
| 13 | (untitled `follow_sr_hint2`) | `follow_sr_hint2` | Information | — | — | — |
| 14 | Set BT Codec Parameters <sup>non-persistent</sup> | `set_codec_sr` | Switch | Not declared | — | — |
| 15 | (untitled `set_codec_sr_hint`) | `set_codec_sr_hint` | Information | — | — | — |
| 16 | Base-Rate Synchronous Scaling <sup>non-persistent</sup> | `prefer_base_rate` | Switch | Not declared | — | — |
| 17 | Sample Format <sup>non-persistent</sup> | `sample_fmt` | List | Not declared | Options populated at runtime | — |
| 18 | (untitled `sample_bits_static`) <sup>non-persistent</sup> | `sample_bits_static` | Information | — | — | — |
| 19 | (untitled `sr_and_format_warnings`) | `sr_and_format_warnings` | Information | — | — | — |
| 20 | (untitled `direct_no_effect`) | `direct_no_effect` | Information | — | — | — |
| 21 | (untitled `pref_sr_format_effects_override_hint`) | `pref_sr_format_effects_override_hint` | Information | — | — | — |
| 22 | 64-bit Audio Pipeline <sup>non-persistent</sup> | `pipeline64` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |
| 23 | (untitled `pipeline64_static`) | `pipeline64_static` | Information | — | — | — |
| 24 | DSD Remastering <sup>non-persistent</sup> | `dsd_remaster` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |
| 25 | (untitled `dsd_remaster_static`) | `dsd_remaster_static` | Information | — | — | — |
| 26 | Target DSD Sample Rate <sup>non-persistent</sup> | `dsd_remaster_sample_rate` | List | Not declared | Options populated at runtime | — |
| 27 | (untitled `dsd_remaster_sample_rate_static`) | `dsd_remaster_sample_rate_static` | Information | — | — | — |
| 28 | Allow 48 kHz-based DSD <sup>non-persistent</sup> | `dsd_remaster_allow_48k` | Switch | Not declared | — | — |
| 29 | (untitled `dsd_remaster_hint`) | `dsd_remaster_hint` | Information | — | — | — |
| 30 | Perfect Bit Perfect <sup>non-persistent</sup> | `perfect_bit_perfect` | List | Not declared | Auto = `0`; Enable = `1`; Disable = `-1` | — |
| 31 | (untitled `perfect_bit_perfect_static`) | `perfect_bit_perfect_static` | Information | — | — | — |
| 32 | Volume Type <sup>non-persistent</sup> | `volume_type` | List | Not declared | Auto/Hardware = `0`; Software = `1` | — |
| 33 | (untitled `volume_type_static`) | `volume_type_static` | Information | — | — | — |
| 34 | (untitled `volume_type_hints`) | `volume_type_hints` | Information | — | — | — |
| 35 | Synchronize Hardware Volume <sup>non-persistent</sup> | `sync_hw_volume` | Switch | Not declared | — | — |
| 36 | (untitled `sync_hw_volume_hint`) | `sync_hw_volume_hint` | Information | — | — | — |
| 37 | Float32 Sample Format <sup>non-persistent</sup> | `float` | Switch | Not declared | — | — |
| 38 | Buffer Size <sup>non-persistent</sup> | `buffer_size` | Action | — | — | — |
| 39 | Reconfiguration Delay <sup>non-persistent</sup> | `reconfig_delay_ms` | Slider | Not declared | 0 ms to 500 ms, step not declared (minimum position labelled “Default delay”; labels “Default” … “500”) | — |
| 40 | Visualization/Lyrics Delay <sup>non-persistent</sup> | `vis_latency_ms` | Slider | 0 ms (`0`) | 0 ms to 2500 ms, step not declared | — |
| 41 | Release USB DAC while paused <sup>non-persistent</sup> | `pause_usb_release` | Switch | Not declared | — | — |
| 42 | Play silence in background <sup>non-persistent</sup> | `play_silence_in_background` | Switch | Not declared | — | — |
| 43 | Allow DSD DOP <sup>non-persistent</sup> | `allow_dsd_dop` | Switch | Not declared | — | — |
| 44 | Prefer DSD Raw <sup>non-persistent</sup> | `prefer_dsd_raw` | Switch | Not declared | — | — |
| 45 | USB DAC Warmup on Startup <sup>non-persistent</sup> | `warmup` | Switch | Not declared | — | — |
| 46 | USB DAC PCM/DSD Warmups <sup>non-persistent</sup> | `pcm_dsd_extra_warmup` | Switch | Not declared | — | — |
| 47 | USB DAC Sample Rate Quirk <sup>non-persistent</sup> | `target_alt_sr_quirk` | Switch | Not declared | — | — |
| 48 | Force USB 1.1 <sup>non-persistent</sup> | `force_usb_full_speed` | Switch | Not declared | — | — |
| 49 | Force Send Album Art <sup>non-persistent</sup> | `cc_force_aa` | Switch | Not declared | — | — |
| 50 | Show Meta Information <sup>non-persistent</sup> | `cc_show_meta` | Switch | Not declared | — | — |
| 51 | No DVC <sup>non-persistent</sup> | `no_dvc` | Switch | Not declared | — | — |
| 52 | (untitled `no_dvc_static`) | `no_dvc_static` | Information | — | — | — |
| 53 | No Headroom Gain Reduction <sup>non-persistent</sup> | `no_headroom` | Switch | Not declared | — | — |
| 54 | No Equ/Tone <sup>non-persistent</sup> | `no_equ` | Switch | Not declared | — | — |
| 55 | No Duck <sup>non-persistent</sup> | `no_duck` | Switch | Not declared | — | — |
| 56 | Ignore Audio Focus <sup>non-persistent</sup> | `no_af` | Switch | Not declared | — | — |
| 57 | Restore Defaults | `restore_defaults` | Action | — | — | — |

## Entry details

**Copyright note:** The original application's hints and descriptions are omitted here. Read them in Poweramp Player build 1031. Preference keys, types, declared defaults, ranges and dependencies remain documented below.

### 1. (untitled eq_preset)

- **Key:** `eq_preset`
- **Control:** Button (`ButtonPref`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)

### 2. Output Driver

- **Key:** `output_api`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Options are not declared in the XML and are populated at runtime (for example from the connected device).
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 3. (untitled bg_warn)

- **Key:** `bg_warn`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 4. (untitled output_hint)

- **Key:** `output_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 5. (untitled top_output_info)

- **Key:** `top_output_info`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 6. (untitled top_output_info2)

- **Key:** `top_output_info2`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 7. (untitled output_info)

- **Key:** `output_info`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 8. Sample Rate

- **Key:** `sample_rate`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Options are not declared in the XML and are populated at runtime (for example from the connected device).
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 9. (untitled sample_rate_static)

- **Key:** `sample_rate_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 10. (untitled follow_sr_hint1)

- **Key:** `follow_sr_hint1`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)

### 11. (untitled codec_sr_hint)

- **Key:** `codec_sr_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)

### 12. Allowed Sample Rates

- **Key:** `allowed_srs`
- **Control:** Multi-select list (`TagListPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Options are not declared in the XML and are populated at runtime (for example from the connected device).
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 13. (untitled follow_sr_hint2)

- **Key:** `follow_sr_hint2`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)

### 14. Set BT Codec Parameters

- **Key:** `set_codec_sr`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 15. (untitled set_codec_sr_hint)

- **Key:** `set_codec_sr_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)

### 16. Base-Rate Synchronous Scaling

- **Key:** `prefer_base_rate`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 17. Sample Format

- **Key:** `sample_fmt`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 08](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Options are not declared in the XML and are populated at runtime (for example from the connected device).
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 18. (untitled sample_bits_static)

- **Key:** `sample_bits_static`
- **Control:** Information (`RawTextPreference`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 08](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 19. (untitled sr_and_format_warnings)

- **Key:** `sr_and_format_warnings`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 20. (untitled direct_no_effect)

- **Key:** `direct_no_effect`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)

### 21. (untitled pref_sr_format_effects_override_hint)

- **Key:** `pref_sr_format_effects_override_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)

### 22. 64-bit Audio Pipeline

- **Key:** `pipeline64`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Auto — `0`
  - Enable — `1`
  - Disable — `-1`
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 09](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 23. (untitled pipeline64_static)

- **Key:** `pipeline64_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 09](../../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 24. DSD Remastering

- **Key:** `dsd_remaster`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Auto — `0`
  - Enable — `1`
  - Disable — `-1`
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 25. (untitled dsd_remaster_static)

- **Key:** `dsd_remaster_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 26. Target DSD Sample Rate

- **Key:** `dsd_remaster_sample_rate`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Options are not declared in the XML and are populated at runtime (for example from the connected device).
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 27. (untitled dsd_remaster_sample_rate_static)

- **Key:** `dsd_remaster_sample_rate_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 28. Allow 48 kHz-based DSD

- **Key:** `dsd_remaster_allow_48k`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 29. (untitled dsd_remaster_hint)

- **Key:** `dsd_remaster_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)

### 30. Perfect Bit Perfect

- **Key:** `perfect_bit_perfect`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Auto — `0`
  - Enable — `1`
  - Disable — `-1`
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 11](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 31. (untitled perfect_bit_perfect_static)

- **Key:** `perfect_bit_perfect_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 11](../../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 32. Volume Type

- **Key:** `volume_type`
- **Control:** List (`TagListPreference`)
- **Declared default:** Not declared
- **Options:**
  - Auto/Hardware — `0` — Hardware volume is used when supported; otherwise, software volume is used, if possible
  - Software — `1` — Enable software volume, even when hardware volume is supported
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 33. (untitled volume_type_static)

- **Key:** `volume_type_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 34. (untitled volume_type_hints)

- **Key:** `volume_type_hints`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)

### 35. Synchronize Hardware Volume

- **Key:** `sync_hw_volume`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 36. (untitled sync_hw_volume_hint)

- **Key:** `sync_hw_volume_hint`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)

### 37. Float32 Sample Format

- **Key:** `float`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 08](../../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 38. Buffer Size

- **Key:** `buffer_size`
- **Control:** Action (`Preference`)
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 39. Reconfiguration Delay

- **Key:** `reconfig_delay_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** Not declared
- **Options:**
  - Default delay
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 07](../../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md), [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** The XML declares option labels but no stored values; the positional mapping (first option = `0`) is an inference.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 40. Visualization/Lyrics Delay

- **Key:** `vis_latency_ms`
- **Control:** Slider (`SeekbarPreference`)
- **Declared default:** 0 ms (`0`)
- **Range:** 0 ms to 2500 ms, step not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 12](../../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md), [Chapter 14](../../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md), [Chapter 28](../../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 41. Release USB DAC while paused

- **Key:** `pause_usb_release`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 42. Play silence in background

- **Key:** `play_silence_in_background`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 34](../../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 43. Allow DSD DOP

- **Key:** `allow_dsd_dop`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 44. Prefer DSD Raw

- **Key:** `prefer_dsd_raw`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 45. USB DAC Warmup on Startup

- **Key:** `warmup`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 46. USB DAC PCM/DSD Warmups

- **Key:** `pcm_dsd_extra_warmup`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 06](../../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md), [Chapter 10](../../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 47. USB DAC Sample Rate Quirk

- **Key:** `target_alt_sr_quirk`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 48. Force USB 1.1

- **Key:** `force_usb_full_speed`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 49. Force Send Album Art

- **Key:** `cc_force_aa`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 50. Show Meta Information

- **Key:** `cc_show_meta`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 51. No DVC

- **Key:** `no_dvc`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 02](../../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md), [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 13](../../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 52. (untitled no_dvc_static)

- **Key:** `no_dvc_static`
- **Control:** Information (`RawTextPreference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Evidence note:** Information row whose text is generated at runtime; the XML declares no static content.

### 53. No Headroom Gain Reduction

- **Key:** `no_headroom`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 03](../../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 54. No Equ/Tone

- **Key:** `no_equ`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 04](../../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 55. No Duck

- **Key:** `no_duck`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 56. Ignore Audio Focus

- **Key:** `no_af`
- **Control:** Switch (`MultilineSwitchPreference`)
- **Declared default:** Not declared
- **Markers:** non-persistent
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`
- **Discussed in:** [Chapter 01](../../Part%201%20-%20Getting%20Oriented/01%20How%20Poweramp's%20Settings%20Are%20Organized.md), [Chapter 15](../../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md), [Chapter 16](../../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)
- **Evidence note:** No default is declared in the XML; the effective initial value is set by application code or device state and must be checked at runtime.
- **Evidence note:** Declared `android:persistent="false"`: the value is not stored as a standard Android preference by this declaration; how the app stores it is not established.

### 57. Restore Defaults

- **Key:** `restore_defaults`
- **Control:** Action (`Preference`)
- **Source:** `xml-v22/audio_output_device_opts.xml`, `xml/audio_output_device_opts.xml`

## Screen-level evidence notes

- The same 57-entry screen serves every output category; which rows are visible for a given output, driver and device is decided at runtime and is not declared in the XML.
- No entry on this screen declares a default except `vis_latency_ms` (0 ms). All per-output values therefore come from application code or the device.
- Option lists for `output_api`, `sample_rate`, `allowed_srs`, `sample_fmt` and `dsd_remaster_sample_rate` are empty in the XML and are populated at runtime.
- The Chromecast link from Audio Focus (`audio_output_device_opts?uniqName=com.maxmpz.audioplayer/output.cc&device=chromecast#no_af`) shows that the screen is parameterized by output and device.
- Many rows here are declared `android:persistent="false"`. That only describes the preference declaration; the app evidently stores per-output values by other means.

---

← [Audio Focus](Audio%20Focus.md) · [Settings Reference Index](Index.md) · [Audio Output Selection](Audio%20Output%20Selection.md) →
