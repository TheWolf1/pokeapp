import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/PokemonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom';


const Pokedex = () => {



  const [pokemons, setPokemons] = useState();
  const [allTypes, setAllTypes] = useState(); //Retorna todos los typos de pokemons que hay
  const [typeSelected, setTypeSelected] = useState("All Pokemons")
  const [pagination, setPagination] = useState(0)
  const userNameGlobal = useSelector(selector => selector.userNameGlobal);
  const navigate = useNavigate();

  //funciones
  const setType = (e) => {
    setTypeSelected(e.target.value);
  }


  const submitName = (e) => {
    e.preventDefault();
    let name = e.target.txtPokemonNAme.value;
    navigate(`/pokedex/${name}`);
  }

  const nextPage = () => {
    setPagination(pagination + 24);
  }

  const backPage = () => {
    setPagination(pagination - 24);
  }

  //efect que nos trae los tipos de pokemones para la etiqueta <select>
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/")
      .then(res => setAllTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  // me retorna todos los pokemones o filtrados por tipos
  useEffect(() => {
    if (typeSelected == "All Pokemons") {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=${pagination}`)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err));
    } else {
      console.log(typeSelected.substr(0, typeSelected.length - 1) + "?limit=20&offset=0");
      axios.get(typeSelected.substr(0, typeSelected.length - 1) + "?limit=20&offset=0")
        .then(res => {
          let pokemons = res.data.pokemon.map(pokemon => pokemon)
          let poke = pokemons.map(pokemon => pokemon.pokemon)
          setPokemons(poke)

        })
        .catch(err => console.log(err));
    }



  }, [typeSelected, pagination]);





  return (
    <div id='pokedex'>
      <div className="container">
        <div className="card__main">
          <h3>Hola <span>{userNameGlobal}</span> bienvenido a la Pokedex, aqui podras ver la información de todos nuestros pokemones.</h3>
          <div className="container__form" style={{
            marginBottom: 0
          }}>
            <select name="typePokemon" id="typePokemon" onChange={setType}>
              <option value="All Pokemons">All Pokemons</option>
              {
                allTypes?.map(type => (
                  <option key={type.url} value={type.url}>{type.name}</option>
                ))
              }
            </select>
            <form onSubmit={submitName} >
              <input type="text" id='txtPokemonNAme' placeholder='Put the name of the pokemon here' />
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>

          </div>

        </div>
      </div>
      <section className='container bg-white' id='pokemonContainer'>


        {
          pokemons?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.url} />
          ))
        }

      </section>
      {
        typeSelected == 'All Pokemons' && (
          <div className="container pagination_container" id='paginationC'>
            <button onClick={backPage} disabled={pagination <= 0 ? true : false}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            <button onClick={nextPage}>Next  <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        )
      }

    </div>
  )
}

export default Pokedex