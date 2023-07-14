"use client";
import { useRouter } from "next/navigation";

export default function Characters({ characters }) {
  const router = useRouter()

  return (
    <div className="characters-container mx-4 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {characters.map((e) => (
        <div
          key={e._id}
          className="character-card rounded-lg overflow-hidden text-white p-4 flex flex-col justify-between items-center transform transition-transform hover:scale-105"
          onClick={() => {
            router.push(`/${e._id}`);
          }}
        >
          <div className="text-center ">
            <h5 className="text-gray-400">{e._id}</h5>
            <div className="character-name  font-bold">{e.name}</div>
            <h5>Height: {e.height}</h5>
            <h5>Mass: {e.mass}</h5>
            <h5>Hair Color: {e.hair_color}</h5>
            <h5>Skin Color: {e.skin_color}</h5>
            <h5>Eye Color: {e.eye_color}</h5>
            <h5>Birth Year: {e.birth_year}</h5>
            <h5>Gender: {e.gender}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
