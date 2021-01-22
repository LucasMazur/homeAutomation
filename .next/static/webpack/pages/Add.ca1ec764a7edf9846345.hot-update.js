webpackHotUpdate_N_E("pages/Add",{

/***/ "./pages/Add.jsx":
/*!***********************!*\
  !*** ./pages/Add.jsx ***!
  \***********************/
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Get_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Get-data */ "./pages/Get-data.jsx");


var _jsxFileName = "D:\\Lucas\\Projetos\\homeAutomation\\pages\\Add.jsx",
    _s = $RefreshSig$();






/* harmony default export */ __webpack_exports__["default"] = (_s(() => {
  _s();

  const {
    0: roomName,
    1: setRoomName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: deviceName,
    1: setDeviceName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: ipDevice,
    1: setIpDevice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: imageUrl,
    1: setImageUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const submitData = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://172.16.30.171:3001/api/userRooms/save", {
      roomName: roomName,
      imageUrl: imageUrl
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://172.16.30.171:3001/api/userDevices/save", {
      roomName: roomName,
      deviceName: deviceName,
      ip: ipDevice
    }).then(() => window.location.pathname = '/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "comodo",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Adicionar Novo Device"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "addRoom",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "",
        children: "NOME DO C\xD4MODO: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "roomName",
        onChange: e => {
          setRoomName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "",
        children: "NOME DO DISPOSITIVO: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "deviceName",
        onChange: e => {
          setDeviceName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "",
        children: "IP DO DISPOSITIVO: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "ipDevice",
        onChange: e => {
          setIpDevice(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        onClick: submitData,
        children: "SALVAR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "float-button-back",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        as: "/",
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "Back",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/images/back.png",
            width: 100,
            height: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Remover C\xF4modo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Get_data__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
}, "ypJh9dgaXz9TOxPLvIWGKLsg4oo="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWRkLmpzeCJdLCJuYW1lcyI6WyJyb29tTmFtZSIsInNldFJvb21OYW1lIiwidXNlU3RhdGUiLCJkZXZpY2VOYW1lIiwic2V0RGV2aWNlTmFtZSIsImlwRGV2aWNlIiwic2V0SXBEZXZpY2UiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwic3VibWl0RGF0YSIsIkF4aW9zIiwicG9zdCIsImlwIiwidGhlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSx3RUFBTTtBQUFBOztBQUVqQixRQUFNO0FBQUEsT0FBQ0EsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCSixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJOLHNEQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxRQUFNTyxVQUFVLEdBQUcsTUFBTTtBQUNyQkMsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLDhDQUFYLEVBQTJEO0FBQUNYLGNBQVEsRUFBRUEsUUFBWDtBQUFxQk8sY0FBUSxFQUFFQTtBQUEvQixLQUEzRDtBQUNBRyxnREFBSyxDQUFDQyxJQUFOLENBQVcsZ0RBQVgsRUFBNkQ7QUFBQ1gsY0FBUSxFQUFFQSxRQUFYO0FBQXFCRyxnQkFBVSxFQUFFQSxVQUFqQztBQUE2Q1MsUUFBRSxFQUFDUDtBQUFoRCxLQUE3RCxFQUNLUSxJQURMLENBQ1UsTUFBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixHQUF5QixHQUR6QztBQUVILEdBSkQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNJO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNJO0FBQU8sZUFBTyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsVUFBN0I7QUFBd0MsZ0JBQVEsRUFBR0MsQ0FBRCxJQUFPO0FBQ3JEaEIscUJBQVcsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDSDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFLSTtBQUFPLGVBQU8sRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLFlBQTdCO0FBQTBDLGdCQUFRLEVBQUdGLENBQUQsSUFBTztBQUN2RGIsdUJBQWEsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNIO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQVNJO0FBQU8sZUFBTyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosZUFVSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsVUFBN0I7QUFBd0MsZ0JBQVEsRUFBR0YsQ0FBRCxJQUFPO0FBQ3JEWCxxQkFBVyxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0g7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKLGVBYUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVWLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQW1CSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sVUFBRSxFQUFDLEdBQVQ7QUFBYSxZQUFJLEVBQUMsR0FBbEI7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUMsTUFBYjtBQUFBLGlDQUNJLHFFQUFDLGlEQUFEO0FBQU8sZUFBRyxFQUFDLGtCQUFYO0FBQ0EsaUJBQUssRUFBRSxHQURQO0FBRUEsa0JBQU0sRUFBRTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKLGVBNEJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJKLGVBNkJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCSixlQThCSSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtDSCxDQS9DRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9BZGQuY2ExZWM3NjRhN2VkZjk4NDYzNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBHZXRkYXRhIGZyb20gJy4vR2V0LWRhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Jvb21OYW1lLCBzZXRSb29tTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtkZXZpY2VOYW1lLCBzZXREZXZpY2VOYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2lwRGV2aWNlLCBzZXRJcERldmljZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3Qgc3VibWl0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovLzE3Mi4xNi4zMC4xNzE6MzAwMS9hcGkvdXNlclJvb21zL3NhdmVcIiwge3Jvb21OYW1lOiByb29tTmFtZSwgaW1hZ2VVcmw6IGltYWdlVXJsfSlcclxuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovLzE3Mi4xNi4zMC4xNzE6MzAwMS9hcGkvdXNlckRldmljZXMvc2F2ZVwiLCB7cm9vbU5hbWU6IHJvb21OYW1lLCBkZXZpY2VOYW1lOiBkZXZpY2VOYW1lLCBpcDppcERldmljZX0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZT0nLycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW9kb1wiPlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPkFkaWNpb25hciBOb3ZvIERldmljZTwvaDE+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFJvb21cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Tk9NRSBETyBDw5RNT0RPOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwicm9vbU5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSb29tTmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Tk9NRSBETyBESVNQT1NJVElWTzogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImRldmljZU5hbWVcIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREZXZpY2VOYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5JUCBETyBESVNQT1NJVElWTzogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlwRGV2aWNlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXBEZXZpY2UoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtzdWJtaXREYXRhfT5TQUxWQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtYnV0dG9uLWJhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFzPVwiL1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiQmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9iYWNrLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxoMT5SZW1vdmVyIEPDtG1vZG88L2gxPlxyXG4gICAgICAgICAgICA8R2V0ZGF0YSAvPlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9