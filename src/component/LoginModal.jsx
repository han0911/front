// LoginModal.js
import React, { useState } from "react";

export default function LoginModal({ onClose, setShowMain }) {
  const [loginData, setLoginData] = useState({ id: "", password: "" });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    if (!loginData.id || !loginData.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    const userFound = existingData.find(
      user => user.id === loginData.id && user.password === loginData.password
    );

    if (userFound) {
      alert("로그인 성공!");
      setShowMain(true);
      localStorage.setItem("visited", "true");
      onClose();
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="FCON">
      <div className="SCON">
        <div className="title">
          로그인창
          <button className="close" onClick={onClose}>X</button>
        </div>
        <div className="A">
          <input type="text" name="id" placeholder="아이디" value={loginData.id} onChange={handleLoginInputChange} />
          <input type="password" name="password" placeholder="비밀번호" value={loginData.password} onChange={handleLoginInputChange} />
        </div>
        <div className="return">
          <button className="s" onClick={handleLogin}>시작하기</button>
        </div>
      </div>
    </div>
  );
}