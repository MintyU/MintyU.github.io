(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JYtQ:function(e,t,n){},xSjX:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("VXBa"),l=n("H8eV"),o=(n("JYtQ"),n("uP4m"));function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.data.allMarkdownRemark.group,n=Object(r.useState)(0),i=n[0],f=n[1],c=Object(r.useState)("undefined"),d=c[0],s=c[1];t.sort((function(e,t){var n=e.fieldValue.toLocaleLowerCase(),r=t.fieldValue.toLocaleLowerCase();return n<r?-1:r<n?1:0}));var m=t.map((function(e){var t;return r.createElement("li",{key:e.fieldValue},r.createElement("span",{className:"tag-text",style:{fontSize:"undefined"!==e.fieldValue?(t=Math.round(50/(i/e.totalCount)).toString(),t.length<=1&&(t="0"+t),"1."+t+"rem"):"1rem",opacity:e.fieldValue===d?"0.9":"0.5",fontWeight:e.fieldValue===d?"bold":"normal"},onClick:function(){s(e.fieldValue)}},r.createElement("a",{href:"#"+e.fieldValue},e.fieldValue)))}));m.sort((function(e){return"undefined"===e.key?-1:0}));return Object(r.useEffect)((function(){for(var e,n=0,r=u(t);!(e=r()).done;){var a=e.value;"undefined"!==a.fieldValue&&a.totalCount>n&&(n=a.totalCount)}return f(n),function(){}}),[t]),Object(r.useEffect)((function(){return location.hash&&s(location.hash.split("#")[1]),function(){}}),[]),r.createElement(a.a,null,r.createElement(l.a,{title:"Tags"}),r.createElement("div",{id:"tags"},r.createElement("div",{className:"tag-list-wrap"},r.createElement("ul",null,m)),r.createElement(o.a,{posts:t.filter((function(e){return e.fieldValue===d})).length?t.filter((function(e){return e.fieldValue===d}))[0].edges:t.filter((function(e){return"undefined"===e.fieldValue})).length?t.filter((function(e){return"undefined"===e.fieldValue}))[0].edges:[]})))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-54f2ed0a609c6f9e4be5.js.map