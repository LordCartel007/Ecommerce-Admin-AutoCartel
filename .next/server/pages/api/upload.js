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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// mongoose connect\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUJBQW1CO0FBQ2E7QUFFekIsU0FBU0Msa0JBQWtCO0lBQ2hDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUNuQyxJQUFJTCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9MLHVEQUFnQixDQUFDRTtJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vbmdvb3NlIGNvbm5lY3RcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\n\n// to read file\n\n\nconst bucketName = \"cartel-next-ecommerce\";\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    // await isAdminRequest(req, res);\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    // creating random name for files\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFilename = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFilename,\n            Body: fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_2___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQzRCO0FBQ2xDO0FBQzlCLGVBQWU7QUFDSztBQUNpQztBQUVyRCxNQUFNTSxhQUFhO0FBRUosZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUosOERBQWVBO0lBQ3JCLGtDQUFrQztJQUNsQyxNQUFNSyxPQUFPLElBQUlWLHdEQUFlO0lBRWhDLE1BQU0sRUFBRVksT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUMvRE4sS0FBS08sS0FBSyxDQUFDVCxLQUFLLENBQUNVLEtBQUtOLFFBQVFDLFFBQVU7WUFDdEMsSUFBSUssS0FBS0YsT0FBT0U7WUFDaEJILFFBQVE7Z0JBQUVIO2dCQUFRQztZQUFNO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNTSxTQUFTLElBQUlqQix3REFBUUEsQ0FBQztRQUMxQmtCLFFBQVE7UUFDUkMsYUFBYTtZQUNYQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7WUFDdENDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFFBQVEsRUFBRTtJQUVoQixpQ0FBaUM7SUFDakMsS0FBSyxNQUFNQyxRQUFRaEIsTUFBTWdCLElBQUksQ0FBRTtRQUM3QixNQUFNQyxNQUFNRCxLQUFLRSxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLEdBQUc7UUFDaEQsTUFBTUMsY0FBY0MsS0FBS0MsR0FBRyxLQUFLLE1BQU1OO1FBRXZDLE1BQU1YLE9BQU9rQixJQUFJLENBQ2YsSUFBSXBDLGdFQUFnQkEsQ0FBQztZQUNuQnFDLFFBQVFoQztZQUNSaUMsS0FBS0w7WUFDTE0sTUFBTXBDLHNEQUFlLENBQUN5QixLQUFLYSxJQUFJO1lBQy9CQyxLQUFLO1lBQ0xDLGFBQWF6Qyx3REFBVyxDQUFDMEIsS0FBS2EsSUFBSTtRQUNwQztRQUVGLE1BQU1JLE9BQU8sQ0FBQyxRQUFRLEVBQUV4QyxXQUFXLGtCQUFrQixFQUFFNEIsWUFBWSxDQUFDO1FBQ3BFTixNQUFNbUIsSUFBSSxDQUFDRDtJQUNiO0lBRUEsT0FBT3JDLElBQUl1QyxJQUFJLENBQUM7UUFBRXBCO0lBQU07QUFDMUIsQ0FBQztBQUVNLE1BQU1xQixTQUFTO0lBQ3BCQyxLQUFLO1FBQUVDLFlBQVksS0FBSztJQUFDO0FBQzNCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRpcGFydHkgZnJvbSBcIm11bHRpcGFydHlcIjtcclxuaW1wb3J0IHsgUHV0T2JqZWN0Q29tbWFuZCwgUzNDbGllbnQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXMzXCI7XHJcbmltcG9ydCBtaW1lIGZyb20gXCJtaW1lLXR5cGVzXCI7XHJcbi8vIHRvIHJlYWQgZmlsZVxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCIuLi8uLi9saWIvbW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGJ1Y2tldE5hbWUgPSBcImNhcnRlbC1uZXh0LWVjb21tZXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gIC8vIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcclxuICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpO1xyXG5cclxuICBjb25zdCB7IGZpZWxkcywgZmlsZXMgfSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICByZXNvbHZlKHsgZmllbGRzLCBmaWxlcyB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBuZXcgUzNDbGllbnQoe1xyXG4gICAgcmVnaW9uOiBcImV1LW5vcnRoLTFcIixcclxuICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5TM19BQ0NFU1NfS0VZLFxyXG4gICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlMzX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBbXTtcclxuXHJcbiAgLy8gY3JlYXRpbmcgcmFuZG9tIG5hbWUgZm9yIGZpbGVzXHJcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzLmZpbGUpIHtcclxuICAgIGNvbnN0IGV4dCA9IGZpbGUub3JpZ2luYWxGaWxlbmFtZS5zcGxpdChcIi5cIikucG9wKCk7XHJcbiAgICBjb25zdCBuZXdGaWxlbmFtZSA9IERhdGUubm93KCkgKyBcIi5cIiArIGV4dDtcclxuXHJcbiAgICBhd2FpdCBjbGllbnQuc2VuZChcclxuICAgICAgbmV3IFB1dE9iamVjdENvbW1hbmQoe1xyXG4gICAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcclxuICAgICAgICBLZXk6IG5ld0ZpbGVuYW1lLFxyXG4gICAgICAgIEJvZHk6IGZzLnJlYWRGaWxlU3luYyhmaWxlLnBhdGgpLFxyXG4gICAgICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxyXG4gICAgICAgIENvbnRlbnRUeXBlOiBtaW1lLmxvb2t1cChmaWxlLnBhdGgpLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgaHR0cHM6Ly8ke2J1Y2tldE5hbWV9LnMzLmFtYXpvbmF3cy5jb20vJHtuZXdGaWxlbmFtZX1gO1xyXG4gICAgbGlua3MucHVzaChsaW5rKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXMuanNvbih7IGxpbmtzIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaTogeyBib2R5UGFyc2VyOiBmYWxzZSB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsibXVsdGlwYXJ0eSIsIlB1dE9iamVjdENvbW1hbmQiLCJTM0NsaWVudCIsIm1pbWUiLCJmcyIsIm1vbmdvb3NlQ29ubmVjdCIsImJ1Y2tldE5hbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZm9ybSIsIkZvcm0iLCJmaWVsZHMiLCJmaWxlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2UiLCJlcnIiLCJjbGllbnQiLCJyZWdpb24iLCJjcmVkZW50aWFscyIsImFjY2Vzc0tleUlkIiwicHJvY2VzcyIsImVudiIsIlMzX0FDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTM19TRUNSRVRfQUNDRVNTX0tFWSIsImxpbmtzIiwiZmlsZSIsImV4dCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJzcGxpdCIsInBvcCIsIm5ld0ZpbGVuYW1lIiwiRGF0ZSIsIm5vdyIsInNlbmQiLCJCdWNrZXQiLCJLZXkiLCJCb2R5IiwicmVhZEZpbGVTeW5jIiwicGF0aCIsIkFDTCIsIkNvbnRlbnRUeXBlIiwibG9va3VwIiwibGluayIsInB1c2giLCJqc29uIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

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