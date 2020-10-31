import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className="col-sm-6 col-lg-3 my-auto">
      <Box>
        <ImageWrapper className="image-wrapper mb-3">
          <img
            className="img-fluid"
            src={require(`../pictures/${member.avatar}`)}
            alt="..."
          />
        </ImageWrapper>
        <div className="box-desc position-relative">
          <h5>{member.name}</h5>
          <p>{member.position}</p>
        </div>
        <Ul className="social">
          <li>
            <a href="/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
        </Ul>
      </Box>
    </div>
  );
};

const TeamMemebers = ({ members }) => {
  return (
    <div className="row mt-5">
      {members.map((member, index) => (
        <MemberCard member={member} key={index} />
      ))}
    </div>
  );
};

export default TeamMemebers;

const Box = styled.div`
  padding: 1.5rem;
  border-radius: 150px;
  background: #fff;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  &:before {
    position: absolute;
    content: "";
    left: 0px;
    top: 0px;
    width: 0px;
    height: 100%;
    border-radius: 150px;
    box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    background-image: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  }
  &:hover {
    &:before {
      width: 100%;
    }
    .image-wrapper {
      padding: 0;
    }
    .box-desc {
      color: #fff;
    }
    .social li a {
      background: #fff;
      background-image: none;
      color: #000;
      &:hover {
        background: #1d1d1d;
        color: #fff;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 210px;
  max-height: 210px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  padding: 15px;
  transition: all 0.5s ease;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  img {
    border-radius: 50%;
    transition: all 500ms ease;
  }
`;

const Ul = styled.ul`
  padding: 0;
  li {
    display: inline-block;
    list-style-type: none;

    a {
      position: relative;
      width: 36px;
      height: 36px;
      background-image: -webkit-linear-gradient(
        315deg,
        #2a2a72 0%,
        #009ffd 45%
      );
      display: inline-block;
      line-height: 36px;
      border-radius: 50%;
      color: #fff;
      transition: all 0.5s ease;
    }
  }
`;
