import { useState, useEffect } from 'react'
import { Button } from './Components/Button.style'


function App() {

const [ hs, setHS ] = useState({
  user: '',
  wpm: 0
})




  const setUserState = (e) => {
      setHS({
        ...hs, user: e.target.value
      })
  }

  const setWpmState = (e) => {
      setHS({
        ...hs, wpm: e.target.value
      })

  }

  return (
  <>
  <form method="POST" action="/submitHS">
    <input id="hsname" type="text" value={hs.user} name="hsname" onChange={e => setUserState(e)} placeholder="name"/>
    <input id="hswpm" type="text" value={hs.wpm} name="hswpm" onChange={e => setWpmState(e)} placeholder="wpm" />
    <button type="submit">submit hs</button>
  </form>
  </>
  );
}

export default App;
