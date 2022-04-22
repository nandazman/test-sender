import cn from "classnames";
import { useState } from "react";
import RoundedChevron from "../icons/round-chevron";
import style from "./layout.module.scss";
import Meta from "./meta";
import NavigationBar from "./navigation";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Meta />
      {open}
      <div className="min-h-screen">
        <div
          className={cn(
            style.toggle,
            { [style.opened]: open },
            { [style.closed]: !open }
          )}
        >
          <span
            className={cn("transition-all", { "rotate-180": !open })}
            onClick={() => setOpen((o) => !o)}
          >
            <RoundedChevron />
          </span>
        </div>
        <Sidebar menuOpened={open} />
        <NavigationBar menuOpened={open} />
        <main>{children}</main>
      </div>
    </>
  );
}
