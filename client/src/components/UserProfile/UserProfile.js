import './UserProfile.scss';

function UserProfile({userName, discord, epic, mmr, bio}) {
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
                <p className='profile__info-text'>{bio}This is where a bio will go</p>
            </div>
            <button className='profile__update'>Update MMR</button>
        </div>
    );
};

export default UserProfile;