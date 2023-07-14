import Film from "@/components/Films"

async function fetchFilms() {
  const res = await fetch(`http://34.125.193.171:8000/films`);
  const { data } = await res.json();
  return data;
}

export default async function Films() {
  const films = await fetchFilms();
  return (
    <div>
      <h1>Films</h1>
      <div>
        <Film films={films} />
      </div>
    </div>
  );
}
