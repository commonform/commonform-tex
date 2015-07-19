commonform-tex
==============

Render Common Forms in TeX.

```javascript
var tex = require('commonform-tex');

var form = {
  content: [
    { heading: 'IP',
      form: {
        content: ['An IP clause'] } },
    { heading: 'Survival',
      form: {
        content: [{reference: 'IP'}] } } ] };

var output = [
  '\\noindent%',
  '\\hskip 1\\parindent%',
  '1. %',
  '{\\bf IP}. %',
  'An IP clause',
  '',
  '\\noindent%',
  '\\hskip 1\\parindent%',
  '2. %',
  '{\\bf Survival}. %',
  'Section 1 (IP)'
].join('\n');

tex(form, {}); // => output
```

Indentation
-----------
The package uses twice the standard `\parindent` dimension to indent nested provisions.

Bold-Italic Type
----------------
The package outputs conspicuous type with a `\bi` macro. To define `\bi` to set type both bold and italic, try:

```tex
\font\tenbi=cmbxti10
\newfam\bifam \def\bi{\fam\bifam\tenbi} \textfont\bifam=\tenbi
```
