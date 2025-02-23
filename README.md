# Setup uipathcli

[![GitHub Super-Linter](https://github.com/actions/javascript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/javascript-action/actions/workflows/ci.yml/badge.svg)

This action is intended to used in scenarios where you wish to install the
[uipathcli](https://github.com/UiPath/uipathcli) (not to be confused with
[UiPath CLI](https://docs.uipath.com/automation-ops/automation-cloud/latest/user-guide/about-uipath-cli),
what's up with the naming of these tools here UiPath?), to streamline working
with various UiPath APIs directly from the command line.

## Usage

After testing, you can create version tag(s) that developers can use to
reference different stable versions of your action. For more information, see
[Versioning](https://github.com/actions/toolkit/blob/main/docs/action-versioning.md)
in the GitHub Actions toolkit.

To include the action in a workflow in another repository, you can use the
`uses` syntax with the `@` symbol to reference a specific branch, tag, or commit
hash.

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Setup uipath
    id: setup-uipath
    uses: mikael-andersson91/setup-uipathcli@v1

  - id: sample-uipath-command
    run: |
      uipath orchestrator folders get
```
