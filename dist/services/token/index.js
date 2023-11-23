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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = __importDefault(require("../user/user.service"));
const responce_1 = __importDefault(require("../../funct/responce"));
const jwt_utls_1 = require("../../utils/jwt.utls");
const lodash_1 = require("lodash");
const logger_1 = __importDefault(require("../../funct/logger"));
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
class TokenService {
    static decode(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, publicKey);
                return decoded;
            }
            catch (error) {
                logger_1.default.error(error);
                return null;
            }
        });
    }
    static sign(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authToken = jsonwebtoken_1.default.sign({ data }, privateKey, {
                    algorithm: "RS256",
                    expiresIn: process.env.TokenExpiresIn
                });
                const refreshToken = jsonwebtoken_1.default.sign({ data }, privateKey, {
                    algorithm: "RS256",
                    expiresIn: process.env.REFRESH_TOKEN_ExpiresIn
                });
                return {
                    authToken,
                    refreshToken
                };
            }
            catch (error) {
                logger_1.default.error(error);
                return null;
            }
        });
    }
    static verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Decode token
                let _decoded;
                _decoded = yield this.decode(token);
                if (!_decoded) {
                    return false;
                }
                const user = yield user_service_1.default.fetch({ id: _decoded === null || _decoded === void 0 ? void 0 : _decoded.id });
                if (!user) {
                    logger_1.default.error("User not found");
                    return false;
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return null;
            }
        });
    }
    static generateToken({ user, res, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { fname, lname, email, id, is_active } = user;
                const token = yield this.sign({
                    fname,
                    lname,
                    email,
                    id,
                    is_active,
                });
                if (!((_a = Object.keys(token !== null && token !== void 0 ? token : {})) === null || _a === void 0 ? void 0 : _a.length)) {
                    return responce_1.default.error({ res, error: "Failed to generate token" });
                }
                return responce_1.default.success({
                    res,
                    data: Object.assign({ user }, (token !== null && token !== void 0 ? token : {}))
                });
            }
            catch (error) {
                return responce_1.default.error({ res, error });
            }
        });
    }
    static reIssueAccessToken({ refreshToken }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { decoded, expired } = yield (0, jwt_utls_1.verifyToken)(refreshToken);
            if (!decoded || !(0, lodash_1.get)(decoded, "id") || expired)
                return false;
            const user = yield user_service_1.default.fetch({ id: decoded === null || decoded === void 0 ? void 0 : decoded.id });
            if (!user)
                return false;
            const accessToken = yield this.sign(user);
            return accessToken;
        });
    }
}
exports.default = TokenService;
