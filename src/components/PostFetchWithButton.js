// Here fetching a particular post by using post id by a button click
import React, { useState, useEffect } from "react";
import axios from "axios";

function PostFetchingWithButton() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)
    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButton])

    return (
        <>
            <h1>Data Fetching</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}> Fetch Post</button>
            <h2>{post.title}</h2>
        </>
    )
}

export default PostFetchingWithButton
