import React from "react";
import styled from "styled-components";

interface ItemProps {
  image: string;
  title: string;
  content: string;
  writer: string;
}

interface ClassItemProps {
  item: ItemProps;
}

export default function Wrap({ item }: ClassItemProps) {
  const { image, title, content, writer } = item;
  return (
    <Container>
      <Image src={image} alt="img" />
      <ContentContainer>
        <h3>{title}</h3>
        <span className="content">{content}</span>
      </ContentContainer>
      <span className="writer">by {writer}</span>
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

  .writer {
    padding: 10px 0 10px 20px;
    font-size: 13px;
  }

  cursor: pointer;

  &:hover {
    scale: 1.02;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }
`;

const Image = styled.img`
  width: 320px;
  height: 180px;
`;

const ContentContainer = styled.div`
  padding: 20px 15px 60px 20px;
  border-bottom: 1px solid lightgray;
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
