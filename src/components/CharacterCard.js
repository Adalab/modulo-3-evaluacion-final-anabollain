function CharacterCard({eachData}) {

  return (
    <li>
      <article>
        <img src={eachData.photo} alt={eachData.name} />
        <h2>{eachData.name}</h2>
        <p>{eachData.species}</p>
      </article>
    </li>
    );
}

CharacterCard.propTypes = {

};

export default CharacterCard;