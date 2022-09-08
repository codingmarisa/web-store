import { useContext } from 'react';
import CategoryMenu from '../../components/webstore-components/category-menu/category-menu.component';
import { CollectionsContext } from '../../contexts/collections.context';
//import collections from '../../data/collections';

import './browse.styles.css';

//carousel

const Browse = () => {
  const { collections } = useContext(CollectionsContext);
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
