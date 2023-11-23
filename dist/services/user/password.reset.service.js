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
exports.Password_reset = void 0;
const reset_password_1 = require("../../funct/reset_password");
const crypto_1 = __importDefault(require("crypto"));
const index_1 = __importDefault(require("../../models/index"));
const User = index_1.default.models.user;
class Password_reset {
    static resetPassword({ email }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.findOne({
                where: {
                    email
                }
            });
            if (!user) {
                return false;
            }
            const token = (_a = user === null || user === void 0 ? void 0 : user.dataValues) === null || _a === void 0 ? void 0 : _a.reset_token;
            if (token) {
                User.update({ reset_token: null }, { where: { email: email } });
            }
            const new_resetToken = crypto_1.default.randomBytes(32).toString("hex");
            const set_token = yield User.update({ reset_token: (0, reset_password_1.hashResetToken)({ token: new_resetToken }),
                reset_token_expires: Date.now() + 10 * 60 * 1000
            }, { where: { email: email } });
            if (!set_token) {
                return false;
            }
            const link = `http://localhost:3000/reset-password/${new_resetToken}`;
            return link;
        });
    }
}
exports.Password_reset = Password_reset;
