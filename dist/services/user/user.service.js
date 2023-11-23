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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const index_1 = __importDefault(require("../../models/index"));
const password_1 = require("../../funct/password");
const User = index_1.default.models.user;
class UserService {
    static create(_a) {
        var user = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const _user = yield User.create(user);
            return (0, lodash_1.omit)(_user.toJSON(), "password");
        });
    }
    static update(_a) {
        var { id } = _a, user = __rest(_a, ["id"]);
        return __awaiter(this, void 0, void 0, function* () {
            const _user = yield User.update(user, {
                where: {
                    id: id
                }
            });
            return _user;
        });
    }
    static fetch({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _user = yield User.findByPk(id);
            return (0, lodash_1.omit)(_user === null || _user === void 0 ? void 0 : _user.toJSON(), "password");
        });
    }
    static users() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.findAll();
            return (0, lodash_1.omit)(users, "password");
        });
    }
    static filter(_a) {
        var query = __rest(_a, []);
        return __awaiter(this, void 0, void 0, function* () {
            const condition = Object.assign({}, query);
            const _users = yield User.findAll({
                where: condition,
            });
            return _users;
        });
    }
    static delete({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _user = yield User.destroy({
                where: { id: id },
                truncate: false
            });
            return _user;
        });
    }
    static validate_password({ email, password }) {
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
            const hashedPassword = (_a = user.dataValues) === null || _a === void 0 ? void 0 : _a.password;
            const is_valid = yield (0, password_1.comparePassword)({
                password,
                hashedPassword
            });
            if (!is_valid)
                return false;
            return (0, lodash_1.omit)(user.toJSON(), "password");
        });
    }
    static avatar({ url, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_image = User.update({
                avatar: url
            }, {
                where: {
                    id: url
                }
            });
            return user_image;
        });
    }
}
exports.default = UserService;
