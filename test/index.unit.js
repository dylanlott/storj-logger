'use strict';

const test = require('tape');
const logger = require('..');
const config = {
  name: 'StorjLogger'
}
let log;

test('smoke test', function(t) {
  log = new logger({
    name: 'smoketest',
    level: 'debug',
    src: true
  }); 
 
  const test = log.info('smoke test');
  t.comment('TEST COMMENT'); 
  t.assert(log instanceof logger);
  t.end();
});

test('#info', function(t) {
  log = logger(config);
  log.info('smoke test log');

  t.end();
});

test('#debug', function(t) {
  log = logger(config);
  const message = 'Must provide message to log.';
  t.throw(log.debug(), message);
});


