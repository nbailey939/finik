(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = ()=>{
    const [nav, setNav] = (0,external_react_.useState)(false);
    const [color, setColor] = (0,external_react_.useState)("transparent");
    const [textColor, setTextColor] = (0,external_react_.useState)("white");
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const darkmode = ()=>{
        setTheme(theme == "dark" ? "light" : "dark");
        window.location.reload();
    };
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    const handleNav = ()=>{
        ``;
        setNav(!nav);
    };
    (0,external_react_.useEffect)(()=>{
        const changeColor = ()=>{
            if (window.scrollY >= 90) {
                if (theme == "dark") {
                    setColor("#171a18");
                    setTextColor("#ffffff");
                } else {
                    setColor("#ffffff");
                    setTextColor("#000000");
                }
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        // if(theme=="dark"){
        //     setColor('#171a18');
        //     setTextColor('#ffffff');
        //   }
        //   else{
        //   setColor('#ffffff');
        //   setTextColor('#000000');
        //   }
        };
        window.addEventListener("scroll", changeColor);
        window.addEventListener("click", changeColor);
    }, [
        theme
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            backgroundColor: `${color}`
        },
        className: "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white dark:dark:bg-[#171a18]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1240px] m-auto flex justify-between items-center p-4 text-white hover:text-[#B38D24]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        style: {
                            color: `${textColor}`
                        },
                        className: "font-bold text-4xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "",
                                height: 70,
                                width: 75,
                                src: "/../public/logo.webp"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                alt: "",
                                className: "pb-30px mb-30px",
                                height: 40,
                                width: 110,
                                src: "/../public/finik.webp"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    style: {
                        color: `${textColor}`
                    },
                    className: "hidden sm:flex font-semibold",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 hover:text-[#B38D24]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 hover:text-[#B38D24]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#about",
                                children: "About us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 hover:text-[#B38D24]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#solutions",
                                children: "Solutions"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "p-4 hover:text-[#B38D24]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contact",
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                id: "darkmodebtn",
                                "aria-label": "Toggle Dark Mode",
                                type: "button",
                                className: "w-10 h-10 p-3 rounded focus:outline-none",
                                onClick: ()=>darkmode(),
                                children: mounted && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
                                    children: theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    })
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: handleNav,
                    className: "block sm:hidden z-10",
                    children: nav ? /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {
                        size: 20,
                        style: {
                            color: `${textColor}`
                        }
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMenu, {
                        size: 20,
                        style: {
                            color: `${textColor}`
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleNav,
                                className: "p-4 text-4xl hover:text-gray-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleNav,
                                className: "p-4 text-4xl hover:text-gray-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#about",
                                    children: "Gallery"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleNav,
                                className: "p-4 text-4xl hover:text-gray-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#solutions",
                                    children: "Solutions"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: handleNav,
                                className: "p-4 text-4xl hover:text-gray-500",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/#contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: external "next/Image"
const Image_namespaceObject = require("next/Image");
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_namespaceObject);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 dark:bg-[#3d3d3d]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                alt: "",
                                src: "/../public/logo_full.webp",
                                width: "100",
                                height: "130"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: " rounded-xl p-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-800 dark:text-white font-bold text-xl pb-4",
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: " text-gray-500 dark:text-white text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                height: "15",
                                                width: "15",
                                                alt: "",
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIieXWPUscURTG8d8qamyUWJldsU5K8ROYPr4QsAsI6UO6FSVfJzYioo0h3yBBfAExabQwhWKhQYgoihYzC8tm2HtndtTCB05z7zznfzhzODM8N1VyPDuEaUziNUbS8z/YxxpWcVZWcf1YxF/cBeIcC6mnI1XxIwLYGlsYLQodkbQxL7QRR6jlhfZjswNoI37iRR7wlxKgjZiPhQ6JG6TYOMfLVkhXBngGA7FVRmgQUzHgd4FE16hLBqcmaeV1wDMZUaDf2reunuGpBzy/YsAXgSSvMjzDAc9FqyGr1T2BwrLWbHfA8999Fvg4kORD5FmzTgL3YEX7tl1J3mk1jXp61s6zHAOeDSQpEu9jwH04LRF6gt4YMHwsETwXCyWZ3O8lQDfk+9lAsjZ3OoDuydjRsaphtwB0WzLxHWkQ6zmgq0r8yFTwGZdtgP/wSYF3GqM3OMyAHqR3D6px3DZBbzD20NCGlprAXx8LCm+bwBOPCa7gm4IL4kl1D6g+L/ymwoEkAAAAAElFTkSuQmCC"
                                            }),
                                            " Grand Wijaya Center D12, South Jakarta "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "flex text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRElEQVRoge3ZO2sUURiH8d8aYwTRRjFeMCBWGksRSxHtlDSioCBC1I8g+AnETq3Ub2ARjNcQSaGBIMRCI3hDQRGsjAlKBFFhLY5b5DI7cybunC32gbdYmFn+D+dwLu/QoUNSBjCJ73iKfWnjxNONa6gvqFlsTZgrirV4YLFEo+6ni1acLXgpW6JRp1IFLEIv3sqXqGMGm9PEbM4qTCgm0ajbSZLmcEGcRKNOpgjbjI/KiUxjU4K8mcwpJ1LHUIK8mbxTXqSO49VHXpohyxN5U33kwIoFv0eX+X99y3z/v7ERf5QfkSfVR85mTHmRttrpB5STeG7xVE1KDVPiRQ6lCJvHMXESd9LEzKeGccVFBtPELEY/fikmMoMdaWIW45Lio/IMa9LEzKdHCFhUZuzfO23JLvxQXOYWViZJWoCz4laxG8KC0ZYs1U1pVpfTxMynG4/EyVzRpiPTi/fip1lXirB59OGTOJlhrE4RNo/d+CpOZtTS+0wXTgut2N94LRyRKmOv0AuOkZky/wRwQPY+dVdoFFbCQfxsEjzrODOIewWencaJqmQGSsjE1rCKOpr7xU+z2JrFuSpk9uBLi2XqGMG2Vsv043MFMrPCYtNStovfNMvUZKtFCG2lmBtmmfpWhQjhE8X1FopMVCXS4Iy4+0zROlylRIOd4m6aeXW12vjz6cFFxRsaWTWiTW6g/XisnMQLrKs+cjY1HBU33V4J96G2pIYjeCgc4bMkxrEhUcZo1gun4pvCB6M5fMB54ZrdoUMK/gIkOoi24oe75gAAAABJRU5ErkJggg==",
                                                alt: "",
                                                height: "15",
                                                width: "15"
                                            }),
                                            " +62...."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "flex text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Image_default()), {
                                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA/klEQVRIie3TIUsEURQF4G9HiyzYDBbFLgbDRoOIKCx2sZisRqvRatxqtBr0D2jZZDWpaxZEi6KMwTfwVmaHhzOCyB44Yd6595zLe3cY4y9hHbfIa/IOa4VpFgVsYb6BQeewUiZk2MNTjekfg0eraoJZnPzA/BQzVcbn6EbfXWlvcoPVqG8H/bKAouHM1z3CFA7xWmL8hmO0Q+0CLiJ9ZECOFxxgImhLuIr0SywGbRL7eP7mURlQsI/loGfYDiy2r4PrEb1JATk+0MN0VNvGEd4r+pIDCt5jN3CQUI/hfS1NrYEWw3/yr+B/BTw06DsoO9yUth0p27bR4LBj1MQnwB2aS1VuVgwAAAAASUVORK5CYII=",
                                                alt: "",
                                                height: "15",
                                                width: "15"
                                            }),
                                            " info@finik-tech.com"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex py-4 flex-col justify-center items-center text-center pb-5 bg-gray-50 dark:bg-[#1c1c1c] ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: " text-gray-800 dark:text-white font-semibold dark:bg-[#1c1c1c]",
                    children: "\xa9All rights reserved.  PT. Finik Teknologi Solusi 2022"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
            defaultTheme: "light",
            attribute: "class",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dark:bg-[#171a18]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61], () => (__webpack_exec__(858)));
module.exports = __webpack_exports__;

})();