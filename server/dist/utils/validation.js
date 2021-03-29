"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const validation = (options) => {
    if (!options.email.includes("@")) {
        return {
            errors: [
                { field: "email", message: "Please enter a valid email address" },
            ],
        };
    }
    if (options.username.length <= 2) {
        return {
            errors: [
                {
                    field: "username",
                    message: "Username length must be greater than 2",
                },
            ],
        };
    }
    if (options.password.length <= 3) {
        return {
            errors: [
                {
                    field: "password",
                    message: "Password length must be greater than 3",
                },
            ],
        };
    }
    return {
        errors: [],
    };
};
exports.validation = validation;
//# sourceMappingURL=validation.js.map