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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "@auth/mongodb-adapter":
/*!****************************************!*\
  !*** external "@auth/mongodb-adapter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@auth/mongodb-adapter");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// mongo db connection from next auth\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClient) {\n        global._mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    }\n    client = global._mongoClient;\n} else {}\n// Export a module-scoped MongoClient. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQ0FBcUM7QUFDbUI7QUFFeEQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHdEQUFtQjtRQUM1QlUsUUFBUSxJQUFJO1FBQ1pDLG1CQUFtQixJQUFJO0lBQ3pCO0FBQ0Y7QUFFQSxJQUFJQztBQUVKLElBQUlYLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNZLE9BQU9DLFlBQVksRUFBRTtRQUN4QkQsT0FBT0MsWUFBWSxHQUFHLElBQUlmLGdEQUFXQSxDQUFDTSxLQUFLQztJQUM3QyxDQUFDO0lBQ0RNLFNBQVNDLE9BQU9DLFlBQVk7QUFDOUIsT0FBTyxFQUdOO0FBRUQseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9uZ28gZGIgY29ubmVjdGlvbiBmcm9tIG5leHQgYXV0aFxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xyXG59XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBzZXJ2ZXJBcGk6IHtcclxuICAgIHZlcnNpb246IFNlcnZlckFwaVZlcnNpb24udjEsXHJcbiAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICBkZXByZWNhdGlvbkVycm9yczogdHJ1ZSxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnQpIHtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICB9XHJcbiAgY2xpZW50ID0gZ2xvYmFsLl9tb25nb0NsaWVudDtcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50LiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDbkMsSUFBSUwsdUVBQThCLEtBQUssR0FBRztRQUN4QyxPQUFPQSxvRUFBNkI7SUFDdEMsT0FBTztRQUNMLE1BQU1FLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUNuQyxPQUFPTCx1REFBZ0IsQ0FBQ0U7SUFDMUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9uZ29vc2VDb25uZWN0KCkge1xyXG4gIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uLmFzUHJvbWlzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHVyaSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm1vbmdvb3NlQ29ubmVjdCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiYXNQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mongodb.js */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst adminEmails = [\n    \"cartellord77@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        // OAuth authentication providers....ya\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: \"673912541771-ka08l7vuoddd7cb9rlqr5bqu15fcjumm.apps.googleusercontent.com\",\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__.MongoDBAdapter)(_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    callbacks: {\n        session: ({ session  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    },\n    debug: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions)); //Hacking prevention\n // security measures\n // export async function isAdminRequest(req, res) {\n //   try {\n //     const session = await getServerSession(req, res, authOptions);\n //     if (!session) {\n //       res.status(401).end(\"Unauthorized\");\n //       throw new Error(\"No session found\");\n //     }\n //     if (!adminEmails.includes(session?.user?.email)) {\n //       res.status(401).end(\"Unauthorized\");\n //       throw new Error(\"Not an admin\");\n //     }\n //   } catch (error) {\n //     console.error(\"Error in isAdminRequest:\", error);\n //     res.status(500).end(\"Internal Server Error\");\n //   }\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3RCO0FBQ1k7QUFDQTtBQUVXO0FBRXhELE1BQU1LLGNBQWM7SUFBQztDQUF5QjtBQUV2QyxNQUFNQyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1QsdUNBQXVDO1FBRXZDSCxpRUFBY0EsQ0FBQztZQUNiSSxVQUFVQywwRUFBaUM7WUFDM0NHLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztLQUNEO0lBQ0RDLFNBQVNkLHFFQUFjQSxDQUFDRSx1REFBTUE7SUFDOUJhLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLFFBQU8sRUFBRSxHQUFLO1lBQ3hCLElBQUlYLFlBQVlZLFFBQVEsQ0FBQ0QsU0FBU0UsTUFBTUMsUUFBUTtnQkFDOUMsT0FBT0g7WUFDVCxPQUFPO2dCQUNMLE9BQU8sS0FBSztZQUNkLENBQUM7UUFDSDtJQUNGO0lBQ0FJLE9BQU8sSUFBSTtBQUNiLEVBQUU7QUFDRixpRUFBZW5CLGdEQUFRQSxDQUFDSyxZQUFZQSxFQUFDLENBQ3JDLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsbURBQW1EO0NBQ25ELFVBQVU7Q0FDVixxRUFBcUU7Q0FDckUsc0JBQXNCO0NBQ3RCLDZDQUE2QztDQUM3Qyw2Q0FBNkM7Q0FDN0MsUUFBUTtDQUNSLHlEQUF5RDtDQUN6RCw2Q0FBNkM7Q0FDN0MseUNBQXlDO0NBQ3pDLFFBQVE7Q0FDUixzQkFBc0I7Q0FDdEIsd0RBQXdEO0NBQ3hELG9EQUFvRDtDQUNwRCxNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGIuanNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmNvbnN0IGFkbWluRW1haWxzID0gW1wiY2FydGVsbG9yZDc3QGdtYWlsLmNvbVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVycy4uLi55YVxyXG5cclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnQpLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiB9KSA9PiB7XHJcbiAgICAgIGlmIChhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWJ1ZzogdHJ1ZSwgLy8gRW5hYmxlIGRlYnVnIG1vZGUgdG8gZ2V0IG1vcmUgZGV0YWlsZWQgZXJyb3IgbWVzc2FnZXNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4vL0hhY2tpbmcgcHJldmVudGlvblxyXG4vLyBzZWN1cml0eSBtZWFzdXJlc1xyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pblJlcXVlc3QocmVxLCByZXMpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuLy8gICAgIGlmICghc2Vzc2lvbikge1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwMSkuZW5kKFwiVW5hdXRob3JpemVkXCIpO1xyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZXNzaW9uIGZvdW5kXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuLy8gICAgICAgcmVzLnN0YXR1cyg0MDEpLmVuZChcIlVuYXV0aG9yaXplZFwiKTtcclxuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGFuIGFkbWluXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gaXNBZG1pblJlcXVlc3Q6XCIsIGVycm9yKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIik7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJNb25nb0RCQWRhcHRlciIsIk5leHRBdXRoIiwiY2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiYWRtaW5FbWFpbHMiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsImluY2x1ZGVzIiwidXNlciIsImVtYWlsIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__]);\n_auth_nextauth___WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// to read file\n\n\n\nconst bucketName = \"cartel-next-ecommerce\";\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    // await isAdminRequest(req, res);\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    // creating random name for files\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFilename = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFilename,\n            Body: fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_2___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM0QjtBQUNsQztBQUM5QixlQUFlO0FBQ0s7QUFDaUM7QUFDQztBQUV0RCxNQUFNTyxhQUFhO0FBRUosZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUwsOERBQWVBO0lBQ3JCLGtDQUFrQztJQUNsQyxNQUFNTSxPQUFPLElBQUlYLHdEQUFlO0lBRWhDLE1BQU0sRUFBRWEsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvRE4sS0FBS08sS0FBSyxDQUFDVCxLQUFLLENBQUNVLEtBQUtOLFFBQVFDLFFBQVU7WUFDdEMsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUVIO2dCQUFRQztZQUFNO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNTSxTQUFTLElBQUlsQix3REFBUUEsQ0FBQztRQUMxQm1CLFFBQVE7UUFDUkMsYUFBYTtZQUNYQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7WUFDdENDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFFBQVEsRUFBRTtJQUVoQixpQ0FBaUM7SUFDakMsS0FBSyxNQUFNQyxRQUFRaEIsTUFBTWdCLElBQUksQ0FBRTtRQUM3QixNQUFNQyxNQUFNRCxLQUFLRSxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUc7UUFDaEQsTUFBTUMsY0FBY0MsS0FBS0MsR0FBRyxLQUFLLE1BQU1OO1FBRXZDLE1BQU1YLE9BQU9rQixJQUFJLENBQ2YsSUFBSXJDLGdFQUFnQkEsQ0FBQztZQUNuQnNDLFFBQVFoQztZQUNSaUMsS0FBS0w7WUFDTE0sTUFBTXJDLHNEQUFlLENBQUMwQixLQUFLYSxJQUFJO1lBQy9CQyxLQUFLO1lBQ0xDLGFBQWExQyx3REFBVyxDQUFDMkIsS0FBS2EsSUFBSTtRQUNwQztRQUVGLE1BQU1JLE9BQU8sQ0FBQyxRQUFRLEVBQUV4QyxXQUFXLGtCQUFrQixFQUFFNEIsWUFBWSxDQUFDO1FBQ3BFTixNQUFNbUIsSUFBSSxDQUFDRDtJQUNiO0lBRUEsT0FBT3JDLElBQUl1QyxJQUFJLENBQUM7UUFBRXBCO0lBQU07QUFDMUIsQ0FBQztBQUVNLE1BQU1xQixTQUFTO0lBQ3BCQyxLQUFLO1FBQUVDLFlBQVksS0FBSztJQUFDO0FBQzNCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRpcGFydHkgZnJvbSBcIm11bHRpcGFydHlcIjtcclxuaW1wb3J0IHsgUHV0T2JqZWN0Q29tbWFuZCwgUzNDbGllbnQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXMzXCI7XHJcbmltcG9ydCBtaW1lIGZyb20gXCJtaW1lLXR5cGVzXCI7XHJcbi8vIHRvIHJlYWQgZmlsZVxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCIuLi8uLi9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgaXNBZG1pblJlcXVlc3QgfSBmcm9tIFwiLi9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuXHJcbmNvbnN0IGJ1Y2tldE5hbWUgPSBcImNhcnRlbC1uZXh0LWVjb21tZXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gIC8vIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcclxuICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpO1xyXG5cclxuICBjb25zdCB7IGZpZWxkcywgZmlsZXMgfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBuZXcgUzNDbGllbnQoe1xyXG4gICAgcmVnaW9uOiBcImV1LW5vcnRoLTFcIixcclxuICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5TM19BQ0NFU1NfS0VZLFxyXG4gICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlMzX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbXTtcclxuXHJcbiAgLy8gY3JlYXRpbmcgcmFuZG9tIG5hbWUgZm9yIGZpbGVzXHJcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzLmZpbGUpIHtcclxuICAgIGNvbnN0IGV4dCA9IGZpbGUub3JpZ2luYWxGaWxlbmFtZS5zcGxpdChcIi5cIikucG9wKCk7XHJcbiAgICBjb25zdCBuZXdGaWxlbmFtZSA9IERhdGUubm93KCkgKyBcIi5cIiArIGV4dDtcclxuXHJcbiAgICBhd2FpdCBjbGllbnQuc2VuZChcclxuICAgICAgbmV3IFB1dE9iamVjdENvbW1hbmQoe1xyXG4gICAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcclxuICAgICAgICBLZXk6IG5ld0ZpbGVuYW1lLFxyXG4gICAgICAgIEJvZHk6IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpLFxyXG4gICAgICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxyXG4gICAgICAgIENvbnRlbnRUeXBlOiBtaW1lLmxvb2t1cChmaWxlLnBhdGgpLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly8ke2J1Y2tldE5hbWV9LnMzLmFtYXpvbmF3cy5jb20vJHtuZXdGaWxlbmFtZX1gO1xyXG4gICAgbGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbih7IGxpbmtzIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsibXVsdGlwYXJ0eSIsIlB1dE9iamVjdENvbW1hbmQiLCJTM0NsaWVudCIsIm1pbWUiLCJmcyIsIm1vbmdvb3NlQ29ubmVjdCIsImlzQWRtaW5SZXF1ZXN0IiwiYnVja2V0TmFtZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmb3JtIiwiRm9ybSIsImZpZWxkcyIsImZpbGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImNsaWVudCIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiUzNfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIlMzX1NFQ1JFVF9BQ0NFU1NfS0VZIiwibGlua3MiLCJmaWxlIiwiZXh0Iiwib3JpZ2luYWxGaWxlbmFtZSIsInNwbGl0IiwicG9wIiwibmV3RmlsZW5hbWUiLCJEYXRlIiwibm93Iiwic2VuZCIsIkJ1Y2tldCIsIktleSIsIkJvZHkiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiQUNMIiwiQ29udGVudFR5cGUiLCJsb29rdXAiLCJsaW5rIiwicHVzaCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();