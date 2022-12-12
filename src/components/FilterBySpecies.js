//styles
import '../styles/components/FilterBySpecies.scss';

function FilterBySpecies(props) {

  //EVENT FUNCTION
  const handleInput = (ev) =>{
    props.handleSpeciesInput(ev.target.value);
  }

  return (
    <div className='form__select'>
      <label className='form__select--label'>Species</label>
      <select name="species" id="species" className='form__select--item' value={props.inputSpecies} onChange={handleInput}>
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      </div>
    );
}

FilterBySpecies.propTypes = {

};

export default FilterBySpecies;