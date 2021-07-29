import { useEffect, useState } from "react"

const Highscores = () => {

    const [ loading, setLoading ] = useState('Loading Highscores...')
    const [ loadedUsers, setLoadedUsers ] = useState([])
    const loadHighScores = async () => {
        const data = await fetch('/geths')
        const results =  await data.json()

    }
    useEffect( () => {
        loadHighScores()
    }, [])    

    return (
        <section>
            <div className="highscores">
                <h2>{loading}</h2>

            </div>
        </section>
    )
}

export default Highscores
