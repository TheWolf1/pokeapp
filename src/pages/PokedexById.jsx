import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../cardpokemon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PokedexById = () => {
  const { id } = useParams()
  const [poke, setPoke] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err))
  }, []);



  let styles;

  switch (poke?.types[0].type.name) {
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
  return (
    <div id='pokedexById'>
      <div className="container">
      <div className="pokemonInfo__abilities-item bg-white" id='btnAtras'>
        <Link to={'/pokedex'} >
        <FontAwesomeIcon icon={faArrowLeft} />
          Pokedex
          </Link>
      </div>
      </div>
      
      <div className="container pokemonInfo">
        <div className={`card  bg-white pokemonInfo__main ${styles}`}>
          <div className="card__body" >
            <h1 >
              {poke?.name}
            </h1>
            <span>{poke?.types[0].type.name}</span>
          </div>
          <div className="pokemonInfo__image">
            <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className="pokemonInfo__info">
            <div className="pokemonInfo__info-item">
              <h2>{poke?.stats[0].base_stat}</h2>
              <span>{poke?.stats[0].stat.name}</span>
            </div>
            <div className="pokemonInfo__info-item">
              <h2>{poke?.stats[1].base_stat}</h2>
              <span>{poke?.stats[1].stat.name}</span>
            </div>
            <div className="pokemonInfo__info-item">
              <h2>{poke?.stats[2].base_stat}</h2>
              <span>{poke?.stats[2].stat.name}</span>
            </div>
            <div className="pokemonInfo__info-item">
              <h2>{poke?.stats[5].base_stat}</h2>
              <span>{poke?.stats[5].stat.name}</span>
            </div>
          </div>
          <div className="pokemonInfo__footer">
            <div className="card pokemonInfo__type">
              <h2>Type</h2>
              {
                poke?.types.map(type=>(
                  <div key={type.type.url} className="pokemonInfo__abilities-item">{type.type.name}</div>
                ))
              }
              <div className="pokemonInfo__type-item"></div>
            </div>
            <div className="card pokemonInfo__abilities">
              <h2>Abilities</h2>
              {
                poke?.abilities.map(abiliti=>(
                  <div key={abiliti.ability.url} className="pokemonInfo__abilities-item">{abiliti.ability.name}</div>
                ))
              }
              
            </div>
          </div>
        </div>
        <div className={` card bg-white pokemonInfo__aside ${styles} `}>
          <h2 className='pokemonInfo__aside-title'>MOVIMIENTOS</h2>
          <ul>
            {
              poke?.moves.map((move) => (
                <li key={move.move.url}>{move.move.name}</li>
              ))
            }


          </ul>
        </div>

      </div>

    </div>
  )
}

export default PokedexById