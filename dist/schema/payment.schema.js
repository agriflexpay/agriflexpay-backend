"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.addressSchema = void 0;
const zod_1 = require("zod");
exports.addressSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        code: (0, zod_1.string)({
            required_error: "Code is required"
        }),
        amount: (0, zod_1.number)({
            required_error: "Amount is required"
        }),
        paymentMode: (0, zod_1.string)({
            required_error: "Payment Mode is required"
        }),
        user_id: (0, zod_1.string)({
            required_error: "User ID is required"
        }),
        plan_id: (0, zod_1.string)({
            required_error: "Plan ID is required"
        }),
        vendor_id: (0, zod_1.string)({
            required_error: "Vendor ID is required"
        }),
        phone: (0, zod_1.number)({
            required_error: "Phone is required"
        })
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "Address ID required"
    })
});
