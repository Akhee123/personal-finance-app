import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav/MainNav";


function Root() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
