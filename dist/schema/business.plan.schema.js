"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const zod_1 = require("zod");
const businessPlanSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }),
        description: (0, zod_1.string)({
            required_error: "Description is required"
        }),
        amount: (0, zod_1.number)({
            required_error: "Amount is required"
        }),
        duration: (0, zod_1.number)({
            required_error: "Duration is required"
        }),
        interest_rate: (0, zod_1.number)({
            required_error: "Interest rate is required"
        }),
        vendor_id: (0, zod_1.string)({
            required_error: "Vendor ID is required"
        })
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "Business Plan ID required"
    })
});
