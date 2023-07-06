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

  const [hostData, setHostData] = useState("");

 

  

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
const AdsContainer = ({children}) => {
  const [data, setData] = useState();

 

  return (
    <div data={data}>
      {children}
    </div>
  )
}


const Section = styled.section`
  
`;
