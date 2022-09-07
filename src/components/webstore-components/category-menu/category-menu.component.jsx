import React from 'react';

//image imports
import jackAndTheBeanstalk from '../../assets/collections/fairy-tale-illustrations/jack-and-the-beanstalk-475x600.jpg';
import cinderella from '../../assets/collections/fairy-tale-illustrations/cinderella-473x600.jpg';

function CategoryMenu({ category }) {
  const { categoryInfo, className } = category;
  return (
    <div className={`${className}-container`}>
      <div className={`${className}-gallery-container`}>
        <div className={`${className}-title`}>
          <h2>{categoryInfo.title || ''}</h2>
          <h3>{categoryInfo.subtitle || ''}</h3>
        </div>

        {/* add item component here */}

        {className === 'home' ? (
          <div>
            <p>View Collection</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CategoryMenu;
