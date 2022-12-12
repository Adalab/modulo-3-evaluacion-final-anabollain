//react libraries
import { useParams, NavLink, redirect } from 'react-router-dom';
//components
import NotFoundPage from './NotFoundPage';

function CharacterDetail(props) {

  //Get URL id 
  const params = useParams();
  //Function to get the info of the selected element from the original array, id of url matches with each object id of the array
  const foundCharacter = props.findCharacter(params.id);
  //Icon for dead or alive
  const renderIconSpecies = () => {
    if(foundCharacter.species === 'Alien'){
      return <i className="fa-brands fa-reddit-alien" style={{color: "red"}}></i>
    }else if(foundCharacter.species === 'Human'){
      return <i className="fa-solid fa-user" style={{color: "red"}}></i>;
    }else{
      return null;
    }
  };
  //Icon for alien or human
  const renderIconStatus = () => {
    if(foundCharacter.status === 'Alive'){
      return <i className="fa-solid fa-heart" style={{color: "red"}}></i>
    }else if(foundCharacter.status === 'Dead'){
      return <i className="fa-solid fa-skull" style={{color: "red"}}></i>
    }else{
      return null;
    }
  };

  if (foundCharacter !== undefined){
    //RETURN
    return (
      <article>
        <img src={foundCharacter.photo} alt={foundCharacter.name}/>
        <h2>{foundCharacter.name}</h2>
        <ul>
          <li>Status: {renderIconStatus()}</li>
          <li>Species: {renderIconSpecies()}</li>
          <li>Origin: {foundCharacter.origin}</li>
          <li>Episodes: {foundCharacter.episodes}</li>
        </ul>
        <NavLink to='/'>Return</NavLink>
      </article>
      );
  }else{
    return(
      <NotFoundPage/>
    )
  }
  
}

CharacterDetail.propTypes = {

};

export default CharacterDetail;