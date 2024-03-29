import React from "react";
import styled from "styled-components";
import Destination1 from "../assets/host1.png";
import Destination2 from "../assets/host2.png";
import Destination3 from "../assets/host3.png";
import Destination4 from "../assets/host4.png";
import Destination5 from "../assets/host5.png";
import Destination6 from "../assets/host6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  { useEffect, useRef, useState } from "react";


export const Hosts = () => {
  const data = [
    {
      image: Destination1,
      name: "Kalo",
      languages: "English, French",
      rating: "4.25",
      cost: "30",
    },
    {
      image: Destination2,
      name: "Derek",
      languages: "English",
      rating: "4.35",
      cost: "20",
    },
    {
      image: Destination3,
      name: "Ahn",
      languages: "English, French",
      rating: "3.35",
      cost: "45",
    },
    {
      image: Destination4,
      name: "Lily",
      languages: "English, Spanish",
      rating: "2.35",
      cost: "20",
    },
    {
      image: Destination5,
      name: "Jun",
      languages: "English, Filipino",
      rating: "4.85",
      cost: "60",
    },
    {
      image: Destination6,
      name: "Debora",
      languages: "English, German",
      rating: "4.95",
      cost: "33",
    },
  ];

  const navigate = useNavigate();
  const goToHost = () => {
    navigate("/host");
  };

  return (
    <Section id="recommend">
      <div className="destinations">
        {data.map((host) => {
          return (
            <div className="destination" onClick={goToHost}>
              <img src={host.image} alt="" />
              <h7 style={{ fontWeight: "bold" }}>
                {host.name}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;&nbsp;{host.rating}
              </h7>
              <p>{host.languages}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 8rem;
    padding: 35px 20rem;

    .destination {
      cursor: pointer;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        border-radius: 1rem;
        width: 250px;
        height: 250px;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
