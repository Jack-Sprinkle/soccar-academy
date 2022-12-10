import './Login.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required'),
    password: Yup.string().required('This field is required')
});


function Login({loginShow, onClose, handleLogin, errorMessage, isLoggedIn}) {
    
    if (!loginShow) {
        return null;
    }
    console.log(isLoggedIn)
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
                onSubmit={(values, {resetForm}) => {
                    handleLogin(values)
                    resetForm()
                }}
            >
                {({errors, touched}) => (
                    <Form className='login__form'>
                        <div className='login__form-fields'>
                            <label className='login__label'>
                                Email
                                <Field className={`login__input ${errors.email && touched.email ? 'login__input--invalid' : ''}`} name='email'/>
                            </label>
                            {errors.email && touched.email ? (
                            <div className='login__errors'>{errors.email}</div>
                            ) : null}
                            
                            <label className='login__label'>
                                Password
                                <Field className={`login__input ${errors.password && touched.password ? 'login__input--invalid' : ''}`} name='password' type='password' />
                            </label>
                            {errors.password && touched.password ? (
                                <div className='login__errors'>{errors.password}</div>
                            ) : null}
                            
                        </div>
                        <button className='login__submit' type='submit'>Login</button>
                        {errorMessage.length > 1 ? (<p className='response__message'>{errorMessage}</p>) : null}
                        {isLoggedIn ? (<p className='response__message--success'>Login Successful!</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default Login;