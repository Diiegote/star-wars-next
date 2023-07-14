import Characters from "@/components/Characters";

async function fetchCharacters() {
  const res = await fetch(`http://34.125.193.171:8000/characters`);
  const {data} = await res.json();
  return data
}

async function IndexPage() {
  const characters = await fetchCharacters();
  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
}

export default IndexPage;



