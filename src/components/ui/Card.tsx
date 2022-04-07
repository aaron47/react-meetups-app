import { ReactChild, ReactFragment, ReactPortal } from "react";
import classes from "./Card.module.css";

const Card = (data: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return <div className={classes.card}>{data.children}</div>;
};

export default Card;
