import styled from 'styled-components';
const css = require('./video.css');
const React = require('react');
const Smile = require('t0s-components').Smile;

const Wrapper = styled.div`
  display: flex;
`;

const NothingWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const nothingToShow = (
  <Wrapper>
    <NothingWrapper>
      <h2>Пока не добавлено ни одного видео</h2>
      <Smile bold='4' baseSize='30' />
    </NothingWrapper>
  </Wrapper>
);

const Video = () => {

  return nothingToShow;
};

export default Video;
