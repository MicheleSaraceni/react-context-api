import axios from 'axios';
import { useEffect, useState } from 'react';

// const [postList, setPostList] = useState([]);                 //da chiedere
// const apiURL = "http://localhost:3000/posts";
export default function useFetch(apiURL) {
    const [data, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(apiURL)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading }
}