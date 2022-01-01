import React from "react";
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Moudules-</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
