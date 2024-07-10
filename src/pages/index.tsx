import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import Card from "@/components/UI/Card";
import { places } from "@/utils/places";
import { european_countries } from "@/utils/european-country-code";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filteredPlaces, setPlaces] = useState(places);
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleAllPlaces = () => {
    setPlaces(places);
    setCurrentFilter("all");
  };

  const handleEuropePlaces = () => {
    const filtered_places = places.filter((place) =>
      european_countries.includes(place.country)
    );

    setPlaces(filtered_places);
    setCurrentFilter("europe");
  };

  const handleHasBeach = () => {
    const filtered_places = places.filter((place) => place.hasBeach);
    setPlaces(filtered_places);
    setCurrentFilter("beach");
  };

  const handleNoBeach = () => {
    const filtered_places = places.filter((place) => !place.hasBeach);
    setPlaces(filtered_places);
    setCurrentFilter("no-beach");
  };

  return (
    <main>
      <section className="min-[0px]:flex sm:hidden p-8 min-h-screen items-center">
        <h3 className="text-center animate-text text-5xl font-black">
          Unfortunately, the developer didn't have time to create a mobile
          version of this page. 😢
        </h3>
      </section>
      <section
        className={`min-[0px]:hidden sm:flex flex-col px-24 py-16 min-h-screen ${inter.className}`}
      >
        <h3 className="text-center animate-text bg-gradient-to-r from-sky-800 via-slate-400 to-sky-300 bg-clip-text text-transparent text-5xl font-black">
          The Most Beautiful Places in the World
        </h3>
        <section className="mt-6 flex justify-center">
          <div className="p-1 bg-slate-100 flex rounded-lg shadow-sm">
            <div
              className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${
                currentFilter === "all" ? "bg-slate-200" : ""
              }`}
              onClick={handleAllPlaces}
            >
              All 🌎
            </div>
            <div
              className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${
                currentFilter === "europe" ? "bg-slate-200" : ""
              }`}
              onClick={handleEuropePlaces}
            >
              Europe 🇪🇺
            </div>
            <div
              className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${
                currentFilter === "beach" ? "bg-slate-200" : ""
              }`}
              onClick={handleHasBeach}
            >
              Has Beach 🏖️
            </div>
            <div
              className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${
                currentFilter === "no-beach" ? "bg-slate-200" : ""
              }`}
              onClick={handleNoBeach}
            >
              No Beach ❄️
            </div>
          </div>
        </section>
        <div
          className={`mt-8 grid gap-y-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center`}
        >
          {filteredPlaces.map((place) => {
            return (
              <Card
                key={place.name}
                name={place.name}
                imgUrl={place.imgUrl}
                country={place.country}
                funFact={place.funFact}
                hasBeach={place.hasBeach}
                mostFamousMuseum={place.mostFamousMuseum}
                averageDegrees={place.averageDegrees}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
