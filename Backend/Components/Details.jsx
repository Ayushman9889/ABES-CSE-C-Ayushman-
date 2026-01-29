import React from 'react';

function Details({ id, name, class: cls }) {
  return (
    <div id="card">
      <h1>ID: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>Class: {cls}</h1>
    </div>
  );
}

export default Details;