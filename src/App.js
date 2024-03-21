import './App.css';
import Header from './components/Header' ;
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
        <div className="container w-100 w-md-75">

        <Header/>
        <Profile/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>

    </div>
  );
}

export default App;
