var Promise = require('promise');

var profile = require('../profile');

suite('fxa test', function () {
  marionette.plugin('helper', require('marionette-helper'));

  marionette('about_accounts signup', function () {
    var client = marionette.client(profile);

    suiteSetup(function() {
    });

    setup(function() {
    });

    suiteTeardown(function() {
    });

    test('sign up', function() {
      client.goUrl('about:accounts')
      client.findElement('#buttonGetStarted').click()

      // client.setContext('content');

      // console.log(client.pageSource())
      // client.switchToFrame()

      client.waitFor(function () {
        return client.findElement('#remote');
      })

      try {
        var el = client.findElement('#remote')
        client.switchToFrame(el)
        console.log('yay')
      } catch (err) {
        console.error(err);
        console.error('errr')
      }

      console.log('post')

      // client.waitFor(function () {
      //   try {
      //     return client.findElement('#submit-btn')
      //   } catch (err) {
      //     console.log(err)
      //     console.log(new Date())
      //     return false;
      //   }
      // })

      // var bbb = client.findElement('#submit-btn')
      // console.log(bbb)

      // client.helper.waitForElement('#submit-btn').click()

      return sleep(200000);
    });
  });

  function sleep(millis) {
    return new Promise(function(resolve) {
      setTimeout(resolve, millis);
    });
  }
});