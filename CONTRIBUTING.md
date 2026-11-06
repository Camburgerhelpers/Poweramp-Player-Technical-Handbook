# Contributing

Thanks for helping improve this unofficial handbook. Corrections with specific evidence are especially valuable.

## Running the site locally

The website is built with Docusaurus 3 and requires Node.js 20+ (Node 22 LTS recommended).

Depending on what you are doing, choose one of two workflows:

### 1. Live editing mode (`npm start`)

Use this when actively writing or editing Markdown files:

```bash
cd website
npm ci
npm start
```

- **What it does:** Starts an in-memory dev server at `http://localhost:3000/Poweramp-Player-Technical-Handbook/` with instant hot reloading as you save files.
- **Search note:** The search index is generated from compiled static HTML, so search is intentionally not active in in-memory dev mode (`npm start`). To test search, use the production preview below.

### 2. Full production build & search preview (`npm run build && npm run serve`)

Use this before opening a pull request or to test search and link integrity:

```bash
cd website
npm ci
npm run build
npm run serve
```

- **What it does:** Compiles the complete static site to `website/build/`, generates the Lunr search index, enforces zero broken links, and serves the exact production output at `http://localhost:3000/Poweramp-Player-Technical-Handbook/`.

## Report a documentation problem

Open an issue and include:

1. **Where:** chapter/appendix heading and setting key, if applicable.
2. **What is wrong:** exact claim or a short paraphrase.
3. **Evidence:** relevant on-device observation, public source link, or reproduction steps.
4. **Environment:** Poweramp **Player** build, Android version, device, output path (Bluetooth / wired / USB), and optional codec.
5. **Suggested correction:** what the text should say, with an uncertainty label if needed.

For runtime evidence, explain what you changed and what result you observed. If possible, repeat the test with only one variable changed.

## Evidence labels

The handbook uses four labels (defined in [About This Edition](handbook/00%20Front%20Matter/02%20About%20This%20Edition.md)):

- **APK VERIFIED:** matches the settings resources extracted from a specific build (1031 for this alpha). Not necessarily runtime-verified.
- **RESEARCH SUPPORTED:** a reasoned interpretation that goes beyond the literal declaration, for example the meaning of a key name. Values marked **†** are inferred from option order and are unverified.
- **GENERAL PRINCIPLE:** audio or Android behavior that is not guaranteed to be Poweramp-specific.
- **RUNTIME VERIFICATION REQUIRED:** dependent on device, Android version, output, or actual tests.

If your report answers an open question in the [Runtime Verification Register](handbook/RUNTIME-VERIFICATION-REGISTER.md), cite its ID (for example RV-040).

Please do not convert an assumption into a verified claim without new evidence.

## Safety and privacy

Do not submit passwords, tokens, order numbers, device identifiers, private file paths, or personal information. Crop or redact screenshots. Do not upload APKs, decompiled resource sets, or third-party copyrighted material to issues or pull requests.

Do not recommend clearing app data, resetting libraries, or uninstalling paid apps as a first troubleshooting step. Disclose possible data-loss risk and safe backups.

## Scope

This handbook covers **Poweramp Player**. Report Poweramp Equalizer issues separately unless they directly concern a comparison explicitly made in the Player handbook.

The project is community-created; for app bugs and official technical support, use the official Poweramp channels.
