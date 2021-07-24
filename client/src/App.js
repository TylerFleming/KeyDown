import { useState, useEffect } from 'react'
import { Button } from './Components/Button.style'


function App() {

  const [ data, setData ] = useState(null)

  const grabData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data.message)
    console.log(data)
  }


  return (
  <>
  {<Button onClick={() => grabData('/submitHS')}>{data}</Button> }
  </>
  );
}

export default App;
