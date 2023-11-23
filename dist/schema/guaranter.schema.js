"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.GuarantorSchema = void 0;
const zod_1 = require("zod");
exports.GuarantorSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        fname: (0, zod_1.string)({
            required_error: "First Name is required"
        }),
        lname: (0, zod_1.string)({
            required_error: "Last name is required"
        }),
        email: (0, zod_1.string)({
            required_error: "Email required"
        }).email("Not a valid email"),
        national_id: (0, zod_1.number)({
            required_error: "National ID required"
        }),
        krapin: (0, zod_1.string)({
            required_error: "KRA PIN required"
        }),
        address_id: (0, zod_1.string)({
            required_error: "Address ID required"
        })
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "Guarantor ID required"
    })
});
