import './ForumList.scss';
import chatIcon from '../../assets/icons/forum.svg';
import {Link} from 'react-router-dom';

function ForumList() {
    return (
        <main className='forum'>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/general'><h2 className='forum__heading'>General Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/skills'><h2 className='forum__heading'>Skills Discussion</h2></Link>
            </div>
            <div className='forum__card'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/esports'><h2 className='forum__heading'>ESports Discussion</h2></Link>
            </div>
        </main>
    );
};

export default ForumList;