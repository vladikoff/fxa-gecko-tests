var Promise = require('promise');
var expect = require('chai').expect;

var profile = require('../profile');

marionette.plugin('helper', require('marionette-helper'));
marionette('loop', function() {
  var client = marionette.client(profile);

  suiteSetup(function() {
  });

  setup(function() {
    client.setSearchTimeout(10000)
  });

  suiteTeardown(function() {
  });

  test('clicking on hello icon', function() {
    client.setContext('chrome');

    client
      .findElement(':root')
      .findElement('#pocket-button')
      .click()


    client.helper.wait(2000)

    var iframe = client.helper.waitForElement('#pocket-panel-iframe') // '#PanelUI-popup'
    console.log('??', iframe)

    console.log('tag? %s', iframe.tagName());
    console.log('displayed? %s', iframe.displayed())

    console.log('\n\n\n\n\n\n\n\n\n')
    client.helper.wait(2000)
    client.switchToFrame(iframe);

    console.log('begin sleep: %s', new Date())
    client.helper.wait(4000)
    console.log('waking up: %s', new Date())

    client.findElement('.signup-btn-firefox').click();

    // Wait around for a bit to see what happens when we click hello.
    return sleep(500000);
  });
});

function sleep(millis) {
  return new Promise(function(resolve) {
    setTimeout(resolve, millis);
  });
}
