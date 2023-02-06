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

const Disc = styled.div`
  margin-top: 100px;
  padding: 50px 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  .left {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    .picture {
      margin-top: 15px;
      float: left;
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
    .userinfo {
      margin: auto;
    }
    .spec {
      font-size: 25px;
      margin: auto;
    }
  }
  .description {
    margin-right: 50px;
  }
`;

const Section = styled.section`
  background-color: #e8f9fd;
  padding: 5rem 0;
  .title {
    text-align: center;
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 30px 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: white;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        border-round: 1px;
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
            width: 100%;
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
      .btn {
        margin: auto;
        text-align: center;
        display: flex;
        align-items: center;
      }

      .button-22 {
        align-items: center;
        height: 50px;
        text-align: center;
        appearance: button;
        background-color: #79dae8;
        border-radius: 8px;
        border-style: none;
        box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        font-family: "RM Neue", sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        padding: 10px 21px;
        text-align: center;
        text-transform: none;
        transition: color 0.13s ease-in-out, background 0.13s ease-in-out,
          opacity 0.13s ease-in-out, box-shadow 0.13s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }

      .button-22:active {
        background-color: #006ae8;
      }

      .button-22:hover {
        background-color: #1c84ff;
      }
      .buttontext {
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
