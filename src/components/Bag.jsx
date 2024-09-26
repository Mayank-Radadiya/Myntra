import React from "react";
import BagItem from "./BagItem";
import BagsTotalItemShowInCart from "./BagsTotalItemShowInCart";
import { useSelector } from "react-redux";



function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalBagItem = items.filter((item) => {
    const isItemInBag = bagItems.indexOf(item.id) >= 0;
    return isItemInBag;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          {bagItems.length === 0 ? (
            <div className="bag-items-container"> <h1>Your Cart is empty</h1> </div>
          ) : (
            <div className="bag-items-container">
              {finalBagItem.map((item) => (
                <BagsTotalItemShowInCart key={item.id} item={item} />
              ))}
            </div>
          )}
          <BagItem />
        </div>
      </main>
    </>
  );
}

export default Bag;
