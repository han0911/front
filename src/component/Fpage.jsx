import React, { useState, useEffect } from "react";
import PoomingImage from "./Pooming.png";
import M from "./M.png";

function Fpage() {
  const [showMain, setShowMain] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 로그인 상태 유지
  useEffect(() => {
    const visited = localStorage.getItem("visited");
    const lastEmail = localStorage.getItem("lastEmail");
    if (visited) {
      setShowMain(true);
    }
    if (lastEmail) {
      setEmail(lastEmail);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setError("");
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
    setError("");
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email] && users[email] === password) {
      localStorage.setItem("visited", "true");
      localStorage.setItem("lastEmail", email);
      setIsTransitioning(true);
      setTimeout(() => {
        setShowMain(true);
      }, 500);
    } else {
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email]) {
      setError("이미 존재하는 아이디입니다.");
    } else {
      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("lastEmail", email);
      localStorage.setItem("visited", "true");
      setIsTransitioning(true);
      setTimeout(() => {
        setShowMain(true);
      }, 500);
    }
  };

  if (showMain) {
    return (
      <div className="C2">
        <div className="L"></div>
        <div className="M2">
          <div className="Ma">
            <img src={PoomingImage} alt="Pooming" className="second" />
            <img src={M} alt="market" className="MI" />
          </div>
        </div>
        <div className="R"></div>
      </div>
    );
  }

  return (
    <div className={`FC ${isTransitioning ? "transitioning" : ""}`}>
      <div className="L"></div>
      <div className="M">
        <div className="click-placeholder" onClick={handleLoginClick}>
          로그인하기
        </div>
        <div className="click-placeholder" onClick={handleRegisterClick}>
          회원가입
        </div>
      </div>
      <div className="R"></div>

      {(showLoginModal || showRegisterModal) && (
        <div className="modal">
          <div className="modal-content">
            <h2>{showLoginModal ? "로그인" : "회원가입"}</h2>
            <input
              type="text"
              placeholder="아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={showLoginModal ? handleLogin : handleRegister}>
              {showLoginModal ? "로그인" : "회원가입"}
            </button>
            {error && <p className="error">{error}</p>}
            <button
              className="close-btn"
              onClick={() => {
                setShowLoginModal(false);
                setShowRegisterModal(false);
                setError("");
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fpage;
