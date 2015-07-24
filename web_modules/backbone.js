// Backbone from NPM doesn't have jQuery set, so we're setting it.
// web_modules is before node_modules in webpack's resolve() path, so this will get loaded

var Backbone = require('../node_modules/backbone');
Backbone.$ = require('jquery');
module.exports = Backbone;
