import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div id="page-format">
        
        <div id="content-container">
          <div className="categories-container">
            <div className="categories-card" id="mushrooms">
              <Link to="/Mushrooms">
                <button className="category-btn">mushrooms</button>
              </Link>
            </div>
            <div className="categories-card" id="flowers">
              <Link to="/Flowers">
                <button className="category-btn">flowers</button>
              </Link>
            </div>
            <div className="categories-card" id="fruits">
              <Link to="/Fruits">
                <button className="category-btn">fruits</button>
              </Link>
            </div>
            <div className="categories-card" id="roots">
              <Link to="/Roots">
                <button className="category-btn">roots</button>
              </Link>
            </div>
            <div className="categories-card" id="herbs">
              <Link to="/Herbs">
                <button className="category-btn">herbs</button>
              </Link>{" "}
            </div>
            <div className="categories-card" id="leaves">
              <Link to="/Leaves">
                <button className="category-btn">leaves</button>
              </Link>{" "}
            </div>
          </div>
          <div className="locations-container">
            <span> LOCATIONS </span>
          </div>
        </div>

        <div id="sidebar-container"></div>
      </div>
    </div>
  );
}

export default Home;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP
