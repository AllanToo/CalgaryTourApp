import React from "react";
import john from "../assets/john.jpeg";
import styled from "styled-components";
import { FaMedal } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { MdEventSeat } from "react-icons/md";
import Destination1 from "../assets/D1.png";
import Destination2 from "../assets/D2.png";
import Destination3 from "../assets/D3.png";
import Destination4 from "../assets/D4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import axios from "axios";
export const Host = () => {
  const hostinfo = [{ language: "English" }, { language: "French" }];
  const data = [
    {
      image: Destination1,
      title: "Johnston Canyon",
      subTitle: "Winter Hiking to Johnston Canyon's Frozen Waterfalls",
      cost: "300",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination2,
      title: "Banff",
      subTitle: "Discovering Winter in Beautiful, Magical Banff",
      cost: "200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Lake Louise",
      subTitle: "A Detailed Guide to Visiting Lake Louise in Winter",
      cost: "300",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination4,
      title: "Calgary Tower",
      subTitle:
        "Experience the unique experience of downtown Calgary in winter",
      cost: "300",
      duration: "Approx 2 night trip",
    },
  ];
  return (
    <div>
      <Disc style={{ padding: "50px" }}>
        <div className="left">
          <div className="picture">
            <img src={john} alt="" className="picture" />
          </div>
          <div className="userinfo">
            <p style={{ fontSize: "30px" }}>
              <strong>Kalo </strong>
              <HiIdentification
                style={{ fontSize: "40px", color: "skyblue" }}
              />
              <span style={{ fontSize: "20px", color: "gray" }}>verified</span>
              <br />
            </p>
            <p style={{ fontSize: "23px" }}>
              <FaMedal style={{ fontSize: "40px", color: "blue" }} />
              Best Host
            </p>
            <p>
              98trips <br />
              Joined May 2021
              <br />
              Typically responds in 6 minutes
              <br />
              {hostinfo.map((lan) => {
                return (
                  <button
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      borderRadius: "0.5rem",
                      backgroundColor: "gray",
                      color: "white",
                      border: "0px solid",
                    }}
                  >
                    {lan.language}
                  </button>
                );
              })}
              <br />
              <AiFillCar style={{ fontSize: "40px", color: "skyblue" }} />
              mazda CX5 <br />
              <MdEventSeat style={{ fontSize: "40px", color: "skyblue" }} />5
              seats
            </p>
          </div>
        </div>
        <div className="description">
          <h2>
            <strong style={{ fontSize: "30px" }}>About Me</strong>
          </h2>
          <br />A teacher who has lived in the city for the past 15 years, this
          person has a love for the city's cultural diversity and enjoys sharing
          their knowledge of the city's different ethnic neighborhoods. They are
          known for their warm personality and ability to make visitors feel at
          home in the city and enjoy exploring the city's nightlife scene and
          trying new foods.
        </div>
      </Disc>
      <Section id="recommend">
        <div className="destinations" style={{ padding: "50px 150px" }}>
          {data.map((destination) => {
            return (
              <div className="destination">
                <img src={destination.image} alt="" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div className="info">
                  <h5>
                    From <FontAwesomeIcon icon={faDollarSign} />
                    {destination.cost}
                  </h5>
                </div>
                <div className="btn">
                  <button className="button-22">B O O K</button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};
const RestExample = () => {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
    })
  }, [])

  return <div className="App">
    <h1>List of Countries</h1>
    <div>
      <ul>
        {countries.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  </div>
};

const Disc = styled.div`
 
`;

const Section = styled.section`
  
`;

