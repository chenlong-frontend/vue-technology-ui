import Vue from 'vue';
var nodeList = [];
var isServer = Vue.prototype.$isServer;
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;
var on = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    }
    else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();
!Vue.prototype.$isServer && on(document, 'mousedown', function (e) { return (startClick = e); });
!Vue.prototype.$isServer && on(document, 'mouseup', function (e) {
    nodeList.forEach(function (node) { return node[ctx].documentHandler(e, startClick); });
});
function createDocumentHandler(el, binding, vnode) {
    return function (mouseup, mousedown) {
        if (mouseup === void 0) { mouseup = {}; }
        if (mousedown === void 0) { mousedown = {}; }
        if (!vnode ||
            !vnode.context ||
            !mouseup.target ||
            !mousedown.target ||
            el.contains(mouseup.target) ||
            el.contains(mousedown.target) ||
            el === mouseup.target ||
            (vnode.context.popperElm &&
                (vnode.context.popperElm.contains(mouseup.target) ||
                    vnode.context.popperElm.contains(mousedown.target))))
            return;
        if (binding.expression &&
            el[ctx].methodName &&
            vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]();
        }
        else {
            el[ctx].bindingFn && el[ctx].bindingFn();
        }
    };
}
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-clickoutside="handleClose">
 * ```
 */
export default {
    bind: function (el, binding, vnode) {
        nodeList.push(el);
        var id = seed++;
        el[ctx] = {
            id: id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            methodName: binding.expression,
            bindingFn: binding.value
        };
    },
    update: function (el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
    },
    unbind: function (el) {
        var len = nodeList.length;
        for (var i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
                nodeList.splice(i, 1);
                break;
            }
        }
        delete el[ctx];
    }
};
