//react libraries
import { useParams, NavLink } from 'react-router-dom';

function CharacterDetail(props) {

  //Get URL id 
  const params = useParams();
  //Function to get the info of the selected element from the original array, id of url matches with each object id of the array
  const foundCharacter = props.findCharacter(params.id);
  
  //RETURN
  return (
    <article>
      <h2>{foundCharacter.name}</h2>
      <ul>
        <li>Status: {foundCharacter.name}</li>
        <li>Species: {foundCharacter.species}</li>
        <li>Origin: {foundCharacter.origin}</li>
        <li>Episodes: {foundCharacter.episodes}</li>
      </ul>
      <NavLink to='/'>Return</NavLink>
    </article>
    );
}

CharacterDetail.propTypes = {

};

export default CharacterDetail;