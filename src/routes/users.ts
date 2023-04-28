import { Router } from "express";
import { createUser, getUser, updateUser } from "../controllers/users";

const router = Router()

router.get('/', getUser)
router.post('/posteo', createUser)
router.put('/', updateUser)

export default router