'use strict';


var data = require('./data.json');

function escapeRegexp(str) {
  return str;
}

var replaceRegExps = Object.keys(data).map(escapeRegexp).map(escapedNeedle => { return RegExp(escapedNeedle, 'g'); });

function replace_fn(match) {
  return data[match];
}

function unhomoglyph(str) {
  let s = str;
  replaceRegExps.forEach(regexp => {
    s = s.replace(regexp, replace_fn);
  });
  return s;
}

module.exports = unhomoglyph;
