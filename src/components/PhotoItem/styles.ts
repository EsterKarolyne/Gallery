import styled from "styled-components";

export const Container = styled.div`
  background-color: #80008054;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button {
    display: inline-block;
    margin-left: 10px;
    border: none;
    color: #fff;
    background-color:Red;
    padding: 5px 14px;
    font-size: 12px;
    border-radius: 8px;
    margin: 0 8px;
    cursor: pointer;
    
     &:hover {
    opacity: 0.9;
  }
  }

 
`;
