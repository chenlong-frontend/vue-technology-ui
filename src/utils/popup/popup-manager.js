import { addClass, removeClass } from '../dom';
var hasModal = false;
var getModal = function () {
    var modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    }
    else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;
        modalDom.addEventListener('touchmove', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });
        modalDom.addEventListener('click', function () {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
    }
    return modalDom;
};
var instances = {};
var PopupManager = {
    zIndex: 2000,
    modalDom: null,
    modalStack: [],
    doOnModalClick: function () {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem)
            return;
        var instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },
    openModal: function (id, zIndex, dom, modalClass, modalFade) {
        if (!id || zIndex === undefined)
            return;
        this.modalFade = modalFade;
        var modalStack = this.modalStack;
        for (var i = 0, j = modalStack.length; i < j; i++) {
            var item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }
        var modalDom = getModal();
        addClass(modalDom, 'v-modal');
        if (this.modalFade && !hasModal) {
            addClass(modalDom, 'v-modal-enter');
        }
        if (modalClass) {
            var classArr = modalClass.trim().split(/\s+/);
            classArr.forEach(function (item) { return addClass(modalDom, item); });
        }
        setTimeout(function () {
            removeClass(modalDom, 'v-modal-enter');
        }, 200);
        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        }
        else {
            document.body.appendChild(modalDom);
        }
        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
    },
    getInstance: function (id) {
        return instances[id];
    },
    register: function (id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },
    deregister: function (id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },
    nextZIndex: function () {
        return PopupManager.zIndex++;
    },
    closeModal: function (id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();
        if (modalStack.length > 0) {
            var topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                if (topItem.modalClass) {
                    var classArr = topItem.modalClass.trim().split(/\s+/);
                    classArr.forEach(function (item) { return removeClass(modalDom, item); });
                }
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            }
            else {
                for (var i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
};
export default PopupManager;
