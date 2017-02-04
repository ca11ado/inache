const React = require('react');
const styled = require('styled-components').default;

const baseSize = 30;
const bold = 3;

const Wrapper = styled.div`
  position: relative;
  width: ${baseSize * 16}px;
  display: flex;
`;

const Arm = styled.div`
  width: ${baseSize}px;
  height: ${baseSize * 3}px;
  border-top: ${bold}px solid black;
`;

const ArmLeft = styled(Arm)`
`;

const ArmRight = styled(Arm)`
  margin-left: ${baseSize / 5}px;
`;

const Hand = styled.div`
  width: ${baseSize}px;
  height: ${baseSize * 3}px;
`;

const HandLeft = styled(Hand)`
  border-right: ${bold}px solid black;
  transform: rotate(-45deg);
  margin: ${baseSize / 5}px ${baseSize}px 0 ${baseSize / 2}px;
`;

const HandRight = styled(Hand)`
  border-left: ${bold}px solid black;
  transform: rotate(45deg);
  margin: ${baseSize / 5}px ${baseSize / 5}px 0 -${baseSize / 5}px;
`;

const Cheek = styled.div`
  width: ${baseSize}px;
  height: ${baseSize * 3}px;
  border-radius: 50%;
`;

const CheekLeft = styled(Cheek)`
  border-left: ${bold}px solid black;
`;

const CheekRight = styled(Cheek)`
  position: relative;
  border-right: ${bold}px solid black;
  left: -${baseSize * 1.5}px;
`;

const Shoulder = styled.div`
  width: ${baseSize * 2}px;
  height: ${baseSize * 3}px;
  border-bottom: ${bold}px solid black;
`;

const ShoulderRight = styled(Shoulder)`
  position: relative;
  left: -${baseSize * 1.5}px;
`;

const Eye = styled.div`
  width: ${baseSize / 2}px;
  height: ${baseSize}px;
  border-left: ${bold}px solid black;
  transform: rotate(-10deg);
`;

const Mouth = styled.div`
  position: relative;
  width: ${baseSize * 2}px;
  height: ${baseSize * 2}px;
  border-bottom: ${bold}px solid black;
  border-radius: 50%;
  left: -${baseSize * 1.5}px;
  transform: rotate(-30deg);
`;

const Smile = () => {
  return (
    <Wrapper>
      <ArmLeft />
      <HandLeft />
      <Shoulder />
      <CheekLeft />
      <Eye />
      <Eye />
      <Mouth />
      <CheekRight />
      <ShoulderRight />
      <HandRight />
      <ArmRight />
    </Wrapper>
  );
};

module.exports = Smile;
