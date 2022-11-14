import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form"

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState(18);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);
  const [likes, setLikes] = useState(0);
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState("");
  const [currentSong, setCurrentSong] = useState(18);

  useEffect(() => {
    fetch(`http://localhost:3001/songs/${currentSong}`)
      .then((r) => r.json())
      .then((song) => setSong(song));
  },[currentSong]);

  // useEffect(() => {
  //   let interval = null;
  //   if(timerOn) {
  //     interval = setInterval(() => {setTime(prevTime => prevTime + 1)},100)
  //   }else {
  //   clearInterval(interval)
  //   }
  //   return () => clearInterval(interval)

  // },[timerOn])

  useEffect((name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
      .then((r) => r.json())
      .then((pokemon) => setPokemon(pokemon));
  });

  // useEffect(() => {
  //   fetch('http://localhost:3001/songs')
  //   .then((r) => r.json())
  //   .then((songs) => setSongs(songs))
  // },[])

  function nextPokemon() {
    setCurrentPokemon(currentPokemon + 1);
  }



  return (
    <div className="App">
      {pokemon ? <img src={pokemon.sprites.front_default} /> : "No Pokemon Yet"}
      <h1>{pokemon.name}</h1>
      <button onClick={nextPokemon}>Next Pokemon</button>
      <br></br>
      {likes}
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <br></br>
      {/* {songs.map((song) => {
        return (
          <h3>
            {song.title}, {song.genre}, ${song.price},{" "}
            <img height="200" width="280" src={song.cover} />
          </h3>
        );
      })} */}

      <h1>{song ? <img height="100" width="180"src={song.cover}/> : "No song to show"}</h1>
      <h1>{song.title}, {song.genre},${song.price}</h1>
      <br></br>
      <button onClick={() => setCurrentSong(currentSong - 1)}>Previous Song</button>
      <button onClick={() => setCurrentSong(currentSong + 1)}>Get Random Song</button>
      <Form song={song} />
      {/* {time}
<br></br>
<button onClick={() => setTimerOn(true)}>Start</button>
<button onClick={() => setTimerOn(false)}>Stop</button>
<button onClick={() => setTime(0)}>Reset</button> */}

      {/* {pokemons.map((pokemon) => {
       return <h1>{pokemon.name}</h1>
     })} */}
    </div>
  );
}

export default App;
