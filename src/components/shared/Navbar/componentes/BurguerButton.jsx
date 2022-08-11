import React from "react";
import styled from "styled-components";

function BurguerButton(props) {
  return (
    <Burguer>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
}

export default BurguerButton;

const Burguer = styled.div`
  .nav-icon-5 {
    padding: 18px;
    border-radius: 5px;

    border:solid 1px #333;
    width: 50%;
    height: 40px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: #333;
    position: absolute;
    border-radius: 6px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    text-align: center;
    width: 80%;
    height: 2.5px;
    transition-duration: 700ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 10px;
    left:3.5px;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 17.5px;
    left: 3.5px;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 11px;
    left: 3.5px;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 17px;
    background-color: #333;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 17px;
    background-color: #333;
  }
`;
