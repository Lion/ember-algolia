'use strict';

const path = require('path');

module.exports = {
  name: 'ember-algolia',

  included(app) {
    this._super.included(app);
    app.import('node_modules/algoliasearch/dist/algoliasearch.js', {
      using: [
        { transformation: 'amd', as: 'algolia-search' }
      ]
    });
  },

  updateFastBootManifest(manifest) {
    const app = this._findHost();
    const pkg = require(path.join(app.project.root, 'package.json'));
    const whitelist = pkg.fastbootDependencies;

    if (!whitelist || whitelist && !~whitelist.indexOf('algoliasearch')) {
      throw new Error("[ember-algolia] algoliasearch is missing from package.json's fastbootDependencies.\nSee: https://github.com/ember-fastboot/ember-cli-fastboot#whitelisting-packages");
    }
    manifest.vendorFiles.push('ember-algolia/algoliasearch.js');
    return manifest;
  }
};
