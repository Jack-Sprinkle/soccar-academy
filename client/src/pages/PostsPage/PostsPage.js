import './PostsPage.scss';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import Post from '../../components/Post/Post';


function PostsPage() {
    const [threads, setThreads] = useState(null)

    const category = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${category.category}`)
        .then(response => {
            setThreads(response.data)
        })
        .catch(error => {
            console.log(error)
        }, [])
    })

    if(!threads) {
        return (
            <div>Loading posts...</div>
        )
    }

    return (
        <div>
            {threads.map((thread) => {
                const {id, title, content, created_on, user_name} = thread;
                return (
                    <Post
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                        timestamp={created_on}
                        user={user_name}
                    />
                )
            })}
        </div>
    );
};

export default PostsPage;