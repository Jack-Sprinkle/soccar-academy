import './UserProfile.scss';
import UpdateMMR from '../UpdateMMR/UpdateMMR';
import { useState } from 'react';

function UserProfile({userId, userName, discord, epic, mmr, bio}) {
    const [mmrShow, setMMRShow] = useState(null)

    return (
        <div className='profile'>
            <h2 className='profile__heading'>Profile</h2>
            <div className='profile__info'>
                <div className='profile__info-container'>
                    <p className='profile__info-text'>Username: {userName}</p>
                    <p className='profile__info-text'>Discord: {discord}</p>
                    <p className='profile__info-text'>Epic Id: {epic}</p>
                    <p className='profile__info-text'>Standard MMR: {mmr}</p>
                </div>
                <p className='profile__info-text'>Your Bio: {bio}</p>
            </div>
            <button onClick={() => setMMRShow(true)} className='profile__update'>Update MMR</button>
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