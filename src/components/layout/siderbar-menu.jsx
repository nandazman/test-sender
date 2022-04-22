import HomeIcon from "../icons/home";
// import BroadcastIcon from "../icons/broadcast";
import style from "./sidebar-menu.module.scss";

export default function SidebarMenu() {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <HomeIcon />
        <span>Home</span>
      </div>
      {/* <div className={style.item}>
        <MessageIcon />
        <span>Broadcast Pesan</span>
      </div> */}
    </div>
  );
}