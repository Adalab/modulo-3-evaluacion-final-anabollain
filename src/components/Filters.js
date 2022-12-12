import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import ResetBtn from './ResetBtn';

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
        <FilterBySpecies inputSpecies={props.inputSpecies} handleSpeciesInput={props.handleSpeciesInput}/>
        <FilterByStatus inputStatus={props.inputStatus} handleStatusInput={props.handleStatusInput}/>
        <ResetBtn/>
      </form>
    </section>
    );
}

Filters.propTypes = {

};

export default Filters;