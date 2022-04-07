import { ReactChild, ReactFragment, ReactPortal } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (data: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{data.children}</main>
    </div>
  );
};

export default Layout;
