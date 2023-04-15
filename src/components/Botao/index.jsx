import styled from 'styled-components';
import  Colors  from '../UI/variables';

const Botao = ({ children }) => {
  return (
    <ButtonWrapper>
      <MeuBotao >{children}</MeuBotao>
    </ButtonWrapper>
  );
};

export default Botao;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MeuBotao = styled.button`
  display: flex;
  align-items: center;
  place-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.primary ? Colors.primaryBtn : Colors.secondaryBtn};
  color: ${(props) =>
    props.primary ? Colors.textPrimaryBtn : Colors.textSecondaryBtn};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.primary ? Colors.primaryBtnHover : Colors.secondaryBtnHover};
  }
`;
