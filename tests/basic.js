marionette('github.com', function() {
  var github = 'http://github.com';

  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false
    }
  });

  setup(function() {
    client.goUrl(github);
  });

  test('logging into github', function() {
    // do stuff with the client
  });
});
