webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Buttons.jsx":
/*!***************************!*\
  !*** ./pages/Buttons.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\lucas.mazur\\OneDrive\\Criando um site\\homeAutomation\\pages\\Buttons.jsx",
    _s = $RefreshSig$();




/* harmony default export */ __webpack_exports__["default"] = (_s(() => {
  _s();

  const {
    0: roomList,
    1: setRoomList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  /*useEffect(() => {
      Axios.get("http://localhost:5500/getdata").then((response) => {
      setRoomList(response.data)
      })        
  }, [roomList])*/

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/getdata").then(response => {
      setRoomList(response.data);
    });
  }, [roomList]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: roomList.map(val => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        as: `/${val.name}/${val.ip}`,
        href: "/[room]/[ip]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: val.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined);
    })
  }, void 0, false);
}, "j20e2Bj6/tdDyqowiqfS3MU/uaE="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQnV0dG9ucy5qc3giXSwibmFtZXMiOlsicm9vbUxpc3QiLCJzZXRSb29tTGlzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwidmFsIiwibmFtZSIsImlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsd0VBQU07QUFBQTs7QUFFakIsUUFBTTtBQUFBLE9BQUNBLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVJQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLGNBQVYsRUFBMEJDLElBQTFCLENBQWdDQyxRQUFELElBQWM7QUFDN0NOLGlCQUFXLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFYO0FBQ0MsS0FGRDtBQUdILEdBSlEsRUFJTixDQUFDUixRQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNJO0FBQUEsY0FDQ0EsUUFBUSxDQUFDUyxHQUFULENBQWNDLEdBQUQsSUFBUztBQUNuQiwwQkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUUsRUFBRyxJQUFHQSxHQUFHLENBQUNDLElBQUssSUFBR0QsR0FBRyxDQUFDRSxFQUFHLEVBQWpDO0FBQW9DLFlBQUksRUFBQyxjQUF6QztBQUFBLCtCQUNJO0FBQUEsb0JBQVNGLEdBQUcsQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILEtBTkE7QUFERCxtQkFESjtBQVdILENBM0JEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiZGMxNTEwNjJmYzFjOWZlN2U1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb29tTGlzdCwgc2V0Um9vbUxpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTUwMC9nZXRkYXRhXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0Um9vbUxpc3QocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9LCBbcm9vbUxpc3RdKSovXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoXCIvYXBpL2dldGRhdGFcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRSb29tTGlzdChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgIH0pICAgICAgICBcclxuICAgIH0sIFtyb29tTGlzdF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtyb29tTGlzdC5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvJHt2YWwubmFtZX0vJHt2YWwuaXB9YH0gaHJlZj1cIi9bcm9vbV0vW2lwXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+e3ZhbC5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==