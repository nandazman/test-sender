import cn from "classnames";
import Link from "next/link";
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
      <Link href="/">
        <a className={style.item}>
          <span className={style.icon}>
            <HomeIcon />
          </span>
          <span>Home</span>
        </a>
      </Link>
      <Link href="/broadcast">
        <a className={style.item}>
          <span className={style.icon}>
            <BroadcastIcon />
          </span>
          <span>Broadcast Pesan</span>
        </a>
      </Link>
      <Link href="/message">
        <a className={style.item}>
          <span className={style.icon}>
            <MessageIcon />
          </span>
          <span>List Pesan (Keluar)</span>
        </a>
      </Link>
      <Link href="/chat">
        <a className={style.item}>
          <span className={style.icon}>
            <ChatIcon />
          </span>
          <span>Obrolan</span>
        </a>
      </Link>
      <Link href="/profile">
        <a className={style.item}>
          <span className={style.icon}>
            <ProfileIcon />
          </span>
          <span>Profil</span>
        </a>
      </Link>
      <Link href="/device">
        <a className={style.item}>
          <span className={style.icon}>
            <DeviceIcon />
          </span>
          <span>Device</span>
        </a>
      </Link>
      <div className={style.item}>
        <span className={style.icon}>
          <ExitIcon />
        </span>
        <span>Keluar</span>
      </div>
    </div>
  );
}