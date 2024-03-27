import React from "react";
import classes from "./header.module.css";
import { HiMenu } from "react-icons/hi";

const SubHeader = () => {
  return (
    <div className={classes.lower_header}>
      <ul>
        <li>
          <HiMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Custumer Service</li>
        <li>Registery</li>
        <li>Gift Cards</li>
        <li>Sells</li>
      </ul>
    </div>
  );
};

export default SubHeader;
