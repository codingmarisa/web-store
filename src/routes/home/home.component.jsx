import './home.styles.css';

//image imports
import jackAndTheBeanstalk from '../../assets/collections/fairy-tale-illustrations/jack-and-the-beanstalk-475x600.jpg';
import cinderella from '../../assets/collections/fairy-tale-illustrations/cinderella-473x600.jpg';
//carousel or grid?

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-gallery-container">
        <div className="home-seasonal-title">
          <h1>Featured Collection</h1>
          <h2>Fairy Tale Illustrations</h2>
        </div>

        <div className="home-gallery">
          <div className="home-category-container">
            <div>
              <img
                src={jackAndTheBeanstalk}
                alt="Illustration of Jack and the Beanstalk"
              />
            </div>
            <div>
              <img src={cinderella} alt="Illustration of Cinderella" />
            </div>
          </div>
        </div>

        <div>
          <p>View Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
