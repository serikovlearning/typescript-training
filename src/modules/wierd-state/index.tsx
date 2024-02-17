import { useState } from 'react'
import './style.css'

const WierdState = () => {
    const [wierdState, setWierdState] = useState(0)

    const handleChangeWierdState = () => {
        setTimeout(() => {
            setWierdState(wierdState + 1)
        }, 2000)
    }

    return (
        <div className='block'>
            <h2>
                That is the wierd state
            </h2>
            <span>
                {wierdState}
            </span>
            <button onClick={handleChangeWierdState}>change the state</button>
        </div>
    )
}

export default WierdState
