//react libraries
import PropTypes from 'prop-types';
//components
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import ResetBtn from './ResetBtn';
import FilterByEpisode from './FilterByEpisode';
//styles
import '../styles/components/Filters.scss';


function Filters(props) {
  
  //EVENT FUNCTIONS
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //RETURN
  return (
    <section className='main__form'>
      <form className='form' onSubmit={handleSubmit}>
        <FilterByName inputName={props.inputName}  handleNameInput={props.handleNameInput}/>
        <FilterByEpisode inputEpisode={props.inputEpisode} handleEpisodesInput ={props.handleEpisodesInput}/>
        <FilterBySpecies inputSpecies={props.inputSpecies} handleSpeciesInput={props.handleSpeciesInput}/>
        <FilterByStatus inputStatus={props.inputStatus} handleStatusInput={props.handleStatusInput}/>
        <ResetBtn handleResetBtn={props.handleResetBtn}/>
      </form>
    </section>
    );
}

Filters.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  inputSpecies: PropTypes.string.isRequired,
  handleSpeciesInput: PropTypes.func.isRequired,
  inputStatus: PropTypes.string.isRequired,
  handleStatusInput: PropTypes.func.isRequired,
  handleResetBtn: PropTypes.func.isRequired
};

export default Filters;