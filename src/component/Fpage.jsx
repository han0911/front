import React, { useState, useEffect } from "react";
import PoomingImage from "./Pooming.png";
import M from "./M.png";

function Fpage() {
  const [showMain, setShowMain] = useState(false);
  const [log, setLog] = useState(false); // 로그인 모달 상태
  const [flog, setFlog] = useState(false); // 회원가입 모달 상태

  // 회원가입 입력값 상태
  const [signupData, setSignupData] = useState({
    id: "",
    password: "",
    email: "",
  });

  // 로그인 입력값 상태
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  // 페이지 첫 로딩 시 로컬 스토리지 확인
  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited === "true") {
      setShowMain(true);
    }
  }, []);

  // 로그인 모달 열기
  const onLogin = () => {
    setLog(true);
    setFlog(false);
  };

  // 회원가입 모달 열기
  const onSignup = () => {
    setLog(false);
    setFlog(true);
  };

  // 모든 모달 닫기
  const closeModal = () => {
    setLog(false);
    setFlog(false);
  };

  // 로그인 input 값 핸들러
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // 회원가입 input 값 핸들러
  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 처리
  const handleLogin = () => {
    if (!loginData.id || !loginData.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    const userFound = existingData.find(
      (user) => user.id === loginData.id && user.password === loginData.password
    );

    if (userFound) {
      alert("로그인 성공!");
      setShowMain(true);
      localStorage.setItem("visited", "true");
      closeModal();
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  // 회원가입 처리
  const handleSignup = () => {
    if (!signupData.id || !signupData.password || !signupData.email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    let existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    if (!Array.isArray(existingData)) existingData = [];

    // 중복 아이디 체크
    if (existingData.some((user) => user.id === signupData.id)) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    existingData.push(signupData);
    localStorage.setItem("signupData", JSON.stringify(existingData));

    alert("회원가입 성공! 즐거운 시간 되십시요!");
    setFlog(false);
    setShowMain(true);
    localStorage.setItem("visited", "true"); // 회원가입 후 바로 메인 페이지로 이동
    setSignupData({ id: "", password: "", email: "" });
  };

  // 메인 화면 컴포넌트
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

  // 초기 화면 컴포넌트
  return (
    <div className="FC">
      <div className="L"></div>
      <div className="M">
        <div className="login Log" onClick={onLogin}>
          로그인하기
        </div>
      </div>
      <div className="R"></div>

      {/* 로그인 모달 */}
      {log && (
        <div className="FCON">
          <div className="SCON">
            <div className="title">
              로그인창
              <button className="close" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="A">
              <input
                type="text"
                placeholder="아이디"
                onChange={handleLoginInputChange}
                name="id"
                value={loginData.id}
              />
              <input
                type="password"
                placeholder="비밀번호"
                onChange={handleLoginInputChange}
                name="password"
                value={loginData.password}
              />
            </div>
            <div className="return">
              <button className="s" onClick={handleLogin}>
                시작하기
              </button>
              <button onClick={onSignup} className="f">
                회원가입
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 회원가입 모달 */}
      {flog && (
        <div className="FCON">
          <div className="SCON">
            <div className="title">
              회원가입창
              <button className="close" onClick={closeModal}>
                X
              </button>
            </div>
            <div className="AA">
              <input
                type="text"
                name="id"
                placeholder="아이디"
                value={signupData.id}
                onChange={handleSignupInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={signupData.password}
                onChange={handleSignupInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={signupData.email}
                onChange={handleSignupInputChange}
              />
            </div>
            <div className="returnn">
              <button onClick={closeModal} className="s">
                돌아가기
              </button>
              <button onClick={handleSignup} className="f">
                시작하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fpage;