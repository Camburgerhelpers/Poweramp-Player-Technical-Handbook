---
title: "Calls, Notifications and Interruptions"
chapter: 16
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
  - "audio_outputs_tweaks"
  - "audio_tweaks"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › Part 3 — Outputs and Devices › Chapter 16

# 16. Calls, Notifications and Interruptions

Android shares the audio output among apps through **audio focus**. A phone call, a navigation prompt, a notification sound or another music app asks for focus, and the current player is expected to pause, lower its volume (“duck”), or stop. Poweramp lets you decide how it responds to each kind of request, whether it resumes afterwards, and whether it should resume when it starts. Most settings are on **Settings › Audio › Audio Focus**; output-specific overrides are on each output's options screen.

## How Android audio focus works

**GENERAL PRINCIPLE.** Focus requests come in three main forms:

| Request | Typical source | Usual player response |
|---|---|---|
| Permanent | another music or video app, a game | stop or pause, without resuming on its own |
| Transient (short) | phone call, voice assistant, navigation prompt | pause, then resume when focus returns |
| Transient, may duck | notification sound, navigation prompt | lower the volume briefly |

Poweramp's settings map onto these forms.

## Short interruptions

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Short Audio Focus Change / Calls | `af_short` | Switch | On | — | — |
| Resume On Focus Gain | `resume_on_focus` | Switch | On | — | Short Audio Focus Change / Calls (`af_short`) |
| Duck Volume | `af_short_duck` | Switch | On | — | Short Audio Focus Change / Calls (`af_short`) |

*Source: APK build 1031 settings XML — reference: [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md).*


- **Short Audio Focus Change / Calls:** “Temporarily pause on short audio focus change (calls/notifications/navigation/etc.)”.
- **Resume On Focus Gain** (depends on the above): “Resume after getting back the focus. If disabled, player stays paused”.
- **Duck Volume** (depends on the above): “When possible, allow lowering the volume on short audio focus. This option can be overridden by Audio output settings”.

## Permanent focus loss

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Permanent Audio Focus Change | `af_permanent` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md).*


“Pause on permanent audio focus change (other player/game/etc.)”. If you turn this off, Poweramp does not pause itself when another player starts, so both may be heard. **GENERAL PRINCIPLE:** newer Android versions (Android 12 and later) can themselves fade out a media app that loses audio focus, so the actual result depends on the Android version and the other app (**RUNTIME VERIFICATION REQUIRED**). Turn it off only deliberately.

## Phone calls

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Pause In Call | `pause_in_call` | Switch | On | — | — |
| Resume After Call | `resume_after_call` | Switch | On | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md).*


- **Pause In Call:** “Pause when phone call happens. Poweramp always pauses for call via Bluetooth” “Some firmwares may not support this option”.
- **Resume After Call:** “Resume playing on hang up (if paused by call)”.

## Output-specific overrides

These are set on the options screen of an individual output ([Chapter 12 — Choosing an Audio Output](12%20Choosing%20an%20Audio%20Output.md)). The APK states for **Duck Volume** that it “can be overridden by Audio output settings”. **RESEARCH SUPPORTED:** the other output options presumably take precedence over the global settings in the same way.

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| No Duck <sup>non-persistent</sup> | `no_duck` | Switch | Not declared | — | — |
| Ignore Audio Focus <sup>non-persistent</sup> | `no_af` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md).*


- **No Duck:** “Disable volume ducking for this output, e.g. when notifications cause issues with this output. Temporarily pause player instead”.
- **Ignore Audio Focus:** “Ignore calls/short Audio Focus requests, including notification sounds and ringtones”.

The Audio Focus screen also warns about Chromecast: “Chromecast output may ignore calls and short Audio Focus completely. Press here to configure” ([Chapter 15 — Chromecast Output](15%20Chromecast%20Output.md)).

## Workarounds for broken focus handling

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Force Audio On Audio Focus Change | `force_audio_on_focus` | Switch | Not declared | — | — |
| Force Speaker Off (for Hi-Res Output) | `force_no_speaker` | Switch | Not declared | — | — |

*Source: APK build 1031 settings XML — reference: [Audio Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Advanced%20Tweaks.md), [Audio Output Advanced Tweaks](../Appendices/Settings%20Reference/Audio%20Output%20Advanced%20Tweaks.md).*


- **Force Audio On Audio Focus Change** (Audio › Advanced Tweaks): “Enable this if audio stops after notifications”.
- **Force Speaker Off (for Hi-Res Output)** (Audio Outputs › Advanced Tweaks): “Enable this if speaker doesn't switch off after calls, some notifications, etc”.

Both are compatibility workarounds for specific firmware problems. Enable them only when the described symptom occurs.

## Resuming when Poweramp starts

| Setting | Key | Type | Declared default | Values / range | Depends on |
|---|---|---|---|---|---|
| Resume On Start | `resume_on_start` | Switch | Off | — | — |
| Resume On Reopen | `resume_on_resume` | Switch | On | — | Resume On Start (`resume_on_start`) |
| Wait For Storage | `resume_on_mount` | Switch | Off | — | Resume On Start (`resume_on_start`) |

*Source: APK build 1031 settings XML — reference: [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md).*


- **Resume On Start:** “Resume playing when Poweramp is started”.
- **Resume On Reopen:** “Also resume when Poweramp is already running and reopened from the launcher”.
- **Wait For Storage:** “Wait for a storage (up to 30s.) to mount before resuming on start”. Useful when music lives on an SD card or USB storage that mounts late after boot.

Connection-triggered resume (headset, Bluetooth) is in [Chapter 17 — Headphones and Hardware Buttons](17%20Headphones%20and%20Hardware%20Buttons.md).

## Recipes

| Preference | Settings |
|---|---|
| Music lowers for navigation prompts and notifications | Short Audio Focus Change on, Duck Volume on, Resume On Focus Gain on |
| Spoken word: nothing talks over the content | Duck Volume off (Poweramp pauses instead of ducking) |
| Notification sounds cause glitches on one output | **No Duck** on that output |
| Casting: phone sounds should not affect the receiver | **Ignore Audio Focus** on the Chromecast output |
| Playback should stay paused after an interruption | Resume On Focus Gain off |
| Start playing as soon as Poweramp opens | Resume On Start on; add Wait For Storage for removable storage |

## Evidence and limitations

- **APK VERIFIED:** keys, defaults, dependencies and quoted texts, including the Bluetooth call rule and the override note.
- **GENERAL PRINCIPLE:** Android focus request types.
- **RUNTIME VERIFICATION REQUIRED:** how individual apps request focus (a navigation app may ask for a pause instead of a duck), firmware support for Pause In Call (the APK itself warns that some firmwares may not support it), and the precedence between global and output settings beyond the stated override.

## Related

- [Audio Focus](../Appendices/Settings%20Reference/Audio%20Focus.md) · [Individual Audio Output Settings](../Appendices/Settings%20Reference/Individual%20Audio%20Output%20Settings.md)
- [Chapter 17 — Headphones and Hardware Buttons](17%20Headphones%20and%20Hardware%20Buttons.md) · [Chapter 34 — Background Operation and Compatibility](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md) · [Chapter 38 — Troubleshooting Guide](../Part%207%20-%20Maintenance%20and%20Support/38%20Troubleshooting%20Guide.md)

---

← [Chapter 15 — Chromecast Output](15%20Chromecast%20Output.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Chapter 17 — Headphones and Hardware Buttons](17%20Headphones%20and%20Hardware%20Buttons.md) →
