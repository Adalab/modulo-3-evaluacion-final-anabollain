//react libraries
import PropTypes from 'prop-types';

//styles
import '../styles/components/FilterBySpecies.scss';

function FilterBySpecies({inputSpecies, handleSpeciesInput}) {

  //EVENT FUNCTION
  const handleInput = (ev) =>{
    handleSpeciesInput(ev.target.value);
  }

  //RETURN
  return (
    <div className='form__select'>
      <label className='form__select--label'>Species</label>
      <select name="species" id="species" className='form__select--item' value={inputSpecies} onChange={handleInput}>
        <option value="">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      </div>
    );
}

FilterBySpecies.propTypes = {
  inputSpecies: PropTypes.string.isRequired,
  handleSpeciesInput: PropTypes.func.isRequired
};

export default FilterBySpecies;