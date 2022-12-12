const callToApi = () => {
    return fetch ("https://rickandmortyapi.com/api/character/?page=1")
    .then ((response) => response.json())
    .then ((data) => {
        const cleanData = data.results.map((eachData) => {
            return {
                //for each object of the array, we create a new object with the desired properties
                id: eachData.id,
                name: eachData.name,
                species: eachData.species,
                photo: eachData.image,
                origin: eachData.origin.name,
                episodes: eachData.episode.length,
                status: eachData.status
                //don't forget the id: id: eachData.id ? eachData.id : crypto.randomUUID(), 
            };
        });
        return cleanData;
    })
    .then((cleanData) => {
        const compare = (a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        };
        return cleanData.sort(compare);
    });
};

export default callToApi;