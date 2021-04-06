"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticate = void 0;
const Authenticate = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("Not authenticated");
    }
    return next();
};
exports.Authenticate = Authenticate;
//# sourceMappingURL=Authenticate.js.map