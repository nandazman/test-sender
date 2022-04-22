import Meta from "./meta";
import NavigationBar from "./navigation";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Sidebar />
        <NavigationBar />
        <main>{children}</main>
      </div>
    </>
  );
}
