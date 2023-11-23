"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.vendorSchema = void 0;
const zod_1 = require("zod");
exports.vendorSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }),
        email: (0, zod_1.string)({
            required_error: "Email is required"
        }).email("Not a valid email"),
        description: (0, zod_1.string)({
            required_error: "Description is required"
        }),
        phone: (0, zod_1.number)({
            required_error: "Phone is required"
        }),
        address_id: (0, zod_1.string)({
            required_error: "Address ID is required"
        })
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "Vendor ID required"
    })
});
