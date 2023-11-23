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
const user_service_1 = __importDefault(require("../services/user/user.service"));
const responce_1 = __importDefault(require("../funct/responce"));
const token_1 = __importDefault(require("../services/token"));
class UserController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_service_1.default.create(req.body);
                return token_1.default.generateToken({ user, res });
            }
            catch (error) {
                return responce_1.default.error({ res, error });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield user_service_1.default.validate_password({ email, password });
                if (!user) {
                    return responce_1.default.error({ res, error: "Invalid email or password" });
                }
                return token_1.default.generateToken({
                    res,
                    user
                });
            }
            catch (error) {
                return responce_1.default.error({ res, error });
            }
        });
    }
    static getuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield user_service_1.default.fetch({ id });
                if (!user) {
                    return responce_1.default.error({ res, error: "User not found" });
                }
                return responce_1.default.success({ res, data: user });
            }
            catch (error) {
                return responce_1.default.error({ res, error });
            }
        });
    }
    static fetchAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_service_1.default.users();
                if (!users) {
                    return responce_1.default.error({ res, error: "Users not found" });
                }
            }
            catch (error) {
                responce_1.default.error({ res, error });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield user_service_1.default.update(Object.assign({ id }, req.body));
                if (!user) {
                    return responce_1.default.error({ res, error: "User not updated" });
                }
                return responce_1.default.success({ res, data: user });
            }
            catch (error) {
                return responce_1.default.error({ res, error });
            }
        });
    }
}
exports.default = UserController;
