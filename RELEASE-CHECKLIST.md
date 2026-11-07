# Publication release gate (internal)

Keep the repository **private** until every release blocker is explicitly resolved. This is a working checklist, not a claim that checks have passed.

## Source preservation
- [ ] Original source directory and file hashes remain unchanged.
- [ ] Alpha release copy is isolated from the original.
- [ ] File inventory and manifest were regenerated after the final edits.

## Technical and safety
- [ ] Full Rescan, import, and reset warnings reviewed.
- [ ] Inferred stored values and unknown defaults identified honestly.
- [ ] Critical technical claims checked against available evidence.
- [ ] Runtime gaps and device-dependent behavior disclosed.

## Public content
- [ ] Licensing decision explicitly approved.
- [ ] Third-party APK-text quotations reviewed and treated appropriately.
- [ ] No APK, decompiled resource dump, private research, credentials, or personal paths are staged.
- [ ] Unofficial / not endorsed status prominent.
- [ ] Version baseline and scope correctly stated on every published page.

## Quality
- [ ] 38 chapters, seven parts, settings references and indexes verified.
- [ ] Relative links, YAML, headings, tables and code fences validated.
- [ ] Docusaurus site builds cleanly with zero broken links (`cd website && npm run build`).
- [ ] GitHub Markdown preview checked, especially alerts and nested lists.
- [ ] README navigation points to files that really exist in the release.
- [ ] Release archive/hash independently verified.

## Publish decision
- [ ] Approved final alpha candidate.
- [ ] Change repository visibility from private to public (requires explicit authorization).
- [ ] Publish matching GitHub release/tag and changelog (requires explicit authorization).
- [ ] Share link with interested community members.
