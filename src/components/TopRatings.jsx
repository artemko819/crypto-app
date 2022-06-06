import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Cryptocurrencies } from "../pages/Cryptocurrencies";
import { News } from "../pages/News";

const { Title } = Typography;

export const TopRatings = ({ news }) => {
  return (
    <>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          {news ? "Latest Crypto News" : "Top 10 Crypto curencies in the world"}
        </Title>
        <Title level={3} className="show-more">
          {news ? (
            <Link to="/news">Show More</Link>
          ) : (
            <Link to="/cryptocurrencies">Show More</Link>
          )}
        </Title>
      </div>
      {news ? <News simplified /> : <Cryptocurrencies simplified />}
    </>
  );
};
