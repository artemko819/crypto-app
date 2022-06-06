import { Card, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";

export const CoinItem = ({ currency, exanges,}) => {
  return (
    <Col xs={24} sm={12} lg={6} className="crypto-card">
      <Link to={`/crypto/${currency.uuid}`}>
        <Card
          title={`${currency.rank || "🙂"}. ${currency.name} `}
          extra={
            <img
              className="crypto-image"
              src={currency.iconUrl}
              alt={currency.name}
            />
          }
          hoverable
        >
          {!exanges ? (
            <>
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}%</p>
            </>
          ) : (
            <p>More details...</p>
          )}
        </Card>
      </Link>
    </Col>
  );
};
