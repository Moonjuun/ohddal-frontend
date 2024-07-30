import React from "react";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <LoadingWrap>
        <PacmanLoader color="#00d1ff" size={50} />
        <p>조금만 기다려주세요 (최대 1분)</p>
      </LoadingWrap>
    </>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10%;
  height: 50vh;
`;
