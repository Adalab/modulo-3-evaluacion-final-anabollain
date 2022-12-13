//react libraries
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
//image
import background from '../images/rick-n-morty-wallpaper.jpg'
//styles
import '../styles/components/CharacterCard.scss';

function CharacterCard({eachData, handleBackground}) {

  //EVENT FUNCTIONS
  //Handle background image
  const handleClick = () => {
    handleBackground(`url(${background})`);
  }

  //RETURN
  return (
        <li>
          <NavLink to={`/character/${eachData.id}`} className='card__link' onClick={handleClick}>
            <article className='card__item'>
              <img src={eachData.photo} alt={eachData.name} className='card__item--img'/>
              <h2 className='card__item--title'>{eachData.name}</h2>
              <p className='card__item--text'>{eachData.species}</p>
              <i className="fa-solid fa-circle-info"></i>
            </article>
          </NavLink>
        </li>
    );
}

CharacterCard.propTypes = {
  eachData: PropTypes.object.isRequired,
  handleBackground: PropTypes.func

};

export default CharacterCard;