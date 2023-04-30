"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const express_validator_1 = require("express-validator");
const validators_1 = require("../helpers/validators");
const fieldsValidator_1 = require("../middlewares/fieldsValidator");
const router = (0, express_1.Router)();
router.get('/', [], users_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('name', 'name is required ').not().isEmpty(),
    (0, express_validator_1.check)('email', 'email is not valid').isEmail(),
    (0, express_validator_1.check)('password', 'password is not valid').isLength({ min: 6, max: 8 }),
    (0, express_validator_1.check)('email').custom(validators_1.emailValidation),
    fieldsValidator_1.fieldsValidator
], users_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(validators_1.userExists),
    fieldsValidator_1.fieldsValidator
], users_1.updateUser);
router.delete('/', users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map