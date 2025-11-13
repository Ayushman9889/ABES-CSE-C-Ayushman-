import React from 'react';

function Fashion({ image, title, price, description }) {
  return (
    <div id="card">
      <img src={image} alt={title} width={100} height={100} />
      <h4>Title: {title}</h4>
      <h4>Price: ${price}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Fashion;
