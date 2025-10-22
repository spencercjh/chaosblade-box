/*
 * Copyright 2025 The ChaosBlade Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(self.webpackChunk=self.webpackChunk||[]).push([[955],{3346:function(D,E,t){var i,R,d,C=t(24596),g=t(67394),m=t(93168),P=t(23587);(function(r,n){if(!0)!(R=[E,t(27378),t(14798),t(96291),t(40022),t(14870),t(98784)],i=n,d=typeof i=="function"?i.apply(E,R):i,d!==void 0&&(D.exports=d));else var f})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(r,n,f,U,p,O,v){"use strict";var A=t(67971);g(r,"__esModule",{value:!0}),r.default=void 0,n=S(n),f=A(f),v=A(v);function M(e){if(typeof m!="function")return null;var s=new m,o=new m;return(M=function(u){return u?o:s})(e)}function S(e,s){if(!s&&e&&e.__esModule)return e;if(e===null||C(e)!=="object"&&typeof e!="function")return{default:e};var o=M(s);if(o&&o.has(e))return o.get(e);var l={},u=g&&P;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var c=u?P(e,a):null;c&&(c.get||c.set)?g(l,a,c):l[a]=e[a]}return l.default=e,o&&o.set(e,l),l}var y=(0,n.lazy)(function(){return Promise.all([t.e(102),t.e(970),t.e(620),t.e(237)]).then(t.t.bind(t,49237,23))}),T=(0,n.lazy)(function(){return Promise.all([t.e(102),t.e(970),t.e(311)]).then(t.t.bind(t,5311,23))}),B=(0,n.lazy)(function(){return t.e(726).then(t.t.bind(t,77726,23))}),W=p.router.Switch,h=p.router.Route,I=p.router.useRouteMatch,F=function(){var s=(0,O.useDispatch)();(0,n.useEffect)(function(){var a=v.default.cloneDeep(U.CHAOS_DEFAULT_BREADCRUMB_ITEM);a.push({key:"scope_control",value:f.default.t("Probe management"),path:"/chaos/experiment/scope/control"}),/\agentmanage\/setting\/step/.test(location.pathname)&&a.push({key:"agentmanage_setting",value:f.default.t("Probe access"),path:location.pathname}),/\agentmanage\/setting\/tools/.test(location.pathname)&&a.push({key:"setting/tools",value:f.default.t("Tool management"),path:location.pathname}),s.pageHeader.setBreadCrumbItems(a)},[]);var o=I(),l=o.path,u=l===void 0?"/agentmanage/setting":l;return n.default.createElement(W,null,n.default.createElement(h,{exact:!0,path:"".concat(u),component:y}),n.default.createElement(h,{exact:!0,path:"".concat(u,"/k8sHost"),component:y}),n.default.createElement(h,{exact:!0,path:"".concat(u,"/step"),component:T}),n.default.createElement(h,{exact:!0,path:"".concat(u,"/tools"),component:B}))},L=F;r.default=L})}}]);

//# sourceMappingURL=955.bundle.js.map