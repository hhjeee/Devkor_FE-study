import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Info from "assets/Info";
import Wrap from "components/ClassItem";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function IndexPage() {
  let [menuClick, setMenuClick] = useState(false);
  let [XClick, setXClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);

    if (XClick) setXClick(!XClick);
  };
  const handleXClick = () => {
    setXClick(!XClick);
    setMenuClick(!menuClick);
    console.log(menuClick);
  };

  return (
    <BackGroundColor>
      <Title>
        <img src="/images/velog.png" alt="velogLogo" />
        <h1>velog</h1>
      </Title>

      <NavigationBar menuClick={menuClick} xClick={XClick}>
        <IoMenu className="menu" size="30px" onClick={handleMenuClick} />
        <IoMdClose className="x" size="30px" onClick={handleXClick} />
        <NavLink to="/">Trending</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavigationBar>

      <MenuContainer menuClick={menuClick} xClick={XClick}>
        <MenuLink to="/home">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact">Contact Us</MenuLink>
      </MenuContainer>

      <Container menuClick={menuClick} xClick={XClick}>
        {Info.map((element) => (
          <Wrap item={element} key={element.title}></Wrap>
        ))}
      </Container>
    </BackGroundColor>
  );
}

const BackGroundColor = styled.div`
  background-color: #f5f5f7;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 0 100px;

  h1 {
    font-size: 30px;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
  @media (max-width: 767px) {
    padding: 10px 0 0 70px;
  }
`;
const NavigationBar = styled.div<{ menuClick: boolean; xClick: boolean }>`
  justify-content: start;
  padding: 10px;
  margin: 0 80px;
  border-radius: 10px;

  .menu {
    display: none;
  }
  .x {
    display: none;
  }

  @media (max-width: 767px) {
    .menu {
      display: block;
      color: black;
      ${(props) =>
        props.menuClick &&
        css`
          display: none;
        `}
      ${(props) =>
        props.xClick &&
        css`
          display: block;
          color: black;
        `}
    }
    .x {
      ${(props) =>
        props.menuClick &&
        css`
          display: block;
          color: black;
        `}
      ${(props) =>
        props.xClick &&
        css`
          display: none;
        `}
    }
  }
`;

const NavLink = styled(Link)`
  color: black;
  margin-right: 20px;
  padding-bottom: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  &:first-child {
    margin-left: 15px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  :hover {
    border-bottom: 2px solid black;
  }
`;

const MenuContainer = styled.div<{ menuClick: boolean; xClick: boolean }>`
  background-color: #f5f5f7;
  display: none;
  height: 100vh;
  margin-left: 80px;

  @media (max-width: 767px) {
    ${(props) =>
      props.menuClick &&
      css`
        display: block;
      `}

    ${(props) =>
      props.xClick &&
      css`
        display: none;
      `}
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  margin-bottom: 15px;
  &:first-child {
    margin-top: 30px;
  }

  :hover {
  }
`;

const Container = styled.div<{ menuClick: boolean; xClick: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px 50px;

  ${(props) =>
    props.menuClick &&
    css`
      display: none;
    `}

  ${(props) =>
    props.xClick &&
    css`
      display: block;
    `}
`;
