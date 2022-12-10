import './Menu.scss';
import {Link, useNavigate} from 'react-router-dom';

function Menu({setLoginShow, show, onClose, setIsLoggedIn, setUser}) {
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setUser(null);
        setIsLoggedIn(false);
        onClose()
        navigate('/')
    }

    if(!show) {
        return (
            null
        )
    }

    const openLogin = () => {
        setLoginShow(true)
        onClose()
    }
    return (
        <div className='menu'>
            <div className='menu__heading-container'>
                <h2 className='menu__heading'>MENU</h2>
                <button className='menu__close' onClick={onClose}></button>
            </div>
            <ul className='menu__list'>
                <Link to='/' onClick={onClose}><li className='menu__list-item'>Home</li></Link>
                <Link to='/create-account' onClick={onClose}><li className='menu__list-item'>Create Account</li></Link>
                <li onClick={openLogin} className='menu__list-item'>Log in</li>
                <Link to='/dashboard' onClick={onClose}><li className='menu__list-item'>Dashboard</li></Link>
                <Link to='/coaches' onClick={onClose}><li className='menu__list-item'>Find Coach</li></Link>
                <Link to='/' onClick={onClose}><li className='menu__list-item'>Forums</li></Link>
                <Link to='/about' onClick={onClose}><li className='menu__list-item'>About</li></Link>
                <Link to='/support' onClick={onClose}><li className='menu__list-item'>Support</li></Link>
                <li onClick={handleLogout} className='menu__list-item'>Log Out</li>
            </ul>          
        </div>
    );
};

export default Menu;