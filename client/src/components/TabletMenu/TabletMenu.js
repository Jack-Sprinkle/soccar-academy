import './TabletMenu.scss';
import { Link } from 'react-router-dom';

function TabletMenu() {
    return (
        <div className='tablet'>
            <h2 className='tablet__heading'>Menu</h2>
            <ul className='tablet__list'>
                <Link to='/'><li className='tablet__list-item'>Home</li></Link>
                <Link to='/create-account'><li className='tablet__list-item'>Create Account</li></Link>
                <Link to='/dashboard'><li className='tablet__list-item'>Dashboard</li></Link>
                <Link to='/coaches'><li className='tablet__list-item'>Find Coach</li></Link>
                <Link to='/'><li className='tablet__list-item'>Forums</li></Link>
                <Link to='/about'><li className='tablet__list-item'>About</li></Link>
                <Link to='/support'><li className='tablet__list-item'>Support</li></Link>
                <li className='tablet__list-item'>Log Out</li>
            </ul> 
        </div>
    );
};

export default TabletMenu;