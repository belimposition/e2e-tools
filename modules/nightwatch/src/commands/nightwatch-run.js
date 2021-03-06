const isCI = require('is-ci')
const { getConfig } = require('@csssr/e2e-tools/utils')
const packageName = require('../../package.json').name

function createArgsArrayFromMap(argsMap) {
  return Object.keys(argsMap)
    .map(arg => {
      const value = argsMap[arg]
      if (!value) return []

      if (Array.isArray(value)) {
        return value.map(v => [`--${arg}`, v]).reduce((acc, x) => acc.concat(x), [])
      }

      return [`--${arg}`, value]
    })
    .reduce((acc, x) => acc.concat(x), [])
}

/**
 * @returns {import('yargs').CommandModule | undefined}
 */
const addNightwatchRunCommand = context => {
  const config = getConfig()
  const browsersConfig = config.tools[packageName].browsers

  if (!browsersConfig) {
    return undefined
  }

  const defaultBrowser =
    process.env.BROWSER || Object.entries(browsersConfig).find(([_, browser]) => browser.default)[0]
  const browsers = Object.keys(browsersConfig)

  return {
    aliases: ['nightwatch', 'nw'],
    builder: {
      browser: {
        alias: 'b',
        describe: 'Browser, defined in your e2e-tools.json file',
        default: defaultBrowser,
        choices: browsers,
      },
      test: {
        describe: 'Test file',
      },
      publishResults: {
        boolean: true,
        default: isCI,
        describe:
          'Publish test run results to TestRail. This option is on by default in most popular CI environments',
      },
    },
    command: 'nightwatch:run',
    describe: 'Run nightwatch',
    handler(args) {
      context.spawnSync('yarn', ['install', '--frozen-lockfile'], { stdio: 'inherit' })

      const result = context.spawnSync(
        'yarn',
        [
          'nightwatch',
          ...createArgsArrayFromMap({
            env: args.browser,
            test: args.test,
            config: require.resolve('@csssr/e2e-tools-nightwatch/config'),
            publishResults: args.publishResults,
          }),
        ],
        { stdio: 'inherit' }
      )

      if (result.status) {
        process.exit(result.status)
      }
    },
  }
}

module.exports = { addNightwatchRunCommand }
