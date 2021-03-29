"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    dbName: "omnicommerce",
    debug: !constants_1.__prod__,
    type: "postgresql",
    entities: [Post_1.Post, User_1.User],
    user: "postgres",
    password: "930614",
};
//# sourceMappingURL=mikro-orm.config.js.map