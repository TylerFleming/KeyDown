import { useState } from 'react'
import moon from '../Images/moon.svg'
import sun from '../Images/sun.svg'


const ToggleButton = ({ cb, className }) => {


    const [ themeIcon, setThemeIcon ] = useState(sun)

    const toggleIcon = () => {
        themeIcon === sun ? setThemeIcon(moon) : setThemeIcon(sun)
        cb()
    }

    return (
        <button className={className} aria-label={`toggle theme - currently ${themeIcon === sun ? 'purple theme' : 'dark theme'}`} onClick={() => toggleIcon()}><img src={themeIcon} alt={themeIcon === sun ? 'sun icon' : 'moon icon'} /></button>
        )
}

export default ToggleButton
