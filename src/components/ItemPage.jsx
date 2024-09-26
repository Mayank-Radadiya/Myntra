import React from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FaCartArrowDown } from "react-icons/fa6";
import { TbShoppingCartOff } from "react-icons/tb";
import { useSelector } from "react-redux";

function ItemPage({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const isItemInBag = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {isItemInBag ? (
          <button
            className="btn-add-bag btn-danger"
            onClick={handleRemoveFromBag}
          >
            <TbShoppingCartOff /> Remove
          </button>
        ) : (
          <button className="btn-add-bag " onClick={handleAddToBag}>
            <FaCartArrowDown /> Add to Bag
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemPage;
