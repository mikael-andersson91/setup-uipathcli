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

The action accepts inputs to configure the **uipath** CLI for your Orchestrator
instance. The action will set the appropriate environment variables automatically.
For the full list of environment variables used by the **uipath**, see the uipathcli
[readme](https://github.com/UiPath/uipathcli#global-arguments).

```yaml
uipathcli-sample-job:
  steps:
    - name: Checkout
      id: checkout
      uses: actions/checkout@v6

    - name: Setup uipathcli
      id: setup-uipathcli
      uses: mikael-andersson91/setup-uipathcli@v2
      with:
        uipath-url: ${{ secrets.UIPATH_URL }}
        client-id: ${{ secrets.CLIENT_ID }}
        client-secret: ${{ secrets.CLIENT_SECRET }}
        tenant: ${{ secrets.TENANT }}
        organization: ${{ secrets.ORGANIZATION }}

    - id: sample-uipath-command
      run: |
        uipath orchestrator folders get
```
