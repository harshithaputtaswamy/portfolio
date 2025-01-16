import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Publication from './components/Publication';
import College from "./images/college.jpeg";

import { useRef } from "react";


function App() {
    const profileRef = useRef(null);
    const expRef = useRef(null);
    const pubRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="App">
            <div style={{ position: 'absolute', width: '100%', height: '500px' }}>
                <img src={College} width="100%" height="100%" style={{ objectFit: 'cover' }} />
            </div>
            <div className="container px-lg-5" style={{ zIndex: 1, position: "relative" }}>
                <div className="px-xl-5">
                    <Header profileRef={profileRef} expRef={expRef} pubRef={pubRef} projectRef={projectRef} contactRef={contactRef} />
                    <Profile ref={profileRef} />
                    <Projects ref={projectRef} />
                    <Experience ref={expRef} />
                    <Publication ref={pubRef} />
                    <Contact ref={contactRef} />
                    {/* <Footer/> */}
                </div>
            </div>
        </div>
    );
}

export default App;
