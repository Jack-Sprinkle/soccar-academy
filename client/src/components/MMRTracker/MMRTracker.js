import './MMRTracker.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { date } from 'yup';

function MMRTracker({userId, mmr, initialMMRDate}) {

    const [mmrData, setMMRData] = useState(null)
    const token = sessionStorage.getItem('token')
    const initialMMRInfo = {
        mmr_standard: mmr,
        updated_at: initialMMRDate
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/mmr/${userId}`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        .then(response => {
            setMMRData(response.data)
            setMMRData(mmrData => [initialMMRInfo, ...mmrData])
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
        <div className='tracker'>
            <div className='tracker__column'>
            </div>
        </div>
    );
};

export default MMRTracker;