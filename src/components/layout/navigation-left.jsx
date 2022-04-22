import cn from "classnames";
import style from "./navigation-left.module.scss";

export default function NavigationLeft() {
  return <div className={cn(style.left, "text-h4")}>Dashboard</div>;
}