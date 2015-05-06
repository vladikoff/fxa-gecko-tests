marionette('github.com', function() {
  var github = 'http://github.com';

  // no options are required by default.
  var client = marionette.client();

  setup(function() {
    client.goUrl(github);
  });

  test('logging into github', function() {
    client.executeScript(function() {
        alert(document.title);
        console.log(document.title);
      })
  });
})
