import React, { useState, useEffect } from "react";

const CharacterSelectionMenu: React.FC = () => {
  const [characters, setCharacters] = useState<
    Array<{ name: string; profession: string }>
  >([]);

  useEffect(() => {
    // Mock data for character names and professions from the Wild West
    setCharacters([
      { name: "Jesse James", profession: "DC3221" },
      { name: "Billy the Kid", profession: "DC3212" },
      { name: "Calamity Jane", profession: "DC3223" },
      { name: "Dee Zad", profession: "DC3229" },
      { name: "Primm Gunn", profession: "DC3239" },
      { name: "Kale Yeet", profession: "DC32211" },
    ]);
  }, []);

  return (
    <div className="bg-menu fade-in-top flex flex-col items-center p-10 rounded-xl">
      <h1 className="text-3xl font-bold text-white pb-6">MY CHARACTERS</h1>
      {characters.map((character) => (
        <div key={character.name} className="w-full py-1 character-card">
          <div className="character-bg w-full rounded-lg hover:bg-gray-700 p-3">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-bold text-white text-left">
                {character.name}
              </h2>
              <p className="text-base text-white">{character.profession}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full mt-4">
        <button className="bg-green-500 w-full py-2 text-white">PLAY</button>
      </div>
      <div className="w-full mt-4">
        <button className="bg-red-500 w-full py-2 text-white">
          DELETE CHARACTER
        </button>
      </div>
    </div>
  );
};

export default CharacterSelectionMenu;
