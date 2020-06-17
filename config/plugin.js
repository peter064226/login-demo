'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// exports.validate = {
//   enable: true,
//   package: 'egg-validate',
// };
module.exports.passport = {
  enable: true,
  package: 'egg-passport',
};

module.exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};