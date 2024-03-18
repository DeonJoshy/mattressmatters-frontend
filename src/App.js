import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import { Productdetails } from './Pages/Productdetails/Productdetails';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route exact path="/" Component={Home}/>
          <Route path="product/:id" Component={Productdetails}/>
        </Routes>
    </div>
  );
}

export default App;
