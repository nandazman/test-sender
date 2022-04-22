import cn from "classnames";
import { memo } from "react";
import LogoIcon from "../icons/logo";
import SidebarMenu from "./sidebar-menu";
import style from "./sidebar.module.scss";

function Sidebar({ menuOpened }) {
  return (
    <div
      className={cn(
        style.sidebar,
        { [style.opened]: menuOpened },
        { [style.closed]: !menuOpened }
      )}
    >
      <div className={style.logo}>
        <LogoIcon hideText={!menuOpened} />
      </div>
      <SidebarMenu hideText={!menuOpened} />
      <footer className={style.footer}>
        MEA Sender {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default memo(Sidebar)