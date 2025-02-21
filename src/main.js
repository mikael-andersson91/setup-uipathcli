import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import { getDownloadUrl } from './uipathcli'
import os from 'os'

/**
 * The main function for the action.
 *
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    const uipathUri = core.getInput('uipath-uri')
    const tenant = core.getInput('tenant')
    const clientId = core.getInput('client-id')
    const clientSecret = core.getInput('client-secret')
    const identityUrl = core.getInput('identity-url')
    const organization = core.getInput('organization')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    const downloadUrl = await getDownloadUrl()
    core.info(`Downloading uipathcli from ${downloadUrl}`)

    const cliPath = await tc.downloadTool(downloadUrl)
    var downloadPath = ''

    if (os.type() != 'windows') {
      core.info('Extracting tar.gz')
      downloadPath = await tc.extractTar(cliPath)
      core.addPath(downloadPath)
    } else {
      core.info('Extracting zip')
      downloadPath = await tc.extractZip(cliPath)
      core.addPath(downloadPath)
    }
    core.info(`uipathcli extracted to ${downloadPath} and added to PATH`)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
