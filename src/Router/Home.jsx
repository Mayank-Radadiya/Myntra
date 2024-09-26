import React from "react";
import ItemPage from "../components/ItemPage";
import { useSelector } from "react-redux";

function Home() {
  const Data = useSelector((store) => store.items); 

  return (
    <div>
      <div className="items-container">
        {Data.map((item) => (
          <ItemPage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
