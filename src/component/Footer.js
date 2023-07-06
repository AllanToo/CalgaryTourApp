import React from "react";
import styled from "styled-components";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

export const Footer = () => {
  return (
    <FooterContainer>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <p class="copyright">@2023 Copyright</p>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="/main">Home</a>
              </li>
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <a href="#">
              <SiInstagram />
            </a>
            <a href="#">
              <SiLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  
`;
