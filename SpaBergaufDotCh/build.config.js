'use strict';

var outDir = 'build/';
var serverStaticDir = '../server/static/';

module.exports = {
  host: 'localhost',
  port: 3000,

  // app directories
  appDir: 'app',

  // unit test directories
  unitTestDir: 'app',

  // build test dir
  buildTestDir: outDir + 'test/',

  // build directories
  buildDir: outDir + 'app/',
  buildCss: outDir + 'app/css/',
  buildFonts: outDir + 'app/fonts/',
  buildImages: outDir + 'app/images/',
  buildJs: outDir + 'app/js/',
  extDir: outDir + 'app/vendor/',
  extCss: outDir + 'app/vendor/css/',
  extFonts: outDir + 'app/vendor/fonts/',
  extJs: outDir + 'app/vendor/js/',

  // static server directories
  serverStaticDir: serverStaticDir,
  staticCss: serverStaticDir + 'css/',
  staticFonts: serverStaticDir + 'fonts/',
  staticImages: serverStaticDir + 'images/',
  staticJs: serverStaticDir + 'js/',
  staticextDir: serverStaticDir + 'vendor/',
  staticextCss: serverStaticDir + 'vendor/css/',
  staticextFonts: serverStaticDir + 'vendor/fonts/',
  staticextJs: serverStaticDir + 'vendor/js/',
  staticData: serverStaticDir + 'data/'
};
