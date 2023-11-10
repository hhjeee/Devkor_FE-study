import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Makeup } from "interface/makeup";

export default function HomePage() {
  const [data, setData] = useState<Makeup[]>();

  useEffect(() => {
    //get(endpoint 주소)
    axios
      .get(process.env.REACT_APP_API_URL!)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        //setUser(res.data.result[0]); 사람정보 접근
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Title>베스트 상품</Title>
      <BigContainer>
        <GridContainer>
          {data?.map((item, index) => (
            <GridItem key={index}>
              <img src={item.image_link} alt={`Product ${index}`} />
              <Name> {item.name} </Name>
              <Type> {item.product_type} </Type>
              <Price> ${item.price} </Price>
            </GridItem>
          ))}
        </GridContainer>
      </BigContainer>
    </>
  );
}

const Title = styled.div`
  font-size: 25px;
  font-weight: bolder;
  margin: 50px 150px;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgray;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Type = styled.div`
  margin: 10px 0;
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;

const Price = styled.div`
  color: #48c7d4;
  font-size: 14px;
  font-weight: 800;
`;

const BigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
`;

const GridItem = styled.div`
  padding: 10px;
  text-align: center;

  img {
    width: 180px;
    height: 200px;
  }
`;
