"use strict";(self.webpackChunk_jahia_meaningCloudServices=self.webpackChunk_jahia_meaningCloudServices||[]).push([[221],{9221:(e,t,n)=>{function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}n.d(t,{Qc:()=>W,gZ:()=>Y}),"function"==typeof Symbol&&null!=Symbol.iterator&&Symbol.iterator,"function"==typeof Symbol&&null!=Symbol.asyncIterator&&Symbol.asyncIterator;var r="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag";function s(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,s=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,s=t+1-(n.index+n[0].length);return{line:r,column:s}}function a(e){return o(e.source,s(e.source,e.start))}function o(e,t){var n=e.locationOffset.column-1,i=u(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,a=t.line+s,o=1===t.line?n:0,l=t.column+o,h="".concat(e.name,":").concat(a,":").concat(l,"\n"),p=i.split(/\r\n|[\n\r]/g),f=p[r];if(f.length>120){for(var d=Math.floor(l/80),v=l%80,E=[],y=0;y<f.length;y+=80)E.push(f.slice(y,y+80));return h+c([["".concat(a),E[0]]].concat(E.slice(1,d+1).map((function(e){return["",e]})),[[" ",u(v-1)+"^"],["",E[d+1]]]))}return h+c([["".concat(a-1),p[r-1]],["".concat(a),f],["",u(l-1)+"^"],["".concat(a+1),p[r+1]]])}function c(e){var t=e.filter((function(e){return e[0],void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,i=e[0],r=e[1];return u(n-(t=i).length)+t+(r?" | "+r:" |")})).join("\n")}function u(e){return Array(e+1).join(" ")}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){var t="function"==typeof Map?new Map:void 0;return E=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return y(e,arguments,m(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),T(i,e)},E(e)}function y(e,t,n){return y=N()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&T(r,n.prototype),r},y.apply(null,arguments)}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(E,e);var t,n,c,u,l=(t=E,n=N(),function(){var e,i=m(t);if(n){var r=m(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return d(this,e)});function E(e,t,n,r,a,o,c){var u,f,y,N;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,E),(N=l.call(this,e)).name="GraphQLError",N.originalError=null!=o?o:void 0,N.nodes=O(Array.isArray(t)?t:t?[t]:void 0);for(var T=[],m=0,_=null!==(k=N.nodes)&&void 0!==k?k:[];m<_.length;m++){var k,x=_[m].loc;null!=x&&T.push(x)}T=O(T),N.source=null!=n?n:null===(u=T)||void 0===u?void 0:u[0].source,N.positions=null!=r?r:null===(f=T)||void 0===f?void 0:f.map((function(e){return e.start})),N.locations=r&&n?r.map((function(e){return s(n,e)})):null===(y=T)||void 0===y?void 0:y.map((function(e){return s(e.source,e.start)})),N.path=null!=a?a:void 0;var A,I=null==o?void 0:o.extensions;return null==c&&"object"==i(A=I)&&null!==A?N.extensions=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},I):N.extensions=null!=c?c:{},Object.defineProperties(v(N),{message:{enumerable:!0},locations:{enumerable:null!=N.locations},path:{enumerable:null!=N.path},extensions:{enumerable:null!=N.extensions&&Object.keys(N.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=o&&o.stack?(Object.defineProperty(v(N),"stack",{value:o.stack,writable:!0,configurable:!0}),d(N)):(Error.captureStackTrace?Error.captureStackTrace(v(N),E):Object.defineProperty(v(N),"stack",{value:Error().stack,writable:!0,configurable:!0}),N)}return c=E,(u=[{key:"toString",value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,i=e.nodes;n<i.length;n++){var r=i[n];r.loc&&(t+="\n\n"+a(r.loc))}else if(e.source&&e.locations)for(var s=0,c=e.locations;s<c.length;s++){var u=c[s];t+="\n\n"+o(e.source,u)}return t}(this)}},{key:r,get:function(){return"Object"}}])&&f(c.prototype,u),E}(E(Error));function O(e){return void 0===e||0===e.length?void 0:e}function k(e,t,n){return new _("Syntax Error: ".concat(n),void 0,e,[t])}var x=n(6450),A=n(3059),I=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),D=n(6589);function b(e,t){if(!Boolean(e))throw new Error(t)}function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var S=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"==typeof e||b(0,"Body must be a string. Received: ".concat((0,D.Z)(e),".")),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||b(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||b(0,"column in locationOffset is 1-indexed and must be positive.")}var t,n;return t=e,(n=[{key:r,get:function(){return"Source"}}])&&R(t.prototype,n),e}(),C=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),w=n(7420),g=function(){function e(e){var t=new A.WU(I.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==I.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=F(this,e)}while(e.kind===I.COMMENT);return e},e}();function L(e){return isNaN(e)?I.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function F(e,t){for(var n=e.source,i=n.body,r=i.length,s=t.end;s<r;){var a=i.charCodeAt(s),o=e.line,c=1+s-e.lineStart;switch(a){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++e.line,e.lineStart=s;continue;case 13:10===i.charCodeAt(s+1)?s+=2:++s,++e.line,e.lineStart=s;continue;case 33:return new A.WU(I.BANG,s,s+1,o,c,t);case 35:return M(n,s,o,c,t);case 36:return new A.WU(I.DOLLAR,s,s+1,o,c,t);case 38:return new A.WU(I.AMP,s,s+1,o,c,t);case 40:return new A.WU(I.PAREN_L,s,s+1,o,c,t);case 41:return new A.WU(I.PAREN_R,s,s+1,o,c,t);case 46:if(46===i.charCodeAt(s+1)&&46===i.charCodeAt(s+2))return new A.WU(I.SPREAD,s,s+3,o,c,t);break;case 58:return new A.WU(I.COLON,s,s+1,o,c,t);case 61:return new A.WU(I.EQUALS,s,s+1,o,c,t);case 64:return new A.WU(I.AT,s,s+1,o,c,t);case 91:return new A.WU(I.BRACKET_L,s,s+1,o,c,t);case 93:return new A.WU(I.BRACKET_R,s,s+1,o,c,t);case 123:return new A.WU(I.BRACE_L,s,s+1,o,c,t);case 124:return new A.WU(I.PIPE,s,s+1,o,c,t);case 125:return new A.WU(I.BRACE_R,s,s+1,o,c,t);case 34:return 34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)?j(n,s,o,c,t,e):K(n,s,o,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return U(n,s,a,o,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return G(n,s,o,c,t)}throw k(n,s,P(a))}var u=e.line,l=1+s-e.lineStart;return new A.WU(I.EOF,r,r,u,l,t)}function P(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(L(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(L(e),".")}function M(e,t,n,i,r){var s,a=e.body,o=t;do{s=a.charCodeAt(++o)}while(!isNaN(s)&&(s>31||9===s));return new A.WU(I.COMMENT,t,o,n,i,r,a.slice(t+1,o))}function U(e,t,n,i,r,s){var a=e.body,o=n,c=t,u=!1;if(45===o&&(o=a.charCodeAt(++c)),48===o){if((o=a.charCodeAt(++c))>=48&&o<=57)throw k(e,c,"Invalid number, unexpected digit after 0: ".concat(L(o),"."))}else c=B(e,c,o),o=a.charCodeAt(c);if(46===o&&(u=!0,o=a.charCodeAt(++c),c=B(e,c,o),o=a.charCodeAt(c)),69!==o&&101!==o||(u=!0,43!==(o=a.charCodeAt(++c))&&45!==o||(o=a.charCodeAt(++c)),c=B(e,c,o),o=a.charCodeAt(c)),46===o||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(o))throw k(e,c,"Invalid number, expected digit but got: ".concat(L(o),"."));return new A.WU(u?I.FLOAT:I.INT,t,c,i,r,s,a.slice(t,c))}function B(e,t,n){var i=e.body,r=t,s=n;if(s>=48&&s<=57){do{s=i.charCodeAt(++r)}while(s>=48&&s<=57);return r}throw k(e,r,"Invalid number, expected digit but got: ".concat(L(s),"."))}function K(e,t,n,i,r){for(var s,a,o,c,u=e.body,l=t+1,h=l,p=0,f="";l<u.length&&!isNaN(p=u.charCodeAt(l))&&10!==p&&13!==p;){if(34===p)return f+=u.slice(h,l),new A.WU(I.STRING,t,l+1,n,i,r,f);if(p<32&&9!==p)throw k(e,l,"Invalid character within String: ".concat(L(p),"."));if(++l,92===p){switch(f+=u.slice(h,l-1),p=u.charCodeAt(l)){case 34:f+='"';break;case 47:f+="/";break;case 92:f+="\\";break;case 98:f+="\b";break;case 102:f+="\f";break;case 110:f+="\n";break;case 114:f+="\r";break;case 116:f+="\t";break;case 117:var d=(s=u.charCodeAt(l+1),a=u.charCodeAt(l+2),o=u.charCodeAt(l+3),c=u.charCodeAt(l+4),V(s)<<12|V(a)<<8|V(o)<<4|V(c));if(d<0){var v=u.slice(l+1,l+5);throw k(e,l,"Invalid character escape sequence: \\u".concat(v,"."))}f+=String.fromCharCode(d),l+=4;break;default:throw k(e,l,"Invalid character escape sequence: \\".concat(String.fromCharCode(p),"."))}h=++l}}throw k(e,l,"Unterminated string.")}function j(e,t,n,i,r,s){for(var a=e.body,o=t+3,c=o,u=0,l="";o<a.length&&!isNaN(u=a.charCodeAt(o));){if(34===u&&34===a.charCodeAt(o+1)&&34===a.charCodeAt(o+2))return l+=a.slice(c,o),new A.WU(I.BLOCK_STRING,t,o+3,n,i,r,(0,w.W7)(l));if(u<32&&9!==u&&10!==u&&13!==u)throw k(e,o,"Invalid character within String: ".concat(L(u),"."));10===u?(++o,++s.line,s.lineStart=o):13===u?(10===a.charCodeAt(o+1)?o+=2:++o,++s.line,s.lineStart=o):92===u&&34===a.charCodeAt(o+1)&&34===a.charCodeAt(o+2)&&34===a.charCodeAt(o+3)?(l+=a.slice(c,o)+'"""',c=o+=4):++o}throw k(e,o,"Unterminated string.")}function V(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function G(e,t,n,i,r){for(var s=e.body,a=s.length,o=t+1,c=0;o!==a&&!isNaN(c=s.charCodeAt(o))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++o;return new A.WU(I.NAME,t,o,n,i,r,s.slice(t,o))}function W(e,t){return new J(e,t).parseDocument()}function Y(e,t){var n=new J(e,t);n.expectToken(I.SOF);var i=n.parseTypeReference();return n.expectToken(I.EOF),i}var J=function(){function e(e,t){var n=function(e){return e instanceof S}(e)?e:new S(e);this._lexer=new g(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(I.NAME);return{kind:x.h.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:x.h.DOCUMENT,definitions:this.many(I.SOF,this.parseDefinition,I.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(I.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(I.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(I.BRACE_L))return{kind:x.h.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(I.NAME)&&(t=this.parseName()),{kind:x.h.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(I.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(I.PAREN_L,this.parseVariableDefinition,I.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:x.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(I.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(I.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(I.DOLLAR),{kind:x.h.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:x.h.SELECTION_SET,selections:this.many(I.BRACE_L,this.parseSelection,I.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(I.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(I.COLON)?(e=i,t=this.parseName()):t=i,{kind:x.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(I.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(I.PAREN_L,t,I.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(I.COLON),{kind:x.h.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:x.h.ARGUMENT,name:this.parseName(),value:(this.expectToken(I.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(I.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(I.NAME)?{kind:x.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:x.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:x.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:x.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case I.BRACKET_L:return this.parseList(e);case I.BRACE_L:return this.parseObject(e);case I.INT:return this._lexer.advance(),{kind:x.h.INT,value:t.value,loc:this.loc(t)};case I.FLOAT:return this._lexer.advance(),{kind:x.h.FLOAT,value:t.value,loc:this.loc(t)};case I.STRING:case I.BLOCK_STRING:return this.parseStringLiteral();case I.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:x.h.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:x.h.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:x.h.NULL,loc:this.loc(t)};default:return{kind:x.h.ENUM,value:t.value,loc:this.loc(t)}}case I.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:x.h.STRING,value:e.value,block:e.kind===I.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:x.h.LIST,values:this.any(I.BRACKET_L,(function(){return t.parseValueLiteral(e)}),I.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:x.h.OBJECT,fields:this.any(I.BRACE_L,(function(){return t.parseObjectField(e)}),I.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(I.COLON),{kind:x.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(I.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(I.AT),{kind:x.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(I.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(I.BRACKET_R),e={kind:x.h.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(I.BANG)?{kind:x.h.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:x.h.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(I.STRING)||this.peek(I.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);return{kind:x.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(I.COLON);var n=this.parseNamedType();return{kind:x.h.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:x.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:x.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(I.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(I.AMP)||this.peek(I.NAME));return t}return this.delimitedMany(I.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(I.BRACE_L)&&this._lexer.lookahead().kind===I.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(I.BRACE_L,this.parseFieldDefinition,I.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(I.COLON);var r=this.parseTypeReference(),s=this.parseDirectives(!0);return{kind:x.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(I.PAREN_L,this.parseInputValueDef,I.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(I.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(I.EQUALS)&&(i=this.parseValueLiteral(!0));var s=this.parseDirectives(!0);return{kind:x.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:s,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),s=this.parseFieldsDefinition();return{kind:x.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:x.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(I.EQUALS)?this.delimitedMany(I.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:x.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseEnumValueDefinition,I.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:x.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:x.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseInputValueDef,I.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:x.h.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:x.h.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:x.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:x.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:x.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:x.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:x.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(I.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var s=this.parseDirectiveLocations();return{kind:x.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(I.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==C[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new A.Ye(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw k(this._lexer.source,t.start,"Expected ".concat(q(e),", found ").concat(Q(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==I.NAME||t.value!==e)throw k(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(Q(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===I.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return k(this._lexer.source,t.start,"Unexpected ".concat(Q(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function Q(e){var t=e.value;return q(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function q(e){return function(e){return e===I.BANG||e===I.DOLLAR||e===I.AMP||e===I.PAREN_L||e===I.PAREN_R||e===I.SPREAD||e===I.COLON||e===I.EQUALS||e===I.AT||e===I.BRACKET_L||e===I.BRACKET_R||e===I.BRACE_L||e===I.PIPE||e===I.BRACE_R}(e)?'"'.concat(e,'"'):e}}}]);
//# sourceMappingURL=221.jahia.c555da.js.map