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
      return <i className="fa-brands fa-reddit-alien"></i>
    }else if(foundCharacter.species === 'Human'){
      return <i className="fa-solid fa-user"></i>;
    }else{
      return null;
    }
  };
  //Icon for alien or human
  const renderIconStatus = () => {
    if(foundCharacter.status === 'Alive'){
      return <i className="fa-solid fa-heart"></i>
    }else if(foundCharacter.status === 'Dead'){
      return <i className="fa-solid fa-skull"></i>
    }else{
      return <span>Unknown</span>;
    }
  };
  //Handle background image
  const handleClick = () => {
    props.handleBackground('');
  }


  //RETURN
  if (foundCharacter !== undefined){
    
    return (
      <main className='main__detail'>
        <div className='main__detail--background'></div>
        <article className='detail'>
        <NavLink to='/' className='detail__info--link' onClick={handleClick}><i className="fa-solid fa-arrow-left"></i></NavLink>
          <img className='detail__img' src={foundCharacter.photo} alt={foundCharacter.name}/>
          <div className='detail__info'>
            <h2 className='detail__info--title' >{foundCharacter.name}</h2>
            <ul className='detail__info--list' >
              <li className='detail__info--list--item'><span>Status</span> <span>{renderIconStatus()}</span></li>
              <li className='detail__info--list--item'><span>Species</span> <span>{renderIconSpecies()}</span></li>
              <li className='detail__info--list--item'><span>Origin</span> <span>{foundCharacter.origin}</span></li>
              <li className='detail__info--list--item'><span>Episodes</span> <span>{foundCharacter.episodes}</span></li>
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