(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"入门less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门less","aria-hidden":"true"}},[s._v("#")]),s._v(" 入门less")]),a("h2",{attrs:{id:"基本要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本要素","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本要素")]),a("ul",[a("li",[s._v("变量（variables）")]),a("li",[s._v("混合（mixins）")]),a("li",[s._v("参数混合（parametric mixins）\n"),a("ul",[a("li",[s._v("参数混合逻辑控制（mixins guards）")])])]),a("li",[s._v("嵌套（nest rules）")])]),a("h2",{attrs:{id:"变量的使用（varilables）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的使用（varilables）","aria-hidden":"true"}},[s._v("#")]),s._v(" 变量的使用（varilables）")]),a("p",[s._v("使用关键字**@**+自定义标识符，它通常用来代替一个重复用到的样式属性值")]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("        "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@header-bg")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n        "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@header-height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@header-bg")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@header-height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n        div")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #ff0000"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   \n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"混合的使用（mixins）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合的使用（mixins）","aria-hidden":"true"}},[s._v("#")]),s._v(" 混合的使用（mixins）")]),a("pre",[a("code",[s._v("混合的使用，是将定义好的类名直接整体移入到调用的地方，相当于在调用处，新建一个样式块。\n这种方法的使用，在定义混合的时候没用加上（），所以在编译后，依旧会保留相关的类定义 \n")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("    "),a("span",{attrs:{class:"token selector"}},[s._v("#定义两个不带小括号混合\n        .fl")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".fr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#定义两个调用\n        .left")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ."),a("span",{attrs:{class:"token function"}},[s._v("fl")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ."),a("span",{attrs:{class:"token function"}},[s._v("fr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n        .fl")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".fr")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("下面这种，通过在定义混合的时候加上（），可以在编译后，不保留相关的类定义")]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("     "),a("span",{attrs:{class:"token selector"}},[s._v("#定义两个带小括号的混合\n        .fl()")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".fr()")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token selector"}},[s._v("、\n     #定义两个调用\n        .left")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ."),a("span",{attrs:{class:"token function"}},[s._v("fl")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ."),a("span",{attrs:{class:"token function"}},[s._v("fr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{attrs:{class:"token selector"}},[s._v("#定义两个调用\n        .left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"参数混合（parametric-mixins）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数混合（parametric-mixins）","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数混合（parametric_mixins）")]),a("pre",[a("code",[s._v("参数混合的目的是：可以灵活的自定义样式值，它有点类似于变量加混合的结合用法\n")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("   "),a("span",{attrs:{class:"token selector"}},[s._v("#定义带小括号的参数混合，并在小括号中使用变量（同时可以设置参数值）\n        .fl()")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".fr()")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                ."),a("span",{attrs:{class:"token function"}},[s._v("fl")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                ##这里会使用默认参数\n                ."),a("span",{attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            ."),a("span",{attrs:{class:"token function"}},[s._v("fr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            ##这里会使用自定义参数\n            ."),a("span",{attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("15px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        ."),a("span",{attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@r")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" @r\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n        .left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" left"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 50%"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" right"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 15px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"参数逻辑条件混合-mixin-guards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数逻辑条件混合-mixin-guards","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数逻辑条件混合(mixin_guards)")]),a("pre",[a("code",[s._v("它的使用是**#**开头，在加上逻辑混合的写法，最后加上when(变量判断)\n")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("    #定义一个参数逻辑混合\n        #"),a("span",{attrs:{class:"token function"}},[s._v("fontSize")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@px")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" when "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token rule"}},[s._v("@px")]),s._v("=small"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        #"),a("span",{attrs:{class:"token function"}},[s._v("fontSize")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@px")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" when "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token rule"}},[s._v("@px")]),s._v("=middle"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        #"),a("span",{attrs:{class:"token function"}},[s._v("fontSize")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[s._v("@px")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" when "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token rule"}},[s._v("@px")]),s._v("=big"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#调用\n        .left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ."),a("span",{attrs:{class:"token function"}},[s._v("fl")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ."),a("span",{attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            #"),a("span",{attrs:{class:"token function"}},[s._v("fontSize")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("big"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            ."),a("span",{attrs:{class:"token function"}},[s._v("fr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            ."),a("span",{attrs:{class:"token function"}},[s._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("15px"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            #"),a("span",{attrs:{class:"token function"}},[s._v("fontSize")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("middle"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n    .left")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token property"}},[s._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #0000ff"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".right")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token property"}},[s._v("font-size")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yellow"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   \n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"嵌套规则（nesting）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套规则（nesting）","aria-hidden":"true"}},[s._v("#")]),s._v(" 嵌套规则（Nesting）")]),a("p",[s._v("嵌套规则可以快速的定义样式的层级关系，也能明显的反映出html的文本结构")]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("   "),a("span",{attrs:{class:"token selector"}},[s._v("#第一种嵌套是使用空格嵌套，它反映的是html的层级关系\n   #定义一个嵌套\n    .parent")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token selector"}},[s._v(".son")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n        .parent .son")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#第二种嵌套是使用&连接嵌套，它代表当前嵌套父级的前缀(引用父级名)\n    #定义一个嵌套\n        .parent")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token selector"}},[s._v("&._son")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token selector"}},[s._v("#编译后\n        .parent_son")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p")])}],!1,null,null,null);t.default=e.exports}}]);