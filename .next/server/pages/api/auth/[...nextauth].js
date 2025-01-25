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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// mongo db connection from next auth\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClient) {\n        global._mongoClient = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    }\n    client = global._mongoClient;\n} else {}\n// Export a module-scoped MongoClient. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQ0FBcUM7QUFDbUI7QUFFeEQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXVEO0FBQ3pFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHdEQUFtQjtRQUM1QlUsUUFBUSxJQUFJO1FBQ1pDLG1CQUFtQixJQUFJO0lBQ3pCO0FBQ0Y7QUFFQSxJQUFJQztBQUVKLElBQUlYLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNZLE9BQU9DLFlBQVksRUFBRTtRQUN4QkQsT0FBT0MsWUFBWSxHQUFHLElBQUlmLGdEQUFXQSxDQUFDTSxLQUFLQztJQUM3QyxDQUFDO0lBQ0RNLFNBQVNDLE9BQU9DLFlBQVk7QUFDOUIsT0FBTyxFQUdOO0FBRUQseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxpRUFBZUYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9uZ28gZGIgY29ubmVjdGlvbiBmcm9tIG5leHQgYXV0aFxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xyXG59XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBzZXJ2ZXJBcGk6IHtcclxuICAgIHZlcnNpb246IFNlcnZlckFwaVZlcnNpb24udjEsXHJcbiAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICBkZXByZWNhdGlvbkVycm9yczogdHJ1ZSxcclxuICB9LFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnQpIHtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICB9XHJcbiAgY2xpZW50ID0gZ2xvYmFsLl9tb25nb0NsaWVudDtcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50LiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJTZXJ2ZXJBcGlWZXJzaW9uIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjbGllbnQiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mongodb.js */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst adminEmails = [\n    \"cartellord77@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        // OAuth authentication providers....ya\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: \"673912541771-ka08l7vuoddd7cb9rlqr5bqu15fcjumm.apps.googleusercontent.com\",\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__.MongoDBAdapter)(_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    callbacks: {\n        session: ({ session  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    },\n    debug: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions)); //Hacking prevention\n // security measures\n // export async function isAdminRequest(req, res) {\n //   try {\n //     const session = await getServerSession(req, res, authOptions);\n //     if (!session) {\n //       res.status(401).end(\"Unauthorized\");\n //       throw new Error(\"No session found\");\n //     }\n //     if (!adminEmails.includes(session?.user?.email)) {\n //       res.status(401).end(\"Unauthorized\");\n //       throw new Error(\"Not an admin\");\n //     }\n //   } catch (error) {\n //     console.error(\"Error in isAdminRequest:\", error);\n //     res.status(500).end(\"Internal Server Error\");\n //   }\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3RCO0FBQ1k7QUFDQTtBQUVXO0FBRXhELE1BQU1LLGNBQWM7SUFBQztDQUF5QjtBQUV2QyxNQUFNQyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1QsdUNBQXVDO1FBRXZDSCxpRUFBY0EsQ0FBQztZQUNiSSxVQUFVQywwRUFBaUM7WUFDM0NHLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztLQUNEO0lBQ0RDLFNBQVNkLHFFQUFjQSxDQUFDRSx1REFBTUE7SUFDOUJhLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLFFBQU8sRUFBRSxHQUFLO1lBQ3hCLElBQUlYLFlBQVlZLFFBQVEsQ0FBQ0QsU0FBU0UsTUFBTUMsUUFBUTtnQkFDOUMsT0FBT0g7WUFDVCxPQUFPO2dCQUNMLE9BQU8sS0FBSztZQUNkLENBQUM7UUFDSDtJQUNGO0lBQ0FJLE9BQU8sSUFBSTtBQUNiLEVBQUU7QUFDRixpRUFBZW5CLGdEQUFRQSxDQUFDSyxZQUFZQSxFQUFDLENBQ3JDLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsbURBQW1EO0NBQ25ELFVBQVU7Q0FDVixxRUFBcUU7Q0FDckUsc0JBQXNCO0NBQ3RCLDZDQUE2QztDQUM3Qyw2Q0FBNkM7Q0FDN0MsUUFBUTtDQUNSLHlEQUF5RDtDQUN6RCw2Q0FBNkM7Q0FDN0MseUNBQXlDO0NBQ3pDLFFBQVE7Q0FDUixzQkFBc0I7Q0FDdEIsd0RBQXdEO0NBQ3hELG9EQUFvRDtDQUNwRCxNQUFNO0NBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGIuanNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmNvbnN0IGFkbWluRW1haWxzID0gW1wiY2FydGVsbG9yZDc3QGdtYWlsLmNvbVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVycy4uLi55YVxyXG5cclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnQpLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiB9KSA9PiB7XHJcbiAgICAgIGlmIChhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkZWJ1ZzogdHJ1ZSwgLy8gRW5hYmxlIGRlYnVnIG1vZGUgdG8gZ2V0IG1vcmUgZGV0YWlsZWQgZXJyb3IgbWVzc2FnZXNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4vL0hhY2tpbmcgcHJldmVudGlvblxyXG4vLyBzZWN1cml0eSBtZWFzdXJlc1xyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pblJlcXVlc3QocmVxLCByZXMpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuLy8gICAgIGlmICghc2Vzc2lvbikge1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwMSkuZW5kKFwiVW5hdXRob3JpemVkXCIpO1xyXG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZXNzaW9uIGZvdW5kXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuLy8gICAgICAgcmVzLnN0YXR1cyg0MDEpLmVuZChcIlVuYXV0aG9yaXplZFwiKTtcclxuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGFuIGFkbWluXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gaXNBZG1pblJlcXVlc3Q6XCIsIGVycm9yKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIik7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJNb25nb0RCQWRhcHRlciIsIk5leHRBdXRoIiwiY2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiYWRtaW5FbWFpbHMiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsImluY2x1ZGVzIiwidXNlciIsImVtYWlsIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();