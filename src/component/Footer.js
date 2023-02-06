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
  .footer-basic {
    background-color: white;
    color: #4b4c4d;
  }

  .footer-basic ul {
    padding: 0;
    list-style: none;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .footer-basic li {
    padding: 0 10px;
  }

  .footer-basic ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
  }

  .footer-basic ul a:hover {
    opacity: 1;
  }

  .footer-basic .social {
    text-align: center;
    padding-bottom: 25px;
  }

  .footer-basic .social > a {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    margin: 0 8px;
    color: inherit;
    opacity: 0.75;
  }

  .footer-basic .social > a:hover {
    opacity: 0.9;
  }

  .footer-basic .copyright {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    color: #aaa;
    margin-bottom: 0;
  }
`;
