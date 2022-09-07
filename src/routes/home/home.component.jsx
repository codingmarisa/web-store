import './home.styles.css';

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
              <img src="http://via.placeholder.com/360x500" alt="placeholder" />
            </div>
            <div>
              <img src="http://via.placeholder.com/360x500" alt="placeholder" />
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
