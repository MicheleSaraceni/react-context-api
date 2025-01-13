import Card from "../component/Card";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = "http://localhost:3000/posts";

export default function Homepage() {
    // hook seen with Paolo (vedi file)
    // const { data: postList, isLoading } = useFetch(apiURL);

    const [postList, setPostList] = useState([]);

    function GetData() {
        axios
            .get(apiURL)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data);
            });
    }

    useEffect(() => { GetData() }, []);

    function handleRemoveItem(id) {
        GetData();
    }

    //hook
    //if (isLoading) return <h1>Loading...</h1>;

    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Classi D&D</h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {postList.map((post) => (
                    <Card item={post} key={post.id} onRemove={handleRemoveItem} />
                ))}
            </div>
        </main>
    )
}   