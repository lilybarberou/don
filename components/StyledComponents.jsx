import styled, { css } from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    width: fit-content;
    padding: 15px 35px;
    border-radius: 60px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.linear};
    font-weight: 600;
    font-size: 15px;
    transition: .4s;
    background-size: 200% 100%;
    background-image: linear-gradient(to right, #FF3E3E, #972ED9, #FF3E3E);

    :hover {
        background-position: 100% 0;
    }

    svg {
        width: 40px;
        fill: white;
    }
`

export const ModalBg = styled.div`
    display: none;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    backdrop-filter: blur(5px);

    ${({ $display }) => $display && css`
        display: block;
    `}
`

export const Modal = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    margin: auto;
    width: 450px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    transition: .2s;

    /* background: linear-gradient(black, black) padding-box, ${({ theme }) => theme.linear} border-box;
    border: 2px solid transparent; */

    background: rgb(204 204 204 / 12%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    ${({ $display }) => $display && css`
        transform: translate(-50%, -50%) scale(1);
    `}

    svg {
        position: absolute;
        top: 12px;
        right: 15px;
        height: 20px;
        fill: white;
        cursor: pointer;
    }
`