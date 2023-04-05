import styled from "styled-components";


export const Input = styled.input`
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin: 0 1rem 0 0 !important;
    width: 21rem;
`;

export const Btn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
`;

export const Button = styled.button`
    color: #fff;
    border: 1px solid #000;
    padding: .3rem 1rem;
    border-radius: .5rem;
    text-decoration: none;
    background-color: #191;
    &:hover{
        color: #fff !important;
        background-color: #193333;
        text-decoration: none;
    }
`;