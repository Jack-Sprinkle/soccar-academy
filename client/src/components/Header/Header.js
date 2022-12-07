import './Header.scss';
import logo from '../../assets/images/Group.svg';
import menu from '../../assets/icons/menu.svg';

function Header() {
    return (
        <>
            <header className='header'>
                <div className='header__overlay'>
                </div>
                <img className='header__logo' src={logo}/>
            </header>
            <nav className='header__nav'>
                <img className='header__menu' src={menu} />
                <p className='header__link'>Log in</p>
            </nav>
        </>
    );
};

export default Header;