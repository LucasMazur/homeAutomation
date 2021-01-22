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
    }).then(() => windows.location.pathname = '/add');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQWRkLmpzeCJdLCJuYW1lcyI6WyJyb29tTmFtZSIsInNldFJvb21OYW1lIiwidXNlU3RhdGUiLCJkZXZpY2VOYW1lIiwic2V0RGV2aWNlTmFtZSIsImlwRGV2aWNlIiwic2V0SXBEZXZpY2UiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwic3VibWl0RGF0YSIsIkF4aW9zIiwicG9zdCIsImlwIiwidGhlbiIsIndpbmRvd3MiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsd0VBQU07QUFBQTs7QUFFakIsUUFBTTtBQUFBLE9BQUNBLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLHNEQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7O0FBRUEsUUFBTU8sVUFBVSxHQUFHLE1BQU07QUFDckJDLGdEQUFLLENBQUNDLElBQU4sQ0FBVyw4Q0FBWCxFQUEyRDtBQUFDWCxjQUFRLEVBQUVBLFFBQVg7QUFBcUJPLGNBQVEsRUFBRUE7QUFBL0IsS0FBM0Q7QUFDQUcsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLGdEQUFYLEVBQTZEO0FBQUNYLGNBQVEsRUFBRUEsUUFBWDtBQUFxQkcsZ0JBQVUsRUFBRUEsVUFBakM7QUFBNkNTLFFBQUUsRUFBQ1A7QUFBaEQsS0FBN0QsRUFDS1EsSUFETCxDQUNVLE1BQU1DLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsUUFBakIsR0FBMEIsTUFEMUM7QUFFSCxHQUpEOztBQU1BLHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLFVBQTdCO0FBQXdDLGdCQUFRLEVBQUdDLENBQUQsSUFBTztBQUNyRGhCLHFCQUFXLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0g7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBS0k7QUFBTyxlQUFPLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQyxZQUE3QjtBQUEwQyxnQkFBUSxFQUFHRixDQUFELElBQU87QUFDdkRiLHVCQUFhLENBQUNhLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFTSTtBQUFPLGVBQU8sRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKLGVBVUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLFVBQTdCO0FBQXdDLGdCQUFRLEVBQUdGLENBQUQsSUFBTztBQUNyRFgscUJBQVcsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNIO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSixlQWFJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFVixVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFtQkk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFVBQUUsRUFBQyxHQUFUO0FBQWEsWUFBSSxFQUFDLEdBQWxCO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxFQUFDLE1BQWI7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUFPLGVBQUcsRUFBQyxrQkFBWDtBQUNBLGlCQUFLLEVBQUUsR0FEUDtBQUVBLGtCQUFNLEVBQUU7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSixlQTRCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCSixlQTZCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkosZUE4QkkscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQ0gsQ0EvQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQWRkLjkwYzQ4MGIwZDAxNjhhMTI3MzcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgR2V0ZGF0YSBmcm9tICcuL0dldC1kYXRhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb29tTmFtZSwgc2V0Um9vbU5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZGV2aWNlTmFtZSwgc2V0RGV2aWNlTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpcERldmljZSwgc2V0SXBEZXZpY2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly8xNzIuMTYuMzAuMTcxOjMwMDEvYXBpL3VzZXJSb29tcy9zYXZlXCIsIHtyb29tTmFtZTogcm9vbU5hbWUsIGltYWdlVXJsOiBpbWFnZVVybH0pXHJcbiAgICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly8xNzIuMTYuMzAuMTcxOjMwMDEvYXBpL3VzZXJEZXZpY2VzL3NhdmVcIiwge3Jvb21OYW1lOiByb29tTmFtZSwgZGV2aWNlTmFtZTogZGV2aWNlTmFtZSwgaXA6aXBEZXZpY2V9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3dzLmxvY2F0aW9uLnBhdGhuYW1lPScvYWRkJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tb2RvXCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWRpY2lvbmFyIE5vdm8gRGV2aWNlPC9oMT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkUm9vbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5OT01FIERPIEPDlE1PRE86IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJyb29tTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJvb21OYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5OT01FIERPIERJU1BPU0lUSVZPOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZGV2aWNlTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERldmljZU5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPklQIERPIERJU1BPU0lUSVZPOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaXBEZXZpY2VcIiBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJcERldmljZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3N1Ym1pdERhdGF9PlNBTFZBUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1idXR0b24tYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgYXM9XCIvXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJCYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2JhY2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPGgxPlJlbW92ZXIgQ8O0bW9kbzwvaDE+XHJcbiAgICAgICAgICAgIDxHZXRkYXRhIC8+XHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=