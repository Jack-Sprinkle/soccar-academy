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
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/General'><h2 className='forum__heading'>General Discussion</h2></Link>
            </div>
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Skills'><h2 className='forum__heading'>Skills Discussion</h2></Link>
            </div>
            <div className='forum__card discussion'>
                <img className='forum__icon' src={chatIcon} alt="two chat bubbles side by side" />
                <Link to='/Esports'><h2 className='forum__heading'>ESports Discussion</h2></Link>
            </div>
            <div className='forum__card champ'>
                <img className='forum__rank' src={champ} alt="rocket league champ logo" />
                <Link to='/Champ'><h2 className='forum__heading'>Champ Discussion</h2></Link>
            </div>
            <div className='forum__card diamond'>
                <img className='forum__rank' src={diamond} alt="rocket league diamond logo" />
                <Link to='/Diamond'><h2 className='forum__heading'>Diamond Discussion</h2></Link>
            </div>
            <div className='forum__card platinum'>
                <img className='forum__rank' src={platinum} alt="rocket league platinum logo" />
                <Link to='/Platinum'><h2 className='forum__heading'>Platinum Discussion</h2></Link>
            </div>
            <div className='forum__card gold'>
                <img className='forum__rank' src={gold} alt="rocket league gold logo" />
                <Link to='/Gold'><h2 className='forum__heading'>Gold Discussion</h2></Link>
            </div>
            <div className='forum__card silver'>
                <img className='forum__rank' src={silver} alt="rocket league silver logo" />
                <Link to='/Silver'><h2 className='forum__heading'>Silver Discussion</h2></Link>
            </div>
            <div className='forum__card bronze'>
                <img className='forum__rank' src={bronze} alt="rocket league bronze logo" />
                <Link to='/Bronze'><h2 className='forum__heading'>Bronze Discussion</h2></Link>
            </div>
        </main>
    );
};

export default ForumList;