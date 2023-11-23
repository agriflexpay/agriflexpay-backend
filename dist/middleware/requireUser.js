"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
const requireUser = (req, res, next) => {
    var _a;
    const user = (_a = res.locals) === null || _a === void 0 ? void 0 : _a.user;
    if (!user) {
        return res.sendStatus(403);
    }
    return next();
};
exports.requireUser = requireUser;
