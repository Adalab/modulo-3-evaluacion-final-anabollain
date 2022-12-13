//react libraries
import { NavLink } from 'react-router-dom';
//components
import GoBackBtn from './GoBackBtn';
//images
import notFound from '../images/notfound.png'
//styles
import '../styles/components/NotFoundPage.scss';


function NotFoundPage(props) {

 
  //RETURN
  return (
      <main className='main'>
        <NavLink to='/' className='main__icon'><GoBackBtn/></NavLink>
        <img src={notFound} alt="Go to hell" className='main__img'/>
        <h2 className='main__title'>Hello there! This page doesn't exist...</h2>
      </main>
    );
}

NotFoundPage.propTypes = {

};

export default NotFoundPage;