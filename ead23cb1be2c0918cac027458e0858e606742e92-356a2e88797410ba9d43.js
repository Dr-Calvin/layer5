(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"A2+M":function(e,n,t){var r=t("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,n,t){var r=t("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,n,t){var r=t("Ijbi"),a=t("EbDI"),o=t("ZhPi"),l=t("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},Scrh:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("Wbzz"),l=t("IdFE"),i=t("ZO1O"),s=t("vOnD").d.div.withConfig({displayName:"relatedPostsstyle__RelatedPostsWrapper",componentId:"sc-4o1l69-0"})(["\n\n    .widgets-title{\n        margin: 1rem 0 2rem 0.5rem;\n        h3{\n            font-size: 1.5rem;\n        }\n    }\n    @media screen and (max-width:500px){\n        .widgets-title{\n            h3{\n                text-align: center;\n            }\n        }\n    }\n\n    .cardCol{\n        padding: 0 1rem;\n    }\n    @media screen and (max-width: 992px) {\n        .cardCol{\n            padding: 0 1rem;\n            margin: auto;\n        }\n    }\n\n    .slick-list{\n        padding-top: 2px;\n        text-align: center;\n    }\n    @media screen and (max-width: 992px) {\n        .slick-list{\n            margin: 0;\t\n        }\n    }\n\n    .slick-arrow{\n        width: 4.8rem;\t\n        height: 5rem;\n    }\t\n    .slick-arrow:before{\t\n        color: ",";\n        font-size: 6rem;\n        display: inline-block;\n        height: 3rem;\n    }\n    .slick-arrow:hover:before{\t\n        color: ",';\t\n    }\n    .slick-prev:before{\t\n        content: "‹";\t\n        line-height: 0;\n        opacity: 1;\n        color: ',';\n        margin-left: -3rem;\n    }\n    .slick-next:before{\t\n        content: "›";\n        line-height: 0;\n        opacity: 1;\n        margin-left: 2rem;\n        color: ',";\n    }\n    .slick-disabled{\t\n        visibility: hidden;\n    }\n    .slick-dots li button:before {\n        font-size: 0.6rem;\n        color: ",";\n    }\n    .slick-dots li.slick-active button:before {\n        opacity: 1;\n        color: ",";\n    }\n\n    .post-meta-block{\n        text-align: left;\n    }\n\n    .post-content-block{\n        height: 10rem;\n\n        .post-title {\n            text-align: left;\n        }\n    }\n\n    .allBlogs{\n        height: 22rem;\n    }\n\n    @media screen and (min-width: 1200px) {\n        .post-content-block {\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    @media screen and (max-width: 720px) and (min-width: 385px){\n        .post-content-block{\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    .allBlogs_card{\n        display: inline-block;\n        height: inherit;\n        width: inherit;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: box-shadow 0.3s;\n\n        h2{\n            padding: 0.5rem 0;\n        }\n\n        a{\n            height: inherit;\n            width: inherit;\n            font-size: 1.8rem;\n            font-weight: 600;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            svg{\n                margin-left: 0px;\n                padding: 0.5rem 0 0.3rem;\n                font-size: 4rem;\n                transition: all 0.3s;\n            }\n        }\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            h2{\n                color: ",";\n            }\n            svg{\n                color: ",";\n                margin-left: 3px;\n                transform: scale(1.3);\n            }\n        }\n    }\n"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),c=t("xFQ1"),m=t("OS56"),p=t.n(m);n.a=function(e){var n=e.postType,t=e.relatedPosts,r=e.mainHead,m=e.lastCardHead,u=e.linkToAllItems;return a.a.createElement(s,null,a.a.createElement("div",{className:"widgets-title"},a.a.createElement("h3",null,r)),"undefined"!=typeof window&&a.a.createElement(p.a,{dots:window.innerWidth<992,arrows:window.innerWidth>=992,infinite:!1,speed:"500",slidesToShow:window.innerWidth<=720?1:window.innerWidth<=991?2:3,slidesToScroll:1},"blogs"===n?t.map((function(e){var n=e.post;return a.a.createElement(c.a,{className:"cardCol",xs:12,key:n.fields.slug},a.a.createElement(i.a,{frontmatter:n.frontmatter,fields:n.fields}))})):t.map((function(e){return a.a.createElement(c.a,{className:"cardCol",xs:12,key:e.fields.slug},a.a.createElement(i.a,{frontmatter:e.frontmatter,fields:e.fields}))})),a.a.createElement(c.a,{xs:12,lg:12,className:"allBlogs"},a.a.createElement("div",{className:"allBlogs_card"},a.a.createElement(o.Link,{to:u},a.a.createElement("h2",null,m),a.a.createElement(l.e,null))))))}},WkPL:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,n,t){var r=t("sXyB"),a=t("RIqP"),o=t("lSNA"),l=t("8OQS");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=t("q1tI"),m=t("7ljp").mdx,p=t("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,t=e.children,o=l(e,["scope","children"]),i=p(n),u=c.useMemo((function(){if(!t)return null;var e=s({React:c,mdx:m},i),n=Object.keys(e),o=n.map((function(n){return e[n]}));return r(Function,["_fn"].concat(a(n),[""+t])).apply(void 0,[{}].concat(a(o)))}),[t,n]);return c.createElement(u,s({},o))}},YP3a:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("Wbzz"),l=t("m7xX"),i=t.n(l),s=t("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=t("tBDR"),m=function(e,n){return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(o.Link,{to:"/community/members/"+i()(e.name)},a.a.createElement("span",null,e.name)):a.a.createElement("span",null,e.name))};n.a=function(e){var n=e.category,t=e.title,r=e.subtitle,l=e.author,p=e.thumbnail,u=!1;l&&(u=Object(o.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==l.name})));return a.a.createElement(s,null,a.a.createElement("div",{className:"page-header"},p&&a.a.createElement("div",{className:"feature-image"},a.a.createElement(c.a,Object.assign({},p,{imgStyle:{objectFit:"contain"},alt:t}))),a.a.createElement("h1",null,t),r&&a.a.createElement("h3",null,r),n&&a.a.createElement("div",{className:"breadcrumbs"},a.a.createElement("span",null,a.a.createElement("h5",null,"Category:"),a.a.createElement("p",{key:n},a.a.createElement(o.Link,{to:"/blog/category/"+i()(n)},a.a.createElement("span",null,n)))),l&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,a.a.createElement("h5",null,"By:"),a.a.createElement("p",null,m(l,u))))),!n&&l&&a.a.createElement("div",{className:"breadcrumbs post"},a.a.createElement("h5",null,"By:"),a.a.createElement("span",null,m(l,u)))))}},ZO1O:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),o=t("Wbzz"),l=t("IdFE"),i=t("qtta"),s=t("tBDR"),c=t("vOnD").d.div.withConfig({displayName:"Cardstyle__CardWrapper",componentId:"sc-1sunj6k-0"})(["\n    .post-block{\n        margin-bottom: 2rem;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: all 0.3s ease-in;\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            .post-thumb-block{\n                .gatsby-image-wrapper{\n                    transform: scale3d(1.1,1.1,1);\n                }\n            }\n            .readmore-btn{\n                color: ",";\n                svg{\n                    margin-left: 0.25rem;\n                    transform: scale(1.2);\n                }\n            }\n        } \n    }\n\n    @media screen and (max-width:776px){\n\t\t.post-block{\n\t\t\twidth: auto;\n\t\t\tmargin: auto auto 2rem;\n\t\t}\n\t}\n\n    .post-thumb-block{\n        overflow: hidden;\n        height: 11.5rem;\n        border-top-right-radius: 0.5rem;\n        border-top-left-radius: 0.5rem;\n\n        .gatsby-image-wrapper{\n            height:100%;\n            transition: all 0.3s ease-in;\n        }\n        img{\n            height: inherit;\n            max-height: 180px;\n            display: block;\n            text-align: center;\n            margin: auto;\n        }\n    }\n\n    .post-content-block{\n        padding: 1rem 2rem;\n        height: 8rem;\n    }\n\n    @media screen and (max-width: 1200px) and (min-width: 992px){\n        .post-thumb-block{\n            height: 12rem;\n        }\n\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    @media screen and (max-width: 670px) and (min-width: 560px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    @media screen and (max-width: 350px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    .post-title{\n        font-size: 1.4rem;\n        font-weight: 400;\n        color: black;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .post-meta-block{\n        height: auto;\n        display: flex;\n\n        .author{\n            text-align: end;\n        }\n        .author, p{\n            color: rgba(0, 0, 0, 0.4);\n            font-size: 0.9rem;\n            font-weight: 400;\n            flex: auto;\n        }\n    }\n\n    .readmore-btn-wrapper{\n        display:flex;\n        justify-content: flex-start;\n    }\n\n    .readmore-btn::after{\n        content: '';\n        position: absolute;\n        margin: 0 1rem 2rem;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n    }\n\n    .readmore-btn, .external-link-btn{\n       color: rgba(0,0,0,0.4);\n       display: flex;\n       flex: auto;\n       align-items: center;\n       transition: all 0.3s ease-in;\n       svg{\n           font-size: 1.5rem;\n           transition: all 0.3s;\n       }\n    }\n\n    .external-link-btn{\n        justify-content: flex-end;\n        svg{\n            font-size: 2rem;\n            padding: 0.25rem;\n            position: relative;\n        }\n\n        &:hover{\n            color: ",";\n            svg{\n                transform: scale(1.25);\n            }\n        }\n    }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}));n.a=function(e){var n=e.frontmatter,t=e.fields;return a.a.createElement(c,{fixed:!!n.abstract},a.a.createElement("div",{className:"post-block"},a.a.createElement("div",{className:"post-thumb-block"},a.a.createElement(s.a,Object.assign({},n.thumbnail,{imgStyle:{objectFit:"contain"},alt:n.title}))),a.a.createElement("div",{className:"post-content-block"},a.a.createElement("h2",{className:"post-title"},n.title),a.a.createElement("div",{className:"post-meta-block"},n.date&&n.author&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,n.date),a.a.createElement("p",{className:"author"},n.author)),n.date&&!n.author&&a.a.createElement("p",null,n.date),!n.date&&n.author&&a.a.createElement("p",{className:"author"},n.author)),a.a.createElement("div",{className:"readmore-btn-wrapper"},t&&t.slug&&n.eurl&&a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Link,{className:"readmore-btn",to:t.slug},"see more ",a.a.createElement(l.e,null)),a.a.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},a.a.createElement(i.a,null))),t&&t.slug&&!n.eurl&&a.a.createElement(o.Link,{className:"readmore-btn",to:t.slug},"see more ",a.a.createElement(l.e,null)),!t&&!t.slug&&n.eurl&&a.a.createElement("a",{className:"external-link-btn",href:n.eurl,target:"_blank",rel:"noreferrer"},a.a.createElement(i.a,null))))))}},ZhPi:function(e,n,t){var r=t("WkPL");e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},m7xX:function(e,n){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},sXyB:function(e,n,t){var r=t("SksO"),a=t("b48C");function o(n,t,l){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,n,t){var a=[null];a.push.apply(a,n);var o=new(Function.bind.apply(e,a));return t&&r(o,t.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},tBDR:function(e,n,t){"use strict";var r=t("zLVn"),a=t("q1tI"),o=t.n(a),l=t("9eSz"),i=t.n(l);n.a=function(e){var n=e.childImageSharp,t=e.extension,a=e.publicURL,l=e.alt,s=Object(r.a)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==t?o.a.createElement(i.a,Object.assign({fluid:n.fluid},s,{alt:l})):o.a.createElement("div",{className:"gatsby-image-wrapper"},o.a.createElement("img",{src:a,alt:l}))}}}]);
//# sourceMappingURL=ead23cb1be2c0918cac027458e0858e606742e92-356a2e88797410ba9d43.js.map