import './CoachCard.scss';

function CoachCard({id, userName, discordName, mmr, bio}) {
    return (
        <div className='coach'>
            <h2 className='coach__heading'>{userName}</h2>
            <div className='coach__container'>
                <div className='coach__info'>
                    <p className='coach__info-text'>Discord: {discordName}</p>
                    <p className='coach__info-text'>MMR: {mmr}</p>
                </div>
                <p className='coach__info-text'>{bio}</p>
            </div>
        </div>
    );
};

export default CoachCard;