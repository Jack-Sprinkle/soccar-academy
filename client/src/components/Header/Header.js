import './Header.scss';
import logo from '../../assets/images/Group.svg';
import Menu from '../Menu/Menu';
import {useState} from 'react';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';

function Header({handleLogin, setIsLoggedIn, isLoggedIn, setUser, user, errorMessage}) {

    const [show, setShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        setUser(null);
        setIsLoggedIn(false);
        navigate('/')
    }
    
    return (
        <>
            <header className='header'>
                <div className='header__overlay'>
                </div>
                <img className='header__logo' src={logo} alt='SocCar Academy logo with phrase "By Players for Players"'/>
            </header>
            <nav className='header__nav'>
                <button onClick={() => setShow(true)} className='header__menu'></button>
                <Menu
                    setLoginShow={setLoginShow} 
                    show={show}
                    onClose={() => setShow(false)}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn={isLoggedIn}
                    setUser={setUser}
                />
                {isLoggedIn ? null : (<p onClick={() => setLoginShow(true)}className='header__link'>Log in</p>)}
                {isLoggedIn ? (<p className='user__name--logged-in'>{user?.user_name}</p>) : null}
                {isLoggedIn ? (<p onClick={handleLogout}className='header__logout--tablet'>Log out</p>) : null}
                <Login
                    handleLogin={handleLogin}
                    isLoggedIn={isLoggedIn}
                    errorMessage={errorMessage}
                    user={user}
                    loginShow={loginShow}
                    setLoginShow={setLoginShow}
                    onClose={() => setLoginShow(false)}
                />
            </nav>
        </>
    );
};

export default Header;