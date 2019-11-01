(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"styles-formatting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#styles-formatting","aria-hidden":"true"}},[t._v("#")]),t._v(" Styles Formatting")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#font"}},[t._v("Font")])]),n("li",[n("a",{attrs:{href:"#fill"}},[t._v("Fill")])]),n("li",[n("a",{attrs:{href:"#border"}},[t._v("Border")])]),n("li",[n("a",{attrs:{href:"#alignment"}},[t._v("Alignment")])]),n("li",[n("a",{attrs:{href:"#number-format"}},[t._v("Number Format")])]),n("li",[n("a",{attrs:{href:"#protection"}},[t._v("Protection")])])])]),n("p"),t._v(" "),n("p",[t._v("Styles can be defined through special type - general type for all available styles. But information that will be using to style object, depends on usage, e.g. to style cells everything will be use, to style rich texts - only font information.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create a new styles")]),t._v("\n\tss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff0000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//update styles")]),t._v("\n\tss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Border"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#009000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Border"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BorderStyleMedium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Modify Styles")]),t._v(" "),n("p",[t._v("While you can modify created styles, you should keep in mind, that modifying will work only before applying styles to cell and any modifications after applying, will create new styles.")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\tss "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//font will be `bold`")]),t._v("\n\tsheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CellByRef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetStyles")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//modify styles")]),t._v("\n\tss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff0000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//`A2` - will be `bold and red` ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//`A1` - will be only `bold` and without color")]),t._v("\n\tsheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CellByRef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetStyles")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"font"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#font","aria-hidden":"true"}},[t._v("#")]),t._v(" Font")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",[t._v("Excel can only display installed fonts, that's why using standard fonts(e.g.: "),n("code",[t._v("Calibri")]),t._v(", "),n("code",[t._v("Times New Roman")]),t._v(" or "),n("code",[t._v("Courier New")]),t._v(") is highly recommended.")])]),t._v(" "),n("div",{staticClass:"note custom-block"},[n("p",[t._v("The default font for cell is "),n("code",[t._v("Calibri")]),t._v(" (Excel 2007+)")])]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" code\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/plandem/xlsx/format/styles"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example_stylesFont")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//all possible settings for font")]),t._v("\n\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Courier New"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Italic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Strikeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Superscript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subscript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Shadow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Condense"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extend"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Family")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontFamilyRoman"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FF0000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Underline")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UnderlineTypeSingle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontSchemeMinor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tstyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Font"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Charset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("styles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontCharsetMAC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"note custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("Predefined values")]),t._v(" "),n("p",[t._v("Xlsx2Go defined all built-in values to use for styling. For more information, check "),n("a",{attrs:{href:"https://godoc.org/github.com/plandem/xlsx/format/styles#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[t._v("API documentation"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"fill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fill","aria-hidden":"true"}},[t._v("#")]),t._v(" Fill")]),t._v(" "),n("h3",{attrs:{id:"border"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#border","aria-hidden":"true"}},[t._v("#")]),t._v(" Border")]),t._v(" "),n("h3",{attrs:{id:"alignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alignment","aria-hidden":"true"}},[t._v("#")]),t._v(" Alignment")]),t._v(" "),n("h3",{attrs:{id:"number-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-format","aria-hidden":"true"}},[t._v("#")]),t._v(" Number Format")]),t._v(" "),n("h3",{attrs:{id:"protection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protection","aria-hidden":"true"}},[t._v("#")]),t._v(" Protection")])])},[],!1,null,null,null);s.default=e.exports}}]);