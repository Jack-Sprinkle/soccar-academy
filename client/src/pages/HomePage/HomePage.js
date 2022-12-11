import './HomePage.scss';
import ForumList from '../../components/ForumList/FourmList';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

function HomePage() {
    return (
        <div className='homepage'>
            <TabletMenu />
            <ForumList />
        </div>
    );
};

export default HomePage;