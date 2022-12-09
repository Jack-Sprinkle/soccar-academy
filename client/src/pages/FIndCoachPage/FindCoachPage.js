import './FindCoachPage.scss';
import {useEffect, useState} from 'react';
import axios from 'axios'

function FindCoachPage() {

    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(null);
    const [coaches, setCoaches] = useState(null);
  
    useEffect(() => {
      const token = sessionStorage.getItem('token')
  
      if(!token) {
        return setFailedAuth(true);
      }
  
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

    if(!coaches) {
        return (
            <div className='loading'>
                <p className='loading__text'>There are no coaches at this time</p>
            </div>
        )
    }

    return (
        <div>
            List of coaches here
        </div>
    );
};

export default FindCoachPage;