//react libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//images
import logo from '../images/Rick_and_Morty.png'
//styles
import '../styles/components/Header.scss';


function Header({handleBackground}) {

    //EVENT FUNCTIONS
    //Handle background image
    const handleClick = () => {
        handleBackground('linear-gradient(rgba(14, 193, 220, 0.512), rgba(89, 222, 36, 0.589))');
    }

    //RETURN
    return (
        <header className='header'>
            <h1 className='header__title'>Rick And Morty</h1>
            <Link to='/' className='header__link' onClick={handleClick}>
                <img src={logo} alt="Rick and Morty Logo" className='header__link--logo' />
            </Link>
        </header>
    );
}

Header.propTypes = {
    handleBackground: PropTypes.func.isRequired
};

export default Header;