import {Request, Response} from 'express'
import { db } from '../db'
import User from '../models/User'


export const createUser = async(req:Request,res: Response) => {
    console.log('llego')
    console.log(req.body , 'body')
    console.log('llego')
    const user = new User(req.body)
    await user.save()
    res.json({
       user
    })
}

export const getUser = async(req:Request,res: Response) => {

}


export const deleteUser = async(req:Request,res: Response) => {

}


export const updateUser = async(req:Request,res: Response) => {

}