import {useState, useEffect} from 'react';
import './App.css';

function App() {
const [pokemons, setPokemons] = useState([])
const [pokemon, setPokemon] = useState('')
const [currentPokemon, setCurrentPokemon] = useState(1)
const [time, setTime] = useState(0)
const [timerOn, setTimerOn] = useState(true)
const [likes, setLikes] = useState(0)

useEffect(() => {
  let interval = null;
  if(timerOn) {
    interval = setInterval(() => {setTime(prevTime => prevTime + 1)},100)
  }else {
  clearInterval(interval)
  }
  return () => clearInterval(interval)

},[timerOn])


useEffect((name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`,{})
  .then((r) => r.json())
  .then((pokemon) => setPokemon(pokemon))
})

function nextPokemon() {
  setCurrentPokemon(currentPokemon + 1)
}

  return (
    <div className="App">

{pokemon ? <img src={pokemon.sprites.front_default}/> : "No Pokemon Yet"}
<h1>{pokemon.name}</h1>
<button onClick={nextPokemon}>Next Pokemon</button>
<br></br>
{likes}
<br></br>
<br></br>
{time}
<br></br>
<button onClick={() => setTimerOn(true)}>Start</button>
<button onClick={() => setTimerOn(false)}>Stop</button>
<button onClick={() => setTime(0)}>Reset</button>



     {/* {pokemons.map((pokemon) => {
       return <h1>{pokemon.name}</h1>
     })} */}
    </div>
  );
}

export default App;
