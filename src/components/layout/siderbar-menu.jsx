import BroadcastIcon from "../icons/broadcast";
import ChatIcon from "../icons/chat";
import DeviceIcon from "../icons/device";
import ExitIcon from "../icons/exit";
import HomeIcon from "../icons/home";
import MessageIcon from "../icons/message";
import ProfileIcon from "../icons/profile";
import style from "./sidebar-menu.module.scss";

export default function SidebarMenu() {
  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className={style.item}>
        <BroadcastIcon />
        <span>Broadcast Pesan</span>
      </div>
      <div className={style.item}>
        <MessageIcon />
        <span>List Pesan (Keluar)</span>
      </div>
      <div className={style.item}>
        <ChatIcon />
        <span>Obrolan</span>
      </div>
      <div className={style.item}>
        <ProfileIcon />
        <span>Profil</span>
      </div>
      <div className={style.item}>
        <DeviceIcon />
        <span>Device</span>
      </div>
      <div className={style.item}>
        <ExitIcon />
        <span>Keluar</span>
      </div>
    </div>
  );
}