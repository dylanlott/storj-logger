'use strict';
const bunyan = require('bunyan');

function StorjLogger (config) {
  if (!(this instanceof StorjLogger)) {
    return new StorjLogger(config);
  }

  // configure defaults
  var defaults = {
    name: 'storj-logger',
    src: true,
    level: 'info'
  }

  const _config = Object.assign(defaults, config); 
  console.log(`passing bunyan %j`, _config);
  this.log = bunyan.createLogger(_config);
}

StorjLogger.prototype.levels = function(level) {
  if (!level) {
    throw Error('Must provide level to log.');
  }
  this.log.levels(level);
  return level;
}

StorjLogger.prototype.trace = function(args) {
  if (!args) {
    return this.log.trace('No message provided.');
  }
  return this.log.trace(arguments);
}

StorjLogger.prototype.debug = function(args) {
  if (!args) {
    return this.log.error('No message provided.');
  }
  return this.log.debug(arguments);
}

StorjLogger.prototype.info = function(args) {
  if (!args) {
    return this.log.error('No message provided.');
  }
  return this.log.info(arguments);
}

StorjLogger.prototype.warn = function(args) {
  if (!args) {
    return this.log.error('No message provided.');
  }
  return this.log.warn(arguments);
}

StorjLogger.prototype.error = function(args) {
  if (!args) {
    return this.log.error('No message provided.');
  }
  return this.log.error(arguments);
}

StorjLogger.prototype.error = function(args) {
  if (!args) {
    return this.log.error('No message provided.');
  }
  return this.log.fatal(arguments);
}

module.exports = StorjLogger;
