import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../cardpokemon.css'
import Pokedex from '../pages/Pokedex';
import PokedexById from '../pages/PokedexById';
const PokemonCard = ({ pokemon }) => {
  const [onePokemon, setOnePokemon] = useState();

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setOnePokemon(res.data))
      .catch(err => console.log(err))
  }, []);

  let styles;

  switch (onePokemon?.types[0].type.name) {
    case 'normal':
      styles = ' card__normal '
      break;
    case 'fighting':
      styles = ' card__figthting '
      break;
    case 'poison':
      styles = ' card__poison '
      break;
    case 'ground':
      styles = ' card__ground '
      break;
    case 'ghost':
      styles = ' card__ghost '
      break;
    case 'electric':
      styles = ' card__electric '
      break;
    case 'ice':
      styles = ' card__ice '
      break;
    case 'dark':
      styles = ' card__dark '
      break;
    case 'fairy':
      styles = ' card__fairy '
      break;
    case 'rock':
      styles = ' card__rock '
      break;
    case 'fire':
      styles = ' card__fire '
      break;

    case 'grass':
      styles = 'card__grass'
      break;
    case 'water':
      styles = 'card__water'
      break;
    case 'bug':
      styles = 'card__bug'
      break;
    default:
      styles = 'card__fire'
      break;
  }


  if (onePokemon) {
    return (
      <div className={`card ${styles}`}>
        <Link to={`/pokedex/${onePokemon.id}`}>
          <div className="card__header">
            <img src={onePokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className="card__body" >
            <h2>
              {onePokemon.name}
            </h2>
          </div>
          <div className="card__footer">
            <div className="card__footer-item">
              <h2>{onePokemon.stats[0].base_stat}</h2>
              <span>{onePokemon.stats[0].stat.name}</span>
            </div>
            <div className="card__footer-item">
              <h2>{onePokemon.stats[1].base_stat}</h2>
              <span>{onePokemon.stats[1].stat.name}</span>
            </div>
            <div className="card__footer-item">
              <h2>{onePokemon.stats[2].base_stat}</h2>
              <span>{onePokemon.stats[2].stat.name}</span>
            </div>
            <div className="card__footer-item">
              <h2>{onePokemon.stats[5].base_stat}</h2>
              <span>{onePokemon.stats[5].stat.name}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        Cargando...
      </div>
    )
  }

}

export default PokemonCard