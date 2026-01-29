import React, { useEffect, useState } from 'react';
import Details from './Components/Details';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/details")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map((d, i) => (
        <Details key={i} {...d} />
      ))}
    </div>
  );
}

export default App;
