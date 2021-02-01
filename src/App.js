import logo from './logo.svg'
import './App.css'
import Hello from "./components/Hello"
import Card from "./components/Card"
import User from "./components/User"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="128px" alt="logo" />
        <p>
          <Hello name="Cyril LAMIRAND"/>
        </p>
      </header>
      <main>
          <h2>Component : Card.js</h2>
          <div className={"app-row"}>
              <Card
                  title={"Card 1"}
                  description={"Lorem ispum dolor sit amet consectitur adispicing elit..."}
                  image={logo}
              />
              <Card
                  title={"Card 2"}
                  description={"Lorem ispum dolor sit amet consectitur adispicing elit..."}
                  image={logo}
              />
              <Card
                  title={"Card 3"}
                  description={"Lorem ispum dolor sit amet consectitur adispicing elit..."}
                  image={logo}
              />
          </div>
          <div>
              <h2>Component : <b>User.js</b></h2>
              <User/>
          </div>


      </main>
    </div>
  );
}

export default App
