/*eslint-env node, mocha */
/*global marionette */

var chai = require('chai')
var helper = require('marionette-helper')
var restmail = require('restmail-client');

var expect = chai.expect

marionette.plugin('helper', helper)
marionette('getpocket.com', function () {
  const SIGNUP_URL = 'https://getpocket.com/ff_signup'

  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false,
      'browser.uitour.enabled': false
    }
  })
  var email

  setup(function () {
    email = randomEmail()
    client.goUrl(SIGNUP_URL)
  })

  test('sign up', function (done) {
    const HEADER_TEXT = 'Create a Firefox Account\nto continue to Pocket'
    const PERMISSION_TEXT = 'Pocket would like to know…'
    const SUBMIT_TEXT = 'Sign up'
    const VERIFICATION_TEXT = 'A verification link has been sent to '

    // Wait for page load...
    waitForElement(client, '#fxa-signup-header')

    expect(client.findElement('#fxa-signup-header').text()).to.equal(HEADER_TEXT)
    expect(client.findElement('#submit-btn').text()).to.equal(SUBMIT_TEXT)

    client
      .findElement('.email')
      .sendKeys([email])

    client
      .findElement('#password')
      .sendKeys(['password'])

    client
      .findElement('.show-password-label')
      .click()

    client
      .findElement('#fxa-age-year')
      .sendKeys(['1990'])

    client
      .findElement('#submit-btn')
      .click()

    // Wait for page refresh...
    waitForElement(client, '#fxa-permissions-header')

    expect(client.findElement('#fxa-permissions-header').text()).to.equal(PERMISSION_TEXT)
    expect(client.findElement('#permissions').text()).to.equal('Email\n' + email)

    client
      .findElement('#proceed')
      .click()

    // Wait for page refresh...
    waitForElement(client, '.verification-email-message')

    expect(client.findElement('.verification-email-message').text()).to.equal(VERIFICATION_TEXT + email)

    // FINISHED!
    console.log('success!!!', email)

    restmail(email).then(function (messages) {
      messages.forEach(function (message) {
        var xlink = message.headers['x-link']
        if (xlink) {
          client.goUrl(xlink)
        }
      })
    }).then(function () {
      setTimeout(function () {
        // Wait for page refresh.
        waitForElement(client, '#password')

        client
          .findElement('#password')
          .sendKeys(['password'])

        client
          .findElement('input.password-btn-add')
          .click()

        waitForElement(client, '.gsf_sendtips')

        console.log('here?')

        client
          .findElement('.gsf_sendtips')
          .click()

          console.log('aa')

        client
          .findElement('.button')
          .click()

        console.log('bb')

        waitForElement(client, '.button_container')

        console.log('cc')

        client
          .findElement('.button')
          .click()

        setTimeout(done, 10000)
      }, 5000)
    }).catch(function (err) {
      console.error(err)
      done(err)
    })
  })
})

// A verification link has been sent to test0.30597378546372056@restmail.net

function randomEmail (domain) {
  domain = domain || 'restmail.net'
  return ('test' + Math.random() + '@' + domain).trim()
}

function waitForElement (client, el) {
  client.waitFor(function () {
    try {
      return client.findElement(el)
    } catch (err) {
      return false
    }
  })
}
