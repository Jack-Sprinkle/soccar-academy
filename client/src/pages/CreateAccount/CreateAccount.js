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
    return (
        <div>
            Create account form here
        </div>
    );
};

export default CreateAccount;