import './UserProfile.scss';
import UpdateMMR from '../UpdateMMR/UpdateMMR';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserProfile({userId, userName, discord, epic, mmr, bio, setIsLoggedIn, setUser}) {
    const [mmrShow, setMMRShow] = useState(null)
    const [deleteAccount, setDeleteAccount] = useState(null)

    const API_URL = process.env.REACT_APP_API_URL
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`${API_URL}/users/delete/${userId}`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
            })
            .then(response => {
                alert('Account deleted')
                setUser(null)
                setIsLoggedIn(false)
                sessionStorage.removeItem('token')
                navigate('/')
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='profile'>
            <h2 className='profile__heading'>Profile</h2>
            <div className='profile__info'>
                <div className='profile__info-container'>
                    <p className='profile__info-text'>Username: {userName}</p>
                    <p className='profile__info-text'>Discord: {discord}</p>
                    <p className='profile__info-text'>Epic Id: {epic}</p>
                    <p className='profile__info-text'>Standard MMR: {mmr}</p>
                    <p className='profile__info-text'>Your Bio: {bio}</p>
                </div>
            </div>
            <button onClick={() => setMMRShow(true)} className='profile__update'>Update MMR</button>
            <button onClick={() => setDeleteAccount(true)}className='delete'>Delete Account</button>
            {deleteAccount ? 
            (<div className='delete-container'><p className='delete__text'>Deleting account will remove all your posts and comments, 
                are you sure you want to delete your account?</p>
                <button onClick={handleDelete}className='delete__button'>Yes</button>
                <button onClick={()=> setDeleteAccount(false)} className='delete__button'>No</button>
                </div>) : null}
            <UpdateMMR
                mmrShow={mmrShow}
                setMMRShow={setMMRShow}
                userId={userId}
                onClose={() => setMMRShow(false)}
            />
        </div>
    );
};

export default UserProfile;