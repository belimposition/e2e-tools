const rimraf = require('rimraf')
const path = require('path')
const chalk = require('chalk').default
const { getTestsRootDir } = require('@nitive/e2e-tools/utils')

function cleanFailureScreenshots() {
  const failureScreenshotsPath = path.join(
    getTestsRootDir(),
    'nightwatch/failure-screenshots/*.png'
  )
  rimraf.sync(failureScreenshotsPath)
}

cleanFailureScreenshots()

exports.setupHooksInternal = () => {
  before(function globalBeforeHook(browser, done) {
    global.browser = browser
    done()
  })

  beforeEach(function globalBeforeEachHook(browser, done) {
    const ctx = this

    // eslint-disable-next-line no-param-reassign
    browser.currentTest = {
      get name() {
        return ctx.test.title
      },
      module: ctx.test.file,
      group: path.dirname(ctx.test.file),
      mochaTestContext: this,
    }

    done()
  })

  afterEach(function globalAfterEachHook(browser, done) {
    if (this.currentTest.state === 'failed') {
      this.failedTest = this.currentTest
    }

    done()
  })

  after(function globalAfterHook(browser, done) {
    if (this.failedTest) {
      const suite = this.failedTest.parent
      const random = Math.random()
        .toString()
        .replace('0.', '')
      const screenshotFileName = `nightwatch/failure-screenshots/${suite.title} (${random}).png`.replace(
        /\s/g,
        '_'
      )
      browser.saveScreenshot(screenshotFileName, result => {
        if (result.status === 0) {
          console.log(
            chalk.red(
              `\nThe test has failed, screenshot of the page saved to '${screenshotFileName}'\n`
            )
          )
        } else {
          console.log(
            chalk.red(
              '\nThe test has failed, and screenshot could not be saved. Unexpected result:'
            ),
            result
          )
        }
      })
    }

    browser.session('get', session => {
      if (session.status === 0) {
        browser.end(() => done())
      } else {
        done()
      }
    })
  })
}

let warningLogged = false
global.setupHooks = () => {
  if (!warningLogged) {
    console.warn('setupHooks() больше не обязательна, её вызовы можно удалить')
    warningLogged = true
  }
}
