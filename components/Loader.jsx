import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Loader({loading, children}) {
    const container = useRef(null);

    useEffect(() => {
        if (!loading && container.current) {
            container.current.classList.add('hide');

            // remove eleemnt from dom after animation
            setTimeout(() => {
                container.current.remove();
            }, 600);
        }
    }, [loading])
    return (
        <S.Container ref={container}>
            <div class="container">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </div>
        </S.Container>
    );
}

const S = {};
S.Container = styled.div`
    margin: auto;
    position: absolute;
    z-index: 10;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    background: #171717;
    transition: .6s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

    &.hide {
        height: 0px;
        overflow: hidden;
    }

    .container {
        height: 15px;
        width: 105px;
        display: flex;
        position: relative;

        .circle {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #972ED9;
            animation: move 500ms linear 0ms infinite;
            margin-right: 30px;
            
            &:first-child {
                position: absolute;
                top:0;
                left:0;
                animation: grow 500ms linear 0ms infinite;
                background: #FF3E3E;
            }

            &:nth-child(2) {
                background: #DD3873;
            }
            &:nth-child(3) {
                background: #B932A7;
            }
            
            &:last-child {
                position: absolute;
                top: 0;
                right: 0;
                margin-right: 0;
                animation: grow 500ms linear 0s infinite reverse;
                background: #972ed9;
            }
        }
    }

    @keyframes grow {
        from {transform: scale(0,0); opacity: 0;}
        to {transform: scale(1,1); opacity: 1;}
    }

    @keyframes move {
        from {transform: translateX(0px)}
        to {transform: translateX(45px)}
    }
`;