(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{247:function(e,t,r){e.exports=r(9749)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5954)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,l=r(2648).Z,o=r(1598).Z,a=r(7273).Z,i=o(r(7294)),s=l(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=l(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,l,o,a,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==l?void 0:l.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;l.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=i.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:l,widthInt:o,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:m,loading:p,srcString:v,config:x,unoptimized:b,loader:y,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:A,setShowAltText:C,onLoad:E,onError:k}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},S,r,{width:o,height:l,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:p,style:n({},d,u),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&g(e,v,m,w,j,A,b))},[v,m,w,j,A,k,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,m,w,j,A,b)},onError:e=>{C(!0),"blur"===m&&A(!0),k&&k(e)}})))}),x=i.forwardRef((e,t)=>{let r,l;var o,{src:g,sizes:x,unoptimized:b=!1,priority:y=!1,loading:w,className:j,quality:A,width:C,height:E,fill:k,style:S,onLoad:O,onLoadingComplete:R,placeholder:N="empty",blurDataURL:L,layout:M,objectFit:z,objectPosition:T,lazyBoundary:B,lazyRoot:I}=e,_=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let P=i.useContext(u.ImageConfigContext),D=i.useMemo(()=>{let e=h||P||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[P]),U=_,F=U.loader||f.default;delete U.loader;let G="__next_img_default"in F;if(G){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:r}=t,n=a(t,["config"]);return e(n)}}if(M){"fill"===M&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(S=n({},S,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!x&&(x=t)}let V="",Q=p(C),W=p(E);if("object"==typeof(o=g)&&(m(o)||void 0!==o.src)){let e=m(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,l=e.blurHeight,L=L||e.blurDataURL,V=e.src,!k){if(Q||W){if(Q&&!W){let t=Q/e.width;W=Math.round(e.height*t)}else if(!Q&&W){let t=W/e.height;Q=Math.round(e.width*t)}}else Q=e.width,W=e.height}}let Y=!y&&("lazy"===w||void 0===w);((g="string"==typeof g?g:V).startsWith("data:")||g.startsWith("blob:"))&&(b=!0,Y=!1),D.unoptimized&&(b=!0),G&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[H,K]=i.useState(!1),[Z,$]=i.useState(!1),J=p(A),X=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:T}:{},Z?{}:{color:"transparent"},S),q="blur"===N&&L&&!H?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Q,heightInt:W,blurWidth:r,blurHeight:l,blurDataURL:L}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:l,quality:o,sizes:a,loader:i}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:l}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:o,kind:"x"}}(t,l,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(i({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:i({config:t,src:r,quality:o,width:s[d]})}}({config:D,src:g,unoptimized:b,width:Q,quality:J,sizes:x,loader:F}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin},en=i.useRef(O);i.useEffect(()=>{en.current=O},[O]);let el=i.useRef(R);i.useEffect(()=>{el.current=R},[R]);let eo=n({isLazy:Y,imgAttributes:ee,heightInt:W,widthInt:Q,qualityInt:J,className:j,imgStyle:X,blurStyle:q,loading:w,config:D,fill:k,unoptimized:b,placeholder:N,loader:F,srcString:et,onLoadRef:en,onLoadingCompleteRef:el,setBlurComplete:K,setShowAltText:$},U);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},eo,{ref:t})),y?i.default.createElement(s.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),a=r(1003),i=r(7795),s=r(4465),c=r(2692),d=r(8245),u=r(9246),f=r(227),h=r(3468);let m=new Set;function p(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(m.has(o))return;m.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:m,children:v,prefetch:x,passHref:b,replace:y,shallow:w,scroll:j,locale:A,onClick:C,onMouseEnter:E,onTouchStart:k,legacyBehavior:S=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,S&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=!1!==x,N=o.default.useContext(c.RouterContext),L=o.default.useContext(d.AppRouterContext),M=null!=N?N:L,z=!N,{href:T,as:B}=o.default.useMemo(()=>{if(!N){let e=g(i);return{href:e,as:m?g(m):e}}let[e,t]=a.resolveHref(N,i,!0);return{href:e,as:m?a.resolveHref(N,m):t||e}},[N,i,m]),I=o.default.useRef(T),_=o.default.useRef(B);S&&(n=o.default.Children.only(r));let P=S?n&&"object"==typeof n&&n.ref:t,[D,U,F]=u.useIntersection({rootMargin:"200px"}),G=o.default.useCallback(e=>{(_.current!==B||I.current!==T)&&(F(),_.current=B,I.current=T),D(e),P&&("function"==typeof P?P(e):"object"==typeof P&&(P.current=e))},[B,P,T,F,D]);o.default.useEffect(()=>{M&&U&&R&&p(M,T,B,{locale:A})},[B,T,U,A,R,null==N?void 0:N.locale,M]);let V={ref:G,onClick(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,l,i,s,c,d,u){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!u})};d?o.default.startTransition(m):m()}(e,M,T,B,y,w,j,A,z,R)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(R||!z)&&p(M,T,B,{locale:A,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof k||k(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(R||!z)&&p(M,T,B,{locale:A,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&f.getDomainLocale(B,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);V.href=t||h.addBasePath(s.addLocale(B,e,null==N?void 0:N.defaultLocale))}return S?o.default.cloneElement(n,V):o.default.createElement("a",Object.assign({},O,V),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!o,[d,u]=n.useState(!1),f=n.useRef(null),h=n.useCallback(e=>{f.current=e},[]);n.useEffect(()=>{if(o){if(c||d)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},i.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!d){let e=l.requestIdleCallback(()=>u(!0));return()=>l.cancelIdleCallback(e)}},[c,r,t,d,f.current]);let m=n.useCallback(()=>{u(!1)},[]);return[h,d,m]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:l,blurDataURL:o}=e,a=n||t,i=l||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&l?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:l}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5954:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(5893),l=r(1664),o=r.n(l),a=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function u(e){return function(t){return a.createElement(f,c({attr:c({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,c({key:r},t.attr),e(t.child))})}(e.child))}}function f(e){var t=function(t){var r,n=e.attr,l=e.size,o=e.title,i=d(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==s?a.createElement(s.Consumer,null,function(e){return t(e)}):t(i)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function m(e){return u({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}var p=r(5675),g=r.n(p);let v=["light","dark"],x="(prefers-color-scheme: dark)",b="undefined"==typeof window,y=(0,a.createContext)(void 0),w={setTheme:e=>{},themes:[]},j=()=>{var e;return null!==(e=(0,a.useContext)(y))&&void 0!==e?e:w},A=e=>(0,a.useContext)(y)?a.createElement(a.Fragment,null,e.children):a.createElement(C,e),C=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:l="theme",themes:o=["light","dark"],defaultTheme:i=r?"system":"light",attribute:s="data-theme",value:c,children:d,nonce:u})=>{let[f,h]=(0,a.useState)(()=>k(l,i)),[m,p]=(0,a.useState)(()=>k(l)),g=c?Object.values(c):o,b=(0,a.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&r&&(l=O());let o=c?c[l]:l,a=t?S():null,d=document.documentElement;if("class"===s?(d.classList.remove(...g),o&&d.classList.add(o)):o?d.setAttribute(s,o):d.removeAttribute(s),n){let e=v.includes(i)?i:null,t=v.includes(l)?l:e;d.style.colorScheme=t}null==a||a()},[]),w=(0,a.useCallback)(e=>{h(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),j=(0,a.useCallback)(t=>{let n=O(t);p(n),"system"===f&&r&&!e&&b("system")},[f,e]);return(0,a.useEffect)(()=>{let e=window.matchMedia(x);return e.addListener(j),j(e),()=>e.removeListener(j)},[j]),(0,a.useEffect)(()=>{let e=e=>{e.key===l&&w(e.newValue||i)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[w]),(0,a.useEffect)(()=>{b(null!=e?e:f)},[e,f]),a.createElement(y.Provider,{value:{theme:f,setTheme:w,forcedTheme:e,resolvedTheme:"system"===f?m:f,themes:r?[...o,"system"]:o,systemTheme:r?m:void 0}},a.createElement(E,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:n,storageKey:l,themes:o,defaultTheme:i,attribute:s,value:c,children:d,attrs:g,nonce:u}),d)},E=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:l,defaultTheme:o,value:i,attrs:s,nonce:c})=>{let d="system"===o,u="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=l?v.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,n=!0)=>{let o=i?i[e]:e,a=t?e+"|| ''":`'${o}'`,s="";return l&&n&&!t&&v.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===r?s+=t||o?`c.add(${a})`:"null":o&&(s+=`d[s](n,${a})`),s},m=e?`!function(){${u}${h(e)}}()`:n?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${x}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${d?"":"else{"+h(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${f}}catch(t){}}();`;return a.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:m}})},()=>!0),k=(e,t)=>{let r;if(!b){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},S=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},O=e=>(e||(e=window.matchMedia(x)),e.matches?"dark":"light"),R=()=>{let[e,t]=(0,a.useState)(!1),[r,l]=(0,a.useState)("transparent"),[i,s]=(0,a.useState)("white"),[c,d]=(0,a.useState)(!1),{theme:u,setTheme:f}=j(),p=()=>{f("dark"==u?"light":"dark"),window.location.reload()};(0,a.useEffect)(()=>{d(!0)},[]);let v=()=>{t(!e)};return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>=90?"dark"==u?(l("#171a18"),s("#ffffff")):(l("#ffffff"),s("#000000")):(l("transparent"),s("#ffffff"))};window.addEventListener("scroll",e),window.addEventListener("click",e)},[u]),(0,n.jsx)("div",{style:{backgroundColor:"".concat(r)},className:"fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white dark:dark:bg-[#171a18]",children:(0,n.jsxs)("div",{className:"max-w-[1240px] m-auto flex justify-between items-center p-4 text-white hover:text-[#B38D24]",children:[(0,n.jsx)(o(),{href:"/",children:(0,n.jsxs)("h1",{style:{color:"".concat(i)},className:"font-bold text-4xl",children:[(0,n.jsx)(g(),{alt:"",height:70,width:75,src:"/../public/logo.webp"}),(0,n.jsx)(g(),{alt:"",className:"pb-30px mb-30px",height:40,width:110,src:"/../public/finik.webp"})]})}),(0,n.jsxs)("ul",{style:{color:"".concat(i)},className:"hidden sm:flex font-semibold",children:[(0,n.jsx)("li",{className:"p-4 hover:text-[#B38D24]",children:(0,n.jsx)(o(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"p-4 hover:text-[#B38D24]",children:(0,n.jsx)(o(),{href:"/#about",children:"About us"})}),(0,n.jsx)("li",{className:"p-4 hover:text-[#B38D24]",children:(0,n.jsx)(o(),{href:"/#solutions",children:"Solutions"})}),(0,n.jsx)("li",{className:"p-4 hover:text-[#B38D24]",children:(0,n.jsx)(o(),{href:"/#contact",children:"Contact"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{id:"darkmodebtn","aria-label":"Toggle Dark Mode",type:"button",className:"w-10 h-10 p-3 rounded focus:outline-none",onClick:()=>p(),children:c&&(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",className:"w-4 h-4 text-yellow-500 dark:text-yellow-500",children:"dark"===u?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})]}),(0,n.jsx)("div",{onClick:v,className:"block sm:hidden z-10",children:e?(0,n.jsx)(h,{size:20,style:{color:"".concat(i)}}):(0,n.jsx)(m,{size:20,style:{color:"".concat(i)}})}),(0,n.jsx)("div",{className:e?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300":"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{onClick:v,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{onClick:v,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/#about",children:"Gallery"})}),(0,n.jsx)("li",{onClick:v,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/#solutions",children:"Solutions"})}),(0,n.jsx)("li",{onClick:v,className:"p-4 text-4xl hover:text-gray-500",children:(0,n.jsx)(o(),{href:"/#contact",children:"Contact"})})]})})]})})};var N=r(247),L=r.n(N);let M=()=>(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{className:"bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 dark:bg-[#3d3d3d]",children:[(0,n.jsx)("div",{className:"p-5 ",children:(0,n.jsx)("ul",{children:(0,n.jsx)(L(),{alt:"",src:"/../public/logo_full.webp",width:"100",height:"130"})})}),(0,n.jsx)("div",{className:"p-5",children:(0,n.jsxs)("ul",{className:" rounded-xl p-5",children:[(0,n.jsx)("p",{className:"text-gray-800 dark:text-white font-bold text-xl pb-4",children:"Contact Us"}),(0,n.jsx)("li",{className:" text-gray-500 dark:text-white text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer",children:(0,n.jsxs)("p",{children:[" ",(0,n.jsx)(L(),{height:"15",width:"15",alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIieXWPUscURTG8d8qamyUWJldsU5K8ROYPr4QsAsI6UO6FSVfJzYioo0h3yBBfAExabQwhWKhQYgoihYzC8tm2HtndtTCB05z7zznfzhzODM8N1VyPDuEaUziNUbS8z/YxxpWcVZWcf1YxF/cBeIcC6mnI1XxIwLYGlsYLQodkbQxL7QRR6jlhfZjswNoI37iRR7wlxKgjZiPhQ6JG6TYOMfLVkhXBngGA7FVRmgQUzHgd4FE16hLBqcmaeV1wDMZUaDf2reunuGpBzy/YsAXgSSvMjzDAc9FqyGr1T2BwrLWbHfA8999Fvg4kORD5FmzTgL3YEX7tl1J3mk1jXp61s6zHAOeDSQpEu9jwH04LRF6gt4YMHwsETwXCyWZ3O8lQDfk+9lAsjZ3OoDuydjRsaphtwB0WzLxHWkQ6zmgq0r8yFTwGZdtgP/wSYF3GqM3OMyAHqR3D6px3DZBbzD20NCGlprAXx8LCm+bwBOPCa7gm4IL4kl1D6g+L/ymwoEkAAAAAElFTkSuQmCC"})," Grand Wijaya Center D12, South Jakarta "]})}),(0,n.jsx)("li",{className:"flex text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white",children:(0,n.jsxs)("p",{children:[(0,n.jsx)(L(),{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRElEQVRoge3ZO2sUURiH8d8aYwTRRjFeMCBWGksRSxHtlDSioCBC1I8g+AnETq3Ub2ARjNcQSaGBIMRCI3hDQRGsjAlKBFFhLY5b5DI7cybunC32gbdYmFn+D+dwLu/QoUNSBjCJ73iKfWnjxNONa6gvqFlsTZgrirV4YLFEo+6ni1acLXgpW6JRp1IFLEIv3sqXqGMGm9PEbM4qTCgm0ajbSZLmcEGcRKNOpgjbjI/KiUxjU4K8mcwpJ1LHUIK8mbxTXqSO49VHXpohyxN5U33kwIoFv0eX+X99y3z/v7ERf5QfkSfVR85mTHmRttrpB5STeG7xVE1KDVPiRQ6lCJvHMXESd9LEzKeGccVFBtPELEY/fikmMoMdaWIW45Lio/IMa9LEzKdHCFhUZuzfO23JLvxQXOYWViZJWoCz4laxG8KC0ZYs1U1pVpfTxMynG4/EyVzRpiPTi/fip1lXirB59OGTOJlhrE4RNo/d+CpOZtTS+0wXTgut2N94LRyRKmOv0AuOkZky/wRwQPY+dVdoFFbCQfxsEjzrODOIewWencaJqmQGSsjE1rCKOpr7xU+z2JrFuSpk9uBLi2XqGMG2Vsv043MFMrPCYtNStovfNMvUZKtFCG2lmBtmmfpWhQjhE8X1FopMVCXS4Iy4+0zROlylRIOd4m6aeXW12vjz6cFFxRsaWTWiTW6g/XisnMQLrKs+cjY1HBU33V4J96G2pIYjeCgc4bMkxrEhUcZo1gun4pvCB6M5fMB54ZrdoUMK/gIkOoi24oe75gAAAABJRU5ErkJggg==",alt:"",height:"15",width:"15"})," +62...."]})}),(0,n.jsx)("li",{className:"flex text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white",children:(0,n.jsxs)("p",{children:[(0,n.jsx)(L(),{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA/klEQVRIie3TIUsEURQF4G9HiyzYDBbFLgbDRoOIKCx2sZisRqvRatxqtBr0D2jZZDWpaxZEi6KMwTfwVmaHhzOCyB44Yd6595zLe3cY4y9hHbfIa/IOa4VpFgVsYb6BQeewUiZk2MNTjekfg0eraoJZnPzA/BQzVcbn6EbfXWlvcoPVqG8H/bKAouHM1z3CFA7xWmL8hmO0Q+0CLiJ9ZECOFxxgImhLuIr0SywGbRL7eP7mURlQsI/loGfYDiy2r4PrEb1JATk+0MN0VNvGEd4r+pIDCt5jN3CQUI/hfS1NrYEWw3/yr+B/BTw06DsoO9yUth0p27bR4LBj1MQnwB2aS1VuVgwAAAAASUVORK5CYII=",alt:"",height:"15",width:"15"})," info@finik-tech.com"]})})]})})]}),(0,n.jsx)("div",{className:"flex py-4 flex-col justify-center items-center text-center pb-5 bg-gray-50 dark:bg-[#1c1c1c] ",children:(0,n.jsx)("h1",{className:" text-gray-800 dark:text-white font-semibold dark:bg-[#1c1c1c]",children:"\xa9All rights reserved.  PT. Finik Teknologi Solusi 2022"})})]});r(7475);var z=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)(A,{defaultTheme:"light",attribute:"class",children:[(0,n.jsx)(R,{}),(0,n.jsxs)("div",{className:"dark:bg-[#171a18]",children:[(0,n.jsx)(t,{...r}),(0,n.jsx)(M,{})]})]})})}},7475:function(){},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);