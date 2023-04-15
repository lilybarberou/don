import styled from 'styled-components';
import { Modal, ModalBg } from '@components/StyledComponents';

export default function ModalReasons({toggle, display}) {
    return (
        <>
            <S.Modal $display={display}>
                <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <h1>+ de raisons d'aider Lily</h1>
                <p>En m'aidant à acheter un MacBook, vous serez en train de soutenir l'industrie du tourisme - car je pourrai enfin travailler de n'importe où dans le monde.</p>
                <p>Pensez à tout l'argent que vous allez économiser en frais de thérapie lorsque je pourrai enfin dire adieu à mon vieux PC qui me fait perdre la tête - votre don sera littéralement un investissement dans ma santé mentale.</p>
                <p>Si vous m'aidez à acheter un MacBook, je pourrai enfin dire adieu à mes écrans bleus de la mort.</p>
                <p>Je veux un MacBook parce que je veux travailler avec style (Lacoste et Ralph Lauren ne suffisent pas, non)</p>
                <p>Je veux un MacBook parce que je veux être plus cool que tous mes amis avec des ordinateurs de bureau ennuyeux - aidez-moi à être cool !</p>
            </S.Modal>
            <ModalBg onClick={toggle} $display={display}/>
        </>
    );
}

const S = {};
S.Modal = styled(Modal)`
    transition: .3s;
    gap: 10px;
    
    p {
        font-size: 14px;

        :before {
            content: '• ';
        }
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 21px;
        }
    }
`;