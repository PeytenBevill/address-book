import React from 'react';
import Item from './Item';

function items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.login.uuid} person={item} />
      ))}
    </ul>
  );
}

export default items;
