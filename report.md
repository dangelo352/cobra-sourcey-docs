# Sourcey Cobra Documentation Report

This delivery publishes a public Sourcey-built documentation site for the maintained third-party OSS library `spf13/cobra`.

## What To Inspect

- Public docs site: https://dangelo352.github.io/cobra-sourcey-docs/
- Source repository: https://github.com/dangelo352/cobra-sourcey-docs
- Target upstream repository: https://github.com/spf13/cobra
- Pinned target commit: `ad460ea8f249db69c943a365fb84f3a59042d54e`

## Why This Target Fits

Cobra is a maintained Go CLI library with recent upstream activity, Apache-2.0 licensing, multiple source files, and a broad public API surface covering command execution, flags, validation, completions, active help, and documentation generation.

## What Was Generated

The site uses Sourcey 3.6.3 and includes a `godoc.json` snapshot produced from the pinned Cobra source tree. The live site has seven navigable pages:

- Overview
- Source report
- Command model
- Flags and validation
- Completion and documentation generation
- Generated API snapshot for `github.com/spf13/cobra`
- Generated API snapshot for `github.com/spf13/cobra/doc`

The generated API pages document substantially more than 20 public APIs, methods, types, and documentation concepts.

## Commands Run

```sh
runx --version
npx sourcey --version
npx sourcey godoc -m ../cobra-source -p './...' -o godoc.json
npm run build
curl -I -L https://dangelo352.github.io/cobra-sourcey-docs/
```

## Maintainer-Facing Value

The site groups Cobra's scattered source surfaces into a compact reference: command execution, validation, completion, active help, and doc generation. This is useful for downstream CLI authors who need to understand how Cobra's public APIs connect without reading every source file in sequence.

## Known Limit

The native Sourcey godoc tab renderer hung in this local environment. To keep the proof public and reproducible, the API reference markdown was mechanically generated from Sourcey's `godoc.json` snapshot and then built by Sourcey as a static site.
