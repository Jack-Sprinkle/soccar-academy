import './Menu.scss';

function Menu({show, onClose}) {

    if(!show) {
        return (
            null
        )
    }
    return (
        <div className='menu'>
            <div className='menu__heading'>
                <h2>MENU</h2>
                <button onClick={onClose}>X</button>
            </div>
            <ul className='menu__list'>
                <li className='menu__list-item'>Create Account</li>
                <li className='menu__list-item'>Log in</li>
                <li className='menu__list-item'>Dashboard</li>
                <li className='menu__list-item'>Find Coach</li>
                <li className='menu__list-item'>Forums</li>
            </ul>          
        </div>
    );
};

export default Menu;