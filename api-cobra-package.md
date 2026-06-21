# github.com/spf13/cobra

Package cobra is a commander providing a simple interface to create powerful modern CLI interfaces.
In addition to providing an interface, Cobra simultaneously provides a controller to organize your application code.

## Types

### Command

```go
Command
```

Command is just that, a command for your application.
E.g.  'go run ...' - 'run' is the command. Cobra requires
you to define the usage and description as part of your command
definition to ensure usability.

#### Methods

- `AddCommand`: `func  AddCommand(cmds ...*Command)` — AddCommand adds one or more commands to this parent command.
- `AddGroup`: `func  AddGroup(groups ...*Group)` — AddGroup adds one or more command groups to this parent command.
- `AllChildCommandsHaveGroup`: `func  AllChildCommandsHaveGroup() bool` — AllChildCommandsHaveGroup returns if all subcommands are assigned to a group
- `ArgsLenAtDash`: `func  ArgsLenAtDash() int` — ArgsLenAtDash will return the length of c.Flags().Args at the moment
- `CalledAs`: `func  CalledAs() string` — CalledAs returns the command name or alias that was used to invoke
- `CommandPath`: `func  CommandPath() string` — CommandPath returns the full path to this command.
- `CommandPathPadding`: `func  CommandPathPadding() int` — CommandPathPadding return padding for the command path.
- `Commands`: `func  Commands() []*Command` — Commands returns a sorted slice of child commands.
- `ContainsGroup`: `func  ContainsGroup(groupID string) bool` — ContainsGroup return if groupID exists in the list of command groups.
- `Context`: `func  Context() context.Context` — Context returns underlying command context. If command was executed
- `DebugFlags`: `func  DebugFlags()` — DebugFlags used to determine which flags have been assigned to which commands
- `DisplayName`: `func  DisplayName() string` — DisplayName returns the name to display in help text. Returns command Name()
- `ErrOrStderr`: `func  ErrOrStderr() io.Writer` — ErrOrStderr returns output to stderr
- `ErrPrefix`: `func  ErrPrefix() string` — ErrPrefix return error message prefix for the command
- `Execute`: `func  Execute() error` — Execute uses the args (os.Args[1:] by default)
- `ExecuteC`: `func  ExecuteC() (cmd *Command, err error)` — ExecuteC executes the command.
- `ExecuteContext`: `func  ExecuteContext(ctx context.Context) error` — ExecuteContext is the same as Execute(), but sets the ctx on the command.
- `ExecuteContextC`: `func  ExecuteContextC(ctx context.Context) (*Command, error)` — ExecuteContextC is the same as ExecuteC(), but sets the ctx on the command.
- `Find`: `func  Find(args []string) (*Command, []string, error)` — Find the target command given the args and command tree
- `Flag`: `func  Flag(name string) (flag *flag.Flag)` — Flag climbs up the command tree looking for matching flag.
- `FlagErrorFunc`: `func  FlagErrorFunc() (f func(*Command, error) error)` — FlagErrorFunc returns either the function set by SetFlagErrorFunc for this
- `Flags`: `func  Flags() *flag.FlagSet` — Flags returns the complete FlagSet that applies
- `GenBashCompletion`: `func  GenBashCompletion(w io.Writer) error` — GenBashCompletion generates bash completion file and writes to the passed writer.
- `GenBashCompletionFile`: `func  GenBashCompletionFile(filename string) error` — GenBashCompletionFile generates bash completion file.
- `GenBashCompletionFileV2`: `func  GenBashCompletionFileV2(filename string, includeDesc bool) error` — GenBashCompletionFileV2 generates Bash completion version 2.
- `GenBashCompletionV2`: `func  GenBashCompletionV2(w io.Writer, includeDesc bool) error` — GenBashCompletionV2 generates Bash completion file version 2
- `GenFishCompletion`: `func  GenFishCompletion(w io.Writer, includeDesc bool) error` — GenFishCompletion generates fish completion file and writes to the passed writer.
- `GenFishCompletionFile`: `func  GenFishCompletionFile(filename string, includeDesc bool) error` — GenFishCompletionFile generates fish completion file.
- `GenPowerShellCompletion`: `func  GenPowerShellCompletion(w io.Writer) error` — GenPowerShellCompletion generates powershell completion file without descriptions
- `GenPowerShellCompletionFile`: `func  GenPowerShellCompletionFile(filename string) error` — GenPowerShellCompletionFile generates powershell completion file without descriptions.
- `GenPowerShellCompletionFileWithDesc`: `func  GenPowerShellCompletionFileWithDesc(filename string) error` — GenPowerShellCompletionFileWithDesc generates powershell completion file with descriptions.
- `GenPowerShellCompletionWithDesc`: `func  GenPowerShellCompletionWithDesc(w io.Writer) error` — GenPowerShellCompletionWithDesc generates powershell completion file with descriptions
- `GenZshCompletion`: `func  GenZshCompletion(w io.Writer) error` — GenZshCompletion generates zsh completion file including descriptions
- `GenZshCompletionFile`: `func  GenZshCompletionFile(filename string) error` — GenZshCompletionFile generates zsh completion file including descriptions.
- `GenZshCompletionFileNoDesc`: `func  GenZshCompletionFileNoDesc(filename string) error` — GenZshCompletionFileNoDesc generates zsh completion file without descriptions.
- `GenZshCompletionNoDesc`: `func  GenZshCompletionNoDesc(w io.Writer) error` — GenZshCompletionNoDesc generates zsh completion file without descriptions
- `GetFlagCompletionFunc`: `func  GetFlagCompletionFunc(flagName string) (CompletionFunc, bool)` — GetFlagCompletionFunc returns the completion function for the given flag of the command, if available.
- `GlobalNormalizationFunc`: `func  GlobalNormalizationFunc() func(f *flag.FlagSet, name string) flag.NormalizedName` — GlobalNormalizationFunc returns the global normalization function or nil if it doesn't exist.
- `Groups`: `func  Groups() []*Group` — Groups returns a slice of child command groups.
- `HasAlias`: `func  HasAlias(s string) bool` — HasAlias determines if a given string is an alias of the command.
- `HasAvailableFlags`: `func  HasAvailableFlags() bool` — HasAvailableFlags checks if the command contains any flags (local plus persistent from the entire
- `HasAvailableInheritedFlags`: `func  HasAvailableInheritedFlags() bool` — HasAvailableInheritedFlags checks if the command has flags inherited from its parent command which are
- `HasAvailableLocalFlags`: `func  HasAvailableLocalFlags() bool` — HasAvailableLocalFlags checks if the command has flags specifically declared locally which are not hidden
- `HasAvailablePersistentFlags`: `func  HasAvailablePersistentFlags() bool` — HasAvailablePersistentFlags checks if the command contains persistent flags which are not hidden or deprecated.
- `HasAvailableSubCommands`: `func  HasAvailableSubCommands() bool` — HasAvailableSubCommands determines if a command has available sub commands that
- `HasExample`: `func  HasExample() bool` — HasExample determines if the command has example.
- `HasFlags`: `func  HasFlags() bool` — HasFlags checks if the command contains any flags (local plus persistent from the entire structure).
- `HasHelpSubCommands`: `func  HasHelpSubCommands() bool` — HasHelpSubCommands determines if a command has any available 'help' sub commands
- `HasInheritedFlags`: `func  HasInheritedFlags() bool` — HasInheritedFlags checks if the command has flags inherited from its parent command.
- `HasLocalFlags`: `func  HasLocalFlags() bool` — HasLocalFlags checks if the command has flags specifically declared locally.
- `HasParent`: `func  HasParent() bool` — HasParent determines if the command is a child command.
- `HasPersistentFlags`: `func  HasPersistentFlags() bool` — HasPersistentFlags checks if the command contains persistent flags.
- `HasSubCommands`: `func  HasSubCommands() bool` — HasSubCommands determines if the command has children commands.
- `Help`: `func  Help() error` — Help puts out the help for the command.
- `HelpFunc`: `func  HelpFunc() func(*Command, []string)` — HelpFunc returns either the function set by SetHelpFunc for this command
- `HelpTemplate`: `func  HelpTemplate() string` — HelpTemplate return help template for the command.
- `InOrStdin`: `func  InOrStdin() io.Reader` — InOrStdin returns input to stdin
- `InheritedFlags`: `func  InheritedFlags() *flag.FlagSet` — InheritedFlags returns all flags which were inherited from parent commands.
- `InitDefaultCompletionCmd`: `func  InitDefaultCompletionCmd(args ...string)` — InitDefaultCompletionCmd adds a default 'completion' command to c.
- `InitDefaultHelpCmd`: `func  InitDefaultHelpCmd()` — InitDefaultHelpCmd adds default help command to c.
- `InitDefaultHelpFlag`: `func  InitDefaultHelpFlag()` — InitDefaultHelpFlag adds default help flag to c.
- `InitDefaultVersionFlag`: `func  InitDefaultVersionFlag()` — InitDefaultVersionFlag adds default version flag to c.
- `IsAdditionalHelpTopicCommand`: `func  IsAdditionalHelpTopicCommand() bool` — IsAdditionalHelpTopicCommand determines if a command is an additional
- `IsAvailableCommand`: `func  IsAvailableCommand() bool` — IsAvailableCommand determines if a command is available as a non-help command
- `LocalFlags`: `func  LocalFlags() *flag.FlagSet` — LocalFlags returns the local FlagSet specifically set in the current command.
- `LocalNonPersistentFlags`: `func  LocalNonPersistentFlags() *flag.FlagSet` — LocalNonPersistentFlags are flags specific to this command which will NOT persist to subcommands.
- `MarkFlagCustom`: `func  MarkFlagCustom(name string, f string) error` — MarkFlagCustom adds the BashCompCustom annotation to the named flag, if it exists.
- `MarkFlagDirname`: `func  MarkFlagDirname(name string) error` — MarkFlagDirname instructs the various shell completion implementations to
- `MarkFlagFilename`: `func  MarkFlagFilename(name string, extensions ...string) error` — MarkFlagFilename instructs the various shell completion implementations to
- `MarkFlagRequired`: `func  MarkFlagRequired(name string) error` — MarkFlagRequired instructs the various shell completion implementations to
- `MarkFlagsMutuallyExclusive`: `func  MarkFlagsMutuallyExclusive(flagNames ...string)` — MarkFlagsMutuallyExclusive marks the given flags with annotations so that Cobra errors
- `MarkFlagsOneRequired`: `func  MarkFlagsOneRequired(flagNames ...string)` — MarkFlagsOneRequired marks the given flags with annotations so that Cobra errors
- `MarkFlagsRequiredTogether`: `func  MarkFlagsRequiredTogether(flagNames ...string)` — MarkFlagsRequiredTogether marks the given flags with annotations so that Cobra errors
- `MarkPersistentFlagDirname`: `func  MarkPersistentFlagDirname(name string) error` — MarkPersistentFlagDirname instructs the various shell completion
- `MarkPersistentFlagFilename`: `func  MarkPersistentFlagFilename(name string, extensions ...string) error` — MarkPersistentFlagFilename instructs the various shell completion
- `MarkPersistentFlagRequired`: `func  MarkPersistentFlagRequired(name string) error` — MarkPersistentFlagRequired instructs the various shell completion implementations to
- `MarkZshCompPositionalArgumentFile`: `func  MarkZshCompPositionalArgumentFile(argPosition int, patterns ...string) error` — MarkZshCompPositionalArgumentFile only worked for zsh and its behavior was
- `MarkZshCompPositionalArgumentWords`: `func  MarkZshCompPositionalArgumentWords(argPosition int, words ...string) error` — MarkZshCompPositionalArgumentWords only worked for zsh. It has therefore
- `Name`: `func  Name() string` — Name returns the command's name: the first word in the use line.
- `NameAndAliases`: `func  NameAndAliases() string` — NameAndAliases returns a list of the command name and all aliases
- `NamePadding`: `func  NamePadding() int` — NamePadding returns padding for the name.
- `NonInheritedFlags`: `func  NonInheritedFlags() *flag.FlagSet` — NonInheritedFlags returns all flags which were not inherited from parent commands.
- `OutOrStderr`: `func  OutOrStderr() io.Writer` — OutOrStderr returns output to stderr
- `OutOrStdout`: `func  OutOrStdout() io.Writer` — OutOrStdout returns output to stdout.
- `Parent`: `func  Parent() *Command` — Parent returns a commands parent command.
- `ParseFlags`: `func  ParseFlags(args []string) error` — ParseFlags parses persistent flag tree and local flags.
- `PersistentFlags`: `func  PersistentFlags() *flag.FlagSet` — PersistentFlags returns the persistent FlagSet specifically set in the current command.
- `Print`: `func  Print(i ...interface{})` — Print is a convenience method to Print to the defined output, fallback to Stderr if not set.
- `PrintErr`: `func  PrintErr(i ...interface{})` — PrintErr is a convenience method to Print to the defined Err output, fallback to Stderr if not set.
- `PrintErrf`: `func  PrintErrf(format string, i ...interface{})` — PrintErrf is a convenience method to Printf to the defined Err output, fallback to Stderr if not set.
- `PrintErrln`: `func  PrintErrln(i ...interface{})` — PrintErrln is a convenience method to Println to the defined Err output, fallback to Stderr if not set.
- `Printf`: `func  Printf(format string, i ...interface{})` — Printf is a convenience method to Printf to the defined output, fallback to Stderr if not set.
- `Println`: `func  Println(i ...interface{})` — Println is a convenience method to Println to the defined output, fallback to Stderr if not set.
- `RegisterFlagCompletionFunc`: `func  RegisterFlagCompletionFunc(flagName string, f CompletionFunc) error` — RegisterFlagCompletionFunc should be called to register a function to provide completion for a flag.
- `RemoveCommand`: `func  RemoveCommand(cmds ...*Command)` — RemoveCommand removes one or more commands from a parent command.
- `ResetCommands`: `func  ResetCommands()` — ResetCommands delete parent, subcommand and help command from c.
- `ResetFlags`: `func  ResetFlags()` — ResetFlags deletes all flags from command.
- `Root`: `func  Root() *Command` — Root finds root command.
- `Runnable`: `func  Runnable() bool` — Runnable determines if the command is itself runnable.
- `SetArgs`: `func  SetArgs(a []string)` — SetArgs sets arguments for the command. It is set to os.Args[1:] by default, if desired, can be overridden
- `SetCompletionCommandGroupID`: `func  SetCompletionCommandGroupID(groupID string)` — SetCompletionCommandGroupID sets the group id of the completion command.
- `SetContext`: `func  SetContext(ctx context.Context)` — SetContext sets context for the command. This context will be overwritten by
- `SetErr`: `func  SetErr(newErr io.Writer)` — SetErr sets the destination for error messages.
- `SetErrPrefix`: `func  SetErrPrefix(s string)` — SetErrPrefix sets error message prefix to be used. Application can use it to set custom prefix.
- `SetFlagErrorFunc`: `func  SetFlagErrorFunc(f func(*Command, error) error)` — SetFlagErrorFunc sets a function to generate an error when flag parsing
- `SetGlobalNormalizationFunc`: `func  SetGlobalNormalizationFunc(n func(f *flag.FlagSet, name string) flag.NormalizedName)` — SetGlobalNormalizationFunc sets a normalization function to all flag sets and also to child commands.
- `SetHelpCommand`: `func  SetHelpCommand(cmd *Command)` — SetHelpCommand sets help command.
- `SetHelpCommandGroupID`: `func  SetHelpCommandGroupID(groupID string)` — SetHelpCommandGroupID sets the group id of the help command.
- `SetHelpFunc`: `func  SetHelpFunc(f func(*Command, []string))` — SetHelpFunc sets help function. Can be defined by Application.
- `SetHelpTemplate`: `func  SetHelpTemplate(s string)` — SetHelpTemplate sets help template to be used. Application can use it to set custom template.
- `SetIn`: `func  SetIn(newIn io.Reader)` — SetIn sets the source for input data
- `SetOut`: `func  SetOut(newOut io.Writer)` — SetOut sets the destination for usage messages.
- `SetOutput`: `func  SetOutput(output io.Writer)` — SetOutput sets the destination for usage and error messages.
- `SetUsageFunc`: `func  SetUsageFunc(f func(*Command) error)` — SetUsageFunc sets usage function. Usage can be defined by application.
- `SetUsageTemplate`: `func  SetUsageTemplate(s string)` — SetUsageTemplate sets usage template. Can be defined by Application.
- `SetVersionTemplate`: `func  SetVersionTemplate(s string)` — SetVersionTemplate sets version template to be used. Application can use it to set custom template.
- `SuggestionsFor`: `func  SuggestionsFor(typedName string) []string` — SuggestionsFor provides suggestions for the typedName.
- `Traverse`: `func  Traverse(args []string) (*Command, []string, error)` — Traverse the command tree to find the command, and parse args for
- `Usage`: `func  Usage() error` — Usage puts out the usage for the command.
- `UsageFunc`: `func  UsageFunc() (f func(*Command) error)` — UsageFunc returns either the function set by SetUsageFunc for this command
- `UsagePadding`: `func  UsagePadding() int` — UsagePadding return padding for the usage.
- `UsageString`: `func  UsageString() string` — UsageString returns usage string.
- `UsageTemplate`: `func  UsageTemplate() string` — UsageTemplate returns usage template for the command.
- `UseLine`: `func  UseLine() string` — UseLine puts out the full usage for a given command (including parents).
- `ValidateArgs`: `func  ValidateArgs(args []string) error`
- `ValidateFlagGroups`: `func  ValidateFlagGroups() error` — ValidateFlagGroups validates the mutuallyExclusive/oneRequired/requiredAsGroup logic and returns the
- `ValidateRequiredFlags`: `func  ValidateRequiredFlags() error` — ValidateRequiredFlags validates all required flags are present and returns an error otherwise
- `VersionTemplate`: `func  VersionTemplate() string` — VersionTemplate return version template for the command.
- `VisitParents`: `func  VisitParents(fn func(*Command))` — VisitParents visits all parents of the command and invokes fn on each parent.

### Completion

```go
Completion
```

Completion is a string that can be used for completions

two formats are supported:
  - the completion choice
  - the completion choice with a textual description (separated by a TAB).

[CompletionWithDesc] can be used to create a completion string with a textual description.

Note: Go type alias is used to provide a more descriptive name in the documentation, but any string can be used.

### CompletionFunc

```go
CompletionFunc
```

CompletionFunc is a function that provides completion results.

### CompletionOptions

```go
CompletionOptions
```

CompletionOptions are the options to control shell completion

#### Methods

- `SetDefaultShellCompDirective`: `func  SetDefaultShellCompDirective(directive ShellCompDirective)`

### FParseErrWhitelist

```go
FParseErrWhitelist
```

FParseErrWhitelist configures Flag parse errors to be ignored

### Group

```go
Group
```

Group Structure to manage groups for commands

### PositionalArgs

```go
PositionalArgs
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirective

```go
ShellCompDirective
```

ShellCompDirective is a bit map representing the different behaviors the shell
can be instructed to have once completions have been provided.

### SliceValue

```go
SliceValue
```

SliceValue is a reduced version of [pflag.SliceValue]. It is used to detect
flags that accept multiple values and therefore can provide completion
multiple times.

## Functions

### AddTemplateFunc

```go
func AddTemplateFunc(name string, tmplFunc interface{})
```

AddTemplateFunc adds a template function that's available to Usage and Help
template generation.

### AddTemplateFuncs

```go
func AddTemplateFuncs(tmplFuncs template.FuncMap)
```

AddTemplateFuncs adds multiple template functions that are available to Usage and
Help template generation.

### AppendActiveHelp

```go
func AppendActiveHelp(compArray []Completion, activeHelpStr string) []Completion
```

AppendActiveHelp adds the specified string to the specified array to be used as ActiveHelp.
Such strings will be processed by the completion script and will be shown as ActiveHelp
to the user.
The array parameter should be the array that will contain the completions.
This function can be called multiple times before and/or after completions are added to
the array.  Each time this function is called with the same array, the new
ActiveHelp line will be shown below the previous ones when completion is triggered.

### ArbitraryArgs

```go
func ArbitraryArgs(cmd *Command, args []string) error
```

ArbitraryArgs never returns an error.

### CheckErr

```go
func CheckErr(msg interface{})
```

CheckErr prints the msg with the prefix 'Error:' and exits with error code 1. If the msg is nil, it does nothing.

### CompDebug

```go
func CompDebug(msg string, printToStdErr bool)
```

CompDebug prints the specified string to the same file as where the
completion script prints its logs.
Note that completion printouts should never be on stdout as they would
be wrongly interpreted as actual completion choices by the completion script.

### CompDebugln

```go
func CompDebugln(msg string, printToStdErr bool)
```

CompDebugln prints the specified string with a newline at the end
to the same file as where the completion script prints its logs.
Such logs are only printed when the user has set the environment
variable BASH_COMP_DEBUG_FILE to the path of some file to be used.

### CompError

```go
func CompError(msg string)
```

CompError prints the specified completion message to stderr.

### CompErrorln

```go
func CompErrorln(msg string)
```

CompErrorln prints the specified completion message to stderr with a newline at the end.

### CompletionWithDesc

```go
func CompletionWithDesc(choice string, description string) Completion
```

CompletionWithDesc returns a [Completion] with a description by using the TAB delimited format.

### Eq

```go
func Eq(a interface{}, b interface{}) bool
```

Eq takes two types and checks whether they are equal. Supported types are int and string. Unsupported types will panic.

### ExactArgs

```go
func ExactArgs(n int) PositionalArgs
```

ExactArgs returns an error if there are not exactly n args.

### ExactValidArgs

```go
func ExactValidArgs(n int) PositionalArgs
```

ExactValidArgs returns an error if there are not exactly N positional args OR
there are any positional args that are not in the `ValidArgs` field of `Command`

Deprecated: use MatchAll(ExactArgs(n), OnlyValidArgs) instead

### FixedCompletions

```go
func FixedCompletions(choices []Completion, directive ShellCompDirective) CompletionFunc
```

FixedCompletions can be used to create a completion function which always
returns the same results.

This method returns a function that satisfies [CompletionFunc]
It can be used with [Command.RegisterFlagCompletionFunc] and for [Command.ValidArgsFunction].

### GetActiveHelpConfig

```go
func GetActiveHelpConfig(cmd *Command) string
```

GetActiveHelpConfig returns the value of the ActiveHelp environment variable
<PROGRAM>_ACTIVE_HELP where <PROGRAM> is the name of the root command in upper
case, with all non-ASCII-alphanumeric characters replaced by `_`.
It will always return "0" if the global environment variable COBRA_ACTIVE_HELP
is set to "0".

### Gt

```go
func Gt(a interface{}, b interface{}) bool
```

Gt takes two types and checks whether the first type is greater than the second. In case of types Arrays, Chans,
Maps and Slices, Gt will compare their lengths. Ints are compared directly while strings are first parsed as
ints and then compared.

### MarkFlagCustom

```go
func MarkFlagCustom(flags *pflag.FlagSet, name string, f string) error
```

MarkFlagCustom adds the BashCompCustom annotation to the named flag, if it exists.
The bash completion script will call the bash function f for the flag.

This will only work for bash completion.
It is recommended to instead use c.RegisterFlagCompletionFunc(...) which allows
to register a Go function which will work across all shells.

### MarkFlagDirname

```go
func MarkFlagDirname(flags *pflag.FlagSet, name string) error
```

MarkFlagDirname instructs the various shell completion implementations to
limit completions for the named flag to directory names.

### MarkFlagFilename

```go
func MarkFlagFilename(flags *pflag.FlagSet, name string, extensions ...string) error
```

MarkFlagFilename instructs the various shell completion implementations to
limit completions for the named flag to the specified file extensions.

### MarkFlagRequired

```go
func MarkFlagRequired(flags *pflag.FlagSet, name string) error
```

MarkFlagRequired instructs the various shell completion implementations to
prioritize the named flag when performing completion,
and causes your command to report an error if invoked without the flag.

### MatchAll

```go
func MatchAll(pargs ...PositionalArgs) PositionalArgs
```

MatchAll allows combining several PositionalArgs to work in concert.

### MaximumNArgs

```go
func MaximumNArgs(n int) PositionalArgs
```

MaximumNArgs returns an error if there are more than N args.

### MinimumNArgs

```go
func MinimumNArgs(n int) PositionalArgs
```

MinimumNArgs returns an error if there is not at least N args.

### NoArgs

```go
func NoArgs(cmd *Command, args []string) error
```

NoArgs returns an error if any args are included.

### NoDuplicateArgs

```go
func NoDuplicateArgs(cmd *Command, args []string) error
```

NoDuplicateArgs returns an error if there are any duplicate positional args.

### NoFileCompletions

```go
func NoFileCompletions(cmd *Command, args []string, toComplete string) ([]Completion, ShellCompDirective)
```

NoFileCompletions can be used to disable file completion for commands that should
not trigger file completions.

This method satisfies [CompletionFunc].
It can be used with [Command.RegisterFlagCompletionFunc] and for [Command.ValidArgsFunction].

### OnFinalize

```go
func OnFinalize(y ...func())
```

OnFinalize sets the passed functions to be run when each command's
Execute method is terminated.

### OnInitialize

```go
func OnInitialize(y ...func())
```

OnInitialize sets the passed functions to be run when each command's
Execute method is called.

### OnlyValidArgs

```go
func OnlyValidArgs(cmd *Command, args []string) error
```

OnlyValidArgs returns an error if there are any positional args that are not in
the `ValidArgs` field of `Command`

### RangeArgs

```go
func RangeArgs(min int, max int) PositionalArgs
```

RangeArgs returns an error if the number of args is not within the expected range.

### WriteStringAndCheck

```go
func WriteStringAndCheck(b io.StringWriter, s string)
```

WriteStringAndCheck writes a string into a buffer, and checks if the error is not nil.

## Variables

### EnableCaseInsensitive

```go
EnableCaseInsensitive
```

EnableCaseInsensitive allows case-insensitive commands names. (case sensitive by default)

### EnableCommandSorting

```go
EnableCommandSorting
```

EnableCommandSorting controls sorting of the slice of commands, which is turned on by default.
To disable sorting, set it to false.

### EnablePrefixMatching

```go
EnablePrefixMatching
```

EnablePrefixMatching allows setting automatic prefix matching. Automatic prefix matching can be a dangerous thing
to automatically enable in CLI tools.
Set this to true to enable it.

### EnableTraverseRunHooks

```go
EnableTraverseRunHooks
```

EnableTraverseRunHooks executes persistent pre-run and post-run hooks from all parents.
By default this is disabled, which means only the first run hook to be found is executed.

### MousetrapDisplayDuration

```go
MousetrapDisplayDuration
```

MousetrapDisplayDuration controls how long the MousetrapHelpText message is displayed on Windows
if the CLI is started from explorer.exe. Set to 0 to wait for the return key to be pressed.
To disable the mousetrap, just set MousetrapHelpText to blank string ("").
Works only on Microsoft Windows.

### MousetrapHelpText

```go
MousetrapHelpText
```

MousetrapHelpText enables an information splash screen on Windows
if the CLI is started from explorer.exe.
To disable the mousetrap, just set this variable to blank string ("").
Works only on Microsoft Windows.

## Constants

### BashCompFilenameExt

```go
BashCompFilenameExt
```

Annotations for Bash completion.

### BashCompCustom

```go
BashCompCustom
```

Annotations for Bash completion.

### BashCompOneRequiredFlag

```go
BashCompOneRequiredFlag
```

Annotations for Bash completion.

### BashCompSubdirsInDir

```go
BashCompSubdirsInDir
```

Annotations for Bash completion.

### FlagSetByCobraAnnotation

```go
FlagSetByCobraAnnotation
```

Public API documented from the pinned Cobra source snapshot.

### CommandDisplayNameAnnotation

```go
CommandDisplayNameAnnotation
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompRequestCmd

```go
ShellCompRequestCmd
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompNoDescRequestCmd

```go
ShellCompNoDescRequestCmd
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveError

```go
ShellCompDirectiveError
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveNoSpace

```go
ShellCompDirectiveNoSpace
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveNoFileComp

```go
ShellCompDirectiveNoFileComp
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveFilterFileExt

```go
ShellCompDirectiveFilterFileExt
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveFilterDirs

```go
ShellCompDirectiveFilterDirs
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveKeepOrder

```go
ShellCompDirectiveKeepOrder
```

Public API documented from the pinned Cobra source snapshot.

### ShellCompDirectiveDefault

```go
ShellCompDirectiveDefault
```

Public API documented from the pinned Cobra source snapshot.

## Snapshot Coverage

This page was generated from `godoc.json` for package `github.com/spf13/cobra` and includes 191 public entries or methods.
