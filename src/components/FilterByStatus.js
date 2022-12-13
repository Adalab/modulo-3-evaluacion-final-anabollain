//styles
import '../styles/components/FilterByStatus.scss';

function FilterByStatus(props) {

    //EVENT FUNCTIONS
    const handleInput = (ev) => {
        props.handleStatusInput(ev.target.value);
    }

    //RETURN
    return (
        <fieldset className='form__radio'>
            <legend className='form__radio--legend'>Dead or alive?</legend>
            <div className='form__radio--container'>
                <label htmlFor="all" className='form__radio--label'>
                    <input type="radio" id="all" name="status" value="all" className='form__radio--input' checked={props.inputStatus === 'all'} onChange={handleInput} />
                    <span className='form__radio--icon'><i className="fa-solid fa-reply-all"></i></span>
                </label>
                <label htmlFor="alive" className='form__radio--label'>
                    <input type="radio" id="alive" name="status" value="alive" className='form__radio--input' checked={props.inputStatus === 'alive'} onChange={handleInput} />
                    <i className="form__radio--icon fa-solid fa-heart"></i>
                </label>
                <label htmlFor="dead" className='form__radio--label'>
                    <input type="radio" id="dead" name="status" value="dead" className='form__radio--input' checked={props.inputStatus === 'dead'} onChange={handleInput} />
                    <i className="form__radio--icon fa-solid fa-skull" ></i>
                </label>
            </div>
        </fieldset>
    );
}

FilterByStatus.propTypes = {

};

export default FilterByStatus;