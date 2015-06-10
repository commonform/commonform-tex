var escape = require('escape-latex');
var quotes = require('../replace-quotes');

var preprocess = function(input) {
  return escape(quotes(input));
};

var blankLine = (
  '{\\leavevmode \\vbox{\\hrule width5\\parindent}}'
);

module.exports = function run(element, numberStyle, conspicuous) {
  if (typeof element === 'string') {
    if (conspicuous) {
      return '{\\bf\\it ' + preprocess(element) + '}';
    } else {
      return preprocess(element);
    }
  } else if (element.hasOwnProperty('definition')) {
    return '``{\\bf ' + element.definition + '}\'\'';
  } else if (element.hasOwnProperty('blank')) {
    return blankLine + ' (' + preprocess(element.blank) + ')';
  } else if (element.hasOwnProperty('reference')) {
    var reference = element.reference;
    if (
      element.hasOwnProperty('broken') ||
      element.hasOwnProperty('ambiguous')
    ) {
      return (
        blankLine +
        ' (reference to ``' + preprocess(element.reference) + '\'\')'
      );
    } else {
      return preprocess('Section ' + numberStyle(reference));
    }
  } else {
    throw new Error('Invalid type: ' + JSON.stringify(element));
  }
};
