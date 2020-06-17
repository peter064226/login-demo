/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592364869761_6885';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.passportGithub = {
    key: '3a1b7a190d2d66db58b8',
    secret: '4bc5a6a8164f87d912c7567c357e4727ae548d67',
    callbackURL: '/api/github/callback',
    proxy: true,
  };

  config.mongoose = {
    client: {
      url: 'mongodb://example:example@localhost/example',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    },
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };

  return {
    ...config,
    ...userConfig,
  };
};
