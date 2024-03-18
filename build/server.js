"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const app_1 = __importDefault(require("./app"));
exports.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
app_1.default.listen(exports.port, () => console.log(`Server running on http://localhost:${exports.port}`));
