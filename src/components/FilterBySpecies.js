function FilterBySpecies(props) {

  return (
    <>
      <label>Species</label>
      <select name="species" id="species">
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