//react libraries
import { NavLink } from 'react-router-dom';
//components
import GoBackBtn from './GoBackBtn';
//images
import notFound from '../images/notfound.png'
//styles
import '../styles/components/NotFoundPage.scss';


function NotFoundPage(props) {

  //EVENT FUNCTIONS
  //Handle background image
  const handleClick = () => {
    props.handleBackground('linear-gradient(rgba(14, 193, 220, 0.512), rgba(89, 222, 36, 0.589))');
  }

 
  //RETURN
  return (
      <main className='main__found'>
        <section className='main__found--container'>
          <NavLink to='/' className='main__found--container--icon' onClick={handleClick}><GoBackBtn/></NavLink>
          <img src={notFound} alt="Go to hell" className='main__found--container--img'/>
          <h2 className='main__found--container--title'>Hello there! This page doesn't exist...</h2>
        </section>
      </main>
    );
}

NotFoundPage.propTypes = {

};

export default NotFoundPage;