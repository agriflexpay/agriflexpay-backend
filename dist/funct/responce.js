"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
class ResponseService {
    static success({ res, data }) {
        return res.status(200).json({
            data,
        });
    }
    static error({ res, error }) {
        logger_1.default.error(error);
        return res.status(400).json({
            error: error.message
        });
    }
    static notFound(res, error) {
        logger_1.default.error(error);
        return res.status(404).json({
            error: error.message
        });
    }
    static update(res, data) {
        return res.status(200).json({
            data
        });
    }
}
exports.default = ResponseService;
