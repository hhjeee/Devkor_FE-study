import { Link } from "react-router-dom";
import styled from "styled-components";
import Info from "assets/Info";
import Wrap from "components/ClassItem";

export default function IndexPage() {
  return (
    <BackGroundColor>
      <Title>
        <img src="/images/velog.png" alt="velogLogo" />
        <h1>velog</h1>
      </Title>

      <NavigationBar>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavigationBar>

      <Container>
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

  img {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
  h1 {
    font-size: 30px;
  }
`;
const NavigationBar = styled.div`
  justify-content: start;
  background-color: black;
  padding: 10px;
  margin: 0 100px;
  border-radius: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-weight: 500;

  &:first-child {
    margin-left: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px 50px;
`;
