"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertProvider = exports.useAlert = exports.AlertContext = void 0;
var react_1 = __importStar(require("react"));
var Alert_view_1 = require("./Alert.view");
var surfinn_uuid_1 = __importDefault(require("surfinn-uuid"));
var initialAlerts = [];
var reducer = function (state, action) {
    var alert = null;
    switch (action.type) {
        case 'ADD':
            return __spreadArray(__spreadArray([], state, true), [
                {
                    id: action.id,
                    show: false,
                    children: action.children,
                    backdrop: action.backdrop,
                    backdropOpacity: action.backdropOpacity,
                },
            ], false);
        case 'REMOVE':
            return state.filter(function (_alert) { return _alert.id !== action.id; });
        case 'OPEN':
            alert = state.find(function (_alert) { return _alert.id === action.id; });
            if (alert) {
                return __spreadArray(__spreadArray([], state.filter(function (_alert) { return _alert.id !== action.id; }), true), [
                    __assign(__assign({}, alert), { show: true }),
                ], false);
            }
            else {
                return state;
            }
        case 'CLOSE':
            alert = state.find(function (_alert) { return _alert.id === action.id; });
            if (alert) {
                return __spreadArray(__spreadArray([], state.filter(function (_alert) { return _alert.id !== action.id; }), true), [
                    __assign(__assign({}, alert), { show: false }),
                ], false);
            }
            else {
                return state;
            }
        default:
            return state;
    }
};
exports.AlertContext = (0, react_1.createContext)(null);
var useAlert = function () { return (0, react_1.useContext)(exports.AlertContext); };
exports.useAlert = useAlert;
var AlertProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useReducer)(reducer, initialAlerts), alerts = _b[0], dispatch = _b[1];
    var add = (0, react_1.useCallback)(function (state) {
        console.log('Alert.context add', state);
        var id = surfinn_uuid_1.default.v4();
        dispatch(__assign(__assign({ type: 'ADD' }, state), { id: id }));
        return id;
    }, []);
    var remove = (0, react_1.useCallback)(function (id) {
        dispatch({ type: 'REMOVE', id: id });
    }, []);
    var open = (0, react_1.useCallback)(function (id) {
        dispatch({ type: 'OPEN', id: id });
    }, []);
    var close = (0, react_1.useCallback)(function (id) {
        dispatch({ type: 'CLOSE', id: id });
    }, []);
    var context = (0, react_1.useMemo)(function () { return ({
        add: add,
        remove: remove,
        open: open,
        close: close,
    }); }, [add, remove, open, close]);
    return (react_1.default.createElement(exports.AlertContext.Provider, { value: context },
        children,
        alerts
            .filter(function (alert) { return alert.show; })
            .map(function (alert) {
            return (react_1.default.createElement(Alert_view_1.AlertView, { key: alert.id, backdrop: alert.backdrop, backdropOpacity: alert.backdropOpacity }, alert.children));
        })));
};
exports.AlertProvider = AlertProvider;
