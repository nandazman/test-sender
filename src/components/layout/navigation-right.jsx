import Date from "../date";
import CalendarIcon from "../icons/calendar";
import LogoIcon from "../icons/logo";
import style from "./navigation-right.module.scss";

export default function NavigationRight() {
  return (
    <div className={style.right}>
      <div className="flex items-center gap-x-2.5">
        <CalendarIcon />
        <Date />
      </div>
      <div className="flex items-center gap-x-2.5">
        <span className="font-normal text-black">Hai, Admin</span>
        <LogoIcon hideText />
      </div>
    </div>
  );
}