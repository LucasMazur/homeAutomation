webpackHotUpdate_N_E("pages/[room]/Room",{

/***/ "./pages/[room]/Room.jsx":
/*!*******************************!*\
  !*** ./pages/[room]/Room.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Lucas\\Projetos\\homeAutomation\\pages\\[room]\\Room.jsx",
    _s = $RefreshSig$();





/* harmony default export */ __webpack_exports__["default"] = (_s(() => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const roomName = router.query.room;
  const {
    0: deviceList,
    1: setDeviceList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://myhomealumbraautomation.herokuapp.com/api/userDevices/get", {
      roomName: roomName
    }).then(response => {
      setDeviceList(response.data || {});
      console.log(response.data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: deviceList.map(val => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: `/${val.deviceName}/${val.ip}`,
        href: "/[room]/[ip]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "image-button",
          children: val.deviceName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, undefined)
      }, val._id, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
}, "nXe5Ur2m9BqoI2oamCerJD+JsRY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dL1Jvb20uanN4Il0sIm5hbWVzIjpbInJvdXRlciIsInVzZVJvdXRlciIsInJvb21OYW1lIiwicXVlcnkiLCJyb29tIiwiZGV2aWNlTGlzdCIsInNldERldmljZUxpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidmFsIiwiZGV2aWNlTmFtZSIsImlwIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsd0VBQU07QUFBQTs7QUFDakIsUUFBTUEsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQTlCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyxtRUFBWCxFQUFnRjtBQUFFUixjQUFRLEVBQUVBO0FBQVosS0FBaEYsRUFBd0dTLElBQXhHLENBQThHQyxRQUFELElBQWM7QUFDM0hOLG1CQUFhLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQixFQUFsQixDQUFiO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNDLElBQXJCO0FBQ0MsS0FIRDtBQUlILEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsY0FDS1IsVUFBVSxDQUFDVyxHQUFYLENBQWdCQyxHQUFELElBQVM7QUFDckIsMEJBQ0kscUVBQUMsZ0RBQUQ7QUFBb0IsVUFBRSxFQUFHLElBQUdBLEdBQUcsQ0FBQ0MsVUFBVyxJQUFHRCxHQUFHLENBQUNFLEVBQUcsRUFBckQ7QUFBd0QsWUFBSSxFQUFDLGNBQTdEO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGNBQWxCO0FBQUEsb0JBQ0tGLEdBQUcsQ0FBQ0M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBV0QsR0FBRyxDQUFDRyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFPSCxLQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0ExQkQ7QUFBQSxVQUNtQm5CLHFEQURuQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tyb29tXS9Sb29tLmI0ZWUyYzZlMGY2MWVmYWQwMzJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCByb29tTmFtZSA9IHJvdXRlci5xdWVyeS5yb29tXHJcblxyXG4gICAgY29uc3QgW2RldmljZUxpc3QsIHNldERldmljZUxpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cHM6Ly9teWhvbWVhbHVtYnJhYXV0b21hdGlvbi5oZXJva3VhcHAuY29tL2FwaS91c2VyRGV2aWNlcy9nZXRcIiwgeyByb29tTmFtZTogcm9vbU5hbWUgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREZXZpY2VMaXN0KHJlc3BvbnNlLmRhdGEgfHwge30pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtkZXZpY2VMaXN0Lm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17dmFsLl9pZH0gYXM9e2AvJHt2YWwuZGV2aWNlTmFtZX0vJHt2YWwuaXB9YH0gaHJlZj1cIi9bcm9vbV0vW2lwXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImltYWdlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5kZXZpY2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==