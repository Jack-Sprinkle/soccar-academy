import './Dashboard.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import UserProfile from '../../components/UserProfile/UserProfile';
import MMRTracker from '../../components/MMRTracker/MMRTracker';
import SkillTracker from '../../components/SkillTracker/SkillTracker';

function Dashboard({user}) {
    const [failedAuth, setFailedAuth] = useState(null);
    
    //check on mount if user has a token.
    useEffect(() => {
        const token = sessionStorage.getItem('token')
  
        if(!token) {
            return setFailedAuth(true);
        }
    }, [])


    if(failedAuth) {
        return (
            <div className='failed__auth'>
                <p className='failed__auth-text'>You must be logged in to see this page.</p>
            </div>
        )
    }

    if(!user) {
        return (
            <div className='loading'>
                <p className='loading__text'>Currently retrieving your dashboard...</p>
            </div>
        )
    }

    const {id, user_name, discord_name, epic_id, mmr_standard, user_bio, created_on} = user
    return (
        <div className='dashboard'>
            <UserProfile
                userId={id}
                userName={user_name}
                discord={discord_name}
                epic={epic_id}
                mmr={mmr_standard}
                bio={user_bio}
            />
            <MMRTracker
                userId={id}
                mmr={mmr_standard}
                initialMMRDate={created_on}
            />
            <SkillTracker />
        </div>
    );
};

export default Dashboard;