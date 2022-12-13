import './CreatePost.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

const newPostSchema = Yup.object().shape({
    title: Yup.string().min(3, 'Too Short!').max(200, 'Too Long!').required('This field is required!'),
    content: Yup.string().min(3, 'Too Short!').required('This field is required!')
})

function CreatePost({user, isLoggedIn}) {
    const API_URL = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const {category} = useParams()

    //If a user is not logged in, early return
    if(!isLoggedIn) {
        return (
            <div className='failed__auth'>
                <TabletMenu />
                <p className='failed__auth-text'>You must be logged in to create a new post</p>
            </div>
        )
    }

    if(!user) {
        return (
            <div className='loading'>
                <TabletMenu />
                <p className='loading__text'>Loading...</p>
            </div>
        )
    }
    //handle submit of new post. 
    const handleSubmit = (values) => {
        const token = sessionStorage.getItem('token')
        const newPost = {
            user_id: user.id,
            category: category,
            title: values.title,
            content: values.content
        }

        axios.post(`${API_URL}/posts/${category}`, newPost, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        }).then(response => {
            navigate(-1)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='new-post'>
            <TabletMenu />
            <div className='new-post--tablet'>
                <h2 className='new-post__heading'>Create new post</h2>
                <Formik
                    initialValues={{
                        title: '',
                        content: '',
                    }}

                    validationSchema={newPostSchema}
                    onSubmit={values => {
                        handleSubmit(values)
                    }}
                >
                    {({errors, touched}) => (
                        <Form className='new-post__form'>
                            <label className='new-post__form-label'>
                                Title
                                <Field className={`new-post__form-input ${errors.title && touched.title ? 'new-post__form-input--invalid' : ''}`} placeholder='Title' name='title'/>
                            </label>
                            {errors.title && touched.title ? (
                                <div className='new-post__form-errors'>{errors.title}</div>
                                ) : null}
                            <label className='new-post__form-label'>
                                Content
                                <Field as='textarea' className={`new-post__form-input--large ${errors.content && touched.content ? 'new-post__form-input--invalid' : ''}`} placeholder='Post Content...' name='content'/>
                            </label>
                            {errors.content && touched.content ? (
                                <div className='new-post__form-errors'>{errors.content}</div>
                                ) : null}
                            <button className='new-post__form-submit' type='submit'>Submit</button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    );
};

export default CreatePost;