//react libraries
import {NavLink} from 'react-router-dom';

function CharacterCard({eachData}) {

  return (
    <NavLink to={`/character/${eachData.id}`}>
      <li>
        <article>
          <img src={eachData.photo} alt={eachData.name} />
          <h2>{eachData.name}</h2>
          <p>{eachData.species}</p>
        </article>
      </li>
    </NavLink>
    );
}

CharacterCard.propTypes = {

};

export default CharacterCard;