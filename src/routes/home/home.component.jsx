import './home.styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-gallery-container">
        <div className="home-seasonal-title">
          <h1>Fall 2022 Collection</h1>
        </div>

        <div className="home-gallery">
          <div className="home-category-container">
            <div>
              <img src="http://via.placeholder.com/640x360" alt="placeholder" />
            </div>
            <div>
              <img src="http://via.placeholder.com/640x360" alt="placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
