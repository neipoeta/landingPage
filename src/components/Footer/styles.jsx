import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const FooterPage = styled.footer `
    position: fixed;
    top: 25vh;
    right: 7vw;
    border-left: 1px solid rgb(196, 89, 2);
`;
export const MainFooter = styled.main `
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    
`;
export const CenterFooter = styled.div `
    border-radius: 5px;
    width: 86%;
    margin: .5rem 0;
    padding: .5rem;
`;
export const Form = styled.form `
display: flex; 
width: 100%;
margin: 10px auto;
max-width: 600px;
flex-wrap: wrap;
justify-content: center;
`;


export const FormContent = styled.div `
margin: 0 auto;
max-width: 540px;
display: flex;
width: 100%;
justify-content: space-around;
flex-wrap: wrap;
`;


export const FormTitle = styled.h2 `
color: rgb(196, 89, 2);
text-transform: uppercase;
font-size: 25px;
text-align: -webkit-center;
`;

export const InputText = styled.input `
width: 48%;
height: 3rem;
margin: 8px 0px;
padding: .5rem;
border-radius: 5px;
`;

export const InputSubmit = styled.input `
width: 98%;
height: 3rem;
margin: 8px 0px;
background-color: rgb(196, 89, 2);
border: 0;
border-radius: 5px;
font-size: 19px;
cursor: pointer;
`;

