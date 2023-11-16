import React from "react";
import styled from "styled-components";

interface ItemProps {
  image: string;
  title: string;
  content: string;
}

interface ClassItemProps {
  item: ItemProps;
}

export default function Wrap({ item }: ClassItemProps) {
  const { image, title, content } = item;
  return (
    <Container>
      <Image src={image} alt="img" />
      <ContentContainer>
        <h3>{title}</h3>
        <span className="content">{content}</span>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  width: 320px;
  background-color: white;
  margin: 10px;

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    scale: 1.02;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }

  @media (max-width: 767px) {
    transition: all 0.5s ease-in-out;
    width: 500px;
  }
`;

const Image = styled.img`
  width: 320px;
  height: 180px;

  @media (max-width: 767px) {
    width: 500px;
    height: 280px;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 15px 60px 20px;
  height: 80px;
  h3 {
    font-size: 16px;
    margin: 0 0 5px 0;
  }
  .content {
    font-size: 14px;
    color: darkgray;
  }
`;
