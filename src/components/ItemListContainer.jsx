import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
