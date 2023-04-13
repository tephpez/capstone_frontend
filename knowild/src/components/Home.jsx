import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
            <Link to="/Seeds">
              <div className="category-card" id="seeds">
                <span id="category-title">seeds</span>
              </div>
            </Link>
          </section>

          <section className="section-container" id="locations">
              <Link to="/Parks">
                <div className="park-card">
                  <span id="park-title">PARK 1</span>
                </div>
              </Link>
              <Link to="/Parks">
                <div className="park-card">
                <span id="park-title">PARK 2</span>
                </div>
              </Link>
              <Link to="/Parks">
                <div className="park-card">
                  <span id="park-title">PARK 3</span>
                </div>
              </Link>
              <Link to="/Parks">
                <div className="park-card">
                  <span id="park-title">PARK 4</span>
                </div>
              </Link>
          </section>
      </div>
      <div id="sidebar-container">
        <Link to="/Basket">
          <button className="app-btn" style={{backgroundColor:'#909194'}}> register </button>
        </Link>
      </div>
    </>
  );
}

export default Home;

//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP

// sequelize model:generate --name User --attributes name:string,password:string,currentLocation:string,profPic:text
// sequelize model:generate --name Park --attributes name:string,mapUrl:text,hours:text,state:string,address:string,city:string,state:string
// sequelize model:generate --name Find --attributes commonName:string,botanicalName:string,benefits:text,category:string,poisonWarning:string,dateFound:dateOnly,notes:text,picOne:text,picTwo:text,picThree:text,picFour:text,picFive:text,mapsLink:text,abundanceRating:integer,locationDesc:text,landmarks:string,userId:integer,parkId:integer
