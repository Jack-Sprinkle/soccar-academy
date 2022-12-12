import './AboutPage.scss'
import TabletMenu from '../../components/TabletMenu/TabletMenu'

function AboutPage() {
    return (
        <main className='about'>
            <TabletMenu />
            <div className='about--tablet'>
                <h2 className='about__heading'>About</h2>
                <div className='about__info'>
                    <p className='about__text'>This is a space where Rocket League players can 
                        come together to learn and chat.</p>
                    <p className='about__text'>At SocCar Academy, you can create an account that will allow 
                        you to track your Matchmaking Rank overtime, keep track of the 
                        skills that you're working on. And most important, find other 
                        users who are willing to coach!</p>
                    <p className='about__text special'>By Players, for Players!</p>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;