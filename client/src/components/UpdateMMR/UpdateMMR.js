import './UpdateMMR.scss';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
    mmr: Yup.string().required('This field is required')
});


function MMR({userId, mmrShow, setMMRShow, onClose}) {
    const token = sessionStorage.getItem('token')
    const API_URL = process.env.REACT_APP_API_URL

    if (!mmrShow) {
        return null;
    }

    
   
    const handleSubmit = (values) => {
        //create updates MMR object
        const updatedMMR = {
            mmr_standard: values.mmr,
            user_id: userId
        }
        //post MMR to mmr table to keep track of user MMR over time
        axios.post(`${API_URL}/mmr/${userId}`, updatedMMR, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        .then(response => {
            const mmrToUpdate = {
                mmr_standard: updatedMMR.mmr_standard
            }
            //put request to update user table with newest MMR 
            return axios.put(`${API_URL}/users/mmr`, mmrToUpdate, {
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            })
            .then(response => {
                setMMRShow(false)
            })
        }).catch(error => {
        })
    }

    return (
        <div className='MMR'>
            <div className='MMR__heading-container'>
                <h1 className='MMR__heading'>Update MMR</h1>
                <button className='MMR__close' onClick={onClose}></button>
            </div>
            <Formik
                initialValues={{
                    mmr: ''
                }}

                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {({errors, touched}) => (
                    <Form className='MMR__form'>
                        <div className='MMR__form-fields'>
                            <label className='MMR__label'>
                            Standard MMR
                            <Field className={`MMR__input ${errors.mmr && touched.mmr ? 'MMR__input--invalid' : ''}`} name='mmr'/>
                            {errors.mmr && touched.mmr ? (
                                <div className='MMR__errors'>{errors.mmr}</div>
                            ) : null}
                            </label>
                        </div>
                        <button className='MMR__submit' type='submit'>Update</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default MMR;