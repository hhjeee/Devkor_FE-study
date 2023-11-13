import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Makeup } from "interface/makeup";
//import { useQuery } from "@tanstack/react-query";
//import getProducts from "api/product";

export default function HomePage() {
  const [data, setData] = useState<Makeup[]>();

  useEffect(() => {
    //get(endpoint 주소)
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        //setUser(res.data.result[0]); 사람정보 접근
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

  /*const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div>
      {data &&
        data.map((product: any) => (
          <Container>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
          </Container>
        ))}
    </div>
  );*/
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

/*const Container = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
`;*/
