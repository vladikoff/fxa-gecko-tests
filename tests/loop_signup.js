var Promise = require('promise');
var expect = require('chai').expect;
marionette.plugin('helper', require('marionette-helper'));
marionette('loop', function() {


  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false,
      'browser.uitour.enabled': false
    }
  });

  var url;

  suiteSetup(function() {
  });

  setup(function() {
    //client.goUrl('http//127.0.0.1:3030');
  });

  suiteTeardown(function() {
  });

  test('clicking on hello icon', function() {
    client.setContext('chrome');
    //client.switchToFrame();


    client
      .findElement(':root')
      .findElement('#loop-button')
      .click()
      //.switchToFrame('chat-frame')

    client.findElement('#downloads-button')
      .click()


/*
    client
      .switchToFrame('chatbox')

    client.findElement('.signin-link a')
      .click()*/

    // Wait around for a bit to see what happens when we click hello.
    return sleep(200000);
  });
});

function sleep(millis) {
  return new Promise(function(resolve) {
    setTimeout(resolve, millis);
  });
}