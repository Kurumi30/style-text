"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showEndpoints = exports.pageNotFound = exports.transform = exports.text = void 0;
const main_1 = require("../controllers/main");
function text(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.info(showInfo(req));
        const { q } = req.query;
        if (!q)
            return res.status(400).json({ error: "No query" });
        try {
            const result = yield (0, main_1.styleText)(q);
            return res.status(200).json(result);
        }
        catch (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.text = text;
function transform(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.info(showInfo(req));
        const { q } = req.query;
        if (!q)
            return res.status(400).json({ error: "No query" });
        try {
            const result = yield (0, main_1.transformText)(q);
            return res.status(200).json(result);
        }
        catch (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
}
exports.transform = transform;
function pageNotFound(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(404).json({ error: "Page not found" });
    });
}
exports.pageNotFound = pageNotFound;
function showEndpoints(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.info(showInfo(req));
        return res.status(200).json({
            endpoints: ["/text", "/transform"],
            params: ["?q="],
        });
    });
}
exports.showEndpoints = showEndpoints;
function showInfo(req) {
    return {
        headers: req.headers,
        host: req.hostname,
        ip: req.ip,
        method: req.method,
        params: req.params,
        path: req.path,
        protocol: req.protocol,
        q: req.query.q,
        url: req.url,
    };
}
