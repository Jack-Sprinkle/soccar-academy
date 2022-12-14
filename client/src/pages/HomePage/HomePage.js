import './HomePage.scss';
import ForumList from '../../components/ForumList/FourmList';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

function HomePage({isLoggedIn}) {
    return (
        <div className='homepage'>
            <TabletMenu isLoggedIn={isLoggedIn} />
            <ForumList />
        </div>
    );
};

export default HomePage;