(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{pcw8:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return u}));var n=t("q1tI"),r=t.n(n),c=t("IP2g"),l=t("wHSu"),o=t("VXBa"),s=t("H8eV"),i=t("uP4m"),u=(t("Tl1Y"),"1655265308");a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=Object(n.useState)(""),u=t[0],m=t[1],p=Object(n.useState)(!0),d=p[0],w=p[1],f=a.filter((function(e){var a=e.node,t=a.frontmatter,n=a.rawMarkdownBody,r=t.title,c=u.toLocaleLowerCase();return!d&&n.toLocaleLowerCase().indexOf(c)>-1||r.toLocaleLowerCase().indexOf(c)>-1}));return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Search"}),r.a.createElement("div",{id:"Search"},r.a.createElement("div",{className:"search-inner-wrap"},r.a.createElement("div",{className:"input-wrap"},r.a.createElement(c.a,{icon:l.j}),r.a.createElement("input",{type:"text",name:"search",id:"searchInput",value:u,placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(e){m(e.currentTarget.value)}}),r.a.createElement("div",{className:"search-toggle"},r.a.createElement("span",{style:{opacity:d?.8:.15},onClick:function(){w(!0)}},"in Title"),r.a.createElement("span",{style:{opacity:d?.15:.8},onClick:function(){w(!1)}},"in Title+Content"))),""===u||f.length?null:r.a.createElement("span",{className:"no-result"},"No search results"),r.a.createElement(i.a,{posts:""===u?a:f}))))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-26a1fc9ad5d659964844.js.map