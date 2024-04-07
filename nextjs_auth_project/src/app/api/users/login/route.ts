import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connect()

export async function POST(request: NextRequest){
    try {

        const  reqBody = await request.json()
        const {email, password} = reqBody
        //validation
        console.log(reqBody)

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "Cannot find user"},
                {status: 400}
            )
        }
        console.log("User exits")

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error: "Password doesn't match"},
                {status: 500})
        }

         const tokenData  = {
            id: user._id,
            username: user.username,
            email: user.email
         }

         const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{ expiresIn: '1d' })
         
         const response = NextResponse.json({
            message: "Logged In Success",
            success: true
         })

         response.cookies.set("token", token, {
            httpOnly: true
         })

         return response
        
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500}
        )
    }
}