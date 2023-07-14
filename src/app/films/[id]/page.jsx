async function getFilm(id) {
  const result = await fetch(`http://34.125.193.171:8000/films/${id}`);
  const { data } = await result.json();
  return data;
}

export default async function Detail({ params }) {
  const film = await getFilm(params.id);

  const charactersCount = film.characters.length;

  let cardMarginTop;

  if (charactersCount <= 3) {
    cardMarginTop = "7rem";
  } else if(charactersCount <= 20) {
    cardMarginTop = "40rem";
  } else if(charactersCount <= 30) {
    cardMarginTop = "60rem";
  } else {
    cardMarginTop = "77rem";
  }

  return (
    <div className="film-container h-screen flex justify-center items-center">
      <div
        className="film-card bg-yellow-800 rounded-lg overflow-hidden text-white p-8 max-w-2xl text-center hover:scale-105"
        style={{ marginTop: cardMarginTop }}
      >
        <h5 className="film-id text-white-600">{film._id}</h5>
        <h2 className="film-title text-2xl font-bold mb-4">{film.title}</h2>
        <div className="film-info">
          <p className="film-info-label font-bold">Opening Crawl:</p>
          <p className="film-info-text">{film.opening_crawl}</p>
        </div>
        <div className="film-info">
          <p className="film-info-label font-bold">Director:</p>
          <p className="film-info-text">{film.director}</p>
        </div>
        <div className="film-info">
          <p className="film-info-label font-bold">Producer:</p>
          <p className="film-info-text">{film.producer}</p>
        </div>
        <div className="film-info">
          <p className="film-info-label font-bold">Release Date:</p>
          <p className="film-info-text">{film.release_date}</p>
        </div>
        <div className="film-info">
          <p className="film-info-label font-bold">Characters:</p>
          <ul className="film-characters">
            {film.characters.map((character) => (
              <li key={character._id}>{character.name}</li>
            ))}
          </ul>
        </div>
        <div className="film-info">
          <p className="film-info-label font-bold">Planets:</p>
          <ul className="film-planets">
            {film.planets.map((planet) => (
              <li key={planet._id}>{planet.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
