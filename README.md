# Setup uipathcli

[![GitHub Super-Linter](https://github.com/actions/javascript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/javascript-action/actions/workflows/ci.yml/badge.svg)

This action is intended to used in scenarios where you wish to install the
[uipathcli](https://github.com/UiPath/uipathcli) (not to be confused with
[UiPath CLI](https://docs.uipath.com/automation-ops/automation-cloud/latest/user-guide/about-uipath-cli),
which you can setup with
[Mikael-RnD/setup-uipath](https://github.com/Mikael-RnD/setup-uipath)), what's
up with the naming of these tools here UiPath?), to streamline working with
various UiPath APIs directly from the command line.

## Usage

The below sample runs a job where the repository is checked out to the runner,
the **setup-uipathcli** actions is used and the **uipath** cli is used to list
folders on the Orchestrator instance.

In order to configure the **uipath** CLI to your Orchestrator instance, you must
setup the environment variables similar to the example below. For the full list
of environment variables used by the tool, see the uipathcli
[readme](https://github.com/UiPath/uipathcli#global-arguments).

```yaml
uipathcli-sample-job:
  env:
    UIPATH_CLIENT_ID: ${{ secrets.CLIENT_ID }}
    UIPATH_CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
    UIPATH_ORGANIZATION: ${{ secrets.ORGANIZATION }}
    UIPATH_TENANT: ${{ secrets.TENANT }}
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
