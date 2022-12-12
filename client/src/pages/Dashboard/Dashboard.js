import './Dashboard.scss';
import UserProfile from '../../components/UserProfile/UserProfile';
import MMRTracker from '../../components/MMRTracker/MMRTracker';
import SkillTracker from '../../components/SkillTracker/SkillTracker';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

function Dashboard({user, isLoggedIn, setIsLoggedIn, setUser}) {

    if(!isLoggedIn) {
        return (
            <div className='failed__auth'>
                <TabletMenu />
                <p className='failed__auth-text'>You must be logged in to see this page.</p>
            </div>
        )
    }

    if(!user) {
        return (
            <div className='loading'>
                <TabletMenu />
                <p className='loading__text'>Currently retrieving your dashboard...</p>
            </div>
        )
    }

    const {id, user_name, discord_name, epic_id, mmr_standard, user_bio, created_on} = user
    return (
        <div className='dashboard--tablet'>
            <TabletMenu />
            <div className='dashboard'>
                <UserProfile
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
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
        </div>
    );
};

export default Dashboard;