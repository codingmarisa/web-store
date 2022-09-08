import React from 'react';

import './category-item.styles.css';

function CategoryItem({ item }) {
  return (
    <div className="item-container">
      <div
        className="item-bg-img"
        style={{
          backgroundImage: item.image,
        }}
      />
      <img src={item.image} alt="" />
      <div className="item-body-container">
        <h2>{item.title}</h2>
        <h3>{item.credit}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
