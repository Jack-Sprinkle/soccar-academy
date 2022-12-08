import './Menu.scss';
import {Link} from 'react-router-dom';

function Menu({show, onClose}) {

    const token = sessionStorage.getItem('token');

    const handleLogout = () => {
        sessionStorage.removeItem('token');
    }

    if(!show) {
        return (
            null
        )
    }
    return (
        <div className='menu'>
            <div className='menu__heading-container'>
                <h2 className='menu__heading'>MENU</h2>
                <button className='menu__close' onClick={onClose}></button>
            </div>
            <ul className='menu__list'>
                <li className='menu__list-item'>Create Account</li>
                <li className='menu__list-item'>Log in</li>
                <li className='menu__list-item'>Dashboard</li>
                <li className='menu__list-item'>Find Coach</li>
                <Link to='/' onClick={onClose}><li className='menu__list-item'>Forums</li></Link>
                <Link to='/about' onClick={onClose}><li className='menu__list-item'>About</li></Link>
                <Link to='/support' onClick={onClose}><li className='menu__list-item'>Support</li></Link>
                <li onClick={handleLogout} className='menu__list-item'>Log Out</li>
            </ul>          
        </div>
    );
};

export default Menu;