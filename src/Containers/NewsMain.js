import React, { useState, useEffect } from 'react';
import HeadLineList from '../Components/HeadLineList';
const NewsMain = () => {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    // const [story, setStory] = useState();
    // const [url, setUrl] = useState("");

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => {
                setStoryIds(data)
                const ids = data.splice(200);
                console.log(ids)
                const promises = ids.map(storyId => {
                    const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
                    return fetch(url).then(res => res.json())
                })
                console.log()
                const results = Promise.all(promises)
                setStories(results)


            })
        // console.log(storyIds);
    }, [])

    // useEffect(() => {
    //     const promises = storyIds.splice(20).map(storyId => {
    //         const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
    //         console.log(url)
    //         return fetch(url).then(res => res.json())
    //     })
    //     console.log(promises)
    //     const results = Promise.all(promises)
    //     console.log(results)
    //     setStories(results)
    //     // const updatedStories = [...stories, story]
    //     // setStories(updatedStories)

    // }, [storyIds])

    // const concanateUrl = (id) => {
    //     const newUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    //     setUrl(newUrl);
    // }

    // const doLater = function(){
    //     const link = "https://hacker-news.firebaseio.com/v0/item/"
    //     const newLinks = storyIds.map((element) => {
    // link.concat(element, ".json")
    //         console.log("print" + newLinks)
    //         console.log(element)
    //     });
    // }

    return (
        <>
            <h1>News Main</h1>
            <HeadLineList storyIds={storyIds} />
        </>
    )
};



export default NewsMain;
// https://hacker-news.firebaseio.com/v0/item/{storyId}.json
