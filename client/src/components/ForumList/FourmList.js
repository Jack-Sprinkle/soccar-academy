import './ForumList.scss';
import chatIcon from '../../assets/icons/forum.svg';
import {Link} from 'react-router-dom';
import champ from '../../assets/rank-icons/champ.png';
import diamond from '../../assets/rank-icons/diamond.png';
import platinum from '../../assets/rank-icons/platinum.png';
import gold from '../../assets/rank-icons/gold.png';
import silver from '../../assets/rank-icons/silver.png';
import bronze from '../../assets/rank-icons/bronze.png';

function ForumList() {
    return (
        <main className='forum'>
            <Link to='/General'>
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <h2 className='forum__heading'>General Discussion</h2>
            </div>
            </Link>
            <Link to='/Skills'>
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <h2 className='forum__heading'>Skills Discussion</h2>
            </div>
            </Link>
            <Link to='/Esports'>
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <h2 className='forum__heading'>ESports Discussion</h2>
            </div>
            </Link>
            <Link to='/Champ'>
            <div className='forum__card champ'>
                <img className='forum__rank' src={champ} alt="rocket league champ logo" />
                <h2 className='forum__heading'>Champ Discussion</h2>
            </div>
            </Link>
            <Link to='/Diamond'>
            <div className='forum__card diamond'>
                <img className='forum__rank' src={diamond} alt="rocket league diamond logo" />
                <h2 className='forum__heading'>Diamond Discussion</h2>
            </div>
            </Link>
            <Link to='/Platinum'>
            <div className='forum__card platinum'>
                <img className='forum__rank' src={platinum} alt="rocket league platinum logo" />
                <h2 className='forum__heading'>Platinum Discussion</h2>
            </div>
            </Link>
            <Link to='/Gold'>
            <div className='forum__card gold'>
                <img className='forum__rank' src={gold} alt="rocket league gold logo" />
                <h2 className='forum__heading'>Gold Discussion</h2>
            </div>
            </Link>
            <Link to='/Silver'>
            <div className='forum__card silver'>
                <img className='forum__rank' src={silver} alt="rocket league silver logo" />
                <h2 className='forum__heading'>Silver Discussion</h2>
            </div>
            </Link>
            <Link to='/Bronze'>
            <div className='forum__card bronze'>
                <img className='forum__rank' src={bronze} alt="rocket league bronze logo" />
                <h2 className='forum__heading'>Bronze Discussion</h2>
            </div>
            </Link>
        </main>
    );
};

export default ForumList;