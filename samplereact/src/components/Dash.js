import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Dash() {
return (
<>
<Header/>
  <h1>Dash</h1>
  <Outlet />
<Footer/>
</>
);
}