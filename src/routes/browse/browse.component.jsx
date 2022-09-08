import CategoryMenu from '../../components/webstore-components/category-menu/category-menu.component';

import collections from '../../data/collections';

import './browse.styles.css';

//carousel

const Browse = () => {
  return (
    <div className="browse-container">
      <h2>Browse</h2>
      {collections.map((collection) => (
        <CategoryMenu category={collection} styleName="collection" />
      ))}
    </div>
  );
};

export default Browse;
