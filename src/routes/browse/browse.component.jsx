import './browse.styles.css';

//carousel

const Browse = () => {
  return (
    <div className="browse-container">
      <h1>Collections</h1>
      <div className="collection1-gallery">
        <h2>Collection 1 Title</h2>
        <div className="collection1-container">
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
        </div>
      </div>

      <div className="collection2-gallery">
        <h2>Collection 2 Title</h2>
        <div className="collection2-container">
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
        </div>
      </div>

      <div className="collection3-gallery">
        <h2>Collection 3 Title</h2>
        <div className="collection3-container">
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
          <div>
            <img src="http://via.placeholder.com/360x500" alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
