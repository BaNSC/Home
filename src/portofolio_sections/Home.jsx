import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="mt-3 pt-3">
      <Col className="mb-5 p-0">
        <Title className="font-title">
          Building Community <br/>
          for the next Internet
        </Title>
      </Col>
      <P>
        Our vision is to develop an Open student community where people across 
        the world can come together to discuss the topics related to Blockchain 
        and its Network & Security aspects.
      </P>
    </div>
  );
};

export default Home;

const Title = styled.h2`
  font-size: 80px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 55px;
  }
`;

const P = styled.p`
  text-align: justify;
  font-size: 18px;
`;
