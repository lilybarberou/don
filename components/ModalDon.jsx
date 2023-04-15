import styled from 'styled-components';
import { Button, Modal, ModalBg } from '@components/StyledComponents';
import { fetchApi } from 'lib/api';

export default function ModalDon({toggle, display}) {

    const handlePay = async (e) => {
        e.preventDefault();

        const amount = document.querySelector('input[name="amount"]').value;
        const name = document.querySelector('input[name="name"]').value;
        if (amount < 1 || !name) return;
        
        const query = await fetchApi(`don?amount=${amount}&name=${name}`);
        if (query.success) window.location = query.data;
    }

    return (
        <>
            <S.Modal as="form" $display={display}>
                <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <h1>Faire un don</h1>
                <S.Form>
                    <div>
                        <label htmlFor='amount'>Montant</label>
                        <input type="number" defaultValue={1} name="amount" id="amount" required={true} min={1}/>
                    </div>
                    <div>
                        <label htmlFor='name'>Nom</label>
                        <input name="name" id="name" required={true} />
                    </div>
                </S.Form>
                <Button onClick={handlePay}>C'est ok pour moi</Button>
            </S.Modal>
            <ModalBg onClick={toggle} $display={display}/>
        </>
    );
}

const S = {};
S.Modal = styled(Modal)`
    width: 350px !important;
`;

S.Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label {
        font-size: 15px;
    }

    input {
        border: none;
        padding: 8px 15px;
        border-radius: 5px;

        :hover, :focus {
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`