"use strict";(self.webpackChunkfreestyler=self.webpackChunkfreestyler||[]).push([[4628],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/2 HTML Design Patterns/2-03 DOCTYPE/page.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".page__doc-type___fEVZB div{font-size:.8em}.page__doc-type___fEVZB p{font-family:monospace;white-space:pre}.page__doc-type___fEVZB ul{margin:0;padding-left:20px}.page__doc-type___fEVZB code{font-size:1.2em}","",{version:3,sources:["webpack://./src/2%20HTML%20Design%20Patterns/2-03%20DOCTYPE/page.scss"],names:[],mappings:"AACE,4BACE,cAAA,CAGF,0BACE,qBAAA,CACA,eAAA,CAGF,2BACE,QAAA,CACA,iBAAA,CAGF,6BACE,eAAA",sourcesContent:[".doc-type {\n  div {\n    font-size: 0.8em;\n  }\n\n  p {\n    font-family: monospace;\n    white-space: pre;\n  }\n\n  ul {\n    margin: 0;\n    padding-left: 20px;\n  }\n\n  code {\n    font-size: 1.2em;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"doc-type":"page__doc-type___fEVZB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/2 HTML Design Patterns/2-03 DOCTYPE/site.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"body .site__doc-type___ywpdk{margin:10px;font-family:verdana,arial,sans-serif;font-size:medium}.site__doc-type___ywpdk h1{margin:0;margin-bottom:20px;font-size:30px}","",{version:3,sources:["webpack://./src/2%20HTML%20Design%20Patterns/2-03%20DOCTYPE/site.scss"],names:[],mappings:"AAAA,6BACE,WAAA,CACA,oCAAA,CACA,gBAAA,CAIA,2BACE,QAAA,CACA,kBAAA,CACA,cAAA",sourcesContent:["body .doc-type {\n  margin: 10px;\n  font-family: verdana, arial, sans-serif;\n  font-size: medium;\n}\n\n.doc-type {\n  h1 {\n    margin: 0;\n    margin-bottom: 20px;\n    font-size: 30px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"doc-type":"site__doc-type___ywpdk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/2 HTML Design Patterns/2-03 DOCTYPE/__tests__/DOCTYPE.int.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>DOCTYPE_int_story,regular:()=>regular});var dist=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),page=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/2 HTML Design Patterns/2-03 DOCTYPE/page.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(page.Z,options);page.Z&&page.Z.locals&&page.Z.locals;var site=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/2 HTML Design Patterns/2-03 DOCTYPE/site.scss"),site_options={};site_options.styleTagTransform=styleTagTransform_default(),site_options.setAttributes=setAttributesWithoutAttributes_default(),site_options.insert=insertBySelector_default().bind(null,"head"),site_options.domAPI=styleDomAPI_default(),site_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(site.Z,site_options);site.Z&&site.Z.locals&&site.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DOCTYPE(){return(0,jsx_runtime.jsxs)("div",{className:"doc-type",children:[(0,jsx_runtime.jsx)("h1",{children:"DOCTYPE"}),(0,jsx_runtime.jsxs)("div",{children:[" ","I recommend the following XHTML DOCTYPE:",(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"It uses causes a document to be validated using XHTML."}),(0,jsx_runtime.jsxs)("li",{children:["It uses transitional XHTML, which allows a few essential attributes, such as the ",(0,jsx_runtime.jsx)("code",{children:"start"})," attribute in"," ",(0,jsx_runtime.jsx)("code",{children:"<"}),"and the ",(0,jsx_runtime.jsx)("code",{children:"value"})," attribute in ",(0,jsx_runtime.jsx)("code",{children:"<"}),"."]}),(0,jsx_runtime.jsxs)("li",{children:["It places browsers into ",(0,jsx_runtime.jsx)("em",{children:"almost-standards"})," mode, which is essential for styling in CSS."]})]})]}),(0,jsx_runtime.jsx)("p",{children:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"'}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)("div",{children:" I recommend the following two HTML DOCTYPEs if you prefer HTML syntax."}),(0,jsx_runtime.jsx)("p",{children:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'}),(0,jsx_runtime.jsx)("p",{children:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd"'})]})}DOCTYPE.displayName="DOCTYPE",DOCTYPE.__docgenInfo={description:"",methods:[],displayName:"DOCTYPE"};var _jest_test_results=__webpack_require__("./.jest-test-results.json");const DOCTYPE_int_story={title:"2 HTML Design Patterns/2-03 DOCTYPE",component:DOCTYPE,decorators:[(0,dist.x)({results:_jest_test_results})],parameters:{storySource:{source:"import { withTests } from '@storybook/addon-jest'\nimport { DOCTYPE } from '../DOCTYPE'\nimport results from '../../../../.jest-test-results.json'\n\nexport default {\n  title: '2 HTML Design Patterns/2-03 DOCTYPE',\n  component: DOCTYPE,\n  decorators: [withTests({ results })],\n  parameters: { jest: ['DOCTYPE.int.test.js'] },\n  excludeStories: ['custom'],\n}\n\nexport function regular() {\n  return <DOCTYPE />\n}\n",locationsMap:{regular:{startLoc:{col:7,line:13},endLoc:{col:1,line:15},startBody:{col:7,line:13},endBody:{col:1,line:15}}}},jest:["DOCTYPE.int.test.js"]},excludeStories:["custom"]};var regular=function regular(){return(0,jsx_runtime.jsx)(DOCTYPE,{})};regular.displayName="regular",regular.parameters={...regular.parameters,docs:{...regular.parameters?.docs,source:{originalSource:"function regular() {\n  return <DOCTYPE />;\n}",...regular.parameters?.docs?.source}}}}}]);