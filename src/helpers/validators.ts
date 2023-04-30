import User from '../models/User'

export const emailValidation = async(email:string) => {
    const repeatedEmail = await User.findOne({email})
        if(repeatedEmail){
            throw new Error(`Email: ${email} is a registered email`)
        }
}

export const userExists = async(userId:string) => {
    const registeredUser = await User.findByPk(userId)
    if(!registeredUser){
        throw new Error(`${userId} doesn't belong to any user`)
    }
}