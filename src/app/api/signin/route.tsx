import { NextRequest, NextResponse } from "next/server";

const usersInfo = [{
    id: 1, name: "Fatima Salman", email: "fatima@gmail.com", password: "123456"
}]
export async function POST(request:NextRequest) {
  const data = await request.json()
  const { email , password } = data
   const existingUser = usersInfo.find(user => user.email == email)

//    check if user already exists
 if (!existingUser)
   return NextResponse.json({status:false,message:"user not found"},{status:404})

 if(existingUser.password!==password)
    return NextResponse.json({status:false, message:"invalid password for "+email},{status:404})
 



 return NextResponse.json({status:true,message:"Log in successfully"},{status:200})

}