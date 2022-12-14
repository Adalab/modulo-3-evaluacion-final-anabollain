//react libraries
import PropTypes from 'prop-types';
//styles
import '../styles/components/FilterByName.scss';

function FilterByName({inputName, handleNameInput}) {

  //EVENT FUNCTIONS
  const handleInput = (ev) => {
    handleNameInput(ev.target.value);
  };

  //RETURN
  return (
    <div className='form__text'>
      <label htmlFor='name' className='form__text--label'>Name</label>
      <input type="text" id='name' name='name'className='form__text--input' placeholder='e.g. Rick Sanchez' value={inputName} onChange={handleInput}/>
    </div>
    );
}

FilterByName.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default FilterByName;