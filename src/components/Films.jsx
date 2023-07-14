"use client";
import { useRouter } from "next/navigation";

export default function Film({ films }) {
  const router = useRouter();

  return (
    <div className="characters-container mx-4 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {films.map((e) => (
        <div
          key={e._id}
          className="character-card rounded-lg overflow-hidden text-white p-4 flex flex-col justify-between items-center transform transition-transform hover:scale-105"
          onClick={() => {
            router.push(`/films/${e._id}`);
          }}
        >
          <div className="text-center">
            <h5 className="text-gray-400">{e._id}</h5>
            <h3 className=" font-bold">{e.title}</h3>
            <h5>{e.opening_crawl}</h5>
            <h5>{e.director}</h5>
            <h5>{e.producer}</h5>
            <h5>{e.release_date}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
