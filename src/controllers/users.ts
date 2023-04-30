import {Request, Response} from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/User'


export const createUser = async(req:Request,res: Response) => {
    const { password } = req.body
    const user = await User.create(req.body)
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password,salt)
    await user.save()
    res.json({
       user
    })

}

export const login = async(req:Request,res: Response) => {
    const {email, password} = req.body 

    try {
        const user = await User.findAll({
            where: {
                email: email
            }
        })
        if(!user){
            return res.json({
                msg: 'this email is not registered '
            })
            
        }
       
        const validatePassword = bcryptjs.compareSync(password, user.password)
        if(!validatePassword){
            return res.json({
                msg: 'Incorrect password'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
   
}
export const getUser = async(req:Request,res: Response) => {

}


export const deleteUser = async(req:Request,res: Response) => {
    console.log(req.body)
    try {
        const user = await User.findByPk(req.body.id)
        await user.update({active: false})
        console.log(user)
    } catch (error) {
        console.log(error)
    }
   
}


export const updateUser = async(req:Request,res: Response) => {

}