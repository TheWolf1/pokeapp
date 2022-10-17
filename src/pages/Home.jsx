import React from 'react'
import pikachu from '../../public/pikachu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName } from '../store/slices/userName.slice'
import { useNavigate } from 'react-router-dom'
const Home = () => {


    
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const submit = e=>{
        e.preventDefault();
        dispatch(setUserName(e.target.txtUserName.value));
        navigate('/pokedex')
    }

  return (
    <div id='home'>
        <div id="pikachu__message">
            <p>Hi triner, Give me your name for the next Step.</p>
        </div>
        <div id="pikachu__container">
            <img src={pikachu} alt="" />
        </div>
        <div className="container__form">
            <form onSubmit={submit}>
                <input type="text" id='txtUserName' placeholder='Put your name here!' />
                <button>
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>
        </div>
        
    </div>
  )
}

export default Home