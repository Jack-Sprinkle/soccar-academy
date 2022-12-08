import './Login.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required'),
    password: Yup.string().required('This field is required')
});


function Login({setLoginShow, loginShow, onClose}) {
    const navigate = useNavigate();
    
    if (!loginShow) {
        return null;
    }

   
    const handleSubmit = (values) => {
        const user = {
            user_email: values.email,
            user_password: values.password
        }
        axios.post('http://localhost:8080/users/login', user)
        .then(response => {
            sessionStorage.setItem('token', response.data.token);
            navigate('/dashboard')
            setLoginShow(false)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='login'>
            <div className='login__heading-container'>
                <h1 className='login__heading'>Login</h1>
                <button className='login__close' onClick={onClose}></button>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={LoginSchema}
                onSubmit={values => {
                    handleSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <Form className='login__form'>
                        <div className='login__form-fields'>
                            <label className='login__label'>
                            Email
                            <Field className={`login__input ${errors.email && touched.email ? 'login__input--invalid' : ''}`} name='email'/>
                            {errors.email && touched.email ? (
                                <div className='login__errors'>{errors.email}</div>
                            ) : null}
                            </label>
                            <label className='login__label'>
                            Password
                            <Field className={`login__input ${errors.password && touched.password ? 'login__input--invalid' : ''}`} name='password' type='password' />
                            {errors.password && touched.password ? (
                                <div className='login__errors'>{errors.password}</div>
                            ) : null}
                            </label>
                        </div>
                        <button className='login__submit' type='submit'>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default Login;