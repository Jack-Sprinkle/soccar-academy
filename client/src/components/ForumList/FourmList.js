import './ForumList.scss';
import chatIcon from '../../assets/icons/forum.svg';
import {Link} from 'react-router-dom';

function ForumList() {
    return (
        <main className='forum'>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/General'><h2 className='forum__heading'>General Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Skills'><h2 className='forum__heading'>Skills Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Esports'><h2 className='forum__heading'>ESports Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Champ'><h2 className='forum__heading'>Champ Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Diamond'><h2 className='forum__heading'>Diamond Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Platinum'><h2 className='forum__heading'>Platinum Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Gold'><h2 className='forum__heading'>Gold Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Silver'><h2 className='forum__heading'>Silver Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Bronze'><h2 className='forum__heading'>Bronze Discussion</h2></Link>
            </div>
        </main>
    );
};

export default ForumList;