import { useState, useEffect } from 'react';
import Items from './components/Items'
import './App.css';

function App() {
  const [people, setPeople] = useState([]);

  //Component did mount
  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then((res) => {
        return res.json();
      })
      .then((data) => setPeople(data.results));
  }, []);

  // useEffect(() => {
  //     console.log('%c new people', 'color: blue', people)
  // }, [people])

  return (
    <>
     <Items items={people}/>
    </>
  );
}

export default App;
