import React from "react";
import classes from "./catagory.module.css";

const CatagoryCard = ({ data }) => {
  return (
    <div className={classes.card}>
      <a href="">
        <h4>{data.title}</h4>
        <img src={data.image} alt="alt" />
        <p>Shop Now</p>
      </a>
    </div>
  );
};

export default CatagoryCard;
