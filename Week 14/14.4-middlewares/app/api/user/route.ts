import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        msg:"yu are logged in"
    })
}