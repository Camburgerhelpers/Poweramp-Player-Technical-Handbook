// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  handbookSidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Front Matter',
      items: [
        {
          type: 'doc',
          id: '00 Front Matter/00 Cover',
          label: 'Cover',
        },
        {
          type: 'doc',
          id: '00 Front Matter/01 Master Table of Contents',
          label: 'Master Table of Contents',
        },
        {
          type: 'doc',
          id: '00 Front Matter/02 About This Edition',
          label: 'About This Edition',
        },
        {
          type: 'doc',
          id: '00 Front Matter/03 Quick Start',
          label: 'Quick Start',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 1 — Getting Oriented',
      items: [
        {
          type: 'doc',
          id: 'Part 1 - Getting Oriented/01 How Poweramp\'s Settings Are Organized',
          label: '01 How Poweramp\'s Settings Are Organized',
        },
        {
          type: 'doc',
          id: 'Part 1 - Getting Oriented/02 The Poweramp Audio Path',
          label: '02 The Poweramp Audio Path',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 2 — Sound and Audio Processing',
      items: [
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/03 Volume Control and DVC',
          label: '03 Volume Control and DVC',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/04 Equalizer and Tone Controls',
          label: '04 Equalizer and Tone Controls',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/05 ReplayGain and Loudness Normalization',
          label: '05 ReplayGain and Loudness Normalization',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/06 Track Transitions and Gapless Playback',
          label: '06 Track Transitions and Gapless Playback',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/07 Sample Rates and Resampling',
          label: '07 Sample Rates and Resampling',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/08 Bit Depth, Sample Format and Dither',
          label: '08 Bit Depth, Sample Format and Dither',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/09 64-bit Floating-Point Processing',
          label: '09 64-bit Floating-Point Processing',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/10 DSD Playback and Remastering',
          label: '10 DSD Playback and Remastering',
        },
        {
          type: 'doc',
          id: 'Part 2 - Sound and Audio Processing/11 Bit-Perfect Output',
          label: '11 Bit-Perfect Output',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 3 — Outputs and Devices',
      items: [
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/12 Choosing an Audio Output',
          label: '12 Choosing an Audio Output',
        },
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/13 USB DAC Setup and Compatibility',
          label: '13 USB DAC Setup and Compatibility',
        },
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/14 Bluetooth Audio',
          label: '14 Bluetooth Audio',
        },
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/15 Chromecast Output',
          label: '15 Chromecast Output',
        },
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/16 Calls, Notifications and Interruptions',
          label: '16 Calls, Notifications and Interruptions',
        },
        {
          type: 'doc',
          id: 'Part 3 - Outputs and Devices/17 Headphones and Hardware Buttons',
          label: '17 Headphones and Hardware Buttons',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 4 — Library and Playback',
      items: [
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/18 Music Folders, Scanning and Tags',
          label: '18 Music Folders, Scanning and Tags',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/19 Browsing the Library',
          label: '19 Browsing the Library',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/20 Playlists and the Queue',
          label: '20 Playlists and the Queue',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/21 Shuffle',
          label: '21 Shuffle',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/22 Search',
          label: '22 Search',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/23 Network Streams',
          label: '23 Network Streams',
        },
        {
          type: 'doc',
          id: 'Part 4 - Library and Playback/24 Tracker Module Playback',
          label: '24 Tracker Module Playback',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 5 — Interface and Visuals',
      items: [
        {
          type: 'doc',
          id: 'Part 5 - Interface and Visuals/25 Look and Feel',
          label: '25 Look and Feel',
        },
        {
          type: 'doc',
          id: 'Part 5 - Interface and Visuals/26 The Player Screen',
          label: '26 The Player Screen',
        },
        {
          type: 'doc',
          id: 'Part 5 - Interface and Visuals/27 Album Art and Backgrounds',
          label: '27 Album Art and Backgrounds',
        },
        {
          type: 'doc',
          id: 'Part 5 - Interface and Visuals/28 Lyrics',
          label: '28 Lyrics',
        },
        {
          type: 'doc',
          id: 'Part 5 - Interface and Visuals/29 Visualization',
          label: '29 Visualization',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 6 — Android Integration',
      items: [
        {
          type: 'doc',
          id: 'Part 6 - Android Integration/30 Notifications and Media Buttons',
          label: '30 Notifications and Media Buttons',
        },
        {
          type: 'doc',
          id: 'Part 6 - Android Integration/31 Lock Screen',
          label: '31 Lock Screen',
        },
        {
          type: 'doc',
          id: 'Part 6 - Android Integration/32 Android Auto and Connected Apps',
          label: '32 Android Auto and Connected Apps',
        },
        {
          type: 'doc',
          id: 'Part 6 - Android Integration/33 Scrobbling and App Integration',
          label: '33 Scrobbling and App Integration',
        },
        {
          type: 'doc',
          id: 'Part 6 - Android Integration/34 Background Operation and Compatibility',
          label: '34 Background Operation and Compatibility',
        },
      ],
    },
    {
      type: 'category',
      label: 'Part 7 — Maintenance and Support',
      items: [
        {
          type: 'doc',
          id: 'Part 7 - Maintenance and Support/35 Backup, Restore and Maintenance',
          label: '35 Backup, Restore and Maintenance',
        },
        {
          type: 'doc',
          id: 'Part 7 - Maintenance and Support/36 Purchases and Feature Packages',
          label: '36 Purchases and Feature Packages',
        },
        {
          type: 'doc',
          id: 'Part 7 - Maintenance and Support/37 About, Updates and Support',
          label: '37 About, Updates and Support',
        },
        {
          type: 'doc',
          id: 'Part 7 - Maintenance and Support/38 Troubleshooting Guide',
          label: '38 Troubleshooting Guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Settings Reference',
      link: {
        type: 'doc',
        id: 'Appendices/Settings Reference/Index',
      },
      items: [
        'Appendices/Settings Reference/About Poweramp',
        'Appendices/Settings Reference/Album Art Settings',
        'Appendices/Settings Reference/Application Icon',
        'Appendices/Settings Reference/Audio Advanced Tweaks',
        'Appendices/Settings Reference/Audio Focus',
        'Appendices/Settings Reference/Audio Output Advanced Tweaks',
        'Appendices/Settings Reference/Audio Output Selection',
        'Appendices/Settings Reference/Audio Settings',
        'Appendices/Settings Reference/Background Appearance Settings',
        'Appendices/Settings Reference/Bass and Treble Tone Settings',
        'Appendices/Settings Reference/Bit-Perfect and Precision Settings',
        'Appendices/Settings Reference/Crossfade and Gapless Settings',
        'Appendices/Settings Reference/Direct Volume Control',
        'Appendices/Settings Reference/Equalizer Band Settings',
        'Appendices/Settings Reference/Equalizer Settings',
        'Appendices/Settings Reference/Feature Packages',
        'Appendices/Settings Reference/Headset and Bluetooth Settings',
        'Appendices/Settings Reference/Individual Audio Output Settings',
        'Appendices/Settings Reference/Library Lists',
        'Appendices/Settings Reference/Lock Screen Settings',
        'Appendices/Settings Reference/Look and Feel',
        'Appendices/Settings Reference/Lyrics Settings',
        'Appendices/Settings Reference/Main Settings Menu',
        'Appendices/Settings Reference/Media Buttons and Actions',
        'Appendices/Settings Reference/Miscellaneous Settings',
        'Appendices/Settings Reference/Music Library Settings',
        'Appendices/Settings Reference/Music Scanner',
        'Appendices/Settings Reference/Notification Settings',
        'Appendices/Settings Reference/Playback Queue',
        'Appendices/Settings Reference/Player Screen',
        'Appendices/Settings Reference/Playlist Settings',
        'Appendices/Settings Reference/Purchase Methods',
        'Appendices/Settings Reference/Purchase Restoration',
        'Appendices/Settings Reference/ReplayGain Settings',
        'Appendices/Settings Reference/Resampler Settings',
        'Appendices/Settings Reference/Search Settings',
        'Appendices/Settings Reference/Shuffle Settings',
        'Appendices/Settings Reference/Storage and Maintenance',
        'Appendices/Settings Reference/Support',
        'Appendices/Settings Reference/Theme Settings',
        'Appendices/Settings Reference/Translations',
        'Appendices/Settings Reference/Visualization Settings',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        {
          type: 'doc',
          id: 'Appendices/Glossary',
          label: 'Glossary',
        },
        {
          type: 'doc',
          id: 'Appendices/Preference Key Index',
          label: 'Preference Key Index',
        },
      ],
    },
    {
      type: 'category',
      label: 'Release & Verification',
      items: [
        {
          type: 'doc',
          id: 'RELEASE-NOTES-v0.1.0-alpha.1',
          label: 'Release Notes (v0.1.0-alpha.1)',
        },
        {
          type: 'doc',
          id: 'RUNTIME-VERIFICATION-REGISTER',
          label: 'Runtime Verification Register',
        },
        {
          type: 'doc',
          id: 'EDITORIAL-CHANGELOG',
          label: 'Editorial Changelog',
        },
      ],
    },
  ],
};

module.exports = sidebars;
