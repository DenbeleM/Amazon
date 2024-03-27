import React from "react";
import infos from "./Catagory";
import CatagoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";

const CatagoryFile = () => {
  return (
    <div className={classes.parent}>
      {infos.map((item) => (
        <CatagoryCard data={item} />
      ))}
    </div>
  );
};

export default CatagoryFile;
