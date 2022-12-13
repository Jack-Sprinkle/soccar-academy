import './CreateAccount.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

//Set up form validation schema
const newAccountSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too short').max(50, 'Too long').required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required.'),
    epicId: Yup.string().min(2, 'Too short').max(50, 'Too long').required('This field is required'),
    discordId: Yup.string().min(2, 'Too short').max(50, 'Too long').required('This field is required'),
    standardMMR: Yup.number('Must be a number').required('This field is required'),
    bio: Yup.string(),
    password: Yup.string().min(5, 'Too short').matches().required('This field is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('This field is required'),
    coach: Yup.string().required()
});

function CreateAccount({isLoggedIn}) {
    const API_URL = process.env.REACT_APP_API_URL;

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = (values) => {
        const newUser = {
            user_name: values.username,
            user_email: values.email,
            user_password: values.password,
            epic_id: values.epicId,
            discord_name: values.discordId,
            mmr_standard: values.standardMMR,
            user_bio: values.bio,
            user_coach: values.coach
        }

        axios.post(`${API_URL}/users/register`, newUser)
            .then(response => {
                setSuccess(response.data)
            }).catch(error => {
                setError(error.response.data)
            })
    }

    if(isLoggedIn) {
        return (
            <div className='logged-in'>
                <TabletMenu />
                <p className='logged-in__text'>Already logged in</p>
            </div>
        )
    }

    return (
        <div className='new-account--tablet'>
            <TabletMenu />
            <div className='new'>
                <h2 className='new__heading'>Create Account</h2>
                <Formik 
                    initialValues={{
                        username: '',
                        email: '',
                        epicId: '',
                        discordId: '',
                        standardMMR: '',
                        bio: '',
                        password: '',
                        confirmPassword: '',
                        coach: ''
                    }}

                    validationSchema={newAccountSchema}
                    onSubmit={(values, {resetForm}) => {
                        handleSubmit(values)
                        resetForm();
                    }}
                >
                    {({errors, touched}) => (
                        <Form className='new__form'>
                            <div className='new__form-fields'>
                                <label className='new__label'>
                                    Username
                                    <Field className={`new__input ${errors.username && touched.username ? 'new__input--invalid' : ''}`} placeholder='Username' name='username'/> 
                                </label>
                                {errors.username && touched.username ? (
                                <div className='new__errors'>{errors.username}</div>
                                ) : null}

                                <label className='new__label'>
                                    Email
                                    <Field className={`new__input ${errors.email && touched.email ? 'new__input--invalid' : ''}`} placeholder='Email' name='email'/>
                                </label>
                                {errors.email && touched.email ? (
                                <div className='new__errors'>{errors.email}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Epic Id
                                    <Field className={`new__input ${errors.epicId && touched.epicId ? 'new__input--invalid' : ''}`} placeholder='Epic Id' name='epicId'/>
                                </label>
                                {errors.epicId && touched.epicId ? (
                                <div className='new__errors'>{errors.epicId}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Discord
                                    <Field className={`new__input ${errors.discordId && touched.discordId ? 'new__input--invalid' : ''}`} placeholder='Discord' name='discordId'/>
                                </label>
                                {errors.discordId && touched.discordId ? (
                                <div className='new__errors'>{errors.discordId}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Standard MMR
                                    <Field className={`new__input ${errors.standardMMR && touched.standardMMR ? 'new__input--invalid' : ''}`} placeholder='Standard MMR' name='standardMMR'/>
                                </label>
                                {errors.standardMMR && touched.standardMMR ? (
                                <div className='new__errors'>{errors.standardMMR}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Bio
                                    <Field as='textarea' className={`new__input--large ${errors.bio && touched.bio ? 'new__input--invalid' : ''}`} placeholder='What do you want other users to know... ' name='bio'/>
                                </label>
                                {errors.bio && touched.bio ? (
                                <div className='new__errors'>{errors.bio}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Password
                                    <Field type='password' className={`new__input ${errors.password && touched.password ? 'new__input--invalid' : ''}`} placeholder='Password' name='password'/>
                                </label>
                                {errors.password && touched.password ? (
                                <div className='new__errors'>{errors.password}</div>
                                ) : null}

                                <label className='new__label'>  
                                    Confirm Password
                                    <Field type='password' className={`new__input ${errors.confirmPassword && touched.confirmPassword ? 'new__input--invalid' : ''}`} placeholder='Confirm Password' name='confirmPassword'/>
                                </label>
                                {errors.confirmPassword && touched.confirmPassword ? (
                                <div className='new__errors'>{errors.confirmPassword}</div>
                                ) : null}

                                <div className='new__radio'>  
                                    <h3 className='new__radio-heading'>Willing to coach?</h3>
                                    <label className='new__radio-button'>
                                        Yes
                                        <Field type='radio' className={`new__radio ${errors.coach && touched.coach ? 'new__radio--invalid' : ''}`} name='coach' value='yes'/>
                                    </label>
                                    <label className='new__radio-button'>
                                        No
                                        <Field type='radio' className={`new__radio ${errors.coach && touched.coach ? 'new__radio--invalid' : ''}`} name='coach' value='no'/>
                                    </label>
                                    <p className='new__radio-text'>*Selecting yes will allow other user to see your coach card under the "Find Coach" page. This will display your: Username, MMR, and Discord for users to contact you.</p>
                                </div>
                                {errors.coach && touched.coach ? (
                                <div className='new__errors'>{errors.password}</div>
                                ) : null}
                            </div>
                            <button className='new__submit' type='submit'>Create Account</button>
                            {error ? (<p className='error__response'>{error}</p>) : null}
                            {success ? (<p className='success__response'>{success}</p>) : null}
                        </Form>
                    )}   
                </Formik>
            </div>
        </div>
    );
};

export default CreateAccount;