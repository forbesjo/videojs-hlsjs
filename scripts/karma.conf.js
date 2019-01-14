const generate = require('videojs-generate-karma-config');

module.exports = function(config) {

  // see https://github.com/videojs/videojs-generate-karma-config
  // for options
  const options = {
    preferHeadless: false
  };

  config = generate(config, options);

  // any other custom stuff not supported by options here!
  config.client = {
    clearContext: false,
    qunit: {
      showUI: true,
      testTimeout: 30000
    }
  };
};
