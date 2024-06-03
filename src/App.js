import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contacts from './components/pages/Contacts'
import Company from './components/pages/Company'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
