# Completion And Documentation Generation

Cobra ships support for shell completion and command documentation generation. These APIs are public because many CLI projects expose completion or docs commands as part of their release workflow.

## Shell Completion

Cobra includes completion support for:

- Bash
- Zsh
- Fish
- PowerShell

Completion APIs can generate scripts, attach annotations, and provide dynamic completion callbacks. The source tree keeps each shell's behavior in a dedicated file, which makes shell-specific changes easier to review.

## Active Help

Active help lets commands show contextual guidance during completion. It is controlled by environment and completion paths so command authors can offer hints without changing normal command execution.

## Documentation Generators

The `github.com/spf13/cobra/doc` package generates command documentation in several formats:

- Markdown
- Man pages
- YAML
- reStructuredText

These generators are useful for CLI projects that want release-time docs generated from the command tree, keeping help output and documentation closer together.

## Source Files To Inspect

- `bash_completions.go`
- `zsh_completions.go`
- `fish_completions.go`
- `powershell_completions.go`
- `active_help.go`
- `doc/md_docs.go`
- `doc/man_docs.go`
- `doc/yaml_docs.go`
- `doc/rest_docs.go`

## Maintainer-Facing Gaps

Completion and documentation APIs are often discovered late by downstream users. Grouping them together makes it easier to see Cobra as both a command runtime and a release-documentation tool.
