---
title: "Glossary"
document: "Appendix"
application: "Poweramp Player"
apk_build: 1031
edition: "v0.1.0-alpha.1"
content_build_date: "2026-10-21"
release_prep_date: "2026-11-04"
publication_status: "Unofficial community alpha — technical verification ongoing"
affiliation: "Unofficial; not affiliated with or endorsed by the Poweramp developer"
---

[Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) › [Appendices](Settings%20Reference/Index.md)

# Glossary

Terms are defined as they are used in this handbook. Definitions of general audio and Android concepts are **GENERAL PRINCIPLE**. Where a term names a Poweramp setting, the chapter reference gives the evidence.

| Term | Definition |
|---|---|
| **Absolute Volume (Bluetooth)** | An Android/Bluetooth mode in which the phone's volume control sets the headset's own volume instead of scaling the digital signal. Interacts with DVC ([Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)). |
| **Album Artist** | A tag naming the artist of the album as a whole (for example “Various Artists”), used to keep compilations together ([Chapter 19](../Part%204%20-%20Library%20and%20Playback/19%20Browsing%20the%20Library.md)). |
| **Album gain / Track gain** | ReplayGain adjustments computed per album (preserving relative levels within it) or per track ([Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)). |
| **Allowed Sample Rates** | The per-output set of rates Follow Track Sample Rate may use ([Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)). |
| **Audio focus** | Android's mechanism for sharing audio output between apps: permanent, transient, and transient-may-duck requests ([Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)). |
| **Audio Info** | Poweramp's runtime page describing the current processing chain, also opened by long-pressing the small meta info on the Player or Equalizer screen ([Chapter 02](../Part%201%20-%20Getting%20Oriented/02%20The%20Poweramp%20Audio%20Path.md)). |
| **AutoEq** | Equalizer presets computed from published headphone measurements to approach a target response ([Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)). |
| **AVRCP** | Audio/Video Remote Control Profile: the Bluetooth profile that carries play, pause and skip commands, and in newer versions metadata and Absolute Volume ([Chapter 17](../Part%203%20-%20Outputs%20and%20Devices/17%20Headphones%20and%20Hardware%20Buttons.md)). |
| **Base-rate family** | Sample rates that are multiples of 44.1 kHz or of 48 kHz ([Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)). |
| **Bit depth / sample format** | How each sample is represented: 16-bit, 24-bit or 32-bit integer, or floating point ([Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)). |
| **Bit-perfect** | Delivery of decoded samples to the DAC without any alteration ([Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)). |
| **Block size** | The processing block length of a block-based filter design; larger blocks give finer frequency resolution. Referenced, but not inventoried, in build 1031 ([Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)). |
| **Bluetooth codecs (SBC, AAC, aptX, LDAC, LC3)** | The audio codecs used to send music over Bluetooth. Android and the receiver negotiate the codec, sample rate and bit depth; most are lossy ([Chapter 14](../Part%203%20-%20Outputs%20and%20Devices/14%20Bluetooth%20Audio.md)). |
| **Cast / Chromecast** | Google's protocol for playing media on a network receiver ([Chapter 15](../Part%203%20-%20Outputs%20and%20Devices/15%20Chromecast%20Output.md)). |
| **Category** | (1) A heading that groups settings. (2) A library grouping such as Albums or Genres. |
| **Crossfade** | Overlapping the end of one track with the start of the next while fading between them ([Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)). |
| **CUE sheet** | A text file that describes track boundaries inside a single-file album image ([Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)). |
| **DAC** | Digital-to-analogue converter. Built into phones, USB DACs and Bluetooth headsets. |
| **Declared default** | The `android:defaultValue` in the settings XML. Absent means “not declared”, not “off”. |
| **Dependency** | An XML link that makes a setting available only when its parent switch is on. |
| **Dither** | Low-level noise added before reducing bit depth so that rounding error becomes benign noise ([Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)). |
| **DoP** | DSD over PCM: DSD data packed into PCM frames with a marker byte ([Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)). |
| **DSD** | Direct Stream Digital: a 1-bit, very-high-rate audio format (DSD64 = 2.8224 MHz) ([Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)). |
| **DSD Remastering** | Poweramp's conversion of PCM to DSD at a target DSD rate ([Chapter 10](../Part%202%20-%20Sound%20and%20Audio%20Processing/10%20DSD%20Playback%20and%20Remastering.md)). |
| **Ducking** | Temporarily lowering music volume during a short interruption ([Chapter 16](../Part%203%20-%20Outputs%20and%20Devices/16%20Calls,%20Notifications%20and%20Interruptions.md)). |
| **DVC (Direct Volume Control)** | Poweramp-side volume control within its own processing chain ([Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)). |
| **Experiment (marker)** | A badge the APK puts on six settings to mark them as experimental. Their explanatory text did not resolve from the extracted resources ([Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)). |
| **Feature Pack** | An optional paid package. Nine settings are marked as associated with it ([Chapter 36](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)). |
| **Float32 / Float64** | 32-bit and 64-bit floating-point number formats. Float64 is Poweramp's optional internal processing precision; Float32 an optional output sample format ([Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md), [Chapter 09](../Part%202%20-%20Sound%20and%20Audio%20Processing/09%2064-bit%20Floating-Point%20Processing.md)). |
| **Follow Track Sample Rate** | Matching the output rate to each track's rate within the allowed and supported set ([Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)). |
| **Gapless playback** | Joining consecutive tracks without added silence or overlap ([Chapter 06](../Part%202%20-%20Sound%20and%20Audio%20Processing/06%20Track%20Transitions%20and%20Gapless%20Playback.md)). |
| **Headroom** | The margin between signal peaks and digital full scale, needed for EQ and other boosts ([Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md)). |
| **Hi-Res output** | This handbook's term for output above 48 kHz/16-bit, as named in the APK hints (“for Hi-Res output”). Whether it is available depends on the device, the driver and the output ([Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)). |
| **Key (preference key)** | The internal name of a setting, for example `dvc_enabled`. |
| **LRC** | A text format for time-synchronized lyrics ([Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)). |
| **LRC offset** | An `[offset:…]` tag inside an LRC file that shifts all lyric timestamps by a number of milliseconds ([Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)). |
| **Media session** | The Android mechanism through which a player publishes what is playing and accepts transport commands. Notifications, the lock screen, Bluetooth remotes, Android Auto and many scrobblers read it ([Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)). |
| **Metachanged broadcast** | A de facto Android convention (from the old AOSP Music app) for announcing track changes to other apps; not a formal platform API ([Chapter 33](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)). |
| **MilkDrop / `.milk`** | A visualization preset format, used for Poweramp's visualizations ([Chapter 29](../Part%205%20-%20Interface%20and%20Visuals/29%20Visualization.md)). |
| **MusicFX** | Android's system audio-effects panel, separate from Poweramp's equalizer ([Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)). |
| **Noise shaping** | Error-feedback filtering of the quantisation error that moves noise into less audible frequency regions, usually combined with dither; it raises total noise power while lowering audible noise ([Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)). |
| **Non-persistent** | Declared with `android:persistent="false"`, so not stored as a standard Android preference by that declaration. |
| **Notification channel** | Since Android 8, the per-app category that controls a notification's importance and behaviour; it largely replaced per-notification priority ([Chapter 30](../Part%206%20-%20Android%20Integration/30%20Notifications%20and%20Media%20Buttons.md)). |
| **Nyquist frequency** | Half the sample rate: the highest frequency a sampled signal can represent. |
| **Output driver** | The audio output path Poweramp uses for an output category. The options are populated at runtime ([Chapter 12](../Part%203%20-%20Outputs%20and%20Devices/12%20Choosing%20an%20Audio%20Output.md)). |
| **PCM** | Pulse-code modulation: the standard multi-bit sampled audio representation. |
| **Perfect Bit Perfect** | Poweramp's direct decoder-to-output mode: no EQ, no DSP, no software volume; DSD output for DSD tracks ([Chapter 11](../Part%202%20-%20Sound%20and%20Audio%20Processing/11%20Bit-Perfect%20Output.md)). |
| **Positional mapping (†)** | Inferring a list's stored values from the order of its labels when the XML declares no values. |
| **Preamp** | A fixed gain offset applied before later processing ([Chapter 03](../Part%202%20-%20Sound%20and%20Audio%20Processing/03%20Volume%20Control%20and%20DVC.md), [Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)). |
| **Q** | A filter's bandwidth or sharpness parameter ([Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)). |
| **ReplayGain** | Tag-based loudness normalization ([Chapter 05](../Part%202%20-%20Sound%20and%20Audio%20Processing/05%20ReplayGain%20and%20Loudness%20Normalization.md)). |
| **Resampling** | Converting audio from one sample rate to another ([Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)). |
| **SAF** | Storage Access Framework: Android's folder-access permission system ([Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)). |
| **Scrobbling** | Recording plays to a listening-history service such as Last.fm ([Chapter 33](../Part%206%20-%20Android%20Integration/33%20Scrobbling%20and%20App%20Integration.md)). |
| **Shelving filter** | A filter that boosts or cuts all frequencies above or below a corner frequency ([Chapter 04](../Part%202%20-%20Sound%20and%20Audio%20Processing/04%20Equalizer%20and%20Tone%20Controls.md)). |
| **Skin** | A Poweramp visual theme; third-party skins are installed separately ([Chapter 25](../Part%205%20-%20Interface%20and%20Visuals/25%20Look%20and%20Feel.md)). |
| **SoX / SW** | The two resampler engines offered: “SoX - very high quality” and “SW - high quality” ([Chapter 07](../Part%202%20-%20Sound%20and%20Audio%20Processing/07%20Sample%20Rates%20and%20Resampling.md)). |
| **SYLT / USLT** | ID3v2 frames for synchronized and unsynchronized lyrics ([Chapter 28](../Part%205%20-%20Interface%20and%20Visuals/28%20Lyrics.md)). |
| **Tag encoding** | The character set used to decode non-Unicode tags and playlists ([Chapter 18](../Part%204%20-%20Library%20and%20Playback/18%20Music%20Folders,%20Scanning%20and%20Tags.md)). |
| **TPDF** | Triangular probability-density-function dither: the standard choice for 16-bit output ([Chapter 08](../Part%202%20-%20Sound%20and%20Audio%20Processing/08%20Bit%20Depth,%20Sample%20Format%20and%20Dither.md)). |
| **Tracker module** | A music file of patterns and samples rendered in real time (MOD, S3M, XM, IT) ([Chapter 24](../Part%204%20-%20Library%20and%20Playback/24%20Tracker%20Module%20Playback.md)). |
| **Uberpatron badges** | Optional supporter purchases. No settings depend on them ([Chapter 36](../Part%207%20-%20Maintenance%20and%20Support/36%20Purchases%20and%20Feature%20Packages.md)). |
| **USB Audio Class** | The standard USB device class for audio interfaces and DACs ([Chapter 13](../Part%203%20-%20Outputs%20and%20Devices/13%20USB%20DAC%20Setup%20and%20Compatibility.md)). |
| **Wakelock** | An Android mechanism that keeps the CPU running with the screen off ([Chapter 34](../Part%206%20-%20Android%20Integration/34%20Background%20Operation%20and%20Compatibility.md)). |
| **`xml` / `xml-v22`** | Two resource-variant folders in the APK; `-v22` holds versions used on Android API level 22 and later. In build 1031, 426 declarations exist in both and differ only in a cosmetic attribute on 43 entries; 74 declarations exist only in `xml`. |

---

← [Settings Reference Index](Settings%20Reference/Index.md) · [Contents](../00%20Front%20Matter/01%20Master%20Table%20of%20Contents.md) · [Preference Key Index](Preference%20Key%20Index.md) →
