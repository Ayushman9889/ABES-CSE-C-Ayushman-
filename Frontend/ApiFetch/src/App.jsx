import React, { useState, useEffect } from 'react';
import Fashion from '../Components/Fashion.jsx';

function App() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setBook(data);
      });
  }, []);

  return (
    <div>
      {
        book.map((b, i) => (
          <Fashion key={i} {...b} />
        ))
      }
    </div>
  );
}

export default App;
