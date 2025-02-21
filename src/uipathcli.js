import os from 'os'
import * as core from '@actions/core'

/**
 *
 * @returns {string} The download URL for the uipathcli tool, dependent on OS and architecture
 */
export async function getDownloadUrl() {
  core.info(`OS: ${os.type()} Platform: ${os.platform()} Arch: ${os.arch()}`)
  let arch = os.arch()
  let platform = os.platform()
  if (platform === 'linux' && arch === 'x64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-linux-amd64.tar.gz'
  }
  if (platform === 'win32' && arch === 'x64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-windows-amd64.zip'
  }
  if (platform === 'darwin' && arch === 'x64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-darwin-amd64.tar.gz'
  }
  if (platform === 'linux' && arch === 'arm64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-linux-arm64.tar.gz'
  }
  if (platform === 'win32' && arch === 'arm64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-windows-arm64.zip'
  }
  if (platform === 'darwin' && arch === 'arm64') {
    return 'https://github.com/UiPath/uipathcli/releases/latest/download/uipathcli-darwin-arm64.tar.gz'
  }

  throw new Error(`Unsupported platform/architecture: ${platform}/${arch}`)
}
