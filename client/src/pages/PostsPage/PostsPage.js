import './PostsPage.scss';
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/Post/Post';
import TabletMenu from '../../components/TabletMenu/TabletMenu';


function PostsPage({isLoggedIn}) {
    //Initialize thread list as state
    const [threads, setThreads] = useState([])

    const API_URL = process.env.REACT_APP_API_URL

    //Make axios call on mount of components
    const {category} = useParams();
    useEffect(() => {
        axios.get(`${API_URL}/posts/${category}`)
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
            <div className='loading'>
            <TabletMenu isLoggedIn={isLoggedIn} />
            <p className='loading__text'>Loading posts...</p>
        </div>
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
        <div className='post__container'>
            <TabletMenu isLoggedIn={isLoggedIn} />
            <div className='post__container--tablet'>
                <h2 className='post__category'>{category} Discussion</h2>
                <Link to={`/${category}/newpost`}><button className='post__new-button'>New Post</button></Link>
                <h3 className={`${threads.length === 0 ? 'no__posts' : 'posts--displayed'}`}>No posts currently, be the first!</h3>
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
        </div>
    );
};

export default PostsPage;