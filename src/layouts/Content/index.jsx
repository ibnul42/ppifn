import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Payment from "../../pages/Payment";
import Verification from "../../pages/Verification";
import PoolParticipant from "../../pages/PoolParticipant";
import Api from "../../pages/Api";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import Invalid from "../../pages/Invalid";
import About from "../../pages/About";
import Login from "../../pages/Login";

function Content() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/pool_articipant" element={<PoolParticipant />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
}

export default Content;
