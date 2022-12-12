import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function Filters(props) {
  //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //RETURN
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FilterByName inputName={props.inputName}  handleNameInput={props.handleNameInput}/>
        <FilterBySpecies/>
      </form>
    </section>
    );
}

Filters.propTypes = {

};

export default Filters;