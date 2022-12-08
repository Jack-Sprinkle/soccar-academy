import './Dashboard.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';
import UserProfile from '../../components/UserProfile/UserProfile';
import MMRTracker from '../../components/MMRTracker/MMRTracker';
import SkillTracker from '../../components/SkillTracker/SkillTracker';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(null);
  
    useEffect(() => {
      const token = sessionStorage.getItem('token')
  
      if(!token) {
        return setFailedAuth(true);
      }
  
      axios.get('http://localhost:8080/users/current', {
        headers: {
          Authorization: `Bearer: ${token}`
        }
      })
        .then(response => {
          setUser(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(failedAuth) {
        return (
            <div>
                <p>You must be logged in to see this page.</p>
            </div>
        )
    }

    if(!user) {
        return (
            <div>
                <p>Currently retrieving your dashboard...</p>
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