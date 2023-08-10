import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import Flora from './Components/Flora';
import About from './Components/About';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
            <Router>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/Flora' element={<Flora/>}/>
                <Route path='/About' element={<About/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
