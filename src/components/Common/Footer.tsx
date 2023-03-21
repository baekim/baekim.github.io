import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-family: Arial;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Have a good day! 😆
      <br />© 2023 Bae Kim, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
