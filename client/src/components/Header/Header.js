import './Header.scss';
import logo from '../../assets/images/Group.svg';
import Menu from '../Menu/Menu';
import {useState} from 'react';

function Header() {

    const [show, setShow] = useState(false);
    
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
                <p className='header__link'>Log in</p>
            </nav>
        </>
    );
};

export default Header;