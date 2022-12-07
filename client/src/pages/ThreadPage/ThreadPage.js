import './ThreadPage.scss';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function ThreadPage() {
    const postId = useParams();
    console.log(postId)
    return (
        <div>
            List of comments here
        </div>
    );
};

export default ThreadPage;