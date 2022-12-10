import './CreateAccount.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

//Set up form validation schema
const newAccountSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short').max(50, 'Too Long').required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required.'),
    epicId: Yup.string().min(2, 'Too short').max(50, 'Too long').required('This field is required'),
    discordId: Yup.string().min(2, 'Too short').max(50, 'Too long').required('This field is required'),
    standardMMR: Yup.number().required('This field is required'),
    bio: Yup.string(),
    password: Yup.string().required('This field is required'),
    coach: Yup.string().required()
});

function CreateAccount() {
    const handleSubmit = (values) => {

    }

    return (
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
                    coach: ''
                }}

                validationSchema={newAccountSchema}
                onSubmit={values => {
                    handleSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <Form className='new__form'>
                        <div className='new__form-fields'>
                            <label className='new__label'>
                                Username
                                <Field className={`new__input ${errors.username && touched.username ? 'new__input--invalid' : ''}`} name='username'/> 
                            </label>
                            {errors.username && touched.username ? (
                            <div className='new__errors'>{errors.username}</div>
                            ) : null}

                            <label className='new__label'>
                                Email
                                <Field className={`new__input ${errors.email && touched.email ? 'new__input--invalid' : ''}`} name='email'/>
                            </label>
                            {errors.email && touched.email ? (
                            <div className='new__errors'>{errors.email}</div>
                            ) : null}

                            <label className='new__label'>  
                                Epic Id
                                <Field className={`new__input ${errors.epicId && touched.epicId ? 'new__input--invalid' : ''}`} name='epicId'/>
                            </label>
                            {errors.epicId && touched.epicId ? (
                            <div className='new__errors'>{errors.epicId}</div>
                            ) : null}

                            <label className='new__label'>  
                                Discord
                                <Field className={`new__input ${errors.discordId && touched.discordId ? 'new__input--invalid' : ''}`} name='discordId'/>
                            </label>
                            {errors.discordId && touched.discordId ? (
                            <div className='new__errors'>{errors.discordId}</div>
                            ) : null}

                            <label className='new__label'>  
                                Standard MMR
                                <Field className={`new__input ${errors.standardMMR && touched.standardMMR ? 'new__input--invalid' : ''}`} name='standardMMR'/>
                            </label>
                            {errors.standardMMR && touched.standardMMR ? (
                            <div className='new__errors'>{errors.standardMMR}</div>
                            ) : null}

                            <label className='new__label'>  
                                Bio
                                <Field as='textarea' className={`new__input ${errors.bio && touched.bio ? 'new__input--invalid' : ''}`} name='bio'/>
                            </label>
                            {errors.bio && touched.bio ? (
                            <div className='new__errors'>{errors.bio}</div>
                            ) : null}

                            <label className='new__label'>  
                                Password
                                <Field type='password' className={`new__input ${errors.password && touched.password ? 'new__input--invalid' : ''}`} name='password'/>
                            </label>
                            {errors.password && touched.password ? (
                            <div className='new__errors'>{errors.password}</div>
                            ) : null}

                            <div className='new__radio'>  
                                <h3>Willing to coach?</h3>
                                <label className='new__radio-button'>
                                    Yes
                                    <Field type='radio' className={`new__radio ${errors.password && touched.password ? 'new__radio--invalid' : ''}`} name='coach' value='yes'/>
                                </label>
                                <label className='new__radio-button'>
                                    No
                                    <Field type='radio' className={`new__radio ${errors.password && touched.password ? 'new__radio--invalid' : ''}`} name='coach' value='no'/>
                                </label>
                            </div>
                            {errors.password && touched.password ? (
                            <div className='new__errors'>{errors.password}</div>
                            ) : null}
                        </div>
                    </Form>
                )}   
            </Formik>
        </div>
    );
};

export default CreateAccount;