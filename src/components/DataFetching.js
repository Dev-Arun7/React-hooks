// Here fetching all the posts from a url and list
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <h1> Data Fetching </h1>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}> {post.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default DataFetching