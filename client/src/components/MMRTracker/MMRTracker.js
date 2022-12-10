import './MMRTracker.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MMRTracker({userId}) {

    const [mmrData, setMMRData] = useState(null)
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        axios.get(`http://localhost:8080/mmr/${userId}`, {
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