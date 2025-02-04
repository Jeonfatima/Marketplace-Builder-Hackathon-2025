import { NextRequest, NextResponse } from "next/server";

const usersInfo = [{
    id: 1, name: "Fatima Salman", email: "fatima@gmail.com", password: "123456"
}]
export async function POST(request:NextRequest) {
  const data = await request.json()
  const { email } = data
   const existingUser = usersInfo.find(user => user.email == email)

//    check if user already exists
 if (existingUser)
   return NextResponse.json({status:false,message:"user already exists"},{status:409})

usersInfo.push(data)
return NextResponse.json({status:true,message:"sign up success"},{status:200})

}