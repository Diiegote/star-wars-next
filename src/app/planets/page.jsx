import Planets from "@/components/Planets";

async function fetchPlanets() {
  const res = await fetch(`http://34.125.193.171:8000/planets`);
  const { data } = await res.json();
  return data;
}

export default async function Planet() {
  const planets = await fetchPlanets();

  return (
    <div>
      <h1>Planets</h1>
      <div>
        <Planets planets={planets} />
      </div>
    </div>
  );
}
