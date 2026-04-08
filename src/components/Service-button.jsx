import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'


const Button = ({ Name }) => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <button
        onClick={() => navigate('/gallery', { state: { service: Name } })}
        className="cta"
      >
        <span className="text-light service">{Name}</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b9b9b9;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .cta span {
    position: relative;
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #ffffff;
    z-index: 2;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #ffffff;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    z-index: 2;
  }

  .cta:hover:before {
    width: 100%;
    background: #1b1b1b;
    border: 1px solid #ffffff;
  }

  .cta:hover span {
    color: #fff;
  }

  .cta:hover svg {
    transform: translateX(0);
    stroke: #fff;
  }

  .cta:active {
    transform: scale(0.95);
  }

  .cta:active {
    transform: scale(0.95);
  }`;

export default Button;
