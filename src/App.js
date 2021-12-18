import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
// import Navigation from './components/Navigation';
import Header from './components/Header';
// import Project from './components/Project';
import Content from './components/Content';

function App() {

  // const [display, setDisplay] = useState('about');

  // useEffect(() => {
  //   console.log('loaded')
  // }, [])

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
