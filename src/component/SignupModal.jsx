// SignupModal.js
import React, { useState } from "react";

export default function SignupModal({ onClose, setShowMain }) {
  const [signupData, setSignupData] = useState({ id: "", password: "", email: "" });

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    if (!signupData.id || !signupData.password || !signupData.email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    let existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    if (!Array.isArray(existingData)) existingData = [];

    if (existingData.some(user => user.id === signupData.id)) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    existingData.push(signupData);
    localStorage.setItem("signupData", JSON.stringify(existingData));

    alert("회원가입 성공!");
    setShowMain(true);
    localStorage.setItem("visited", "true");
    onClose();
    setSignupData({ id: "", password: "", email: "" });
  };

  return (
    <div className="FCON">
      <div className="SCON2">
        <div className="title">
          회원가입창
          <button className="close" onClick={onClose}>X</button>
        </div>
        <div className="AA">
          <input type="text" name="id" placeholder="아이디" value={signupData.id} onChange={handleSignupInputChange} />
          <input type="password" name="password" placeholder="비밀번호" value={signupData.password} onChange={handleSignupInputChange} />
          <input type="email" name="email" placeholder="이메일" value={signupData.email} onChange={handleSignupInputChange} />
        </div>
        <div className="returnn">
          <button onClick={handleSignup} className="f">시작하기</button>
        </div>
      </div>
    </div>
  );
}