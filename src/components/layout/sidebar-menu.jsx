import cn from "classnames";
import BroadcastIcon from "../icons/broadcast";
import ChatIcon from "../icons/chat";
import DeviceIcon from "../icons/device";
import ExitIcon from "../icons/exit";
import HomeIcon from "../icons/home";
import MessageIcon from "../icons/message";
import ProfileIcon from "../icons/profile";
import style from "./sidebar-menu.module.scss";

export default function SidebarMenu({ hideText }) {
  return (
    <div className={cn(style.wrapper, { [style.hide]: hideText })}>
      <div className={style.item}>
        <span className={style.icon}>
          <HomeIcon />
        </span>
        <span>Home</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <BroadcastIcon />
        </span>
        <span>Broadcast Pesan</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <MessageIcon />
        </span>
        <span>List Pesan (Keluar)</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <ChatIcon />
        </span>
        <span>Obrolan</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <ProfileIcon />
        </span>
        <span>Profil</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <DeviceIcon />
        </span>
        <span>Device</span>
      </div>
      <div className={style.item}>
        <span className={style.icon}>
          <ExitIcon />
        </span>
        <span>Keluar</span>
      </div>
    </div>
  );
}