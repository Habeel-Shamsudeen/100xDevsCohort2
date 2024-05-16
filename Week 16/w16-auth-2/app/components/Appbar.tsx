'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export const Appbar = ()=>{
    const session = useSession();
    const router = useRouter()
    return <div>
        <button onClick={()=>{
            //router.push('/api/auth/signin');
            signIn();
        }}>Signin</button>
                <button onClick={()=>{
            //router.push('/api/auth/signin');
            signOut();
        }}>signOut</button>
        {JSON.stringify(session)}
    </div>
}