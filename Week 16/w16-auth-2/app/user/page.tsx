import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        user components
        {JSON.stringify(session)}
    </div>
}