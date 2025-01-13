import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostDettail() {
    const apiURL = "http://localhost:3000/posts";
    function GetData() {
        axios
            .get(apiURL + "/" + id)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data);
            });
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1>PostDettail</h1>
        </div>
    )
}