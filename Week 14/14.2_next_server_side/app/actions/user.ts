"use server";
import prisma from "@/db";
export async function solve(email:string,password:string){
    try {
      const user = await prisma.user.create({
        data: {
            username: email,
            password: password
        }
    });
  
    console.log(user.id);
    return "Signed up";
      } catch (error) {
       return "error while signing up";
      }
}