import { useLocation } from "react-router-dom";

function SidebarCategories() {

    const location = useLocation();

    const categoryPages = ['/Mushrooms', '/Flowers', '/Fruits', '/Roots', '/Herbs', '/Leaves']
    return(
        <>
        </>
    );
};

export default SidebarCategories;






{/* <Link to="/Flowers">
<button className="app-btn" id="add-btn"> flowers </button>
</Link>
<Link to="/Fruits">
<button className="app-btn" id="add-btn"> fruits </button>
</Link>
<Link to="/Roots">
<button className="app-btn" id="add-btn"> roots </button>
</Link>
<Link to="/Herbs">
<button className="app-btn" id="add-btn"> herbs </button>
</Link>
<Link to="/Leaves">
<button className="app-btn" id="add-btn"> leaves </button>
</Link> */}

