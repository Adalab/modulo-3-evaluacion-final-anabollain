//components
import CharacterCard from './CharacterCard';
//styles


function CharacterList({dataCharacters}) {

  //RENDER FUNCTIONS
  //Render returned data from API call 
  const renderData = () => {
    return dataCharacters.map((eachData) =>{
      return <CharacterCard key={eachData.id} eachData={eachData}/>
    })
  }

  return (
    <section>
      <ul>{renderData()}</ul>
    </section>
    );
}

CharacterList.propTypes = {

};

export default CharacterList;