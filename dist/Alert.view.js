"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertView = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var AlertView = function (_a) {
    var backdrop = _a.backdrop, _b = _a.backdropOpacity, backdropOpacity = _b === void 0 ? 0.2 : _b, children = _a.children;
    var show = (0, react_native_reanimated_1.useSharedValue)(false);
    var fadeIn = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var opacity = show.value ? 1 : 0;
        return {
            opacity: (0, react_native_reanimated_1.withTiming)(opacity, { duration: 300 }),
        };
    });
    (0, react_1.useEffect)(function () {
        show.value = true;
        return function () {
            show.value = false;
        };
    }, [show]);
    return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: [styles.root, fadeIn] },
        backdrop && (react_1.default.createElement(react_native_1.View, { style: [styles.backdrop, { opacity: backdropOpacity }] })),
        children));
};
exports.AlertView = AlertView;
var styles = react_native_1.StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
    },
    backdrop: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 1,
    },
});
