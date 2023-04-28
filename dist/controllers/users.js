"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const createUser = async (req, res) => {
    console.log('llego');
    console.log(req.body, 'body');
    console.log('llego');
    const user = new User_1.default(req.body);
    await user.save();
    res.json({
        user
    });
};
exports.createUser = createUser;
const getUser = async (req, res) => {
};
exports.getUser = getUser;
const deleteUser = async (req, res) => {
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
};
exports.updateUser = updateUser;
//# sourceMappingURL=users.js.map