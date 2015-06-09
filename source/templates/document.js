var decimalStyle = require('decimal-numbering');
var flatten = require('commonform-flatten');
var paragraph = require('./paragraph');

module.exports = function(form, values) {
  return flatten(form, values).map(function(element) {
    return paragraph(element, decimalStyle);
  }).join('');
};
