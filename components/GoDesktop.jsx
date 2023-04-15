import styled from "styled-components";

const GoOnDesktop = () => {
    return <S.GoDesktop>
        <p>J'ai pas encore responsivé, allez sur pc</p>
    </S.GoDesktop>
}

export default GoOnDesktop;

const S = {}
S.GoDesktop = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0);
        z-index: 1000;
    }
`