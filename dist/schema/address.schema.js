"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
const zod_1 = require("zod");
const addressSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        county: (0, zod_1.string)({
            required_error: "County is required"
        }),
        subcounty: (0, zod_1.string)({
            required_error: "Subcounty is required"
        }),
        location: (0, zod_1.string)({
            required_error: "Location is required"
        }),
        sublocation: (0, zod_1.string)({
            required_error: "Sublocation is required"
        }),
        phone: (0, zod_1.number)({
            required_error: "Phone number is required"
        })
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "Address ID required"
    })
});
