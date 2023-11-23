"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        fname: (0, zod_1.string)({
            required_error: "First Name is required"
        }),
        lname: (0, zod_1.string)({
            required_error: "Last name is required"
        }),
        password: (0, zod_1.string)({
            required_error: "Password is required"
        }).min(6, "Password too short, should be 6 chars min"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "Password confirmation required"
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
        role: (0, zod_1.string)({
            required_error: "Role required"
        }),
        address_id: (0, zod_1.string)({
            required_error: "Address ID required"
        }),
    }).refine(data => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    })
});
exports.params = (0, zod_1.object)({
    id: (0, zod_1.string)({
        required_error: "User ID required"
    })
});
