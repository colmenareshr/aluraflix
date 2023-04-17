import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Título do Vídeo</HeroTitle>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url('src/assets/img/background-mario-solto-next-js.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroTitle = styled.h1`
  padding: 2rem;
  font-size: 1.2rem;
`;
