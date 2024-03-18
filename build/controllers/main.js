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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformText = exports.styleText = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const baseUrl = "https://qaz.wtf/u";
function styleText(text) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let response = [];
            const { data } = yield axios_1.default.get(`${baseUrl}/convert.cgi?text=${text}`);
            const $ = (0, cheerio_1.load)(data);
            $("table > tbody > tr").each((i, el) => {
                const type = $(el).find("td:nth-child(1) > span").text();
                const result = $(el).find("td:nth-child(2)").text().trim();
                response.push({ type, result });
            });
            return resolve(response);
        }
        catch (err) {
            return reject(err);
        }
    }));
}
exports.styleText = styleText;
function transformText(text) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let response = [];
            const { data } = yield axios_1.default.get(`${baseUrl}/combining.cgi?use=${text}&count=0&type=both`);
            const $ = (0, cheerio_1.load)(data);
            $("table > tbody > tr").each((i, el) => {
                const type = $(el).find("td:nth-child(1) > span").text();
                const result = $(el).find("td:nth-child(2)").text().trim();
                response.push({ type, result });
            });
            return resolve(response);
        }
        catch (err) {
            return reject(err);
        }
    }));
}
exports.transformText = transformText;
