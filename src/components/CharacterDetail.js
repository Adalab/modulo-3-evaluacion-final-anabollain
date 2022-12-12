//react libraries
import { useParams, NavLink } from 'react-router-dom';
//components
import NotFoundPage from './NotFoundPage';
//styles
import '../styles/components/CharacterDetail.scss';

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
      <main className='main__detail'>
        <div className='main__detail--background'></div>
        <article className='detail'>
        <NavLink to='/' className='detail__info--link'><i class="fa-solid fa-arrow-left"></i></NavLink>
          <img className='detail__img' src={foundCharacter.photo} alt={foundCharacter.name}/>
          <div className='detail__info'>
            <h2 className='detail__info--title' >{foundCharacter.name}</h2>
            <ul className='detail__info--list' >
              <li className='detail__list--item'>Status: {renderIconStatus()}</li>
              <li className='detail__list--item'>Species: {renderIconSpecies()}</li>
              <li className='detail__list--item'>Origin: {foundCharacter.origin}</li>
              <li className='detail__list--item'>Episodes: {foundCharacter.episodes}</li>
            </ul>
          </div>
        </article>
      </main>
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