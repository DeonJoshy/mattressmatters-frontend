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
          <Route path="product/:product_name" Component={Productdetails}/>
        </Routes>
    </div>
  );
}

export default App;
