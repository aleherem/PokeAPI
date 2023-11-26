import './App.css'
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import { Item, Pokemon, Pokemons } from './Pages';

function App() {
  return (
    <Switch>
    <div className="app">
          <Routes>
            <Route path="/pokemon/:name" element={<Pokemon />}/>
            <Route path="/pokemons" element={<Pokemons />}/>
            <Route path="/items" element={<Item />}/>
            <Route path="/" element={<Pokemons />}/>
          </Routes>
    </div>
    </Switch>
  );
}
export default App;
