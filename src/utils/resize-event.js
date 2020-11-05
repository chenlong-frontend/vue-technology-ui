var resizeHandler = function (entries) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
            listeners.forEach(function (fn) {
                fn();
            });
        }
    }
};
/* istanbul ignore next */
export var addResizeListener = function (element, fn) {
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new window['ResizeObserver'](resizeHandler);
        element.__ro__.observe(element);
    }
    element.__resizeListeners__.push(fn);
};
/* istanbul ignore next */
export var removeResizeListener = function (element, fn) {
    if (!element || !element.__resizeListeners__)
        return;
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
    }
};
