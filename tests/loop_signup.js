var Promise = require('promise');
var expect = require('chai').expect;
var profile = require('../profile');

marionette.plugin('helper', require('marionette-helper'));
marionette('loop', function() {
  var client = marionette.client(profile);

  suiteSetup(function() {
  });

  setup(function() {
  });

  suiteTeardown(function() {
  });

  test('clicking on hello icon', function() {
    console.log('change context');
    client.setContext('chrome');
    //client.switchToFrame();

    console.log('click loop button');
    client
      .findElement(':root')
      .findElement('#loop-button')
      .click()

    //client
    //  .findElement('#loop-notification-panel')

    client.waitFor(function () {
      return client.findElement('#loop-button')
      // client.findElement('#fte-button');
    });

    client.waitFor(function () {
      return client.findElement('#loop-notification-panel');
    });

    var loopDoc = client.findElement('#loop-panel-iframe');//.children[0].contentDocument;

    console.log(loopDoc);

    // client.switchToFrame() // 'loop-panel-iframe'); //, {focus: true})
    // console.log(client.pageSource())

    client.waitFor(function () {
      return client.findElement('#fte-button');
    });

      //.findElement('#fte-button')
      //.click()
      //.switchToFrame('chat-frame')

    console.log('clicked loop button');

    client.findElement('#downloads-button')
      //.click()


/*
    client
      .switchToFrame('chatbox')

    client.findElement('.signin-link a')
      .click()*/

    // Wait around for a bit to see what happens when we click hello.
    return sleep(50000000);
  });
});

function sleep(millis) {
  return new Promise(function(resolve) {
    setTimeout(resolve, millis);
  });
}
