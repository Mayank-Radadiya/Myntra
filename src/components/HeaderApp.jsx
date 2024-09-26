import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderApp() {

  const bagItems = useSelector((state) => state.bag);
  return (
    <div>
      <header>
        <div className="logo_container">
          <Link to= "/" >
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Home & Living</Link>
          <Link href="#">Beauty</Link>
          <Link href="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <MdOutlineFavorite />
            <span className="action_name">Wishlist</span>
          </div>

          <Link to= '/bag' className="action_container" href="pages/bag.html">
            <FaCartShopping /> 
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItems.length}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HeaderApp;
