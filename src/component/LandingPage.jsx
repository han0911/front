// LandingPage.js
import React from "react";

export default function LandingPage({ onLogin, onSignup }) {
  return (
    <div className="FC">
      <div className="L"></div>
      <div className="M">
        <div className="login Log" onClick={onLogin}>
          로그인하기
        </div>
        <div className="signup Log" onClick={onSignup}>
          회원가입하기
        </div>
      </div>
      <div className="R"></div>
    </div>
  );
}