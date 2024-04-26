import { NextRequest, NextResponse } from 'next/server';


import prisma from '@/db';

export async function POST(req: NextRequest) {
  
    try {
      const body = await req.json();
    const user = await prisma.user.create({
      data: {
          username: body.username,
          password: body.password
      }
  });

  console.log(user.id);
  return NextResponse.json({ message: "Signed up" });
    } catch (error) {
     return NextResponse.json({ error: "error while signing up" });
    }
}

export async function GET(req:NextRequest) {
  return NextResponse.json({
    name:"habeel",
    email:"habeel@gmail.com"
  })
  
}