import React, { useState, useEffect } from "react";
import PoomingImage from "./Pooming.png";
import M from "./M.png";

function Fpage() {
  const [showMain, setShowMain] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [log, setlog] = useState(false);
  const [flog, setflog] = useState(false);
  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setShowMain(true);
    }
  }, []);
  const handleClick = () => {
    setTimeout(() => {
      setlog(false);
      setShowMain(true);
      localStorage.setItem("visited", "true"); // 방문 기록 저장
    }, 500);
  };
  const on = () => {
    setlog(true);
    setflog(false)
  };
  const onc = () => {
    setlog(false)
    setflog(true);
  };
  let cnt = 0;
  let total = 0;
  const C = ()=>{
    setlog(false)
    setflog(false)
  }
  //조건들이 전부다 
  if (showMain) {
    return (
      <div className="C2">
        <div className="L"></div>
        <div className="M2">
          <div className="Ma">
            <img src={PoomingImage} alt="Pooming" className="second" />
            <img src={M} alt="market" className="MI"></img>
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
        <div className="login Log" onClick={on}>
          로그인하기
        </div>
      </div>
      <div className="R"></div>
      {log && (
        <div className="FCON">
          <div className="SCON">
            <div className="title">로그인창
                <button className="close" onClick={C}>X</button>
            </div>

            <div className="A">
              <input type="text" placeholder="아이디"></input>
              <input type="password" placeholder="비밀번호"></input>
            </div>
            <div className="return">
              <button onClick={handleClick} className="s">
                시작하기
              </button>
              <button onClick={onc} className="f">
                회원가입
              </button>
            </div>
          </div>
        </div>
      )}
      {flog && (
        <div className="FCON">
          <div className="SCON">
            <div className="title">회원가입창
                <button className="close" onClick={C}>X</button>
            </div>
            <div className="AA">
              <input type="text" placeholder="아이디"></input>
              <input type="password" placeholder="비밀번호"></input>
              <input type="email" placeholder="email"></input>
            </div>
            <div className="returnn">
              <button onClick={handleClick} className="S">
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
