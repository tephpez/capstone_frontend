import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <div id="component-format">
        <div id="content-container">
          <section className="section-container" id="categories">
            <Link to="/Mushrooms">
              <div className="category-card" id="mushrooms">
                <span id="category-title">mushrooms</span>
              </div>
            </Link>

            <Link to="/Flowers">
              <div className="category-card" id="flowers">
                <span id="category-title">flowers</span>
              </div>
            </Link>

            <Link to="/Fruits">
              <div className="category-card" id="fruits">
                <span id="category-title">fruits</span>
              </div>
            </Link>

            <Link to="/Roots">
              <div className="category-card" id="roots">
                <span id="category-title">roots</span>
              </div>
            </Link>

            <Link to="/Herbs">
              <div className="category-card" id="herbs">
                <span id="category-title">herbs</span>
              </div>
            </Link>

            <Link to="/Leaves">
              <div className="category-card" id="leafs">
                <span id="category-title">leaves</span>
              </div>
            </Link>
          </section>
          <section className="section-container">
            <div className="park-card">PARK 1</div>
            <div className="park-card">PARK 2</div>
            <div className="park-card">PARK 3</div>
            <div className="park-card">PARK 4</div>
          </section>
        </div>
        <div id="sidebar-container">
          <Link to="/Basket">
            <button className="app-btn" style={{backgroundColor:'#909194'}}> register </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE
//  STYLES
//  SWEEP

// sequelize model:generate --name User --attributes name:string,password:string,currentLocation:string,profPic:string
// sequelize model:generate --name Park --attributes name:string,mapUrl:string,hours:string,state:string,address:string
// sequelize model:generate --name Find --attributes commonName:string,botanicalName:string,uses:string,category:string,poisonWarning:string,dateFound:dateOnly,notes:string,picOne:string,picTwo:string,picThree:string,picFour:string,picFive:string,mapsLink:string,abundanceRating:integer,locationDesc:string,landmarks:string,userId:integer,parkId:integer
