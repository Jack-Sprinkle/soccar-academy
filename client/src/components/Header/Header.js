import './Header.scss';
import logo from '../../assets/images/Group.svg';
import Menu from '../Menu/Menu';
import {useState} from 'react';
import Login from '../Login/Login';

function Header() {

    const [show, setShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false)
    
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
                    show={show}
                    onClose={() => setShow(false)}
                />
                <p onClick={() => setLoginShow(true)}className='header__link'>Log in</p>
                <Login
                    loginShow={loginShow}
                    setLoginShow={setLoginShow}
                    onClose={() => setLoginShow(false)}
                />
            </nav>
        </>
    );
};

export default Header;