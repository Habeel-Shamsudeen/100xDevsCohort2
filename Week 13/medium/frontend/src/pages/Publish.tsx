import { Appbar } from "../components/Appbar"
import { BlogForm } from "../components/BlogForm"

export const Publish=()=>{
    return <div>
        <Appbar/>
        <div className="my-16">
        <BlogForm/>
        </div>
        
    </div>
}