import { Outlet } from "react-router-dom";
import FooterApp from "../components/FooterApp";
import HeaderApp from "../components/HeaderApp";

function App() {
  return (
    <>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </>
  );
}

export default App;
