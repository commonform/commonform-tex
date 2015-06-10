commonform-tex
==============

Render Common Forms in TeX.

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
