import styled from 'styled-components';

const Botao = ({cta}) => {
  return (
    <ButtonWrapper>
      <MeuBotao>
        {cta}
      </MeuBotao>
    </ButtonWrapper>
  );
}

export default Botao

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MeuBotao = styled.button`
  background-color: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 5px;
  padding: .5rem 1rem;
`
