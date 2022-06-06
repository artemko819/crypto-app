import { Row, Typography } from "antd";
import React from "react";
import HTMLReactParser from "html-react-parser";

const { Title } = Typography;

export const DetailsCoinDesc = ({ cryptoDetails }) => {
  return (
    <Row className="coin-desc">
      <Title level={3} className="coin-details-heading">
        What is {cryptoDetails.name}?
      </Title>
      {HTMLReactParser(cryptoDetails.description)}
    </Row>
  );
};
