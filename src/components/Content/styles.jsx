import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const LandingContainer = styled.div `
    padding: 40px 100px 0 0;
    width: 100%;
    height: 100vh;
    background-color:rgb(0,18,49);
    min-height: 300px;
    background-image: url(https://www.growdev.com.br/assets/images/starter/slider_1.png);
    background-position: center;
    background-size: cover;
`;
export const Main = styled.div `
    justify-content: space-around;
`;
export const Menu = styled.div `
    width: 90%;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`;
export const Login = styled.h4`
    color: rgb(196, 89, 2);
    border: 1px solid rgb(196, 89, 2);
    padding: 5px 5px;
    border-radius: 8px;
    position: relative;
    left: 100px; 
`;
export const Logo = styled.h3`
    color: rgb(196, 89, 2);
    padding: 5px 5px;
    position: relative;
    left: 100px;
`;

