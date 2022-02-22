import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Card = styled.div `
    max-width: 60%;
    position: fixed;
    top: 10vh;
    left: 1vw;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0 2%;
    display: flex;
    justify-content: start;
    flex-direction: column;
`;
export const Card2 = styled.div `
    max-width: 60%;
    position: fixed;
    top: 45vh;
    left: 1vw;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 0 2%;
    display: flex;
    justify-content: end;
    flex-direction: column;
`;


export const CardContent = styled.div `
    background: transparent;
    color: rgb(196, 89, 2);
    margin: 2px;
    justify-content: start;
    border-radius: 5px;
    margin-bottom: .5rem;
    display: flex;
`;

export const TitleContent = styled.h1 `
    color: rgb(196, 89, 2);
    font-weight: 600;

`;
export const TitleContent2 = styled.h1 `
    color: rgb(196, 89, 2);
    font-weight: 600;
    text-align-last: end;
`;

export const TextContent = styled.p `
    color: rgb(196, 89, 2);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 5px 5px;
    max-width: 50%;
`;

export const ImageContent = styled.img `
margin: -2rem 1rem 1rem 1rem;
max-width: 300px;
border: 1px solid rgb(196, 89, 2);
border-radius: 25px;
position: relative;
left: 30px;
`;
export const ImageContent2 = styled.img `
margin: -2rem 1rem 1rem 1rem;
max-width: 325px;
border: 1px solid rgb(196, 89, 2);
border-radius: 25px;
position: relative;
top: 35px;
`;
