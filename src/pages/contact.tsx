import React from "react";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <BackGroundColor>
      <ContactBackGround>
        <h1>Contact Us</h1>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>

          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" />

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ContactBackGround>
    </BackGroundColor>
  );
};

export default ContactPage;

const BackGroundColor = styled.div`
  background-color: #f5f5f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactBackGround = styled.div`
  background: white;
  width: 500px;
  height: 500px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 75px;
`;
const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 350px;
  border-bottom: 2px solid lightgray;
`;

const Label = styled.label`
  margin-right: 20px;
  color: gray;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 100px;
  padding: 8px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid lightgray;
`;

const SubmitButton = styled.button`
  background-color: #1dc392;
  width: 200px;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-left: 80px;
`;
