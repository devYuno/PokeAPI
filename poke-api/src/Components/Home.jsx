import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons();
    },[])
    
    const getPokemons = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(response.data.results)

    }

    const getPicture = async (pokemon) => {
        const url = pokemon.url
        const response = await axios.get(url)
        const picture = response.data.sprites.front_default
        return picture
    }

    return (
        <>
            <div className="h-screen bg-purple-200 flex flex-col">
                <div className="bg-purple-900 w-full h-[12%] flex">
                    <div className="h-[100%] w-[50%]">
                        <img className="h-30 w-30 ml-10 mt-10" src="https://wallpapers.com/images/hd/pixelated-master-ball-h0dseurkeiqh5xr7-2.jpg" alt="" />
                    </div>
                    <div className="h-[100%] w-[50%] flex justify-center items-center">
                        <button className="px-4 py-2 bg-purple-200 rounded-xl text-purple-900 font-bold">Botão sem função</button>
                    </div>
                </div>
                <div className="w-full h-[88%] flex justify-center items-center">
                    <div className="bg-purple-100 h-[80%] w-[80%] rounded-xl">
                        <ul>
                            {pokemons.map((pokemon) => (
                                <li
                                    key={pokemon.name}
                                >
                                    {pokemon.name} -
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
                                </li>
                            ))

                            }
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}