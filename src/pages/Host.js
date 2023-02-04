import React, { useState } from "react";
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
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export const Host = () => {
  const [active, setActive] = useState(1);
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
      <Disc>
        <div className="left">
          <div className="picture">
            <img src={john} alt="" className="picture" />
          </div>
          <div className="userinfo">
            <p>
              <strong style={{ fontSize: "30px" }}>John Doe</strong>
            </p>
            <p style={{ fontSize: "23px" }}>
              <FaMedal />
              All - Star Host
            </p>
            <p>
              98trips <br />
              Joined May 2021
              <br />
              Typically responds in 6 minutes
            </p>
          </div>
          <div className="spec">
            <HiIdentification />
            verified
            <br />
            <AiFillCar />
            mazda CX5 <br />
            <MdEventSeat />5 seats
          </div>
        </div>

        <div className="description">
          <h2>
            <strong style={{ fontSize: "30px" }}>Description</strong>
          </h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          varius quam quisque id diam vel quam elementum pulvinar. Lorem ipsum
          dolor sit amet consectetur. Quis risus sed vulputate odio ut enim
          blandit volutpat. Vitae elementum curabitur vitae nunc sed velit
          dignissim. Adipiscing elit duis tristique sollicitudin. Felis bibendum
          ut tristique et egestas quis ipsum suspendisse. Turpis massa tincidunt
          dui ut. Enim tortor at auctor urna nunc id. Aenean et tortor at risus.
          Libero id faucibus nisl tincidunt eget nullam. Urna id volutpat lacus
          laoreet non curabitur gravida arcu ac. Aliquam eleifend mi in nulla
          posuere sollicitudin. Et netus et malesuada fames ac turpis egestas
          maecenas pharetra. Commodo quis imperdiet massa tincidunt nunc
          pulvinar sapien et ligula. Pharetra sit amet aliquam id diam maecenas.
          Eget felis eget nunc lobortis. Et tortor at risus viverra adipiscing
          at. Orci eu lobortis elementum nibh tellus. Pellentesque pulvinar
          pellentesque habitant morbi tristique. Mi quis hendrerit dolor magna.
          Diam vulputate ut pharetra sit. Ornare suspendisse sed nisi lacus sed
          viverra tellus in hac. Malesuada nunc vel risus commodo viverra. Eu
          augue ut lectus arcu bibendum at varius vel. Mattis molestie a iaculis
          at erat pellentesque adipiscing. Sit amet commodo nulla facilisi
          nullam vehicula. Enim neque volutpat ac tincidunt vitae semper quis
          lectus.
        </div>
      </Disc>
      <Section id="recommend">
        <div className="destinations">
          {data.map((destination) => {
            return (
              <div className="destination">
                <img src={destination.image} alt="" />
                <h3>{destination.title}</h3>
                <p>{destination.subTitle}</p>
                <div></div>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="" />
                    <img src={info2} alt="" />
                    <img src={info3} alt="" />
                  </div>
                  <h5>{destination.cost}</h5>
                </div>
                <div className="distance">
                  <span>Within 100 Kms</span>
                  <span>{destination.duration}</span>
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
  padding-left: 50px;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  .left {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    .picture {
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
  padding: 8rem 0;
  .title {
    text-align: center;
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      /* background-color: #8338ec14; */
      background-color: white;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
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
