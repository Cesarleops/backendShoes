"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUser);
router.post('/posteo', users_1.createUser);
router.put('/', users_1.updateUser);
exports.default = router;
//# sourceMappingURL=users.js.map