/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// import { createRoot } from 'react-dom/client';\n// import { Page } from './src/components/Page';\n\n// function PricingModule() {\n//   return Page;\n// }\n\n// const domNode = document.getElementById('pricing');\n// const root = createRoot(domNode);\n// root.render(<PricingModule />);\n\n// Select The Elements\nvar toggle_btn;\nvar big_wrapper;\nvar hamburger_menu;\nfunction declare() {\n  toggle_btn = document.querySelector(\".toggle-btn\");\n  big_wrapper = document.querySelector(\".big-wrapper\");\n  hamburger_menu = document.querySelector(\".hamburger-menu\");\n}\nvar main = document.querySelector(\"main\");\ndeclare();\nvar dark = false;\nfunction toggleAnimation() {\n  // Clone the wrapper\n  dark = !dark;\n  var clone = big_wrapper.cloneNode(true);\n  if (dark) {\n    clone.classList.remove(\"light\");\n    clone.classList.add(\"dark\");\n  } else {\n    clone.classList.remove(\"dark\");\n    clone.classList.add(\"light\");\n  }\n  clone.classList.add(\"copy\");\n  main.appendChild(clone);\n\n  // block scroll during animation\n  document.body.classList.add(\"stop-scrolling\");\n  clone.addEventListener(\"animationend\", function () {\n    document.body.classList.remove(\"stop-scrolling\");\n    big_wrapper.remove();\n    clone.classList.remove(\"copy\");\n    // Reset Variables\n    declare();\n    events();\n  });\n}\nfunction events() {\n  toggle_btn.addEventListener(\"click\", toggleAnimation);\n  hamburger_menu.addEventListener(\"click\", function () {\n    big_wrapper.classList.toggle(\"active\");\n  });\n}\nevents();\n\n//# sourceURL=webpack://landing-page/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;