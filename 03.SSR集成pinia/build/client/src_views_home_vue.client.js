"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_views_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _store_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/home */ \"./src/store/home.js\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'home',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var homeStore = (0,_store_home__WEBPACK_IMPORTED_MODULE_1__.useHomeStore)();\n    var _storeToRefs = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs)(homeStore),\n      count = _storeToRefs.count;\n    function addCounter() {\n      count.value++;\n    }\n    var __returned__ = {\n      get homeStore() {\n        return homeStore;\n      },\n      set homeStore(v) {\n        homeStore = v;\n      },\n      get count() {\n        return count;\n      },\n      set count(v) {\n        count = v;\n      },\n      addCounter: addCounter,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      get useHomeStore() {\n        return _store_home__WEBPACK_IMPORTED_MODULE_1__.useHomeStore;\n      },\n      get storeToRefs() {\n        return pinia__WEBPACK_IMPORTED_MODULE_2__.storeToRefs;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=template&id=7eb2bc79":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=template&id=7eb2bc79 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  \"class\": \"home\",\n  style: {\n    \"border\": \"1px solid green\"\n  }\n};\nvar _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Home\", -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.count), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: $setup.addCounter\n  }, \"+1\")]);\n}\n\n//# sourceURL=webpack:///./src/views/home.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./src/store/home.js":
/*!***************************!*\
  !*** ./src/store/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useHomeStore\": () => (/* binding */ useHomeStore)\n/* harmony export */ });\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n\nvar useHomeStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)(\"home\", {\n  state: function state() {\n    return {\n      count: 0\n    };\n  },\n  actions: {\n    increment: function increment() {\n      this.count++;\n    },\n    decrement: function decrement() {\n      this.count--;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/store/home.js?");

/***/ }),

/***/ "./src/views/home.vue":
/*!****************************!*\
  !*** ./src/views/home.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_vue_vue_type_template_id_7eb2bc79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=7eb2bc79 */ \"./src/views/home.vue?vue&type=template&id=7eb2bc79\");\n/* harmony import */ var _home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&setup=true&lang=js */ \"./src/views/home.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var D_AllCode_Learn_SSR_03_SSR_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_AllCode_Learn_SSR_03_SSR_pinia_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_home_vue_vue_type_template_id_7eb2bc79__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/home.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/home.vue?");

/***/ }),

/***/ "./src/views/home.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/home.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./home.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/home.vue?");

/***/ }),

/***/ "./src/views/home.vue?vue&type=template&id=7eb2bc79":
/*!**********************************************************!*\
  !*** ./src/views/home.vue?vue&type=template&id=7eb2bc79 ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_home_vue_vue_type_template_id_7eb2bc79__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_home_vue_vue_type_template_id_7eb2bc79__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./home.vue?vue&type=template&id=7eb2bc79 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/views/home.vue?vue&type=template&id=7eb2bc79\");\n\n\n//# sourceURL=webpack:///./src/views/home.vue?");

/***/ })

}]);