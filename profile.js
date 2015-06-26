module.exports = {
  profile: {
    prefs: {
      'browser.feeds.showFirstRunUI': false,
      'browser.shell.checkDefaultBrowser': false,
      'browser.uitour.enabled': false,
      'devtools.chrome.enabled': true,
      'devtools.debugger.remote-enabled': true,
      'startup.homepage_welcome_url': 'about:blank'
    }
  },
  desiredCapabilities: {
    raisesAccessibilityExceptions: false
  }
};
