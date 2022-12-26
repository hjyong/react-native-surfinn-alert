"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var react_1 = require("react");
var Alert_context_1 = require("./Alert.context");
exports.Alert = (0, react_1.forwardRef)(function (_a, ref) {
    var _b = _a.backdrop, backdrop = _b === void 0 ? false : _b, _c = _a.backdropOpacity, backdropOpacity = _c === void 0 ? 0.1 : _c, children = _a.children;
    var _d = (0, Alert_context_1.useAlert)(), add = _d.add, remove = _d.remove, open = _d.open, close = _d.close;
    (0, react_1.useEffect)(function () {
        var id = add({ children: children, backdrop: backdrop, backdropOpacity: backdropOpacity });
        ref.current = {
            remove: function () { return remove(id); },
            open: function () { return open(id); },
            close: function () { return close(id); },
        };
        return function () {
            remove(id);
        };
    }, [children, ref, add, remove, open, close, backdrop, backdropOpacity]);
    return null;
});
