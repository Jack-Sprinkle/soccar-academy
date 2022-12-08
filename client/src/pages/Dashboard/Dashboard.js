import './Dashboard.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';

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
    return (
        <div>
            This is the user dashboard
        </div>
    );
};

export default Dashboard;