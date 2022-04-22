import LogoIcon from "../icons/logo";
import style from "./sidebar.module.scss";
import SidebarMenu from "./siderbar-menu";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <LogoIcon />
      </div>
      <SidebarMenu />
      <footer className={style.footer}>
        MEA Sender {new Date().getFullYear()}
      </footer>
    </div>
  );
}