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
    });
  }, []);

  const turnTheLight = val => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`http://${val.ip}/${val.out}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: deviceList.map(val => {
      return (
        /*#__PURE__*/
        // <Link key={val._id} as={`/${val.deviceName}/${val.ip}`} href="/[room]/[ip]">
        //     <button>
        //         {val.deviceName}
        //     </button>
        // </Link>
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: turnTheLight(val),
          children: val.deviceName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)
      );
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Jvb21dL1Jvb20uanN4Il0sIm5hbWVzIjpbInJvdXRlciIsInVzZVJvdXRlciIsInJvb21OYW1lIiwicXVlcnkiLCJyb29tIiwiZGV2aWNlTGlzdCIsInNldERldmljZUxpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ0dXJuVGhlTGlnaHQiLCJ2YWwiLCJnZXQiLCJpcCIsIm91dCIsIm1hcCIsImRldmljZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSx3RUFBTTtBQUFBOztBQUNqQixRQUFNQSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBOUI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLG1FQUFYLEVBQWdGO0FBQUVSLGNBQVEsRUFBRUE7QUFBWixLQUFoRixFQUF3R1MsSUFBeEcsQ0FBOEdDLFFBQUQsSUFBYztBQUMzSE4sbUJBQWEsQ0FBQ00sUUFBUSxDQUFDQyxJQUFULElBQWlCLEVBQWxCLENBQWI7QUFDQyxLQUZEO0FBR0gsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxRQUFNQyxZQUFZLEdBQUlDLEdBQUQsSUFBUztBQUMxQk4sZ0RBQUssQ0FBQ08sR0FBTixDQUFXLFVBQVNELEdBQUcsQ0FBQ0UsRUFBRyxJQUFHRixHQUFHLENBQUNHLEdBQUksRUFBdEM7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSxjQUNLYixVQUFVLENBQUNjLEdBQVgsQ0FBZ0JKLEdBQUQsSUFBUztBQUNyQjtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQVEsaUJBQU8sRUFBRUQsWUFBWSxDQUFDQyxHQUFELENBQTdCO0FBQUEsb0JBQ0tBLEdBQUcsQ0FBQ0s7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFVSCxLQVhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0JILENBaENEO0FBQUEsVUFDbUJuQixxREFEbkI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcm9vbV0vUm9vbS42ZGYyZGUxMzgxYTFlOTYzZGY0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgcm9vbU5hbWUgPSByb3V0ZXIucXVlcnkucm9vbVxyXG5cclxuICAgIGNvbnN0IFtkZXZpY2VMaXN0LCBzZXREZXZpY2VMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXhpb3MucG9zdChcImh0dHBzOi8vbXlob21lYWx1bWJyYWF1dG9tYXRpb24uaGVyb2t1YXBwLmNvbS9hcGkvdXNlckRldmljZXMvZ2V0XCIsIHsgcm9vbU5hbWU6IHJvb21OYW1lIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RGV2aWNlTGlzdChyZXNwb25zZS5kYXRhIHx8IHt9KVxyXG4gICAgICAgIH0pICAgICAgICBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHR1cm5UaGVMaWdodCA9ICh2YWwpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoYGh0dHA6Ly8ke3ZhbC5pcH0vJHt2YWwub3V0fWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7ZGV2aWNlTGlzdC5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAvLyA8TGluayBrZXk9e3ZhbC5faWR9IGFzPXtgLyR7dmFsLmRldmljZU5hbWV9LyR7dmFsLmlwfWB9IGhyZWY9XCIvW3Jvb21dL1tpcF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHt2YWwuZGV2aWNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dHVyblRoZUxpZ2h0KHZhbCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsLmRldmljZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==