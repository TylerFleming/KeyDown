import { useEffect, useState } from "react"

const Highscores = ({className}) => {

    const [ loading, setLoading ] = useState('Loading Highscores...')
    const [ highScores, setHighScores ] = useState([])

    const loadHighScores = async () => {
        const data = await fetch('/geths')
        let results =  await data.json()
        results = results.message
        let mappedData = results.map((result, index) => `Rank ${index+1} ${result.name} WPM: ${result.wpm}`);
        setHighScores([...mappedData])
        setLoading('Highscores')
    }
    useEffect( () => {
        loadHighScores()
    }, [loading])    

    return (
        <section className={className}>
            <div className="highscores">
                <h2>{loading}</h2>
                {
                    highScores.map((highscore, index) => {
                        return <>
                        <h3 key={index}>{highscore}</h3>
                        </>
                    })
                }
            </div>
        </section>
    )
}

export default Highscores
