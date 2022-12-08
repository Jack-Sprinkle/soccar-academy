import './PostsPage.scss';
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/Post/Post';


function PostsPage() {
    //Initialize thread list as state
    const [threads, setThreads] = useState(null)

    //Make axios call on mount of components
    const {category} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${category}`)
        .then(response => {
            setThreads(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    //If there are no threads, early return
    if(!threads) {
        return (
            <div>Loading posts...</div>
        )
    }

    //create function to update timestamp to more user friendly format
    const updatedTime = (array) => {
            threads.map((thread) => {
            const dateObj = new Date(thread.created_on)
            const timestamp = dateObj.getTime()
            const modifiedDate = new Date(timestamp)
            thread.created_on = modifiedDate.toLocaleDateString()
            return thread
        })
    }

    //call function
    updatedTime(threads)

    return (
        <div>
            <h2 className='post__category'>{category} Discussion</h2>
            <button className='post__new-button'>New Post</button>
            {threads.map((thread) => {
                const {id, title, content, created_on, user_name} = thread;
                return (
                    <Post
                        key={id}
                        id={id}
                        category={category}
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