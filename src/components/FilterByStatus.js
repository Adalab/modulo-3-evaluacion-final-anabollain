function FilterByStatus(props) {

    //EVENT FUNCTIONS
    const handleInput = (ev) => {
        props.handleStatusInput(ev.target.value);
    }

    //RETURN
    return (
        <fieldset>
            <legend>Dead or alive?</legend>
            <label htmlFor="all">
                <input type="radio" id="all" name="status" value="all" checked={props.inputStatus === 'all'} onChange={handleInput} />
                <span>Don't care</span>
            </label>
            <label htmlFor="alive">
                <input type="radio" id="alive" name="status" value="alive" checked={props.inputStatus === 'alive'} onChange={handleInput} />
                <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            </label>
            <label htmlFor="dead">
                <input type="radio" id="dead" name="status" value="dead" checked={props.inputStatus === 'dead'} onChange={handleInput} />
                <i className="fa-solid fa-skull" style={{ color: "red" }}></i>
            </label>
        </fieldset>
    );
}

FilterByStatus.propTypes = {

};

export default FilterByStatus;