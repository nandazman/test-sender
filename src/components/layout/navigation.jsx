import cn from "classnames";
import { memo } from "react";
import NavigationLeft from "./navigation-left";
import NavigationRight from "./navigation-right";
import style from "./navigation.module.scss";

function NavigationBar({ menuOpened }) {
  return (
    <nav
      className={cn(
        style.nav,
        { [style.opened]: menuOpened },
        { [style.closed]: !menuOpened }
      )}
    >
      <NavigationLeft />
      <NavigationRight />
    </nav>
  );
}

export default memo(NavigationBar)