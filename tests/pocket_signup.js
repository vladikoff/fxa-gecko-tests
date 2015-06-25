/*eslint-env node, mocha */
/*global marionette */

var Promise = require('promise')
var expect = require('chai').expect
var helper = require('marionette-helper')

var profile = require('../profile')

marionette.plugin('helper', helper)
marionette('pocket', function () {
  var client = marionette.client(profile)

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

    expect(client.session.browserName).to.equal('Firefox')

    client
      .findElement(':root')
      .findElement('#pocket-button')
      .click()

    console.dir(client.getWindowType())

    client
      .findElement(':root')
      .waitFor(function () {
        client.findElement('.signup-btn-firefox')
      })
      .click()

    return sleep(15000)
  })
})

function sleep (millis) {
  return new Promise(function (resolve) {
    setTimeout(resolve, millis)
  })
}
