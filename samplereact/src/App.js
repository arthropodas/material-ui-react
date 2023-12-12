
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dash from "./components/Dash";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
return (
<>

<Routes>
  <Route path = '/' element = {<Home/>}>
  <Route path = 'dash' element = {<Dash/>}/>
    <Route path = 'profile' element = {<Profile/>}/>
  </Route>
</Routes>

</>
);
}
