import Meta from "./meta";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
