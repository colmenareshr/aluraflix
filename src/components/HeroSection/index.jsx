import styled from 'styled-components';

const HeroSection = () => {
  return <HeroContainer></HeroContainer>;
};

export default HeroSection;

const HeroContainer = styled.section`
  height: calc((100vw) / 3.9 - 1px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url('https://yt3.googleusercontent.com/PSoypjrgFjIDIWCPoBYW3f4dLmR5Gs1Uj-cogo0lFLnnpRk7L-Fwh3NgmhJZ_vI8DWyN7gmvOFE=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
