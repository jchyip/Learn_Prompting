"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1},o="\ud83d\udfe2\u30d7\u30ed\u30f3\u30d7\u30c6\u30a3\u30f3\u30b0",s={unversionedId:"basics/prompting",id:"basics/prompting",title:"\ud83d\udfe2\u30d7\u30ed\u30f3\u30d7\u30c6\u30a3\u30f3\u30b0",description:"\u524d\u7ae0\u3067\u306f\u3001AI\u306b\u3064\u3044\u3066\u3001\u4eba\u9593\u304c AI \u306b\u30bf\u30b9\u30af\u3092\u6307\u793a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3057\u305f\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/basics/prompting.md",sourceDirName:"basics",slug:"/basics/prompting",permalink:"/ja/docs/basics/prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.2/docs/basics/prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u306f\u3058\u3081\u306b",permalink:"/ja/docs/basics/intro"},next:{title:"\ud83d\udfe2 Giving Instructions",permalink:"/ja/docs/basics/instructions"}},l={},c=[{value:"1) \u8ad6\u6587\u306e\u8981\u7d04",id:"1-\u8ad6\u6587\u306e\u8981\u7d04",level:4},{value:"2) \u6570\u5b66\u306e\u5358\u8a9e\u554f\u984c\u89e3\u6c7a",id:"2-\u6570\u5b66\u306e\u5358\u8a9e\u554f\u984c\u89e3\u6c7a",level:4}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30d7\u30ed\u30f3\u30d7\u30c6\u30a3\u30f3\u30b0"},"\ud83d\udfe2\u30d7\u30ed\u30f3\u30d7\u30c6\u30a3\u30f3\u30b0"),(0,a.kt)("p",null,"\u524d\u7ae0\u3067\u306f\u3001AI\u306b\u3064\u3044\u3066\u3001\u4eba\u9593\u304c AI \u306b\u30bf\u30b9\u30af\u3092\u6307\u793a\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3057\u305f\u3002\nAI \u306b\u30bf\u30b9\u30af\u3092\u6307\u793a\u3059\u308b\u3053\u3068\u3092\u30d7\u30ed\u30f3\u30d7\u30c8",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3068\u547c\u3073\u307e\u3059\u3002\u79c1\u305f\u3061\u306f AI \u306b\u30d7\u30ed\u30f3\u30d7\u30c8\u3068\u547c\u3070\u308c\u308b\u4e00\u9023\u306e\u6307\u793a\u3092\u53d7\u3051\u308b\u3068\u3001\u305d\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30d7\u30ed\u30f3\u30d7\u30c8\u306b\u306f\u3001\u8cea\u554f\u306e\u3088\u3046\u306a\u30b7\u30f3\u30d7\u30eb\u306a\u3082\u306e\u304b\u3089\u3001\u8907\u6570\u6bb5\u843d\u306b\u308f\u305f\u308b\u3088\u3046\u306a\u8907\u96d1\u306a\u3082\u306e\u307e\u3067\u8272\u3005\u3042\u308a\u307e\u3059\u3002 "),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u30d7\u30ed\u30f3\u30d7\u30c8\u306e2\u3064\u306e\u4f8b\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"1-\u8ad6\u6587\u306e\u8981\u7d04"},"1) \u8ad6\u6587\u306e\u8981\u7d04"),(0,a.kt)("p",null,"\u3042\u306a\u305f\u304c\u30d5\u30ed\u30ea\u30c0\u306e\u964d\u96ea\u306b\u95a2\u3059\u308b\u8a18\u4e8b",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u3092\u8aad\u3093\u3067\u3044\u308b\u3068\u3057\u307e\u3059\u3002\u8a18\u4e8b\u306e\u6982\u8981\u3092\u3055\u3063\u3068\u628a\u63e1\u3059\u308b\u305f\u3081\u306b\u3001AI \u306b\u8a18\u4e8b\u3092\u8aad\u307f\u8fbc\u307e\u305b\u3001\u8981\u7d04\u3059\u308b\u3088\u3046\u306b\u6307\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.\n\nSummarize this paragraph in a single sentence:\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u304cAI\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u3059\u3002\u3068\u3066\u3082\u77ed\u304f\u306a\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("div",{className:"bluegreen-highlight"},"Snowfall is extremely rare in Florida, with the exception of the far northern areas, ",(0,a.kt)("br",null),"and only one instance of snow flurries in the air has been recorded in the major cities ",(0,a.kt)("br",null),"of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.")),(0,a.kt)("h4",{id:"2-\u6570\u5b66\u306e\u5358\u8a9e\u554f\u984c\u89e3\u6c7a"},"2) \u6570\u5b66\u306e\u5358\u8a9e\u554f\u984c\u89e3\u6c7a"),(0,a.kt)("p",null,'\u8a00\u8a9e\u30e2\u30c7\u30eb\u306b\u89e3\u304b\u305b\u305f\u3044\u6570\u5f0f\u306e\u304c\u3042\u308b\u5834\u5408\u3001"What is EQUATION" \u3068\u3044\u3046\u5f62\u5f0f\u3067\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002'),(0,a.kt)("p",null,"\u3042\u308b\u554f\u984c\u3092\u89e3\u304f\u305f\u3081\u306b\u6b21\u306e\u3088\u3046\u306a\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u305f\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"What is 965*590?\n")),(0,a.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u306b\u5bfe\u3057\u3066\u3001GPT-3 (text-davinci-003) (AI) \u306f\u3001569,050 \u3068\u8aa4\u7b54\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u305d\u3046\u3067\u3059\u3002\u305d\u3053\u3067\u3001\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u306e\u51fa\u756a\u3067\u3059\u3002"),(0,a.kt)("h1",{id:"\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0"},"\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0"),(0,a.kt)("p",null,"\u3082\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"What is 965*590? (965*590\u306f\u4f55\u3067\u3059\u304b?)")," \u3068\u5c0b\u306d\u308b\u4ee3\u308f\u308a\u306b\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct: (\u3042\u306a\u305f\u306e\u7b54\u3048\u304c\u6b63\u78ba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002965*590 \u306f\u4f55\u3067\u3059\u304b\uff1f\u3042\u306a\u305f\u306e\u7b54\u3048\u304c\u6b63\u78ba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044:)")," \u3068\u5c0b\u306d\u308b\u3068 GPT-3 \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"569350")," \u3068\u6b63\u89e3\u3057\u307e\u3059\u3002\u306a\u305c\u3053\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u8d77\u3053\u308b\u306e\u3067\u3057\u3087\u3046\u304b\uff1f\u306a\u305cAI\u306b\u6b63\u3057\u3044\u7b54\u3048\u3092\u51fa\u3059\u3088\u3046\u306b 2 \u56de\u6307\u793a\u3059\u308b\u3053\u3068\u304c\u6709\u7528\u306a\u306e\u3067\u3057\u3087\u3046\u304b\uff1f\u30bf\u30b9\u30af\u3067\u6700\u9069\u306a\u7d50\u679c\u3092\u3082\u305f\u3089\u3059\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u4f5c\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3044\u3044\u306e\u304b\uff1f\u3068\u304f\u306b\u3053\u306e\u6700\u5f8c\u306e\u7591\u554f\u304c\u3001\u30d7\u30ed\u30f3\u30d7\u30c8\u5de5\u5b66\u3068\u3044\u3046\u5206\u91ce\u3001\u305d\u3057\u3066\u3053\u306e\u8b1b\u5ea7\u306e\u7126\u70b9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u4e0a\u8a18\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u3092GPT-3\u3067\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u30e9\u30f3\u30c0\u30e0\u6027\u3092\u53d6\u308a\u9664\u304f\u305f\u3081\u306b temperature \u3092 0 \u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u826f\u3044\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076\u305f\u3081\u306b\u3001\u3064\u3065\u304d\u3092\u8aad\u3093\u3067\u307f\u307e\u3057\u3087\u3046\uff01"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., & Singh, S. (2020). AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). https://doi.org/10.18653/v1/2020.emnlp-main.346\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Snow_in_Florida"},"https://en.wikipedia.org/wiki/Snow_in_Florida")," \u3088\u308a",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);