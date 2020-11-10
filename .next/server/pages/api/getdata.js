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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getdata.ts");
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

/***/ "./pages/api/getdata.ts":
/*!******************************!*\
  !*** ./pages/api/getdata.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Database = __webpack_require__(/*! ./database/db */ "./pages/api/database/db.js");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const db = await Database;
  const data = await db.all("SELECT * FROM rooms");

  try {
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.send('Erro no banco de dados');
  }
});
/*app.get("/", (req, res) => {
    const request = req.body
    console.log(request)
    res.send("This is Home Automation Server")
})

app.post('/removedata', async (req, res) => {
    const id = req.body.id
    try {
        const db = await Database;
        await db.run(`DELETE FROM rooms WHERE id = ${id}`)
        const dbColector = await db.all("SELECT * FROM rooms")
        console.log(dbColector)
    } catch (error) {
        console.log(error)
        return res.send('Erro no banco de dados')         
    }
})

app.listen(5500, () => {
    console.log("Running my server")
})*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2RhdGFiYXNlL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRkYXRhLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNxbGl0ZS1hc3luY1wiIl0sIm5hbWVzIjpbIkRhdGFiYXNlIiwicmVxdWlyZSIsImV4ZWN1dGUiLCJkYiIsImV4ZWMiLCJtb2R1bGUiLCJleHBvcnRzIiwib3BlbiIsIl9fZGlybmFtZSIsInRoZW4iLCJyZXEiLCJyZXMiLCJkYXRhIiwiYWxsIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx1REFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQXhCOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCO0FBQ2pCLFNBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5XLENBQVA7QUFPSDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixRQUFRLENBQUNPLElBQVQsQ0FBY0MsU0FBUyxHQUFHLGtCQUExQixFQUE4Q0MsSUFBOUMsQ0FBbURQLE9BQW5ELENBQWpCLEMsQ0FBNkUsSTs7Ozs7Ozs7Ozs7OztBQ1g3RTtBQUFBLE1BQU1GLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxpREFBRCxDQUF4Qjs7QUFFZSxzRUFBT1MsR0FBUCxFQUF3QkMsR0FBeEIsS0FBNkM7QUFDeEQsUUFBTVIsRUFBRSxHQUFHLE1BQU1ILFFBQWpCO0FBQ0EsUUFBTVksSUFBSSxHQUFHLE1BQU1ULEVBQUUsQ0FBQ1UsR0FBSCxDQUFPLHFCQUFQLENBQW5COztBQUNBLE1BQUk7QUFDQSxXQUFPRixHQUFHLENBQUNHLElBQUosQ0FBU0YsSUFBVCxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9HLEtBQVAsRUFBYztBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFdBQU9KLEdBQUcsQ0FBQ08sSUFBSixDQUFTLHdCQUFULENBQVA7QUFDSDtBQUNKLENBVEQ7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ25DQSx5QyIsImZpbGUiOiJwYWdlcy9hcGkvZ2V0ZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2dldGRhdGEudHNcIik7XG4iLCJjb25zdCBEYXRhYmFzZSA9IHJlcXVpcmUoJ3NxbGl0ZS1hc3luYycpO1xyXG5cclxuZnVuY3Rpb24gZXhlY3V0ZShkYikge1xyXG4gICAgcmV0dXJuIGRiLmV4ZWMoYFxyXG4gICAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHJvb21zIChcclxuICAgICAgICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxyXG4gICAgICAgICAgICBuYW1lIFRFWFQsXHJcbiAgICAgICAgICAgIGlwIFRFWFRcclxuICAgICAgICApO1xyXG4gICAgYClcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXRhYmFzZS5vcGVuKF9fZGlybmFtZSArICcvZGF0YWJhc2Uuc3FsaXRlJykudGhlbihleGVjdXRlKSAvL2RiIiwiaW1wb3J0IHsgTm93UmVxdWVzdCwgTm93UmVzcG9uc2UgfSBmcm9tICdAdmVyY2VsL25vZGUnXHJcbmNvbnN0IERhdGFiYXNlID0gcmVxdWlyZSgnLi9kYXRhYmFzZS9kYicpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOb3dSZXF1ZXN0LCByZXM6IE5vd1Jlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERhdGFiYXNlO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmFsbChcIlNFTEVDVCAqIEZST00gcm9vbXNcIilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIHJldHVybiByZXMuc2VuZCgnRXJybyBubyBiYW5jbyBkZSBkYWRvcycpXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4vKmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxyXG4gICAgcmVzLnNlbmQoXCJUaGlzIGlzIEhvbWUgQXV0b21hdGlvbiBTZXJ2ZXJcIilcclxufSlcclxuXHJcbmFwcC5wb3N0KCcvcmVtb3ZlZGF0YScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaWQgPSByZXEuYm9keS5pZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IERhdGFiYXNlO1xyXG4gICAgICAgIGF3YWl0IGRiLnJ1bihgREVMRVRFIEZST00gcm9vbXMgV0hFUkUgaWQgPSAke2lkfWApXHJcbiAgICAgICAgY29uc3QgZGJDb2xlY3RvciA9IGF3YWl0IGRiLmFsbChcIlNFTEVDVCAqIEZST00gcm9vbXNcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhkYkNvbGVjdG9yKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoJ0Vycm8gbm8gYmFuY28gZGUgZGFkb3MnKSAgICAgICAgIFxyXG4gICAgfVxyXG59KVxyXG5cclxuYXBwLmxpc3Rlbig1NTAwLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgbXkgc2VydmVyXCIpXHJcbn0pKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcWxpdGUtYXN5bmNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==