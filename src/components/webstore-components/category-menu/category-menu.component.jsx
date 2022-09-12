import React from 'react';
import ImageSlider from '../../generic-components/image-slider/image-slider.component';

// import CategoryItem from '../category-item/category-item.component';

import './category-menu.styles.css';

function CategoryMenu({ category, styleName }) {
  return (
    <div className={`${styleName}-container`}>
      <div className={`${styleName}-gallery-container`}>
        <div className={`${styleName}-title`}>
          <h2>{category.title}</h2>
        </div>
        <div className="category-menu-slider-container">
          <ImageSlider slides={category} />
          {/* {category.items.map((item) => (
            <CategoryItem item={item} />
          ))} */}
        </div>
        {styleName === 'home' ? (
          <div>
            <p>View Collection</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CategoryMenu;
