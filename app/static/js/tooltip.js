(function (global,factory){typeofexports:== object && typeof module !== undefined ? module.exports = factory(require(popper.js)) : typeof define === function && define.amd ? define(['popper.js'],factory) : (global.Tooltip = factory(global.Popper))}(this,(function (Popper){popper:Popper && Popper.hasOwnProperty(default) ? Popper[default] : Popper;functionisfunctionfunctiontocheckvargettype:{};
var createClass = function (){functiondefinepropertiestargetpropsforvari:0;ivardescriptor:props[i];descriptorenumerable:descriptor.enumerable || false;descriptorconfigurable:true;ifvalueindescriptordescriptorwritable:true}();
var _extends = Object.assign || function (target){forvari:1;ivarsource:arguments[i];forvarkeyinsourceifobjectprototypehasownpropertycallsourcekeytargetkey:source[key]};
var DEFAULT_OPTIONS ={container:false,delay: 0,html: false,placement: top,title: ,template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: 'hover focus',offset: 0,arrowSelector: '.tooltip-arrow,.tooltip__arrow',innerSelector: '.tooltip-inner,.tooltip__inner'};
var Tooltip = function (){referencejqueryreference:reference[0]);thisoptions:options;this_popperoptions:{}title - The new content to use for the title
*/
//
// Private methods
//
createClass(Tooltip,[{key:_create,value: function _create(reference,template,title,allowHtml) { // create tooltip element var tooltipGenerator = window.document.createElement(div);tooltipgeneratorinnerhtml:template.trim();vartooltipnode:tooltipGenerator.childNodes[0]},{key:_addTitleContent,value: function _addTitleContent(reference,title,allowHtml,titleNode) { if (title.nodeType === 1 || title.nodeType === 11) { // if title is a element node or document fragment,append it only if allowHtml is true allowHtml && titleNode.appendChild(title)}else if (isFunction(title)){allowhtmltitlenodeinnerhtml:titleText : titleNode.textContent = titleText}else{},{key:_show,value: function _show(reference,options) { // don't show if it's already visible // or if it's not being showed\A if (this._isOpen && !this._isOpening) {\A return this;\A }\A this._isOpen = true;\A\A // if the tooltipNode already exists,just show it\A if (this._tooltipNode) {\A this._tooltipNode.style.visibility = 'visible';\A this._tooltipNode.setAttribute('aria-hidden','false');\A this.popperInstance.update();\A return this;\A }\A\A // get title\A var title = reference.getAttribute('title') || options.title;\A\A // don't show tooltip if no title is defined if (!title) { return this},options.popperOptions,{placement:options.placement},this._popperOptions.modifiers,{arrow:{ element: this.options.arrowSelector},offset:{offset:options.offset});
if (options.boundariesElement){this_popperoptionsmodifierspreventoverflow:{ boundariesElement: options.boundariesElement},{key:_hide,value: function _hide() { // don't hide if it's already hidden if (!this._isOpen) { return this},{key:_dispose,value: function _dispose() { var _this = this});
this._events = [];
if (this._tooltipNode){this_tooltipnode:null},{key:_findContainer,value: function _findContainer(container,reference) { // if container is a query,get the relative element if (typeof container === 'string') { container = window.document.querySelector(container)}else if (container === false){},{key:_append,value: function _append(tooltipNode,container) { container.appendChild(tooltipNode)},{key:_setEventListeners,value: function _setEventListeners(reference,events,options) { var _this2 = this;vardirectevents:[];varoppositeevents:[];eventsforeachfunctioneventswitcheventcasehover:directEvents.push(mouseenter);casefocus:directEvents.push(focus);caseclick:directEvents.push(click)});
// schedule show tooltip
directEvents.forEach(function (event){varfunc:function func(evt) { if (_this2._isOpening === true) { return};
_this2._events.push({event:event,func: func});
// schedule hide tooltip
oppositeEvents.forEach(function (event){varfunc:function func(evt) { if (evt.usedByTooltip === true) { return};
_this2._events.push({event:event,func: func},{key:_scheduleShow,value: function _scheduleShow(reference,delay,options /*,evt */) { var _this3 = this;this_isopening:true;this_showtimeout:window.setTimeout(function () { return _this3._show(reference,options); },computedDelay)},{key:_scheduleHide,value: function _scheduleHide(reference,delay,options,evt) { var _this4 = this;this_isopening:false;if_this4_isopen:== false) { return}// if we are hiding because of a mouseleave,we must check that the new
// reference isn't the tooltip, because in this case we don't want to hide it
if (evt.type === mouseleave){varisset:_this4._setTooltipNodeEvent(evt,reference,delay,options)},{key:_updateTitleContent,value: function _updateTitleContent(title) { if (typeof this._tooltipNode === 'undefined') { if (typeof this.options.title !== 'undefined') { this.options.title = title},{key:_clearTitleContent,value: function _clearTitleContent(titleNode,allowHtml,lastTitle) { if (lastTitle.nodeType === 1 || lastTitle.nodeType === 11) { allowHtml && titleNode.removeChild(lastTitle)}else{allowhtmltitlenodeinnerhtml:: titleNode.textContent =}placement - The desired title.
*/
var _initialiseProps = function _initialiseProps(){var_this5:this;thisshow:function () { return _this5._show(_this5.reference,_this5.options)};
this._events = [];
this._setTooltipNodeEvent = function (evt,reference,delay,options){varrelatedreference:evt.relatedreference || evt.toElement || evt.relatedTarget;varcallback:function callback(evt2) { var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget}