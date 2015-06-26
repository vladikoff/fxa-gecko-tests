var Promise = require('promise');

var profile = require('../profile');

suite('fxa test', function () {
  marionette.plugin('helper', require('marionette-helper'));
  // marionette.plugin('forms')

  marionette('about_accounts signup', function () {
    var client = marionette.client(profile);
    

    suiteSetup(function() {
    });

    setup(function() {
      client.setSearchTimeout(10000)
    });

    suiteTeardown(function() {
    });

    test('sign up', function() {
      client.goUrl('about:accounts') // https://latest.dev.lcip.org/signup')

      // ---
      client.findElement('#buttonGetStarted').click()
      // ---

      var iframe = client.findElement('#remote');
      client.switchToFrame(iframe);

      client.findElement('#submit-btn').click()
      client.findElement('.email').sendKeys(['foo@fizz.buzz'])
      client.findElement('#password').sendKeys(['12345678'])
      client
        .findElement('#fxa-age-year')
        .sendKeys(['1990'])


      // client.findElement('#buttonGetStarted').click()

      // client.setContext('content');

      // console.log(client.pageSource())
      // client.switchToFrame()

      // client.waitFor(function () {
      //   return client.findElement('#remote');
      // })

      // try {
      //   el = client.findElement('#remote')
      //   client.switchToFrame(el)
      //   console.log('yay :+1:')
      // } catch (err) {
      //   console.error(">>>", err);
      //   console.error('errr', new Date())
      // }

      // console.log('post')
      // // client
      // //   .findElement('.email')
      // //   .sendKeys(['peter@foo'])

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