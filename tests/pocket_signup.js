/*eslint-env node, mocha */
/*global marionette */

var Promise = require('promise')
var expect = require('chai').expect
var helper = require('marionette-helper')

marionette.plugin('helper', helper)
marionette('pocket', function () {
  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false,
      'browser.uitour.enabled': false
    }
  })

  suiteSetup(function () {
    console.log('suite set up')
  })

  setup(function () {
    // client.goUrl('http//127.0.0.1:3030');
    console.log('test set up')
  })

  suiteTeardown(function () {
    console.log('suite tear down')
  })

  test('clicking on pocket icon', function () {
    client.setContext('chrome')
    // client.switchToFrame()

    console.log(client.session.browserName, '-->')

    expect(client.session.browserName).to.equal('Firefox')

    client
      .findElement(':root')
      .findElement('#pocket-button')
      .click()

    client
      .findElement(':root')
      .waitForElement('.signup-btn-firefox')
      .findElement('.signup-btn-firefox')
      .click()
      .then(function (data) {
        console.log('herrr')
      })

    return sleep(15000)
  })
})

function sleep (millis) {
  return new Promise(function (resolve) {
    setTimeout(resolve, millis)
  })
}
