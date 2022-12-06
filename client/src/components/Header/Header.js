import './Header.scss';
import {Link} from 'react-router-dom';
import banner from '../../assets/images/header-image.jpg'
function Header() {
    return (
        <header className='header'>
            <img className='header__banner' src={banner} alt='two players going for the ball while playing rocket league' />
            <div className='header__nav'>
                <Link to='/' className='header__nav-link'>Home</Link>
                <Link to='/about' className='header__nav-link'>About</Link>
                <Link to='/support' className='header__nav-link'>Support</Link>
            </div>
        </header>
    );
};

export default Header;