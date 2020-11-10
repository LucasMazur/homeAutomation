module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/savedata.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/database/db.js":
/*!**********************************!*\
  !*** ./pages/api/database/db.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const Database = __webpack_require__(/*! sqlite-async */ "sqlite-async");

function execute(db) {
  return db.exec(`
        CREATE TABLE IF NOT EXISTS rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            ip TEXT
        );
    `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute); //db
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./pages/api/database/saveData.js":
/*!****************************************!*\
  !*** ./pages/api/database/saveData.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Database = __webpack_require__(/*! ./db.js */ "./pages/api/database/db.js");

function saveData(db, data) {
  return db.run(`
    INSERT INTO rooms (
        name,
        ip
    ) VALUES (
        "${data.name}",
        "${data.ip}"
    );
`);
}

module.exports = saveData;

/***/ }),

/***/ "./pages/api/savedata.ts":
/*!*******************************!*\
  !*** ./pages/api/savedata.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Database = __webpack_require__(/*! ./database/db */ "./pages/api/database/db.js");

const saveData = __webpack_require__(/*! ./database/saveData */ "./pages/api/database/saveData.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const name = req.body.name;
  const ip = req.body.ip;

  try {
    const db = await Database;
    await saveData(db, {
      name: name,
      ip: ip
    });
    const dbColector = await db.all("SELECT * FROM rooms");
    console.log(dbColector);
    return res.send('Successful');
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados');
  }
});

/***/ }),

/***/ "sqlite-async":
/*!*******************************!*\
  !*** external "sqlite-async" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sqlite-async");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2RhdGFiYXNlL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9kYXRhYmFzZS9zYXZlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2F2ZWRhdGEudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3FsaXRlLWFzeW5jXCIiXSwibmFtZXMiOlsiRGF0YWJhc2UiLCJyZXF1aXJlIiwiZXhlY3V0ZSIsImRiIiwiZXhlYyIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcGVuIiwiX19kaXJuYW1lIiwidGhlbiIsInNhdmVEYXRhIiwiZGF0YSIsInJ1biIsIm5hbWUiLCJpcCIsInJlcSIsInJlcyIsImJvZHkiLCJkYkNvbGVjdG9yIiwiYWxsIiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHVEQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBeEI7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsRUFBakIsRUFBcUI7QUFDakIsU0FBT0EsRUFBRSxDQUFDQyxJQUFILENBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTlcsQ0FBUDtBQU9IOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQyxTQUFTLEdBQUcsa0JBQTFCLEVBQThDQyxJQUE5QyxDQUFtRFAsT0FBbkQsQ0FBakIsQyxDQUE2RSxJOzs7Ozs7Ozs7Ozs7QUNaN0UsTUFBTUYsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDJDQUFELENBQXhCOztBQUVBLFNBQVNTLFFBQVQsQ0FBa0JQLEVBQWxCLEVBQXNCUSxJQUF0QixFQUE0QjtBQUMxQixTQUFPUixFQUFFLENBQUNTLEdBQUgsQ0FBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVdELElBQUksQ0FBQ0UsSUFBSztBQUNyQixXQUFXRixJQUFJLENBQUNHLEVBQUc7QUFDbkI7QUFDQSxDQVJTLENBQVA7QUFTRDs7QUFDRFQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSSxRQUFqQixDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBLE1BQU1WLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxpREFBRCxDQUF4Qjs7QUFDQSxNQUFNUyxRQUFRLEdBQUdULG1CQUFPLENBQUMsNkRBQUQsQ0FBeEI7O0FBRWUsc0VBQU9jLEdBQVAsRUFBd0JDLEdBQXhCLEtBQTZDO0FBQ3hELFFBQU1ILElBQUksR0FBR0UsR0FBRyxDQUFDRSxJQUFKLENBQVNKLElBQXRCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHQyxHQUFHLENBQUNFLElBQUosQ0FBU0gsRUFBcEI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1YLEVBQUUsR0FBRyxNQUFNSCxRQUFqQjtBQUNBLFVBQU1VLFFBQVEsQ0FBQ1AsRUFBRCxFQUFLO0FBQ2ZVLFVBQUksRUFBRUEsSUFEUztBQUVmQyxRQUFFLEVBQUVBO0FBRlcsS0FBTCxDQUFkO0FBSUEsVUFBTUksVUFBVSxHQUFHLE1BQU1mLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBTyxxQkFBUCxDQUF6QjtBQUNJQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUNKLFdBQU9GLEdBQUcsQ0FBQ00sSUFBSixDQUFTLFlBQVQsQ0FBUDtBQUNILEdBVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDQSxXQUFPUCxHQUFHLENBQUNNLElBQUosQ0FBUyx3QkFBVCxDQUFQO0FBQ0g7QUFDSixDQWhCRCxFOzs7Ozs7Ozs7OztBQ0pBLHlDIiwiZmlsZSI6InBhZ2VzL2FwaS9zYXZlZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NhdmVkYXRhLnRzXCIpO1xuIiwiY29uc3QgRGF0YWJhc2UgPSByZXF1aXJlKCdzcWxpdGUtYXN5bmMnKTtcclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGUoZGIpIHtcclxuICAgIHJldHVybiBkYi5leGVjKGBcclxuICAgICAgICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyByb29tcyAoXHJcbiAgICAgICAgICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCxcclxuICAgICAgICAgICAgbmFtZSBURVhULFxyXG4gICAgICAgICAgICBpcCBURVhUXHJcbiAgICAgICAgKTtcclxuICAgIGApXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF0YWJhc2Uub3BlbihfX2Rpcm5hbWUgKyAnL2RhdGFiYXNlLnNxbGl0ZScpLnRoZW4oZXhlY3V0ZSkgLy9kYiIsImNvbnN0IERhdGFiYXNlID0gcmVxdWlyZSgnLi9kYi5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2F2ZURhdGEoZGIsIGRhdGEpIHtcclxuICByZXR1cm4gZGIucnVuKGBcclxuICAgIElOU0VSVCBJTlRPIHJvb21zIChcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGlwXHJcbiAgICApIFZBTFVFUyAoXHJcbiAgICAgICAgXCIke2RhdGEubmFtZX1cIixcclxuICAgICAgICBcIiR7ZGF0YS5pcH1cIlxyXG4gICAgKTtcclxuYCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzYXZlRGF0YTtcclxuIiwiaW1wb3J0IHsgTm93UmVxdWVzdCwgTm93UmVzcG9uc2UgfSBmcm9tICdAdmVyY2VsL25vZGUnXHJcbmNvbnN0IERhdGFiYXNlID0gcmVxdWlyZSgnLi9kYXRhYmFzZS9kYicpXHJcbmNvbnN0IHNhdmVEYXRhID0gcmVxdWlyZSgnLi9kYXRhYmFzZS9zYXZlRGF0YScpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOb3dSZXF1ZXN0LCByZXM6IE5vd1Jlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gcmVxLmJvZHkubmFtZVxyXG4gICAgY29uc3QgaXAgPSByZXEuYm9keS5pcFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IERhdGFiYXNlO1xyXG4gICAgICAgIGF3YWl0IHNhdmVEYXRhKGRiLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGlwOiBpcFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGJDb2xlY3RvciA9IGF3YWl0IGRiLmFsbChcIlNFTEVDVCAqIEZST00gcm9vbXNcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGJDb2xlY3RvcilcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoJ1N1Y2Nlc3NmdWwnKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoJ0Vycm8gbm8gYmFuY28gZGUgZGFkb3MnKSBcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNxbGl0ZS1hc3luY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9