# Cobra Source Reference

Cobra is a Go library for building command-line interfaces with nested commands, flags, validation, shell completion, and generated documentation.

This documentation site is built from the public Cobra source tree at commit `ad460ea8f249db69c943a365fb84f3a59042d54e`. It combines a short source-backed guide with a generated Go API reference from `godoc.json`.

## Why This Reference Exists

Cobra has a compact public API, but its behavior is spread across command execution, argument validators, flag groups, completion helpers, and documentation generators. This site groups those surfaces so maintainers and downstream CLI authors can inspect the API without jumping between source files.

## Source Inputs

- Repository: `https://github.com/spf13/cobra`
- Pinned commit: `ad460ea8f249db69c943a365fb84f3a59042d54e`
- License: Apache-2.0
- Source snapshot: `godoc.json`
- Packages documented: `github.com/spf13/cobra` and `github.com/spf13/cobra/doc`

## Public API Areas

- Command construction and execution
- Command tree traversal
- Flag and argument validation
- Shell completion for Bash, Zsh, Fish, and PowerShell
- Active help
- Documentation generation for Markdown, man pages, YAML, and reStructuredText
- Command usage, help, and error handling hooks

## Start Here

- Read [Command Model](./command-model) for how `Command` objects compose execution.
- Read [Flags and Validation](./flags-and-validation) for argument and flag guardrails.
- Read [Completion and Docgen](./completion-and-docgen) for generated shell and documentation outputs.
- Open the Go API tab for generated function, method, type, and example reference.
