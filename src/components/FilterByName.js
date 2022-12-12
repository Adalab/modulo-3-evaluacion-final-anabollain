//styles
import '../styles/components/FilterByName.scss';

function FilterByName(props) {

  //EVENT FUNCTIONS
  const handleInput = (ev) => {
    props.handleNameInput(ev.target.value);
  };

  //RETURN
  return (
    <div className='form__text'>
      <label htmlFor='name' className='form__text--label'>Name</label>
      <input type="text" id='name' name='name'className='form__text--input' value={props.inputName} onChange={handleInput}/>
    </div>
    );
}

FilterByName.propTypes = {

};

export default FilterByName;