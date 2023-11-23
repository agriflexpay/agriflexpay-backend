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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./models/index"));
const logger_1 = __importDefault(require("./funct/logger"));
const deserializeUser_1 = require("./middleware/deserializeUser");
const user_1 = __importDefault(require("./routes/user."));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(deserializeUser_1.deserializeUser);
const sequelize_auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.authenticate().then(() => {
            index_1.default.sync().then(() => {
                console.log('Database Connected');
                next();
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
app.use(sequelize_auth);
app.listen(port, () => {
    logger_1.default.info(`Server running on port ${port}`);
    (0, user_1.default)(app);
});
