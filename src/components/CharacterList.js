//components
import CharacterCard from './CharacterCard';
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
      return <p> Oops, looks like no character responds to the name {inputName}. Try again with another one!</p>
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