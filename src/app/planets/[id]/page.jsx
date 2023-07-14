async function getPlanet(id) {
  const result = await fetch(`http://34.125.193.171:8000/planets/${id}`);
  const { data } = await result.json();
  return data;
}

export default async function Detail({ params }) {
  const planet = await getPlanet(params.id);

  const residentsCount = planet?.res_idents?.length || 0;

  let cardMarginTop;

  if (residentsCount <= 0) {
    cardMarginTop = "1rem";
  } else if (residentsCount <= 5) {
    cardMarginTop = "5rem";
  }else if (residentsCount <= 10) {
    cardMarginTop = "16rem";
  } else {
    cardMarginTop = "20rem";
  }

  return (
    <div className="planet-container flex justify-center items-center h-screen">
      <div
        className="planet-card bg-yellow-800 rounded-lg overflow-hidden text-white p-4 flex flex-col justify-between items-center transform transition-transform hover:scale-105 w-1/4 mx-auto"
        style={{ marginTop: cardMarginTop }}
      >
        <div className="text-center">
          <h5 className="planet-id text-gray-400">{planet._id}</h5>
          <h2 className="planet-name font-bold">{planet.name}</h2>
          <p className="film-info-label">
            Rotation Period: {planet.rotation_period}
          </p>
          <p>Orbital Period: {planet.orbital_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p className="film-info-label font-bold">Residents:</p>
          <ul className="planet-residents">
            {planet?.res_idents?.map((resident) => (
              <li key={resident._id}>{resident.name}</li>
            ))}
          </ul>
          <p className="film-info-label font-bold">Films:</p>
          <ul className="planet-films">
            {planet.films.map((film) => (
              <li key={film._id}>{film.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
