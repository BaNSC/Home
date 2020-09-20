import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaInfo,
  FaWeixin
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

class Social extends React.Component {
  render() {
    const fillColor = this.props.isFull ? "#23B4A5" : "#73737d";
    const sizeUp = this.props.isFull ? "23px" : "21px";
    const mbUp = this.props.isFull ? "mb-5 " : "mb-4";

    return (
      <SocialBar>
        <a
          href="https://commudle.com/communities/bansc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <PeopleFill size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://discuss.bansc.tech/"
          rel="noopener noreferrer"
        >
          <Weixin size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://github.com/bansc"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.linkedin.com/in/company/banscindia/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.twitter.com/banscindia"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.facebook.com/banscindia"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="/about"
          rel="noopener noreferrer"
        >
          <About size={sizeUp} className={mbUp} color={fillColor} />
        </a>
      </SocialBar>
    );
  }
}

export default Social;

const SocialBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 2.55rem;
  bottom: 11rem;

  @media (max-width: 992px) {
    left: 1.5rem;
  }

  @media (max-width: 580px) {
    flex-direction: row;
    justify-content: center;
    position: unset;
  }
`;

const Github = styled(FaGithub)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Linkedin = styled(FaLinkedinIn)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Twitter = styled(FaTwitter)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const PeopleFill = styled(BsPeopleFill)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Facebook = styled(FaFacebook)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const About = styled(FaInfo)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Weixin = styled(FaWeixin)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
