const __vite__fileDeps=["assets/CountryCard-4OO629ak.js","assets/index-DuoeBY6W.js","assets/index-BaWvaW1r.css","assets/CountryCard-Cx7aIyHq.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{R as g,r as a,u as _,b as D,j as c,T as L,_ as x}from"./index-DuoeBY6W.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var y=function(r,o){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},y(r,o)};function b(r,o){y(r,o);function t(){this.constructor=r}r.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}var p=function(){return p=Object.assign||function(o){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(o[s]=t[s])}return o},p.apply(this,arguments)};function C(r,o,t,e){var n,s=!1,l=0;function u(){n&&clearTimeout(n)}function f(){u(),s=!0}typeof o!="boolean"&&(e=t,t=o,o=void 0);function d(){var i=this,m=Date.now()-l,T=arguments;if(s)return;function v(){l=Date.now(),t.apply(i,T)}function S(){n=void 0}e&&!n&&v(),u(),e===void 0&&m>r?v():o!==!0&&(n=setTimeout(e?S:v,e===void 0?r-m:r))}return d.cancel=f,d}var h={Pixel:"Pixel",Percent:"Percent"},E={unit:h.Percent,value:.8};function w(r){return typeof r=="number"?{unit:h.Percent,value:r*100}:typeof r=="string"?r.match(/^(\d*(\.\d+)?)px$/)?{unit:h.Pixel,value:parseFloat(r)}:r.match(/^(\d*(\.\d+)?)%$/)?{unit:h.Percent,value:parseFloat(r)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),E):(console.warn("scrollThreshold should be string or number"),E)}var Y=function(r){b(o,r);function o(t){var e=r.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(n){e.lastScrollTop||(e.dragging=!0,n instanceof MouseEvent?e.startY=n.pageY:n instanceof TouchEvent&&(e.startY=n.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(n){e.dragging&&(n instanceof MouseEvent?e.currentY=n.pageY:n instanceof TouchEvent&&(e.currentY=n.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(n){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(n)},0);var s=e.props.height||e._scrollableNode?n.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var l=e.props.inverse?e.isElementAtTop(s,e.props.scrollThreshold):e.isElementAtBottom(s,e.props.scrollThreshold);l&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=s.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=C(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return o.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},o.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},o.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},o.getDerivedStateFromProps=function(t,e){var n=t.dataLength!==e.prevDataLength;return n?p(p({},e),{prevDataLength:t.dataLength}):null},o.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,s=w(e);return s.unit===h.Pixel?t.scrollTop<=s.value+n-t.scrollHeight+1:t.scrollTop<=s.value/100+n-t.scrollHeight+1},o.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,s=w(e);return s.unit===h.Pixel?t.scrollTop+n>=t.scrollHeight-s.value:t.scrollTop+n>=s.value/100*t.scrollHeight},o.prototype.render=function(){var t=this,e=p({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return g.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},g.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(l){return t._infScroll=l},style:e},this.props.pullDownToRefresh&&g.createElement("div",{style:{position:"relative"},ref:function(l){return t._pullDown=l}},g.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},o}(a.Component);const M=Y,P=a.lazy(()=>x(()=>import("./CountryCard-4OO629ak.js"),__vite__mapDeps([0,1,2,3])));function H(){const{countryData:r,inputValue:o}=_(),{region:t}=D(),[e,n]=a.useState([]),[s,l]=a.useState(!0),[u,f]=a.useState([]);a.useEffect(()=>{n(r||[])},[r]),a.useEffect(()=>{f(e.slice(0,20))},[e]);const d=()=>{if(u.length>=e.length){l(!1);return}setTimeout(()=>{f(i=>e.slice(0,i.length+20))},2e3)};return a.useEffect(()=>{r&&(l(!0),n(t&&t!=="All"?r.filter(i=>i.region===t):r),o&&o!==" "&&n(i=>i.filter(m=>m.name.common.toLowerCase().startsWith(o.toLowerCase()))))},[o,t,r]),c.jsx(M,{dataLength:u.length,next:d,hasMore:s,loader:c.jsx(L,{}),endMessage:c.jsx("p",{style:{textAlign:"center",margin:"1.2rem auto",fontSize:"1rem"},children:"You have reached at the end 😊."}),children:c.jsx("div",{id:"countryCardContainer",children:c.jsx(a.Suspense,{fallback:"",children:u?u.map(i=>c.jsx(P,{countryName:i.name.common,countryCapital:i.capital,countryRegion:i.region,countryPopulation:i.population,countryFlag:i.flags.svg,countryFlagAlt:i.flags.alt},i.name.common)):null})})})}export{H as default};