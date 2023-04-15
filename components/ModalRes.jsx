import styled from 'styled-components';
import { Modal, ModalBg } from '@components/StyledComponents';
import { useEffect, useState } from 'react';

export default function ModalRes({toggle, display}) {
    const [success, setSuccess] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const success = urlParams.get('success');
            if (success == 0) setSuccess(false);
        }
    }, [])

    return (
        <>
            <S.Modal $display={display}>
                <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <h1>{success ? 'Merci pour votre don !' : "Bah... Vous n'avez pas réussi à payer ? :("}</h1>
                {success && <img src="thanks.gif" alt="Thanks for donation"/>}
                <p>{success ? " J'en ferai très bon usage ! :)" : ""}</p>
            </S.Modal>
            <ModalBg onClick={toggle} $display={display}/>
        </>
    );
}

const S = {};
S.Modal = styled(Modal)`
    padding: 30px;
    
    img {
        width: 80%;
    }
`;