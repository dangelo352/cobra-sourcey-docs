# Flags And Validation

Cobra uses `pflag` for command flags and adds helpers for argument counts, required flags, mutually exclusive groups, and related flag groups.

## Argument Validators

Argument validators are functions that inspect a command and its remaining arguments. Cobra includes validators for:

- Exact argument counts
- Minimum and maximum argument counts
- Ranges
- No positional arguments
- Arbitrary positional arguments
- Only valid child command names

These helpers are useful because they keep validation close to command definitions while preserving a shared error style.

## Flag Groups

Flag group helpers let a command express relationships between flags:

- Required-together groups
- Mutually exclusive groups
- One-required groups

The behavior is implemented through annotations on flags, so the validation stays attached to the command metadata rather than requiring every command body to duplicate checks.

## Error Handling Shape

Validation failures should be handled before the command action mutates state. Cobra's execution path gives callers a way to return errors, silence usage, or wrap behavior in custom help and error rendering.

## Source Files To Inspect

- `args.go` defines argument validators.
- `flag_groups.go` defines flag relationship helpers.
- `args_test.go` and `flag_groups_test.go` cover failure and success paths.

## Maintainer-Facing Gaps

The flag group helpers are powerful but easy to miss when reading only README examples. A dedicated validation section helps CLI authors avoid writing ad hoc checks in every `RunE` function.
