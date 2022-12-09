import './ThreadPage.scss';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Comment from '../../components/Comment/Comment';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const commentSchema = Yup.object().shape({
    comment: Yup.string().min(2, 'Too short!').required('This field is required')
})

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

    const handleSubmit = (values) => {

    }

    return (
        <div className='thread'>
            <div className='thread__info'>
                <h2 className='thread__title'>{post.title}</h2>
                <div className='thread__content'>
                    <div className='thread__content-container'>
                        <p>{post.user_name}</p>
                        <p>{post.created_on}</p>
                    </div>
                    <p>{post.content}</p>
                </div>
                <Formik
                    initialValues={{
                        comment: ''
                    }}

                    validationSchema={commentSchema}
                    onSubmit={values => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form className='comment__form'>
                            <div className='comment__form-input-container'>
                                <Field as='textarea' placeholder='Leave a comment...' className={`comment__form-input ${errors.comment && touched.comment ? 'comment__form-input--invalid' : ''}`} name='comment'></Field>
                                {errors.comment && touched.comment ? (
                                    <div className='comment__form-errors'>{errors.comment}</div>
                                ) : null}
                            </div>
                            <button className='comment__form-submit' type='submit'>Comment</button>
                        </Form>
                    )}
                </Formik>
                
            </div>
            <h3 className={`${comments.length === 0 ? 'no__comments' : 'comments--displayed'}`}>No comments currently, be the first!</h3>
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