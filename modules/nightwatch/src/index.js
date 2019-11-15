const path = require('path')
const {
  getConfig,
  updateJsonFile,
  updateToolConfig,
  getTestsRootDir,
  getParentProjectPackageJsonSafe,
  validatePackageName,
  createFilesFromTemplates,
  getProjectRootDir,
} = require('@csssr/e2e-tools/utils')
const packageName = require('../package.json').name
const { getCommands } = require('./commands')
const { updateVsCodeTasks } = require('./upgrades/vscode-tasks')
const { upgradeRemoteBrowsersConfig } = require('./upgrades/upgrade-remote-browsers-config')

function createToolConfig() {
  return {
    browsers: {
      local_chrome: {
        default: true,
        type: 'webdriver',
        desiredCapabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: ['--window-size=1200,800'],
          },
        },
        globals: {
          skipScreenshotAssertions: true,
        },
      },
      remote_chrome: {
        remote: true,
        type: 'selenium',
        host: 'selenium-linux.csssr.ru',

        basicAuth: {
          credentialsId: 'chromedriver',
          username_env: 'CHROMEDRIVER_USERNAME',
          password_env: 'CHROMEDRIVER_PASSWORD',
        },

        desiredCapabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            w3c: false,
            args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1200,800'],
          },
        },
        globals: { skipScreenshotAssertions: false },
      },
    },
  }
}

function normalizeUrl(input) {
  if (input.startsWith('http')) {
    return input
  }

  return `http://${input}`
}

function falseToError(error, func) {
  return str => (func(str) ? true : error)
}

async function initScript(ctx) {
  const parentProjectPackageJson = getParentProjectPackageJsonSafe(ctx) || {}

  const config = getConfig(ctx)

  const launchUrl = await ctx.prompt({
    type: 'input',
    name: 'launchUrl',
    default: config.defaultLaunchUrl,
    message: 'Адрес стенда по умолчанию',
  })

  const projectName = await ctx.prompt({
    type: 'input',
    name: 'projectName',
    default: config.projectName || parentProjectPackageJson.name,
    message: 'Название проекта (маленькими буквами без пробелов)',
    validate: falseToError('Навалидное название пакета', validatePackageName),
  })

  const configNewFields = {
    projectName,
    defaultLaunchUrl: normalizeUrl(launchUrl),
  }

  updateJsonFile(ctx, {
    filePath: path.join(getTestsRootDir(ctx), 'e2e-tools.json'),
    update(prevConfig) {
      return {
        ...prevConfig,
        ...configNewFields,
      }
    },
  })

  createFilesFromTemplates(ctx, {
    templatesGlob: '**/*.hbs',
    templatesData: {
      config: { ...config, ...configNewFields },
    },
    templatesRoot: path.join(__dirname, '../templates'),
    destinationRoot: getProjectRootDir(ctx),
  })

  updateToolConfig(ctx, packageName, createToolConfig)

  updateVsCodeTasks(ctx)
}

function upgrade(ctx) {
  createFilesFromTemplates(ctx, {
    templatesGlob: '**/*.autogenerated.hbs',
    templatesData: { config: getConfig() },
    templatesRoot: path.join(__dirname, '../templates'),
    destinationRoot: getProjectRootDir(ctx),
  })

  updateVsCodeTasks(ctx)
  upgradeRemoteBrowsersConfig(ctx)
}

module.exports = {
  getCommands,
  initScript,
  upgrade,
}
