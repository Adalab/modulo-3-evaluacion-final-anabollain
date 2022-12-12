function FilterByName(props) {

  //EVENT FUNCTIONS
  const handleInput = (ev) => {
    props.handleNameInput(ev.target.value);
  };

  //RETURN
  return (
    <>
      <label htmlFor='name'>Name</label>
      <input type="text" id='name' name='name' value={props.inputName} onChange={handleInput}/>
    </>
    );
}

FilterByName.propTypes = {

};

export default FilterByName;