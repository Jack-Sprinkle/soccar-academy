import './SupportPage.scss';
import TabletMenu from '../../components/TabletMenu/TabletMenu';

function SupportPage() {
    return (
        <main className='support'>
            <TabletMenu />
            <div className='support--tablet'>
                <h2 className='support__heading'>Support</h2>
                    <div className='support__info'>
                        <p className='support__text'>Any issues on the site or with another user, 
                        please send an email to soccaracademy@gmail.com</p>
                    </div>
            </div>
        </main>
    );
};

export default SupportPage;