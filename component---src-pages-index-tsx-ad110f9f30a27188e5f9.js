(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);i=!0);}catch(l){u=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);t.exports=function(t){return n(t)||a(t)||o(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(t);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),l=0;l<u.length;l++){var s=u[l];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],u=t[i];(a?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=r(8936),s=r(7091),c=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,e){return e.encode?e.strict?l(t):encodeURIComponent(t):t}function m(t,e){return e.decode?s(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,t).includes(t.arrayFormatSeparator);r=o?m(r,t):r;var i=a||o?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o,u=i(t.split("&"));try{for(u.s();!(o=u.n()).done;){var l=o.value;if(""!==l){var s=c(e.decode?l.replace(/\+/g," "):l,"="),f=a(s,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:m(g,e),r(m(p,e),g,n)}}}catch(A){u.e(A)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],e)}else n[h]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[",a,"]"].join("")]:[[g(e,t),"[",g(a,t),"]=",g(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[]"].join("")]:[[g(e,t),"[]=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,t),e,g(a,t)].join("")]:[[n,g(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(e,t)]:[[g(e,t),"=",g(n,t)].join("")])}}}}(e),a={},i=0,u=Object.keys(t);i<u.length;i++){var l=u[i];r(l)||(a[l]=t[l])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var a=t[r];return void 0===a?"":null===a?g(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?g(r,e)+"[]":a.reduce(n(r),[]).join("&"):g(r,e)+"="+g(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=c(t,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),u=Object.assign(i,t.query),l=e.stringify(u,r);l&&(l="?".concat(l));var s=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(s="#".concat(r[p]?g(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(a).concat(l).concat(s)},e.pick=function(t,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=e.parseUrl(t,a),i=o.url,u=o.query,l=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:l},a)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},1812:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(7294),a=r(8440);var o=r(6771),i=r(5444),u=r(3431),l=["active"];var s=(0,o.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),c=(0,o.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,l);return(0,u.tZ)(i.rU,e)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-family:Arial;font-size:16px;font-weight:",(function(t){return t.active?"600":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:16px;}"),f=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,u.tZ)(s,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,u.tZ)(c,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},p=r(1496);var d=(0,o.Z)(p.Z,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),g=function(t){var e=t.profileImage;return(0,u.tZ)(d,{fluid:e,alt:"Profile Image"})};var m=(0,o.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),y=(0,o.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),x=(0,o.Z)("div",{target:"e160b011"})({name:"blknyk",styles:"font-family:Arial,serif;font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),v=(0,o.Z)("div",{target:"e160b010"})({name:"1v7y1q1",styles:"margin-top:5px;font-family:Arial;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),b=function(t){var e=t.profileImage;return(0,u.tZ)(m,null,(0,u.tZ)(y,null,(0,u.tZ)(g,{profileImage:e}),(0,u.tZ)("div",null,(0,u.tZ)(x,null,"Blog by"),(0,u.tZ)(v,null,"A Data Analyst / Engineer"))))},h=r(2122);var w=(0,o.Z)(p.Z,{target:"e1eg5kak7"})({name:"dxurw8",styles:"width:150px;height:100px;border-radius:10px"}),k=(0,o.Z)(i.rU,{target:"e1eg5kak6"})({name:"3i5aaa",styles:"width:100%;display:grid;grid-template-columns:170px auto;grid-template-rows:auto;padding:5px;border-spacing:5px;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),j=(0,o.Z)("div",{target:"e1eg5kak5"})({name:"16rvzp2",styles:"font-family:Arial"}),Z=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"g9vmpc",styles:"display:-webkit-box;display:inline;overflow:hidden;margin-bottom:5px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:500;font-family:Arial;margin-top:15px;color:#3c4754"}),A=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"1wc63wi",styles:"font-size:14px;font-weight:400;font-family:Arial;color:#3c4754;margin-top:12px;margin-left:1px"}),I=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"lyp8bi",styles:"display:flex;font-family:Arial;flex-wrap:wrap;margin-left:-5px;margin-top:5px"}),S=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"6k4bzu",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:#3c4754;font-family:Arial;font-size:14px;font-weight:400;color:white"}),O=((0,o.Z)("div",{target:"e1eg5kak0"})({name:"12un2ar",styles:"display:-webkit-box;overflow:hidden;margin-top:2px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-family:Arial;font-size:16px;opacity:0.8"}),function(t){var e=t.title,r=t.date,n=t.categories,a=(t.summary,t.thumbnail.childImageSharp.fluid),o=t.link;return(0,u.tZ)(k,{to:o},(0,u.tZ)(w,{fluid:a,alt:"Post Item Image"}),(0,u.tZ)(j,null,(0,u.tZ)(A,null,r),(0,u.tZ)(Z,null,e),(0,u.tZ)(I,null,n.map((function(t){return(0,u.tZ)(S,{key:t},t)})))))}),F=function(t,e){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],u=o[1],l=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){10*i>=l.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:l.slice(0,10*i)}};var _=(0,o.Z)("div",{target:"es8e92y0"})({name:"lfka6z",styles:"display:grid;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),E=function(t){var e=t.selectedCategory,r=t.posts,n=F(e,r),a=n.containerRef,o=n.postList;return(0,u.tZ)(_,{ref:a},o.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,a=e.frontmatter;return(0,u.tZ)(O,(0,h.Z)({},a,{link:n,key:r}))})))},C=r(2203),M=function(t){var e=t.location.search,r=t.data,o=r.allMarkdownRemark.edges,i=r.file.childImageSharp.fluid,l=C.parse(e),s="string"==typeof l.category&&l.category?l.category:"All",c=(0,n.useMemo)((function(){return o.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,u.tZ)(a.Z,null,(0,u.tZ)(b,{profileImage:i}),(0,u.tZ)(f,{selectedCategory:s,categoryList:c}),(0,u.tZ)(E,{selectedCategory:s,posts:o}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ad110f9f30a27188e5f9.js.map