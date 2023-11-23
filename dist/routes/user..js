"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schema/user.schema");
const validate_1 = __importDefault(require("../middleware/validate"));
const user_1 = __importDefault(require("../controllers/user"));
const routes = (app) => {
    app.post('/api/user/register', (0, validate_1.default)(user_schema_1.userSchema), user_1.default.register);
    app.post('/api/user/login', user_1.default.login);
    app.get('/api/user/:id', user_1.default.getuser);
    app.put('/api/user/fetchAll', user_1.default.fetchAll);
    app.put('/api/user/update/:id', user_1.default.update);
};
exports.default = routes;
