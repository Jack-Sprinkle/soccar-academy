import './UserProfile.scss';

function UserProfile({userName, discord, epic, mmr, bio}) {
    return (
        <div className='profile'>
            <h2>Profile</h2>
            <div className='profile__info'>
                <div className='profile__info-container'>
                    <p>{userName}</p>
                    <p>{discord}</p>
                    <p>{epic}</p>
                    <p>Standard MMR: {mmr}</p>
                </div>
                <p>{bio}</p>
            </div>
            <button>Update MMR</button>
        </div>
    );
};

export default UserProfile;