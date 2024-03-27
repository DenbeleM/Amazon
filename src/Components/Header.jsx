import React from "react";
import classes from "./header.module.css";
import { IoIosSearch } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <>
      <section className={classes.header}>
        <div className={classes.header__logoContainer}>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>

          <span>{/* <i class="bi bi-geo-alt"></i>{" "} */}</span>
          <div className={classes.delivery}>
            <p>Delivered to</p> <span>Ethiopia</span>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Products" />
          <IoIosSearch size={35} />
        </div>
        <div className={classes.order}>
          <div className={classes.language}>
            <img
              src="https://image.shutterstock.com/image-vector/american-flag-4th-july-illustration-260nw-1422095750.jpg"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <a href="">
            <div>
              <p>sign in </p>
              <span>Account & Lists</span>
            </div>
          </a>

          <a href="">
            <div>
              <p>returns</p>
              <span>& orders</span>
            </div>
          </a>
          {/* cart */}

          <a className={classes.cart} to={"/cart"}>
            <BiCartAdd size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <SubHeader />
    </>
  );
};

export default Header;
