(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ZKDz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("qAe4"),a=n("pIAO").TextHighlightRules,r=function(){this.$rules={start:[{token:["punctuation.definition.entity.haskell","keyword.operator.function.infix.haskell","punctuation.definition.entity.haskell"],regex:/(`)([a-zA-Z_']*?)(`)/,comment:"In case this regex seems unusual for an infix operator, note that Haskell allows any ordinary function application (elem 4 [1..10]) to be rewritten as an infix expression (4 `elem` [1..10])."},{token:"constant.language.unit.haskell",regex:/\(\)/},{token:"constant.language.empty-list.haskell",regex:/\[\]/},{token:"keyword.other.haskell",regex:/module/,push:[{token:"keyword.other.haskell",regex:/where/,next:"pop"},{include:"#module_name"},{include:"#module_exports"},{token:"invalid",regex:/[a-z]+/},{defaultToken:"meta.declaration.module.haskell"}]},{token:"keyword.other.haskell",regex:/\bclass\b/,push:[{token:"keyword.other.haskell",regex:/\bwhere\b/,next:"pop"},{token:"support.class.prelude.haskell",regex:/\b(?:Monad|Functor|Eq|Ord|Read|Show|Num|(?:Frac|Ra)tional|Enum|Bounded|Real(?:Frac|Float)?|Integral|Floating)\b/},{token:"entity.other.inherited-class.haskell",regex:/[A-Z][A-Za-z_']*/},{token:"variable.other.generic-type.haskell",regex:/\b[a-z][a-zA-Z0-9_']*\b/},{defaultToken:"meta.declaration.class.haskell"}]},{token:"keyword.other.haskell",regex:/\binstance\b/,push:[{token:"keyword.other.haskell",regex:/\bwhere\b|$/,next:"pop"},{include:"#type_signature"},{defaultToken:"meta.declaration.instance.haskell"}]},{token:"keyword.other.haskell",regex:/import/,push:[{token:"meta.import.haskell",regex:/$|;/,next:"pop"},{token:"keyword.other.haskell",regex:/qualified|as|hiding/},{include:"#module_name"},{include:"#module_exports"},{defaultToken:"meta.import.haskell"}]},{token:["keyword.other.haskell","meta.deriving.haskell"],regex:/(deriving)(\s*\()/,push:[{token:"meta.deriving.haskell",regex:/\)/,next:"pop"},{token:"entity.other.inherited-class.haskell",regex:/\b[A-Z][a-zA-Z_']*/},{defaultToken:"meta.deriving.haskell"}]},{token:"keyword.other.haskell",regex:/\b(?:deriving|where|data|type|case|of|let|in|newtype|default)\b/},{token:"keyword.operator.haskell",regex:/\binfix[lr]?\b/},{token:"keyword.control.haskell",regex:/\b(?:do|if|then|else)\b/},{token:"constant.numeric.float.haskell",regex:/\b(?:[0-9]+\.[0-9]+(?:[eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\b/,comment:"Floats are always decimal"},{token:"constant.numeric.haskell",regex:/\b(?:[0-9]+|0(?:[xX][0-9a-fA-F]+|[oO][0-7]+))\b/},{token:["meta.preprocessor.c","punctuation.definition.preprocessor.c","meta.preprocessor.c"],regex:/^(\s*)(#)(\s*\w+)/,comment:'In addition to Haskell\'s "native" syntax, GHC permits the C preprocessor to be run on a source file.'},{include:"#pragma"},{token:"punctuation.definition.string.begin.haskell",regex:/"/,push:[{token:"punctuation.definition.string.end.haskell",regex:/"/,next:"pop"},{token:"constant.character.escape.haskell",regex:/\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&])/},{token:"constant.character.escape.octal.haskell",regex:/\\o[0-7]+|\\x[0-9A-Fa-f]+|\\[0-9]+/},{token:"constant.character.escape.control.haskell",regex:/\^[A-Z@\[\]\\\^_]/},{defaultToken:"string.quoted.double.haskell"}]},{token:["punctuation.definition.string.begin.haskell","string.quoted.single.haskell","constant.character.escape.haskell","constant.character.escape.octal.haskell","constant.character.escape.hexadecimal.haskell","constant.character.escape.control.haskell","punctuation.definition.string.end.haskell"],regex:/(')(?:([\ -\[\]-~])|(\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\"'\&]))|(\\o[0-7]+)|(\\x[0-9A-Fa-f]+)|(\^[A-Z@\[\]\\\^_]))(')/},{token:["meta.function.type-declaration.haskell","entity.name.function.haskell","meta.function.type-declaration.haskell","keyword.other.double-colon.haskell"],regex:/^(\s*)([a-z_][a-zA-Z0-9_']*|\([|!%$+\-.,=<\/>]+\))(\s*)(::)/,push:[{token:"meta.function.type-declaration.haskell",regex:/$/,next:"pop"},{include:"#type_signature"},{defaultToken:"meta.function.type-declaration.haskell"}]},{token:"support.constant.haskell",regex:/\b(?:Just|Nothing|Left|Right|True|False|LT|EQ|GT|\(\)|\[\])\b/},{token:"constant.other.haskell",regex:/\b[A-Z]\w*\b/},{include:"#comments"},{token:"support.function.prelude.haskell",regex:/\b(?:abs|acos|acosh|all|and|any|appendFile|applyM|asTypeOf|asin|asinh|atan|atan2|atanh|break|catch|ceiling|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|div|divMod|drop|dropWhile|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromEnum|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|head|id|init|interact|ioError|isDenormalized|isIEEE|isInfinite|isNaN|isNegativeZero|iterate|last|lcm|length|lex|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|odd|or|otherwise|pi|pred|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|read|readFile|readIO|readList|readLn|readParen|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showList|showParen|showString|shows|showsPrec|significand|signum|sin|sinh|snd|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|toEnum|toInteger|toRational|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/},{include:"#infix_op"},{token:"keyword.operator.haskell",regex:/[|!%$?~+:\-.=<\/>\\]+/,comment:"In case this regex seems overly general, note that Haskell permits the definition of new operators which can be nearly any string of punctuation characters, such as $%^&*."},{token:"punctuation.separator.comma.haskell",regex:/,/}],"#block_comment":[{token:"punctuation.definition.comment.haskell",regex:/\{-(?!#)/,push:[{include:"#block_comment"},{token:"punctuation.definition.comment.haskell",regex:/-\}/,next:"pop"},{defaultToken:"comment.block.haskell"}]}],"#comments":[{token:["punctuation.definition.comment.haskell","comment.line.double-dash.haskell"],regex:/(--)(.*$)/},{include:"#block_comment"}],"#infix_op":[{token:"entity.name.function.infix.haskell",regex:/\([|!%$+:\-.=<\/>]+\)|\(,+\)/}],"#module_exports":[{token:"meta.declaration.exports.haskell",regex:/\(/,push:[{token:"meta.declaration.exports.haskell",regex:/\)/,next:"pop"},{token:"entity.name.function.haskell",regex:/\b[a-z][a-zA-Z_'0-9]*/},{token:"storage.type.haskell",regex:/\b[A-Z][A-Za-z_'0-9]*/},{token:"punctuation.separator.comma.haskell",regex:/,/},{include:"#infix_op"},{token:"meta.other.unknown.haskell",regex:/\(.*?\)/,comment:"So named because I don't know what to call this."},{defaultToken:"meta.declaration.exports.haskell"}]}],"#module_name":[{token:"support.other.module.haskell",regex:/[A-Z][A-Za-z._']*/}],"#pragma":[{token:"meta.preprocessor.haskell",regex:/\{-#/,push:[{token:"meta.preprocessor.haskell",regex:/#-\}/,next:"pop"},{token:"keyword.other.preprocessor.haskell",regex:/\b(?:LANGUAGE|UNPACK|INLINE)\b/},{defaultToken:"meta.preprocessor.haskell"}]}],"#type_signature":[{token:["meta.class-constraint.haskell","entity.other.inherited-class.haskell","meta.class-constraint.haskell","variable.other.generic-type.haskell","meta.class-constraint.haskell","keyword.other.big-arrow.haskell"],regex:/(\(\s*)([A-Z][A-Za-z]*)(\s+)([a-z][A-Za-z_']*)(\)\s*)(=>)/},{include:"#pragma"},{token:"keyword.other.arrow.haskell",regex:/->/},{token:"keyword.other.big-arrow.haskell",regex:/=>/},{token:"support.type.prelude.haskell",regex:/\b(?:Int(?:eger)?|Maybe|Either|Bool|Float|Double|Char|String|Ordering|ShowS|ReadS|FilePath|IO(?:Error)?)\b/},{token:"variable.other.generic-type.haskell",regex:/\b[a-z][a-zA-Z0-9_']*\b/},{token:"storage.type.haskell",regex:/\b[A-Z][a-zA-Z0-9_']*\b/},{token:"support.constant.unit.haskell",regex:/\(\)/},{include:"#comments"}]},this.normalizeRules()};r.metaData={fileTypes:["hs"],keyEquivalent:"^~H",name:"Haskell",scopeName:"source.haskell"},o.inherits(r,a),t.default=r},pIAO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if("object"!==(void 0===e?"undefined":o(e))||!e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n++)t[n]=a(e[n]);return t}if("[object Object]"!==Object.prototype.toString.call(e))return e;for(var n in t={},e)t[n]=a(e[n]);return t}var r=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(t)for(var n in e){for(var o=e[n],a=0;a<o.length;a++){var r=o[a];(r.next||r.onMatch)&&("string"==typeof r.next&&0!==r.next.indexOf(t)&&(r.next=t+r.next),r.nextState&&0!==r.nextState.indexOf(t)&&(r.nextState=t+r.nextState))}this.$rules[t+n]=o}else for(var n in e)this.$rules[n]=e[n]},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,o,r){var l="function"==typeof e?(new e).getRules():e;if(o)for(var s=0;s<o.length;s++)o[s]=t+o[s];else for(var i in o=[],l)o.push(t+i);if(this.addRules(l,t),n){var c=Array.prototype[r?"push":"unshift"];for(s=0;s<o.length;s++)c.apply(this.$rules[o[s]],a(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return("start"!=e||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){var n=0,o=this.$rules;Object.keys(o).forEach(function a(r){var l=o[r];l.processed=!0;for(var s=0;s<l.length;s++){var i=l[s],c=null;Array.isArray(i)&&(c=i,i={}),!i.regex&&i.start&&(i.regex=i.start,i.next||(i.next=[]),i.next.push({defaultToken:i.token},{token:i.token+".end",regex:i.end||i.start,next:"pop"}),i.token=i.token+".start",i.push=!0);var u=i.next||i.push;if(u&&Array.isArray(u)){var h=i.stateName;h||("string"!=typeof(h=i.token)&&(h=h[0]||""),o[h]&&(h+=n++)),o[h]=u,i.next=h,a(h)}else"pop"==u&&(i.next=t);if(i.push&&(i.nextState=i.next||i.push,i.next=e,delete i.push),i.rules)for(var p in i.rules)o[p]?o[p].push&&o[p].push.apply(o[p],i.rules[p]):o[p]=i.rules[p];var k="string"==typeof i?i:i.include;if(k&&(c=Array.isArray(k)?k.map(function(e){return o[e]}):o[k]),c){var d=[s,1].concat(c);i.noEscape&&(d=d.filter(function(e){return!e.next})),l.splice.apply(l,d),s--}i.keywordMap&&(i.token=this.createKeywordMapper(i.keywordMap,i.defaultToken||"text",i.caseInsensitive),delete i.defaultToken)}},this)},this.createKeywordMapper=function(e,t,n,o){var a=Object.create(null);return Object.keys(e).forEach(function(t){var r=e[t];n&&(r=r.toLowerCase());for(var l=r.split(o||"|"),s=l.length;s--;)a[l[s]]=t}),Object.getPrototypeOf(a)&&(a.__proto__=null),this.$keywordList=Object.keys(a),e=null,n?function(e){return a[e.toLowerCase()]||t}:function(e){return a[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(r.prototype),t.TextHighlightRules=r},qAe4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/33-a2eecc3edfca008d61ee.js.map