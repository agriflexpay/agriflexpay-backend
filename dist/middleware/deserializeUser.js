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
exports.deserializeUser = void 0;
const lodash_1 = require("lodash");
const jwt_utls_1 = require("../utils/jwt.utls");
const token_1 = __importDefault(require("../services/token"));
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const accessToken = (0, lodash_1.get)(req, "headers.x-access-token"); //.replace(/^Bearer\s/, "");
    const refreshToken = (0, lodash_1.get)(req, "headers.x-refresh");
    if (!accessToken) {
        return next();
    }
    const { decoded, expired } = yield (0, jwt_utls_1.verifyToken)(accessToken);
    if (decoded) {
        res.locals.user = decoded === null || decoded === void 0 ? void 0 : decoded.data;
        return next();
    }
    if (expired && refreshToken) {
        const new_access_token = yield token_1.default.reIssueAccessToken({ refreshToken });
        if (new_access_token && ((_a = Object.keys(new_access_token !== null && new_access_token !== void 0 ? new_access_token : {})) === null || _a === void 0 ? void 0 : _a.length)) {
            res.setHeader("x-access-token", new_access_token === null || new_access_token === void 0 ? void 0 : new_access_token.authToken);
            res.setHeader("headers.x-refresh", new_access_token === null || new_access_token === void 0 ? void 0 : new_access_token.refreshToken);
            const result = yield (0, jwt_utls_1.verifyToken)(new_access_token === null || new_access_token === void 0 ? void 0 : new_access_token.authToken);
            res.locals.user = (yield result).decoded;
        }
        return next();
    }
    return next();
});
exports.deserializeUser = deserializeUser;
