//libraries
import { Link } from 'react-router-dom';
//styles
//import '../styles/components/Header.scss';


function Header() {

  return (
    <header className='header'>
            <Link to='/' className='header__title'>
                <h1>Rick And Morty</h1>
            </Link>
            <nav>
                <ul className='header__nav'>
                    <li><Link to="/" className='header__nav--link'>Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;