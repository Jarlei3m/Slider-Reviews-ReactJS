import React, { useState, useEffect } from 'react';

import data from './data';

// components
import Title from './components/Title';
import List from './components/List';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const lasIndex = people.length - 1;
    if (index < 0) {
      setIndex(lasIndex)
    }

    if (index > lasIndex) {
      setIndex(0)
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {setIndex(index + 1)}, 3000);

    return () => clearInterval(slider);
  }, [index])
  
  return (
    <section className="section">
      <Title />
      <List people={people} index={index} setIndex={setIndex} />
    </section>
  );
}

export default App;
