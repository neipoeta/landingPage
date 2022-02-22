import React from 'react';
import './App.css';
import Landing from './components/Content';
import StarterFullStack from './components/Cursos/StarterFullStack';
import StarterUX from './components/Cursos/StarterUx';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Landing />
      <StarterUX />
      <StarterFullStack />
      <Footer />
    </div>
  );
}

export default App;
