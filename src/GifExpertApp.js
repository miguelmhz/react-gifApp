import React, { useState } from 'react'
import AddPlayer from './components/AddPlayer'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [players, setPlayers] = useState(['Aguero'])
    
    // const handleAdd = ()=>{
    //     const anotherPlayer = 'Stones';
    //     setPlayers([...players, anotherPlayer])
    // }

    return (
        <div>
            <h2>Gif Expert app</h2>
            <AddPlayer setPlayer={setPlayers} />
            <hr/>
            {/* <button onClick={handleAdd}>Add player</button> */}
            <ol>
                {
                    players.map((player, i) => {
                        return <GifGrid key={i} category={player} />
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
