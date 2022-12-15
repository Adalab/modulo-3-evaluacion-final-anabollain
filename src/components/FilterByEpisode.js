function FilterByEpisode(props) {
    
    const handleChange = (ev) => {
        props.handleEpisodesInput(ev.target.value);
    }

    return (
        <>
            <label htmlFor='episodes'>Episodes</label>
            <input type="text" name='episodes' id='episodes' onChange={handleChange} value={props.inputEpisode} />

        </>
    );
}

export default FilterByEpisode;