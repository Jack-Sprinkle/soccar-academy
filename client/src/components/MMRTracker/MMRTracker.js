import './MMRTracker.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MMRTracker({userId}) {

    const API_URL = process.env.REACT_APP_API_URL
    const [mmrData, setMMRData] = useState(null)
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        axios.get(`${API_URL}/mmr/${userId}`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        .then(response => {
            setMMRData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    if(!mmrData) {
        return (
            <div>
                Currently fetching your MMR data...
            </div>
        )
    }

    const updatedMMRTime = (array) => {
        mmrData.map((record) => {
            const dateObj = new Date(record.updated_at)
            const timestamp = dateObj.getTime()
            const modifiedDate = new Date(timestamp)
            record.updated_at = modifiedDate.toLocaleDateString()
        })
    }

    updatedMMRTime(mmrData)

    return (
        <main className='tracker__container'>
            <h2 className='tracker__heading'>MMR Standard Tracker</h2>
            <p className='tracker__info'>Updating your MMR under the "Profile" section will display your new MMR here and keep track of your historic MMR.</p>
            <div className='tracker'>
                {mmrData.map((record, i) =>{
                    return (
                        <div className='tracker__column' key={i}>
                            <p className='tracker__text'>{record.updated_at}</p>
                            <p className='tracker__text'>MMR: {record.mmr_standard}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    );
};

export default MMRTracker;