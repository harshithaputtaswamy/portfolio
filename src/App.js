import './App.css';
import Header from './components/Header' ;
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Publication from './components/Publication';


function App() {
  return (
    <div className="App">
        <div className="container px-lg-5">
            <div className="px-xl-5">
                <Header/>
                <Profile/>
                <Experience/>
                <Publication/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    </div>
  );
}

export default App;
