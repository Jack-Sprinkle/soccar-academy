import './ThreadPage.scss';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';

function ThreadPage() {
    const {category, postId} = useParams();

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:8080/posts/${category}/${postId}`)
            .then(response => {
                setPost(response.data)
                return axios.get(`http://localhost:8080/comments/${postId}`)
            })
            .then(response => {
                setComments(response.data)
            }).catch(error => {
                console.log(error)
            })

    }, [])

    if(!post || !comments) {
        return (
            <div>
                Loading thread...
            </div>
        )
    }

    const updatedTime = (array) => {
        comments?.map((comment) => {
            const dateObj = new Date(comment.created_on)
            const timestamp = dateObj.getTime()
            const modifiedDate = new Date(timestamp)
            comment.created_on = modifiedDate.toLocaleDateString()
            return comment
        })
    }
    updatedTime(comments)
    
    const updatedPostTime = (object) => {
        const dateObj = new Date(post.created_on);
        const timestamp = dateObj.getTime();
        const modifiedDate = new Date(timestamp)
        post.created_on = modifiedDate.toLocaleDateString();
    }
    updatedPostTime(post)

    return (
        <div className='thread'>
            <div className='thread__info'>
                <h2 className='thread__title'>{post.title}</h2>
                <button className='thread__reply'>Comment</button>
                <div className='thread__content'>
                    <div className='thread__content-container'>
                        <p>{post.user_name}</p>
                        <p>{post.created_on}</p>
                    </div>
                    <p>{post.content}</p>
                </div>
            </div>
            {comments.map((comment) =>{
                const {id, content, created_on, user_name} = comment;
                return (
                    <Comment
                        key={id}
                        id={id}
                        content={content}
                        timestamp={created_on}
                        user={user_name}
                    />
                )
            })}
             
        </div>
    );
};

export default ThreadPage;