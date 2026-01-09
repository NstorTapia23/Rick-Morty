export function Inicio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-5xl font-bold text-black mb-4">Rick and Morty.</h1>
      <p className="text-2xl text-gray-800 mb-2">
        Frontend con React para practicar.
      </p>
      <p className="text-xl text-gray-700 mb-6">
        Se usa como backend una API pública.
      </p>
      <a
        href="https://rickandmortyapi.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-blue-600 mb-6 underline"
      >
        https://rickandmortyapi.com/
      </a>
      <img
        className="
      w-80 h-80
      md:w-96 md:h-96
      rounded-xl
      shadow-2xl
      border-4 border-indigo-500
      hover:scale-105 transition-transform duration-300
      object-cover
    "
        src="https://www.reactiongifs.us/wp-content/uploads/2016/02/cant_look_away_rick_morty.gif"
      ></img>
    </div>
  );
}
