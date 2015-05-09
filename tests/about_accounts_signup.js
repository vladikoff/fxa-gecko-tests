var Promise = require('promise');

suite('fxa test', function() {

  marionette.plugin('helper', require('marionette-helper'));

  marionette('about_accounts signup', function() {
    var client = marionette.client({
      prefs: {
        'browser.shell.checkDefaultBrowser': false,
        'browser.uitour.enabled': false
      }
    });

    suiteSetup(function() {
    });

    setup(function() {
    });

    suiteTeardown(function() {
    });

    test('sign up', function() {

      client.goUrl('about:accounts')
      client.findElement('#buttonGetStarted').click()
      client.helper.waitForElement('#submit-btn').click()

      return sleep(200000);
    });
  });

  function sleep(millis) {
    return new Promise(function(resolve) {
      setTimeout(resolve, millis);
    });
  }
});