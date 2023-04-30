"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExists = exports.emailValidation = void 0;
const User_1 = __importDefault(require("../models/User"));
const emailValidation = async (email) => {
    const repeatedEmail = await User_1.default.findOne({ email });
    if (repeatedEmail) {
        throw new Error(`Email: ${email} is a registered email`);
    }
};
exports.emailValidation = emailValidation;
const userExists = async (userId) => {
    const registeredUser = await User_1.default.findByPk(userId);
    if (!registeredUser) {
        throw new Error(`${userId} doesn't belong to any user`);
    }
};
exports.userExists = userExists;
//# sourceMappingURL=validators.js.map