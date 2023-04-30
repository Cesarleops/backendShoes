"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.login = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const createUser = async (req, res) => {
    const { password } = req.body;
    const user = await User_1.default.create(req.body);
    const salt = bcryptjs_1.default.genSaltSync();
    user.password = bcryptjs_1.default.hashSync(password, salt);
    await user.save();
    res.json({
        user
    });
};
exports.createUser = createUser;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User_1.default.findAll({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.json({
                msg: 'this email is not registered '
            });
        }
        const validatePassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validatePassword) {
            return res.json({
                msg: 'Incorrect password'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
};
exports.login = login;
const getUser = async (req, res) => {
};
exports.getUser = getUser;
const deleteUser = async (req, res) => {
    console.log(req.body);
    try {
        const user = await User_1.default.findByPk(req.body.id);
        await user.update({ active: false });
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    try {
        const user = await User_1.default.findByPk(req.body.id);
        await user.update(req.body);
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=users.js.map