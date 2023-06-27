import './App.css'
import Card from "./components/card/Card.jsx"
import Cards from './components/cards/Cards.jsx'
import characters, { Rick } from './data.js'
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className='App'
      style={{
        padding: '25px',
      }}>
      <Nav />
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Card
          id={Rick.id}
          name={Rick.name}
          status={Rick.status}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          origin={Rick.origin}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <Cards characters={characters} />
      <hr />


      {/* <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr /> */}
    </div>
  )
}

export default App
