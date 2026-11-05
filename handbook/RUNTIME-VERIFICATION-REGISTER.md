# Runtime Verification Register

**Poweramp Player Technical Handbook · APK build 1031 · v0.1.0-alpha.1 · unofficial community alpha · build date 2026-10-21**

> [!NOTE]
> **Still maintained for v0.1.0-alpha.1.**
> The open questions below remain open in the current alpha ([Release Notes — v0.1.0-alpha.1](RELEASE-NOTES-v0.1.0-alpha.1.md)). Section F lists questions added during alpha preparation. Device test results for any item are welcome.

This is the QA document for limitations that remain open. Each item is a question that the APK 1031 settings evidence cannot answer and that needs a test on a device. The chapters label the corresponding statements **RUNTIME VERIFICATION REQUIRED**.

## A. Open questions

### General

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-001 | Do per-output Auto values defer to the global switches? | `pipeline64`, `dsd_remaster`, `perfect_bit_perfect` | Set the global switch on and off with the per-output value at Auto; read Audio Info. |
| RV-002 | Does each Restore Defaults reset only its own screen? | `restore_defaults` (31 screens) | Change one setting on two screens, restore one screen, inspect both. |
| RV-003 | How are `audio_equ`, `space` and `buy_methods` opened? | screen entry points | Explore the Equalizer screen menu, storage prompts and purchase flow. |
| RV-004 | Which entries do `removeAsNeeded` hide, and when? | main-menu purchase entries | Compare an unlicensed and a licensed installation. |
| RV-005 | What does Audio Info show? | `audio_info` | Capture it for each output category. |

### Volume and DVC

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-006 | Is DVC active on each output by default? | `dvc_enabled`, `no_dvc` | Audio Info per output. |
| RV-007 | What is the effective gain of the preamp reduction, and when does it apply? | `no_dvc_gain_mb`, `no_headroom` | Digital loopback or capture with DVC on and off. |
| RV-008 | Content of the Bluetooth status rows | `bt_absvol_status`, `dvc_bt_msg`, `dvc_devices` | Screenshots with Absolute Volume on and off. |
| RV-009 | When does the Android 15+ compensation trigger? | `compensate_dvc_vol` | Android 15+ device with and without the issue. |
| RV-010 | How does Smooth Gains reduce boosts near maximum volume? | `dsp_border_gain` | Frequency response at several volume settings. |

### Equalizer

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-011 | Centre frequencies of the predefined band counts; spacing of custom bands | `equ_bands_num`, `equ_custom_bands*` | Read from the EQ UI. |
| RV-012 | Tone knob ranges, defaults and filter type | `_bassFreq`, `_bassQ`, `_trebleFreq`, `_trebleQ` | Read from the Tone screen; measure. |
| RV-013 | Auto Save behaviour | `_autosave` | Edit a preset, switch presets, return. |
| RV-014 | Required AutoEq ZIP structure; export format to Poweramp Equalizer | `_import_autoeq`, `_presets_to_peq` | Import a known AutoEq archive; export and inspect. |
| RV-015 | Function of the per-output `eq_preset` button | `eq_preset` | Assign an AutoEq preset to a device. |
| RV-016 | Block Size setting (outside the inventory) | `settings/peq_equ#peq_blocksize` | Locate and document. |

### ReplayGain

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-017 | Peak-protection mechanism | `rg_type` | Play a file with a high gain and a near-full-scale peak; capture the output. |
| RV-018 | Fallback when the selected gain type is missing | `rg_source` | Album mode on files with track gain only. |
| RV-019 | Does the untagged preamp apply in “Don't apply” mode? | `rg_default_mb` | Level comparison. |
| RV-020 | ReplayGain behaviour under Perfect Bit Perfect | `rg_type`, `perfect_bit_perfect` | Bit-exact capture. |

### Transitions

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-021 | Fade curves; how gapless transitions are detected | `crossfade_auto_advance`, `crossfade_length_ms` | Capture transitions. |
| RV-022 | Numeric value of the “Normal” preload position | `gapless_preload_ms` | Read the slider value. |
| RV-023 | Which drivers override manual fading | `fade_manual_advance` | Test per driver. |

### Rates, formats, precision, DSD, bit-perfect

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-024 | Rates and formats offered per driver and device | `sample_rate`, `allowed_srs`, `sample_fmt` | Enumerate per output. |
| RV-025 | Follow Track selection order with Base-Rate scaling | `global_follow_sr`, `prefer_base_rate` | Allowed-list experiments with 44.1/48 kHz tracks. |
| RV-026 | Reference of the resampler cutoff ratio | `resampler_cutoff` | Measure the passband edge. |
| RV-027 | Float32 interaction with Sample Format | `float`, `sample_fmt` | Audio Info. |
| RV-028 | Default and CPU cost of the 64-bit pipeline | `global_pipeline64` | Battery and CPU profiling. |
| RV-029 | DSD handling when Perfect Bit Perfect is off; available DSD target rates | `global_dsd_remaster`, `dsd_remaster_sample_rate` | DSD DAC with display. |
| RV-030 | Fades and ReplayGain under Perfect Bit Perfect | `perfect_bit_perfect` | Bit-exact capture. |

### Outputs and devices

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-031 | Driver names and capabilities per device | `output_api` | Enumerate. |
| RV-032 | Rows visible per output category | `audio_output_device_opts` | Screenshot each category. |
| RV-033 | Contents of the Audio Outputs Detection Log | `audio_platform_log` | Capture. |
| RV-034 | Defaults of all USB quirk options; warm-up durations | `warmup`, `pcm_dsd_extra_warmup`, `target_alt_sr_quirk`, `force_usb_full_speed` | Several DACs. |
| RV-035 | Which codec parameters can be set on a given phone | `set_codec_sr` | Bluetooth codec status in developer options. |
| RV-036 | Chromecast: transmitted format, DSP, volume, gapless | `output_chromecast` | Network capture; listening checks. |
| RV-037 | Headset button list semantics (single choice or toggles) | `headset_controls`, `avrcp_controls` | Inspect the UI. |
| RV-038 | Last Processed Commands fields | `commands_history` | Capture. |

### Library

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-039 | The Music Folders dialog and provider plugins | `music_folders_button`, `scan_providers` | Document. |
| RV-040 | What Full Rescan preserves (ratings, statistics, playlists) | `erase_and_rescan` | Before/after comparison. |
| RV-041 | Playlist import/export formats and paths | `playlists_import`, `playlists_export` | Inspect files. |
| RV-042 | Shuffle randomization algorithm | `shuffle_random_factor` | Statistical runs. |
| RV-043 | Search categories and matching rules | `list_opts`, `search_track_titles_only` | Queries with diacritics and substrings. |
| RV-044 | Stream protocols, playlist formats, metadata | `stream_*`, `user_agent` | Test with HTTP, HLS and ICY streams. |

### Interface and integration

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-045 | Effective Animations default | `anim_speed` | Fresh install. |
| RV-046 | Feature Pack enforcement for the nine marked settings | see Ch. 36 | Unlicensed vs licensed installation. |
| RV-047 | Skin and icon lists; per-skin options | `theme_list`, `icon_list`, `settings/ui_theme#more_buttons` | Document. |
| RV-048 | Notification type rendering on Android 13+ | `notification_type` | Screenshots. |
| RV-049 | Android Auto tree and custom actions | `mb_a_*`, `notify_action3`–`6` | Desktop Head Unit. |
| RV-050 | Broadcast actions and extras; API surface | `send_metachanged`, `send_old_api_aa`, `shutdown_intent` | Broadcast logging. |
| RV-051 | Export/Import scope and format | `settings_export`, `settings_import` | Inspect the file. |
| RV-052 | Update checker availability per edition; Send Log contents | `check_updates`, `send_log` | Compare editions. |
| RV-053 | Purpose of Override Region and Migrate Data; OP framerate API | `override_region`, `migrate_data_29`, `op_framerate` | Developer documentation or testing. |

## B. Switches and adjustable settings with no declared default (119)

Their effective initial value must be observed on a device. The screen links lead to the reference pages.

| Screen | Keys |
|---|---|
| [`aa_bg`](Appendices/Settings%20Reference/Background%20Appearance%20Settings.md) | `aa_blur_enabled`, `list_aa_blur_enabled`, `lyrics_aa_blur_enabled`, `aa_bg_gradient`, `aa_bg_gradient_for_list` |
| [`audio_bit_perfect`](Appendices/Settings%20Reference/Bit-Perfect%20and%20Precision%20Settings.md) | `global_pipeline64`, `global_follow_sr`, `global_dsd_remaster`, `global_perfect_bit_perfect` |
| [`audio_equ`](Appendices/Settings%20Reference/Equalizer%20Settings.md) | `_autosave`, `suggest_autoeq` |
| [`audio_output_device_opts`](Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md) | `output_api`, `sample_rate`, `allowed_srs`, `set_codec_sr`, `prefer_base_rate`, `sample_fmt`, `pipeline64`, `dsd_remaster`, `dsd_remaster_sample_rate`, `dsd_remaster_allow_48k`, `perfect_bit_perfect`, `volume_type`, `sync_hw_volume`, `float`, `reconfig_delay_ms`, `pause_usb_release`, `play_silence_in_background`, `allow_dsd_dop`, `prefer_dsd_raw`, `warmup`, `pcm_dsd_extra_warmup`, `target_alt_sr_quirk`, `force_usb_full_speed`, `cc_force_aa`, `cc_show_meta`, `no_dvc`, `no_headroom`, `no_equ`, `no_duck`, `no_af` |
| [`audio_outputs_tweaks`](Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md) | `usb_activity`, `force_no_speaker` |
| [`audio_tweaks`](Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md) | `volume_popup`, `pause_on_volume`, `force_audio_on_focus`, `mod_gain_mb`, `mod_separation` |
| [`general`](Appendices/Settings%20Reference/About%20Poweramp.md) | `check_updates`, `check_beta_updates` |
| [`headset`](Appendices/Settings%20Reference/Headset%20and%20Bluetooth%20Settings.md) | `resume_on_headset`, `resume_on_bt`, `pause_on_headset`, `pause_on_usb_connection`, `enable_headset_controls`, `headset_controls`, `avrcp_controls`, `follow_pl_exact`, `ignore_bt_sec`, `bt_ignore_repeat_shuffle`, `headset_beep`, `beep_more`, `headset_vibrate`, `no_android_long_press` |
| [`library`](Appendices/Settings%20Reference/Music%20Library%20Settings.md) | `skip_video` |
| [`library_lists`](Appendices/Settings%20Reference/Library%20Lists.md) | `list_header_buttons`, `list_bottom_toolbar`, `stream_name_in_title` |
| [`library_playlists`](Appendices/Settings%20Reference/Playlist%20Settings.md) | `playlist_insert_pos` |
| [`library_queue`](Appendices/Settings%20Reference/Playback%20Queue.md) | `queue_insert_pos`, `play_next_insert_pos` |
| [`library_search`](Appendices/Settings%20Reference/Search%20Settings.md) | `search_play_tracks`, `search_track_titles_only` |
| [`library_shuffle`](Appendices/Settings%20Reference/Shuffle%20Settings.md) | `shuffle_random_factor`, `no_reshuffle`, `no_reshuffle_for_large_lists`, `category_shuffle` |
| [`misc`](Appendices/Settings%20Reference/Miscellaneous%20Settings.md) | `mb_a_grid`, `send_mediasession_q`, `use_wakelock`, `op_framerate`, `user_agent` |
| [`peq_equ_bands`](Appendices/Settings%20Reference/Equalizer%20Band%20Settings.md) | `equ_custom_bands` |
| [`peq_equ_tone`](Appendices/Settings%20Reference/Bass%20and%20Treble%20Tone%20Settings.md) | `_bassFreq`, `_bassQ`, `_trebleFreq`, `_trebleQ` |
| [`ui`](Appendices/Settings%20Reference/Look%20and%20Feel.md) | `keep_screen_on`, `num_settings_tags` |
| [`ui_lyrics`](Appendices/Settings%20Reference/Lyrics%20Settings.md) | `main_lyrics_swipe`, `main_lyrics_button`, `lyrics_in_menu`, `lyrics_keep_screen`, `lyrics_offset`, `list_zoom_lyrics`, `lyrics_plugin`, `lyrics_custom_url`, `lrc_scan`, `lrc_utf8` |
| [`ui_mediaactions`](Appendices/Settings%20Reference/Media%20Buttons%20and%20Actions.md) | `notify_action1`, `notify_action2`, `notify_action3`, `notify_action4`, `notify_action5`, `notify_action6` |
| [`ui_notify`](Appendices/Settings%20Reference/Notification%20Settings.md) | `notify_prio`, `keep_notification`, `notify_resume`, `keep_service`, `no_keep_notif_on_dscn` |
| [`ui_player`](Appendices/Settings%20Reference/Player%20Screen.md) | `sub_aa_buttons_no_gap`, `sub_aa_buttons_no_lp_edit`, `hide_menu`, `menu_button_long_press`, `main_lyrics_button`, `line2_click`, `line2_long_click` |
| [`vis`](Appendices/Settings%20Reference/Visualization%20Settings.md) | `enable_vis`, `vis_ignore_touch_faded` |

## C. Lists without declared stored values (positional mapping †)

`aa/aa_aspect`, `audio_equ/eq_labels`, `audio_equ/tone_labels`, `audio_output_device_opts/reconfig_delay_ms`, `audio_resampler/resampler_type`, `audio_resampler/dither`, `fade/crossfade_auto_advance`, `fade/fade_manual_advance`, `headset/headset_controls`, `headset/avrcp_controls`, `library_lists/list_header_buttons`, `library_lists/list_bottom_toolbar`, `library_lists/track_num_type`, `library_queue/queue_end`, `rg/rg_type`, `rg/rg_source`, `ui/settings_theme`, `ui/settings_font`, `ui/orientation`, `ui/num_settings_tags`, `ui_notify/notification_type`, `ui_notify/notification_colors`, `ui_player/rating_type`, `ui_player/menu_button_long_press`, `vis/vis_frs_type`

## D. Runtime-populated option lists

`audio_output_device_opts/output_api`, `audio_output_device_opts/sample_rate`, `audio_output_device_opts/allowed_srs`, `audio_output_device_opts/sample_fmt`, `audio_output_device_opts/dsd_remaster_sample_rate`

## E. Targets outside the 42 inventoried screens

- `commands_history`: Last Processed Commands (from Headset/Bluetooth)
- `audio_platform_log`: Audio Outputs Detection Log (from output Advanced Tweaks)
- `settings/peq_equ#peq_blocksize`: Block Size (from the equalizer band settings note)
- `settings/ui_theme#more_buttons`: skin Pro Buttons option (from `long_skip_rewind`)

## F. Questions added for v0.1.0-alpha.1

| ID | Question | Settings | Suggested test |
|---|---|---|---|
| RV-054 | Do the positional (†) stored values hold? Which option does each † default select on a fresh install? | all † lists (section C), especially `queue_end`, `rg_type`, `crossfade_auto_advance`, `fade_manual_advance`, `dither` | Fresh install; read each list; compare with an exported settings file. |
| RV-055 | Raw minimum, maximum and step of the stream buffer; is 1048576 reachable in whole steps? | `stream_buffer_bytes` | Read the slider positions; inspect the raw XML attributes. |
| RV-056 | Does Import Settings/Data replace or merge the current configuration, and does it restore per-output settings? | `settings_import`, `settings_export` | Export, change settings on two outputs, import, compare. |
| RV-057 | Does the preamp reduction apply when DVC is disabled automatically for Bluetooth Absolute Volume? | `no_dvc_bt_absvol`, `no_dvc_gain_mb` | Level comparison with the knob at −6 dB and 0 dB on an Absolute Volume headset. |
| RV-058 | With Permanent Audio Focus Change off, do both players remain audible on Android 12 and later? | `af_permanent` | Start a second media app on Android 11 and on Android 12+. |
| RV-059 | Does Import Ratings change ratings when a playlist file is merely opened from a file manager? | `pl_import_ratings` | Open an old playlist with different ratings; compare. |
