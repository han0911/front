// Fpage.js
import React, { useState } from "react";
import PoomingImage from "./Pooming.png";


function Fpage() {
  const [showMain, setShowMain] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowMain(true);
    }, 500); // 0.5초 후에 메인 페이지 표시
  };

  if (showMain) {
    return (
      <div className="main-page">
        <h1>메인 페이지</h1>
        <p>여기에 원하는 콘텐츠를 추가하세요!</p>
      </div>
    );
  }

  return (
    <div 
      className={`FC ${isTransitioning ? 'transitioning' : ''}`}
      onClick={handleClick}
    >
      <div className="L"></div>
      <div className="M">
        <img src={PoomingImage} alt="Pooming" className="pooming-img" />
         <div className="click-placeholder">Click to Continue</div>
      </div>
      <div className="R"></div>
    </div>
  );
}

export default Fpage;