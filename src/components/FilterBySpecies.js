function FilterBySpecies(props) {

  //EVENT FUNCTION
  const handleInput = (ev) =>{
    props.handleSpeciesInput(ev.target.value);
  }

  return (
    <>
      <label>Species</label>
      <select name="species" id="species" value={props.inputSpecies} onChange={handleInput}>
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      </>
    );
}

FilterBySpecies.propTypes = {

};

export default FilterBySpecies;