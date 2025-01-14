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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"@auth/mongodb-adapter\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/mongodb.js */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__]);\n_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst adminEmails = [\n    \"cartellord77@gmail.com\"\n];\nconst authOptions = {\n    providers: [\n        // OAuth authentication providers...\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__.MongoDBAdapter)(_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n    callbacks: {\n        session: ({ session  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                return false;\n            }\n        }\n    },\n    debug: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//Hacking prevention\n// security measures\nasync function isAdminRequest(req, res) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, authOptions);\n        if (!session) {\n            res.status(401).end(\"Unauthorized\");\n            throw new Error(\"No session found\");\n        }\n        if (!adminEmails.includes(session?.user?.email)) {\n            res.status(401).end(\"Unauthorized\");\n            throw new Error(\"Not an admin\");\n        }\n    } catch (error) {\n        console.error(\"Error in isAdminRequest:\", error);\n        res.status(500).end(\"Internal Server Error\");\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUN0QjtBQUNZO0FBQ0E7QUFFVztBQUV4RCxNQUFNSyxjQUFjO0lBQUM7Q0FBeUI7QUFFdkMsTUFBTUMsY0FBYztJQUN6QkMsV0FBVztRQUNULG9DQUFvQztRQUVwQ0gsaUVBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBU2QscUVBQWNBLENBQUNFLHVEQUFNQTtJQUM5QmEsV0FBVztRQUNUQyxTQUFTLENBQUMsRUFBRUEsUUFBTyxFQUFFLEdBQUs7WUFDeEIsSUFBSVgsWUFBWVksUUFBUSxDQUFDRCxTQUFTRSxNQUFNQyxRQUFRO2dCQUM5QyxPQUFPSDtZQUNULE9BQU87Z0JBQ0wsT0FBTyxLQUFLO1lBQ2QsQ0FBQztRQUNIO0lBQ0Y7SUFDQUksT0FBTyxJQUFJO0FBQ2IsRUFBRTtBQUNGLGlFQUFlbkIsZ0RBQVFBLENBQUNLLFlBQVlBLEVBQUM7QUFDckMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNiLGVBQWVlLGVBQWVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLElBQUk7UUFDRixNQUFNUCxVQUFVLE1BQU1iLDJEQUFnQkEsQ0FBQ21CLEtBQUtDLEtBQUtqQjtRQUNqRCxJQUFJLENBQUNVLFNBQVM7WUFDWk8sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLEdBQUcsQ0FBQztZQUNwQixNQUFNLElBQUlDLE1BQU0sb0JBQW9CO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUNyQixZQUFZWSxRQUFRLENBQUNELFNBQVNFLE1BQU1DLFFBQVE7WUFDL0NJLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUM7WUFDcEIsTUFBTSxJQUFJQyxNQUFNLGdCQUFnQjtRQUNsQyxDQUFDO0lBQ0gsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDSixJQUFJQyxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDO0lBQ3RCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGIuanNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmNvbnN0IGFkbWluRW1haWxzID0gW1wiY2FydGVsbG9yZDc3QGdtYWlsLmNvbVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIE9BdXRoIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVycy4uLlxyXG5cclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudCksXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uIH0pID0+IHtcclxuICAgICAgaWYgKGFkbWluRW1haWxzLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLCAvLyBFbmFibGUgZGVidWcgbW9kZSB0byBnZXQgbW9yZSBkZXRhaWxlZCBlcnJvciBtZXNzYWdlc1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbi8vSGFja2luZyBwcmV2ZW50aW9uXHJcbi8vIHNlY3VyaXR5IG1lYXN1cmVzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluUmVxdWVzdChyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoXCJVbmF1dGhvcml6ZWRcIik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNlc3Npb24gZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFkbWluRW1haWxzLmluY2x1ZGVzKHNlc3Npb24/LnVzZXI/LmVtYWlsKSkge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuZW5kKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYW4gYWRtaW5cIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBpc0FkbWluUmVxdWVzdDpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIkludGVybmFsIFNlcnZlciBFcnJvclwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvREJBZGFwdGVyIiwiTmV4dEF1dGgiLCJjbGllbnQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiR29vZ2xlUHJvdmlkZXIiLCJhZG1pbkVtYWlscyIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJpbmNsdWRlcyIsInVzZXIiLCJlbWFpbCIsImRlYnVnIiwiaXNBZG1pblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJlbmQiLCJFcnJvciIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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