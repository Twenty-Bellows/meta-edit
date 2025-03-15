/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/meta-edit/field/color.jsx":
/*!***************************************!*\
  !*** ./src/meta-edit/field/color.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ "./src/meta-edit/field/label.jsx");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 *
 * This is the renderer for color fields in meta-edit.
 * It is used if the field type is 'color'.
 *
 */





(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('meta-edit.field.component', 'meta-edit.field.component.renderer', (renderer, {
  label,
  value,
  type,
  slug,
  onChange
}) => {
  if (type !== 'color') {
    return renderer;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_label__WEBPACK_IMPORTED_MODULE_1__.Label, {
      label: label,
      name: slug
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
      clearable: false,
      name: slug,
      value: value,
      onChange: onChange
    })]
  });
});

/***/ }),

/***/ "./src/meta-edit/field/default.jsx":
/*!*****************************************!*\
  !*** ./src/meta-edit/field/default.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 *
 * Default renderer for meta-edit fields. It will be used if no other renderer is provided.
 * This is a simple text input field.
 *
 */




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('meta-edit.field.component', 'meta-edit.field.component.renderer', (renderer, {
  label,
  value,
  onChange
}) => {
  return renderer || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: label,
    value: value,
    onChange: onChange,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  });
});

/***/ }),

/***/ "./src/meta-edit/field/label.jsx":
/*!***************************************!*\
  !*** ./src/meta-edit/field/label.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Label({
  label,
  name
}) {
  const readableLabel = label.replace(/_/g, ' ');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
    htmlFor: name,
    style: {
      display: 'block',
      marginBottom: '10px',
      textTransform: 'uppercase',
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: 1.4
    },
    children: readableLabel
  });
}

/***/ }),

/***/ "./src/meta-edit/field/media.jsx":
/*!***************************************!*\
  !*** ./src/meta-edit/field/media.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label */ "./src/meta-edit/field/label.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 *
 * Renderer for media fields in meta-edit.
 * It is used if the field type is 'media'.
 * This field provides a URL string provided from selecting an asset from the Media Library.
 *
 */






(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('meta-edit.field.component', 'meta-edit.field.component.renderer', (renderer, {
  label,
  value,
  type,
  slug,
  onChange
}) => {
  if (type !== 'media') {
    return renderer;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_label__WEBPACK_IMPORTED_MODULE_3__.Label, {
      label: label,
      name: slug
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: newValue => onChange(newValue?.url),
      allowedTypes: ['image'],
      render: ({
        open
      }) => value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
        onClick: open,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: value
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: open,
        children: "Open Media Library"
      })
    })]
  });
});

/***/ }),

/***/ "./src/meta-edit/field/relationship.jsx":
/*!**********************************************!*\
  !*** ./src/meta-edit/field/relationship.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 *
 * This is the renderer for relationship fields in meta-edit.
 * It is used if the field type is set to the slug of a post type.
 * All posts of that type will be available for selection.
 * The value stored is the ID of the selected post.
 *
 */





(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('meta-edit.field.component', 'meta-edit.field.component.renderer', (renderer, {
  label,
  value,
  type,
  slug,
  onChange
}) => {
  var _posts$map;
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    let postTypes = select('core').getPostTypes()?.map(postType => postType.slug);
    if (!postTypes?.includes(type)) {
      return null;
    }
    return select('core').getEntityRecords('postType', type, {
      per_page: -1,
      order: 'asc',
      orderby: 'title',
      _fields: ['id', 'title']
    }) || [];
  }, []);
  if (posts === null) {
    return renderer;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ComboboxControl, {
    label: label,
    value: parseInt(value),
    onChange: value => {
      var _value$toString;
      return onChange((_value$toString = value?.toString()) !== null && _value$toString !== void 0 ? _value$toString : 0);
    },
    isLoading: posts.length === 0,
    placeholder: posts.length === 0 ? 'Loading...' : 'Select a ' + type,
    options: (_posts$map = posts?.map(post => ({
      label: post.title.raw,
      value: post.id
    }))) !== null && _posts$map !== void 0 ? _posts$map : [],
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  });
});

/***/ }),

/***/ "./src/meta-edit/field/textarea.jsx":
/*!******************************************!*\
  !*** ./src/meta-edit/field/textarea.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 *
 * This is the renderer for textarea fields in meta-edit.
 * It is used if the field type is 'textarea'.
 *
 */




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('meta-edit.field.component', 'meta-edit.field.component.renderer', (renderer, {
  label,
  value,
  type,
  slug,
  onChange
}) => {
  if (type !== 'textarea') {
    return renderer;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
    label: label,
    value: value,
    onChange: onChange,
    __nextHasNoMarginBottom: true
  });
});

/***/ }),

/***/ "./src/meta-edit/index.jsx":
/*!*********************************!*\
  !*** ./src/meta-edit/index.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metaFieldsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metaFieldsPanel */ "./src/meta-edit/metaFieldsPanel.jsx");
/* harmony import */ var _field_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/default */ "./src/meta-edit/field/default.jsx");
/* harmony import */ var _field_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field/textarea */ "./src/meta-edit/field/textarea.jsx");
/* harmony import */ var _field_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field/color */ "./src/meta-edit/field/color.jsx");
/* harmony import */ var _field_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field/media */ "./src/meta-edit/field/media.jsx");
/* harmony import */ var _field_relationship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field/relationship */ "./src/meta-edit/field/relationship.jsx");







(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('meta-edit', {
  icon: 'palmtree',
  title: 'Meta Edit',
  render: _metaFieldsPanel__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/meta-edit/metaFieldsPanel.jsx":
/*!*******************************************!*\
  !*** ./src/meta-edit/metaFieldsPanel.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const MetaFieldsPanel = () => {
  const {
    postType,
    fields,
    postId,
    existingMetaFields
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const postType = select('core/editor').getCurrentPostType();
    const supports = select('core').getPostType(postType)?.supports;
    if (!supports?.['meta-edit']?.[0]) {
      return {
        postType
      };
    }
    const fields = supports['meta-edit'][0];
    const postId = select('core/editor').getCurrentPostId();
    const existingMetaFields = select('core').getEditedEntityRecord('postType', postType, postId)?.meta;
    return {
      postType,
      fields,
      postId,
      existingMetaFields
    };
  }, []);
  if (!fields) {
    return null;
  }
  const prettyPostType = postType.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginDocumentSettingPanel, {
    name: 'meta-edit-panel',
    title: `${prettyPostType} Meta`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        gap: '16px',
        display: 'flex',
        flexDirection: 'column'
      },
      children: Object.entries(fields).filter(([key]) => {
        return key in existingMetaFields;
      }).map(([key, value]) => {
        const slug = key;
        const label = slug.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        const type = value;
        const metaValue = existingMetaFields[key] || '';
        const onChange = newValue => {
          wp.data.dispatch('core/editor').editPost({
            id: postId,
            type: postType,
            meta: {
              [key]: newValue
            }
          });
        };
        const renderer = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)('meta-edit.field.component', null, {
          label,
          value: metaValue,
          type,
          slug,
          onChange
        });
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: renderer
        }, key);
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaFieldsPanel);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_edit_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta-edit/index */ "./src/meta-edit/index.jsx");

})();

/******/ })()
;
//# sourceMappingURL=editor.js.map