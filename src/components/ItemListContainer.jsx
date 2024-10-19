import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
