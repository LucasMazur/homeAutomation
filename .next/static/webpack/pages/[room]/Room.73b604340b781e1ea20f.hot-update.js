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
  console.log(roomName);
  const {
    0: deviceList,
    1: setDeviceList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3001/api/userDevices/get", {
      roomName: roomName
    }).then(response => {
      setDeviceList(response.data || {});
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: deviceList.map(val => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: `/${val.deviceName}/${val.ip}`,
        href: "/[room]/[ip]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: val.deviceName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined);
    })
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dL1Jvb20uanN4Il0sIm5hbWVzIjpbInJvdXRlciIsInVzZVJvdXRlciIsInJvb21OYW1lIiwicXVlcnkiLCJyb29tIiwiY29uc29sZSIsImxvZyIsImRldmljZUxpc3QiLCJzZXREZXZpY2VMaXN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwidmFsIiwiZGV2aWNlTmFtZSIsImlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLHdFQUFNO0FBQUE7O0FBQ2pCLFFBQU1BLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUE5QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUVBLFFBQU07QUFBQSxPQUFDSyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxnREFBSyxDQUFDQyxJQUFOLENBQVcsMkNBQVgsRUFBd0Q7QUFBRVYsY0FBUSxFQUFFQTtBQUFaLEtBQXhELEVBQWdGVyxJQUFoRixDQUFzRkMsUUFBRCxJQUFjO0FBQ25HTixtQkFBYSxDQUFDTSxRQUFRLENBQUNDLElBQVQsSUFBaUIsRUFBbEIsQ0FBYjtBQUNDLEtBRkQ7QUFHSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0k7QUFBQSxjQUNDUixVQUFVLENBQUNTLEdBQVgsQ0FBZ0JDLEdBQUQsSUFBUztBQUNyQiwwQkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUUsRUFBRyxJQUFHQSxHQUFHLENBQUNDLFVBQVcsSUFBR0QsR0FBRyxDQUFDRSxFQUFHLEVBQXZDO0FBQTBDLFlBQUksRUFBQyxjQUEvQztBQUFBLCtCQUNJO0FBQUEsb0JBQ0tGLEdBQUcsQ0FBQ0M7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQU9ILEtBUkE7QUFERCxtQkFESjtBQWFILENBMUJEO0FBQUEsVUFDbUJqQixxREFEbkI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcm9vbV0vUm9vbS43M2I2MDQzNDBiNzgxZTFlYTIwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgcm9vbU5hbWUgPSByb3V0ZXIucXVlcnkucm9vbVxyXG4gICAgY29uc29sZS5sb2cocm9vbU5hbWUpXHJcblxyXG4gICAgY29uc3QgW2RldmljZUxpc3QsIHNldERldmljZUxpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2VyRGV2aWNlcy9nZXRcIiwgeyByb29tTmFtZTogcm9vbU5hbWUgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXREZXZpY2VMaXN0KHJlc3BvbnNlLmRhdGEgfHwge30pXHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtkZXZpY2VMaXN0Lm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBhcz17YC8ke3ZhbC5kZXZpY2VOYW1lfS8ke3ZhbC5pcH1gfSBocmVmPVwiL1tyb29tXS9baXBdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5kZXZpY2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9