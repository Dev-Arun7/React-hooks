// Here fetching a particular post by using post id
import React, { useState, useEffect } from "react";
import axios from "axios";

function PostFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <h1>Data Fetching</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <h2>{post.title}</h2>
        </>
    )
}

export default PostFetching
                           