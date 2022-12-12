//react libraries
import {NavLink} from 'react-router-dom';
//styles
import '../styles/components/CharacterCard.scss';

function CharacterCard({eachData}) {

  return (
        <li>
          <article className='card__item'>
            <img src={eachData.photo} alt={eachData.name} className='card__item--img'/>
            <h2 className='card__item--title'>{eachData.name}</h2>
            <p className='card__item--text'>{eachData.species}</p>
            <NavLink to={`/character/${eachData.id}`} className='card__link'><i class="fa-solid fa-circle-info"></i></NavLink>
          </article>
        </li>
    );
}

CharacterCard.propTypes = {

};

export default CharacterCard;