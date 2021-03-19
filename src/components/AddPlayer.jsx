import React, { useState } from 'react'
import ProtoTypes from 'prop-types'


function AddPlayer({setPlayer}) {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setPlayer(player => [  inputValue,  ...player])
            setInputValue('')
        }
    }

    const handleInputValue = (e)=> {
        setInputValue(e.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={handleInputValue}
                value={inputValue}
            />
        </form>
        </>
    )
}


AddPlayer.prototype={
    setPlayer: ProtoTypes.func.isRequired
}





export default AddPlayer
