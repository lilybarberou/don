import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ModalDon from '@components/ModalDon';
import { Button } from '@components/StyledComponents';
import ModalRes from '@components/ModalRes';
import Loading from '@components/Loading';
import ModalReasons from '@components/ModalReasons';
import Loader from '@components/Loader';
import GoOnDesktop from '@components/GoDesktop';

export default function Home() {
    const [displayModalDon, setDisplayModalDon] = useState(false);
    const [displayResModal, setDisplayResModal] = useState(false);
    const [displayReasonsModal, setDisplayReasonsModal] = useState(false);
    const currentInfoInit = {donationName: 'Personne snif', donationAmount: 0, totalAmount: 0};
    const [currentInfos, setCurrentInfos] = useState(currentInfoInit);
    const loading = useRef(true);
    const amountRemaining = process.env.NEXT_PUBLIC_PRICE - currentInfos.totalAmount;

    useEffect(() => {
        // GET SUCCESS PARAM
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const success = urlParams.get('success');
            if (Boolean(success)) setDisplayResModal(true);
        }

        // GET LAST DONATION INFO / CURRENT AMOUNT OF DONATION
        const getLastDonation = async () => {
            const res = await fetch('/api/current');
            const data = await res.json();

            loading.current = false;
            setCurrentInfos(data.success ? data.data : currentInfoInit);
        }

        getLastDonation();
    }, [])

    const toggleModalDon = () => setDisplayModalDon(!displayModalDon);
    const toggleModalRes = () => setDisplayResModal(!displayResModal);
    const toggleModalReasons = () => setDisplayReasonsModal(!displayReasonsModal);

    return (
        <>
            <Head>
                <title>Aidez Lily</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <S.Container>
                <GoOnDesktop/>
                <Loader loading={loading.current}/>
                <S.LeftContent>
                    <h1>À l'aide !</h1>
                    <div>
                        <p>À cause de son entreprise, Lily s’est fait piéger dans l’écosystème Apple.</p>
                        <p>
                            Il ne lui manque plus que <span>{amountRemaining} euros</span> pour s’épanouir pleinement dans son métier.
                        </p>
                        <p>
                            Aidez Lily, et en échange, vous serez comblé de <span>satisfaction et de reconnaissance</span>.
                        </p>
                        <Button onClick={toggleModalDon}>
                            Aider Lily
                            <svg viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.7071 8.70711C57.0976 8.31658 57.0976 7.68342 56.7071 7.29289L50.3431 0.928932C49.9526 0.538408 49.3195 0.538408 48.9289 0.928932C48.5384 1.31946 48.5384 1.95262 48.9289 2.34315L54.5858 8L48.9289 13.6569C48.5384 14.0474 48.5384 14.6805 48.9289 15.0711C49.3195 15.4616 49.9526 15.4616 50.3431 15.0711L56.7071 8.70711ZM0 9H56V7H0V9Z" fill="white"/>
                            </svg>
                        </Button>
                    </div>
                    <span className='more-reasons' onClick={toggleModalReasons}>+ DE RAISONS</span>
                </S.LeftContent>
                <S.RightContent>
                    <S.Image>
                        <div></div>
                        <img src="macbook.png" alt="macbook" />
                    </S.Image>
                    <S.Don>
                        <span>
                            Dernier don
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                                <path
                                    d="M11.785,20.377c-0.251,0-0.503-0.096-0.695-0.288l-6.675-6.676c-1.198-1.198-1.758-2.914-1.497-4.591
                c0.266-1.707,1.33-3.156,2.92-3.976c1.924-0.994,4.285-0.646,5.947,0.857c1.662-1.501,4.022-1.851,5.947-0.857
                c1.59,0.82,2.654,2.269,2.92,3.976c0.261,1.677-0.298,3.393-1.497,4.591l-6.676,6.676C12.289,20.281,12.037,20.377,11.785,20.377z
                M8.141,5.297c-0.638,0-1.271,0.143-1.844,0.439c-1.302,0.672-2.173,1.854-2.39,3.241c-0.212,1.362,0.242,2.756,1.215,3.729
                l6.675,6.676l6.651-6.676c0.973-0.973,1.428-2.368,1.215-3.729c-0.216-1.388-1.087-2.569-2.39-3.241
                c-1.588-0.819-3.63-0.469-4.968,0.852l0,0c-0.287,0.284-0.755,0.284-1.042,0C10.41,5.744,9.269,5.297,8.141,5.297z"
                                />
                            </svg>
                        </span>
                        <Loading loading={loading.current}>
                            <span>{currentInfos.donationName} - {currentInfos.donationAmount}€</span>
                        </Loading>
                    </S.Don>
                </S.RightContent>
                <ModalDon toggle={toggleModalDon} display={displayModalDon}/>
                <ModalRes toggle={toggleModalRes} display={displayResModal}/>
                <ModalReasons toggle={toggleModalReasons} display={displayReasonsModal}/>
            </S.Container>
        </>
    );
}

const S = {};
S.Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
`;

S.LeftContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;

    h1 {
        width: fit-content;
        font-size: 60px;
        position: relative;
        margin-bottom: 40px;
    }

    p {
        max-width: 320px;
        font-size: 17px;
        line-height: 25px;
        color: #e0e0e0;
    }

    span, h1 {
        background: ${({ theme }) => theme.linear};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    button {
        margin-top: 35px;
    }

    .more-reasons {
        cursor: pointer;
        font-size: 15px;
        background: linear-gradient(97.2deg,#FF3E3E 2.76%,#972ED9 27%);
        -webkit-background-clip: text;
        font-weight: bold;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
`;

S.RightContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

S.Image = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        position: absolute;
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
        background: ${({ theme }) => theme.linear};
        filter: blur(100px);
        border-radius: 50%;
        z-index: -1;
    }

    img {
        width: 100%;
        max-width: 500px;
        height: auto;
    }
`;

S.Don = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    gap: 10px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;

        :first-of-type {
            font-weight: bold;
            background: ${({ theme }) => theme.linear};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        :last-of-type {
            margin-right: 8px;
        }
    }

    svg {
        height: 20px;
        fill: white;
    }
`;