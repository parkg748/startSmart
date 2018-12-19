(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6hot":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("qAe4"),o=r("pIAO").TextHighlightRules,i=function e(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},e.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};n.inherits(i,o),i.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=i},cOx4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("qAe4"),o=r("6hot").DocCommentHighlightRules,i=r("pIAO").TextHighlightRules,a=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"assert|with|abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|def|float|native|super|while","support.function":"AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object","constant.language":"null|Infinity|NaN|undefined"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'"""',next:"qqstring"},{token:"string",regex:"'''",next:"qstring"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\?:|\\?\\.|\\*\\.|<=>|=~|==~|\\.@|\\*\\.@|\\.&|as|in|is|!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"constant.language.escape",regex:/\\(?:u[0-9A-Fa-f]{4}|.|$)/},{token:"constant.language.escape",regex:/\$[\w\d]+/},{token:"constant.language.escape",regex:/\$\{[^"\}]+\}?/},{token:"string",regex:'"{3,5}',next:"start"},{token:"string",regex:".+?"}],qstring:[{token:"constant.language.escape",regex:/\\(?:u[0-9A-Fa-f]{4}|.|$)/},{token:"string",regex:"'{3,5}",next:"start"},{token:"string",regex:".+?"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};n.inherits(a,i),t.default=a},pIAO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){if("object"!==(void 0===e?"undefined":n(e))||!e)return e;var t;if(Array.isArray(e)){t=[];for(var r=0;r<e.length;r++)t[r]=o(e[r]);return t}if("[object Object]"!==Object.prototype.toString.call(e))return e;for(var r in t={},e)t[r]=o(e[r]);return t}var i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(t)for(var r in e){for(var n=e[r],o=0;o<n.length;o++){var i=n[o];(i.next||i.onMatch)&&("string"==typeof i.next&&0!==i.next.indexOf(t)&&(i.next=t+i.next),i.nextState&&0!==i.nextState.indexOf(t)&&(i.nextState=t+i.nextState))}this.$rules[t+r]=n}else for(var r in e)this.$rules[r]=e[r]},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,r,n,i){var a="function"==typeof e?(new e).getRules():e;if(n)for(var s=0;s<n.length;s++)n[s]=t+n[s];else for(var u in n=[],a)n.push(t+u);if(this.addRules(a,t),r){var c=Array.prototype[i?"push":"unshift"];for(s=0;s<n.length;s++)c.apply(this.$rules[n[s]],o(r))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return("start"!=e||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"};this.normalizeRules=function(){var r=0,n=this.$rules;Object.keys(n).forEach(function o(i){var a=n[i];a.processed=!0;for(var s=0;s<a.length;s++){var u=a[s],c=null;Array.isArray(u)&&(c=u,u={}),!u.regex&&u.start&&(u.regex=u.start,u.next||(u.next=[]),u.next.push({defaultToken:u.token},{token:u.token+".end",regex:u.end||u.start,next:"pop"}),u.token=u.token+".start",u.push=!0);var l=u.next||u.push;if(l&&Array.isArray(l)){var p=u.stateName;p||("string"!=typeof(p=u.token)&&(p=p[0]||""),n[p]&&(p+=r++)),n[p]=l,u.next=p,o(p)}else"pop"==l&&(u.next=t);if(u.push&&(u.nextState=u.next||u.push,u.next=e,delete u.push),u.rules)for(var g in u.rules)n[g]?n[g].push&&n[g].push.apply(n[g],u.rules[g]):n[g]=u.rules[g];var f="string"==typeof u?u:u.include;if(f&&(c=Array.isArray(f)?f.map(function(e){return n[e]}):n[f]),c){var d=[s,1].concat(c);u.noEscape&&(d=d.filter(function(e){return!e.next})),a.splice.apply(a,d),s--}u.keywordMap&&(u.token=this.createKeywordMapper(u.keywordMap,u.defaultToken||"text",u.caseInsensitive),delete u.defaultToken)}},this)},this.createKeywordMapper=function(e,t,r,n){var o=Object.create(null);return Object.keys(e).forEach(function(t){var i=e[t];r&&(i=i.toLowerCase());for(var a=i.split(n||"|"),s=a.length;s--;)o[a[s]]=t}),Object.getPrototypeOf(o)&&(o.__proto__=null),this.$keywordList=Object.keys(o),e=null,r?function(e){return o[e.toLowerCase()]||t}:function(e){return o[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(i.prototype),t.TextHighlightRules=i},qAe4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/24-5be6628d7ab0785ff591.js.map