import axios from "axios";
import {useEffect, useState} from "react";
function Post(){
    const user = {

    }
    const [post,setPost] = useState([]);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPost(res.data))
    }, [])
    return(
        <>
            <h3 className={"text-gray-300 text-3xl font-bold pt-4"}>Blog</h3>
            {post.map((posts) => (
                <div className={"flex flex-col justify-center items-center w-10/12 "}>
                <div className={"flex justify-center items-center flex-col bg-slate-600 h-72 w-10/12 rounded-xl my-10 "}>
                <p className={"text-2xl text-slate-900 font-bold w-9/12 pb-12"} key={posts.id}>{posts.id} - {posts.title}</p>
                <p className={"w-8/12 text-slate-800 text-xl"}>{posts.body}</p>
                </div>
                </div>
            ))}

        </>
    )
}
export default Post;1