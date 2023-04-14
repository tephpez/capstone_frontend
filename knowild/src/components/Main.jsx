import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Basket from "./Basket";
import Home from "./Home";
import Mushrooms from "./Mushrooms";
import Flowers from "./Flowers";
import Fruits from "./Fruits";
import Roots from "./Roots";
import Herbs from "./Herbs";
import Seeds from "./Seeds";
import Parks from "./Parks";
import Nav from "./Nav";
import Categories from "./Categories";

const App = ({ findsContent }) => {
    const [finds, setFinds] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
      const getSelectedFind = async () => {
        if (findsContent) {
          let selectedFind = findsContent;
          setFinds(selectedFind);
        }
      };
      getSelectedFind();
    }, [findsContent]);

    const showDetails = (userId, findId) => {
      navigate(`/finds/${userId}/${findId}`);
    };

  return (
    <div id="page-format">
      <Nav />
      <div id="component-format" style={{flexDirection: 'column'}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/my-basket" element={<Basket findContent={findsContent}/>}></Route>
          <Route path="/locations" element={<Parks />}></Route>
          <Route path="/all-finds" element={<Categories findContent={findsContent} />}></Route>
          <Route path="/mushrooms" element={<Mushrooms findContent={findsContent} />}></Route>
          <Route path="/flowers" element={<Flowers findContent={findsContent} />}></Route>
          <Route path="/fruits" element={<Fruits findContent={findsContent} />}></Route>
          <Route path="/roots" element={<Roots findContent={findsContent} />}></Route>
          <Route path="/herbs" element={<Herbs findContent={findsContent} />}></Route>
          <Route path="/seeds" element={<Seeds findContent={findsContent} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;






//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  STYLES   //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP
