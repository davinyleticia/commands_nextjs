import styled from "styled-components";


export const Content = styled.a`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: .5rem;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(420deg, #e9ecfe 10%, #e9ecbe 50%, #e9e1a1 10%);
    &:hover {
        text-decoration: none;
        background-image: linear-gradient(420deg, #e5e1fe 20%, #e3e1be 30%, #e1d5a1 60%);
    }
`;

export const Title = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
`;  

export const Description = styled.p`
    font-size: 1rem;
    font-weight: 300;   
    color: #000 !important;
`;