import CategoryMenu from '../../components/webstore-components/category-menu/category-menu.component';
import collectionFairyTale from '../../data/collection-fairy-tale';

import './home.styles.css';

const Home = () => {
  return <CategoryMenu category={collectionFairyTale} styleName="home" />;
};

export default Home;
