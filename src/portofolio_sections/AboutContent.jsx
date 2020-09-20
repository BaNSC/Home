import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const AboutContent = () => {
    return (
        <div className="pt-3">
            <Col className="mt-2 p-0">
                <Title className="font-title">
                    About BaNSC
                </Title>
            </Col>
            <P>
                Blockchain and Network Security Circle is a growing open-community for students and professionals working to build up the Blockchain ecosystem and contributing to the Internet of the Future.

                Even if you are a PhD in Distributed networks or have you just heard about Blockchain in the last workshop you attended, you are so welcome to this community. All we need is the commitment to share and grow with the community. We welcome every one across the world. Once a part of the community, you can use all the resources of the community, from the learning resources to the connections.
            </P>
            <Col className="mt-5 p-0">
                <Title className="font-title">
                    Vision
                </Title>
            </Col>
            <P>
                Our vision is to develop an Open student community where people across the world can come together to discuss the topics related to Blockchain and its Network & Security aspects. This community should work to return some values to the world and the Blockchain ecosystem.
            </P>
            <Col className="mt-5 p-0">
                <Title className="font-title">
                    Activities
                </Title>
            </Col>
            <P>
                Research Paper Discussions 📰 <br/>
                Study Jams 🍟 x🍶 <br/>
                Talks Learn from the Experiences <br/>
                Blogs Pen it down… 🖊️ <br/>
                Open-Source Projects🖌️ 😄 <br/>
                Researches Closed Group 👥🌏 <br/>
                Open to all Developer Community (on Discord) 🕸️ <br/>
            </P>
        </div>
    );
};

export default AboutContent;

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
