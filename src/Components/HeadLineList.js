import React from 'react';
import HeadLineItem from './HeadlineItem';

const HeadLineList = ({ storyIds }) => {

    return (
        <>
            <h2>HeadlineList</h2>
            <HeadLineItem />
        </>
    )
}
export default HeadLineList;

// https://hacker-news.firebaseio.com/v0/item/{storyId}.json 
