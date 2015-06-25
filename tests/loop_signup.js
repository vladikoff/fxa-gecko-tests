var Promise = require('promise');
var expect = require('chai').expect;
marionette.plugin('helper', require('marionette-helper'));
marionette('loop', function() {


  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false,
      'browser.uitour.enabled': false,
      'startup.homepage_welcome_url': 'about:blank',
      'browser.feeds.showFirstRunUI': false,
      'devtools.chrome.enabled': true,
      'devtools.debugger.remote-enabled': true
    }
  });

  var url;

  suiteSetup(function() {
  });

  setup(function() {
    // client.goUrl('about:blank');
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
