import { useEffect, useState } from 'react'

const Effect = () => {
    const [state, setState] = useState(0)

    /** Написать в каком порядке выведутся консоль логи и почему
     * Что будет в консоли после нажатия на кнопку?
     */
    useEffect(() => {
        console.log('First')

        return () => {
            console.log('Second')
            queueMicrotask(() => {
                console.log('Third')
            })

            setTimeout(() => {
                console.log('Fourth')
            })
        }
    }, [state])

    return (
        <div>
            <h2>Effect page</h2>
            <button onClick={() => { setState(1) }}>Trigger effect</button>
        </div>
    )
}

export default Effect
