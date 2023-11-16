import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { ReactComponent as Univ } from "assets/univ.svg";
import { ReactComponent as City } from "assets/city.svg";
import { ReactComponent as Email } from "assets/email.svg";
import { ReactComponent as Github } from "assets/github.svg";
import { ReactComponent as Home } from "assets/home.svg";

const AboutPage = () => {
  return (
    <BackGroundColor>
      <Profile>
        <img src="/images/default_profile.png" alt="profileImage" />
        <Content>
          <div className="name">HyunjiYun</div>
          <div className="id">@hhjeee</div>
        </Content>
      </Profile>
      <ButtonContainer>
        <Button onClick={() => window.open("https://github.com/hhjeee")}>
          <Github className="toGithub" />
        </Button>
        <Link to="/">
          <Button>
            <Home className="toHome" />
          </Button>
        </Link>
      </ButtonContainer>
      <Introduction>
        <div className="title">소개</div>
        <BigContentContainer>
          <ContentContainer>
            <Icon>
              <Univ />
            </Icon>
            <div className="univ">
              Korea University, Computer Science and Engineering
            </div>
          </ContentContainer>
          <ContentContainer>
            <Icon>
              <City />
            </Icon>
            <div className="city">Seoul, Korea</div>
          </ContentContainer>
          <ContentContainer>
            <Icon>
              <Email />
            </Icon>
            <div className="mail">yoonhj315@korea.ac.kr</div>
          </ContentContainer>
        </BigContentContainer>
      </Introduction>
    </BackGroundColor>
  );
};

export default AboutPage;

const BackGroundColor = styled.div`
  background-color: #f5f5f7 
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
`;

const Profile = styled.div`
  width: 750px;
  height: 170px;
  margin: auto;
  display: flex;
  align-items: center;

  border-bottom: 1px solid lightgray;

  img {
    width: 130px;
    height: 130px;
    margin-left: 20px;
  }

  @media (max-width: 767px) {
    width: 500px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;

  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .id {
    font-size: 15px;
    color: gray;
    margin-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  //align-items: start;
  justify-content: center;
`;

const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    text-align: center;
    width: 100px;
    color: #1dc392;
    font-size: 20px;
    font-weight: 500;
    margin-top: 50px;
    padding-bottom: 5px;
    border-bottom: 2px solid #1dc392;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const Icon = styled.div`
  margin-right: 10px;
  margin-top: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  &: first-child {
    margin-top: 30px;
  }
`;

const BigContentContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
