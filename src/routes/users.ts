import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/users";
import {check} from 'express-validator'
import { emailValidation, userExists } from "../helpers/validators";
import { fieldsValidator } from "../middlewares/fieldsValidator";
const router = Router()

router.get('/',[],  getUser)

router.post('/', [
    check('name', 'name is required ').not().isEmpty(),
    check('email', 'email is not valid').isEmail(),
    check('password', 'password is not valid').isLength({min:6 , max:8}),
    check('email').custom(emailValidation),
    fieldsValidator], 
    createUser)

router.put('/:id', [
    check('id').custom(userExists),
    fieldsValidator
], updateUser)
router.delete('/', deleteUser)

export default router