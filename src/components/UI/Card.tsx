import Image from "next/image";
export default function Card({
  name,
  country,
  imgUrl,
  funFact,
  hasBeach,
  mostFamousMuseum,
  averageDegrees,
}: {
  name: string;
  country: string;
  imgUrl?: string;
  funFact: string;
  hasBeach: boolean;
  mostFamousMuseum: string;
  averageDegrees: number;
}) {
  return (
    <div className="max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg text-center">
      {imgUrl ? (
        <img src={imgUrl} alt={name} className="bg-cover w-full h-52" />
      ) : null}
      <div className="px-6 py-4">
        <h3 className="mt-2 font-bold text-xl mb-2">{name}</h3>
        <h3 className="mt-2 font-bold text-md mb-2">{country}</h3>
        <p className="text-gray-700 text-base">
          <b>Fun fact:</b> {funFact}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hasBeach ? "Has Beach 🏖️" : "No Beach ❄️"}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Most famous museum: {mostFamousMuseum} 🏛️
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Average degrees: {averageDegrees}°C 🌡 ️
        </span>
      </div>
    </div>
  );
}
