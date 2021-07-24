import { useState, useEffect } from 'react'
 


function App() {

  const [ data, setData ] = useState(null)

  const grabData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data.message)
  }

  useEffect( () => {
    grabData('/api')
}, [])

  return (
  <>
  <h2>{data ? data : 'loading'}</h2>
  </>
  );
}

export default App;
