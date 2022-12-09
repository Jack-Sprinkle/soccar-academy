import './FindCoachPage.scss';
import {useEffect, useState} from 'react';
import axios from 'axios'
import CoachCard from '../../components/CoachCard/CoachCard';

function FindCoachPage() {

    //initialize user state
    const [user, setUser] = useState(null);
    
    //initialize failed authentication state
    const [failedAuth, setFailedAuth] = useState(null);

    //initialize list of coaches
    const [coaches, setCoaches] = useState(null);
    
    //on mount verify user and get list of all coaches.
    useEffect(() => {
      const token = sessionStorage.getItem('token')
        
      //if user doesn't have a token, set failed auth. early return.
      if(!token) {
        return setFailedAuth(true);
      }
      
      //get user info and list of coaches.
      axios
        .get('http://localhost:8080/users/current', {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        .then(response => {
          setUser(response.data)
          return axios.get('http://localhost:8080/coaches', {
            headers: {
                Authorization: `Bearer: ${token}`
            }
          })
            .then(response => {
                setCoaches(response.data)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    //filter list of coaches to exclude the user, and coaches with a lower mmr
    const filteredCoaches = coaches?.filter((coach) => coach.user_name !== user.user_name && coach.mmr_standard > user.mmr_standard);

    //if user failes auth check early return
    if(failedAuth) {
        return (
            <div className='failed__auth'>
                <p className='failed__auth-text'>You must be logged in to see this page.</p>
            </div>
        )
    }

    //if there are no users on mount. issue with server, etc. early return not to break site.
    if(!user) {
        return (
            <div className='loading'>
                <p className='loading__text'>Currently retrieving your dashboard...</p>
            </div>
        )
    }

    //if there are no coaches, early return to not break. 
    if(!coaches) {
        return (
            <div className='loading'>
                <p className='loading__text'>There are no coaches at this time</p>
            </div>
        )
    }

    return (
        <div className='coach__list'>
            {filteredCoaches.map((coach) => {
                const {user_name, discord_name, mmr_standard, user_bio, id} = coach
                return (
                    <CoachCard
                        key={id}
                        id={id}
                        userName={user_name}
                        discordName={discord_name}
                        mmr={mmr_standard}
                        bio={user_bio}
                    />
                )
            })}
        </div>
    );
};

export default FindCoachPage;