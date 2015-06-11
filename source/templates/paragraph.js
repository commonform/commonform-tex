var escape = require('escape-latex');
var run = require('./run');

module.exports = function(paragraph, numberStyle) {
  var number = (
    paragraph.hasOwnProperty('numbering') ?
      paragraph.numbering :
      ''
  );
  var conspicuous = paragraph.hasOwnProperty('conspicuous');
  return (
    '\\noindent%\n' +
    '\\hskip ' + (paragraph.depth - 1) + '\\parindent%\n' +
    (
      number ?
        escape(numberStyle(number)) + '. %\n' :
        ''
    ) +
    (
      paragraph.hasOwnProperty('heading') ?
        '{\\bf ' + escape(paragraph.heading) + '}. %\n' :
        ''
    ) +
    paragraph.content.map(function(element) {
      return run(element, numberStyle, conspicuous);
    }).join('') +
    '\n\n'
  );
};
