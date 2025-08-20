// App.js
import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage.jsx";
import MainPage from "./MainPage";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Fpage() {
  const [showMain, setShowMain] = useState(false);
  const [log, setLog] = useState(false);
  const [flog, setFlog] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited === "true") setShowMain(true);
  }, []);

  const closeModal = () => {
    setLog(false);
    setFlog(false);
  };

  return (
    <>
      {showMain ? <MainPage /> : <LandingPage onLogin={() => setLog(true)} onSignup={() => setFlog(true)} />}
      {log && <LoginModal onClose={closeModal} setShowMain={setShowMain} />}
      {flog && <SignupModal onClose={closeModal} setShowMain={setShowMain} />}
    </>
  );
}