import { useState, useEffect } from 'react'
import './App.css'
import { getShips } from './services/graphql'

type Ships = {
  id: string,
  name: string
  type: string,
  home_port: string,
  image: string
}

const App = () => {
  const [ships, setShips] = useState<Ships[]>([])

  useEffect(() => {
    getShips().then(setShips)
  })

  console.log(ships);

  return (
    <div className="App">
      {ships.map((s, i) => (
        <div className="ship" key={s.name + i}>
          <h3>{s.name}</h3>
          <img src={s.image} alt={'image of ' + s.name} width="100"/>
          <ul>
            <li>{s.type}</li>
            <li>{s.home_port}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App
