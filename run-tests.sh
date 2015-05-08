if [ -z "$RUNTIME" ]; then
  RUNTIME=/Applications/Firefox.app/Contents/MacOS/firefox-bin
fi

node_modules/.bin/marionette-mocha \
  --host marionette-firefox-host \
  --runtime $RUNTIME \
  --timeout 60s \
  tests/basic.js
