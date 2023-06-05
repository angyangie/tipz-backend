"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/request";
exports.ids = ["pages/api/request"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"info\",\n        \"warn\",\n        \"error\"\n    ]\n});\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QztBQU03QyxNQUFNQyxNQUFNLEdBQ1ZDLE1BQU0sQ0FBQ0QsTUFBTSxJQUNiLElBQUlELHdEQUFZLENBQUM7SUFDZkcsR0FBRyxFQUFFO1FBQUMsTUFBTTtRQUFFLE1BQU07UUFBRSxPQUFPO0tBQUM7Q0FDL0IsQ0FBQztBQUVKLElBQUlDLElBQXFDLEVBQUVGLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0FBRWpFLGlFQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbC5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBbJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICB9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/request.js":
/*!******************************!*\
  !*** ./pages/api/request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findBrand)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n// POST /api/find/brand\nasync function findBrand(req, res) {\n    const type = req.body.type;\n    delete req.body.type;\n    res.json(await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"][type].findMany(req.body));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUVyQyx1QkFBdUI7QUFDUixlQUFlQyxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELElBQUk7SUFDMUIsT0FBT0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELElBQUk7SUFDcEJELEdBQUcsQ0FBQ0csSUFBSSxDQUFDLE1BQU1OLG1EQUFNLENBQUNJLElBQUksQ0FBQyxDQUFDRyxRQUFRLENBQUVMLEdBQUcsQ0FBQ0csSUFBSSxDQUFFLENBQUM7Q0FDcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVxdWVzdC5qcz9iNWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcblxuLy8gUE9TVCAvYXBpL2ZpbmQvYnJhbmRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRCcmFuZChyZXEsIHJlcykge1xuICAgIGNvbnN0IHR5cGUgPSByZXEuYm9keS50eXBlXG4gICAgZGVsZXRlIHJlcS5ib2R5LnR5cGVcbiAgICByZXMuanNvbihhd2FpdCBwcmlzbWFbdHlwZV0uZmluZE1hbnkoIHJlcS5ib2R5ICkpXG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiZmluZEJyYW5kIiwicmVxIiwicmVzIiwidHlwZSIsImJvZHkiLCJqc29uIiwiZmluZE1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/request.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/request.js"));
module.exports = __webpack_exports__;

})();