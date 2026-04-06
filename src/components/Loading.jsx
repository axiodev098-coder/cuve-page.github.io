import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loader = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledWrapper className={fade ? 'fade' : ''}>
      <div className="loader">
        <div className="cubes">
          <div className="cube">
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cube">
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cube">
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cube">
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #4b7ba22f 100%);  transition: opacity 0.5s ease-out;

  &.fade {
    opacity: 0;
  }
  .loader {
    --size: 100px;
    --duration: 2s;
    width: var(--size);
    height: var(--size);
    position: relative;
  }

  .cubes {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate var(--duration) infinite linear;
  }

  .cube {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
  }

  .cube:nth-child(1) { transform: translate(-50%, -50%) translateZ(40px); }
  .cube:nth-child(2) { transform: translate(-50%, -50%) rotateY(90deg) translateZ(40px); }
  .cube:nth-child(3) { transform: translate(-50%, -50%) rotateY(180deg) translateZ(40px); }
  .cube:nth-child(4) { transform: translate(-50%, -50%) rotateY(270deg) translateZ(40px); }

  .side {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000000;
    border: 1px solid #fff;
    box-sizing: border-box;
  }

  .side:nth-child(1) { transform: translateZ(10px); }
  .side:nth-child(2) { transform: rotateY(90deg) translateZ(10px); }
  .side:nth-child(3) { transform: rotateY(180deg) translateZ(10px); }
  .side:nth-child(4) { transform: rotateY(270deg) translateZ(10px); }
  .side:nth-child(5) { transform: rotateX(90deg) translateZ(10px); }
  .side:nth-child(6) { transform: rotateX(-90deg) translateZ(10px); }

  @keyframes rotate {
    0% { transform: rotateX(0) rotateY(0); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }
`;

export default Loader;
