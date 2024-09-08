import { connectToDB } from "@/lib/db/MongoDB";
import { User } from "@/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest)=>{
    try {
        const { userId } = auth()
        if(!userId){
            return new NextResponse("Unautorized", {status: 401})
        }
        await connectToDB();

        const user = await User.findOne({clerkId: userId});

        if(user){
            return new NextResponse('User already exist', {status: 400})
        }

        const newUser = await User.create({clerkId: userId})

        await newUser.save()

        return NextResponse.json(newUser, {status: 200})


        
    } catch (error) {
        console.log('[User_GET]', error);
        return new NextResponse('Internal Server Error', {status: 500})
    }
}