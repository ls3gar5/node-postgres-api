import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { use } from 'express/lib/application';

export async function singUp(req, res) {

    try {

        const { username, email, password, role } = req.body;

        const user = await User.create({
            username,
            email,
            password: await User.encryptPassword(password)
        });

        if (user) {

            console.log(user);

            const token = jwt.sign({id: user._id}, config.SECRET, {
                expiresIn: 86400
            });
    
            res.json({token});
        }

    } catch (error) {
        console.log(error);
    }
}

export function singIn(req, res) {
    res.json({
        message: 'Scuccess'
    })
}