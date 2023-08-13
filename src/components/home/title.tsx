import React from 'react';
import styled from '@emotion/styled';


interface textType {
  text: string
}

const Title = ({ text }: textType) => {
  return (
    <NormalTitle>
      {text}
    </NormalTitle>
  );
};

export default Title;

const NormalTitle = styled.h2`
    font-size: 2.8rem;
    padding-left: 16px;
    position: relative;
    margin: 0 0 30px 0;
    &::before {
      content:'';
      display:block;
      width:6px;
      height:6px;
      border-radius:6px;
      border:2px solid #222;
      position:absolute;
      top:0;
      left:0;
    }
`