//components
import CharacterCard from './CharacterCard';
//images
import error from '../images/error.jpg'
//styles
import '../styles/components/CharacterList.scss';


function CharacterList({dataCharacters, inputName, handleBackground}) {

  //RENDER FUNCTIONS
  //Render returned data from API call 
  const renderData = () => {
    if(dataCharacters.length !== 0){
      return dataCharacters.map((eachData) =>{
        return <CharacterCard key={eachData.id} eachData={eachData} handleBackground={handleBackground}/>
      })
    }else{
      return (<article className='card__error'>
        <img src={error} alt="Crazy Rick and Morty" className='card__error--img'/>
        <p className='card__error--text'> Oops, looks like no character responds to the name <span className='card__error--text--word'>{inputName}</span>. Try again with another one!</p>
      </article>);
    }
    
  }

  return (
    <section className='characters'>
      <ul className='card'>{renderData()}</ul>
    </section>
    );
}

CharacterList.propTypes = {

};

export default CharacterList;