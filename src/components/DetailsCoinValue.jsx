import {
  DollarCircleOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Col, Typography } from "antd";
import millify from "millify";
import React from "react";

const { Title, Text } = Typography;

export const DetailsCoinValue = ({ cryptoDetails }) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];
  return (
    <Col className="coin-value-statistics">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          {cryptoDetails.name} Value Statistics
        </Title>
        <p>
          An overview showing the statistics of {cryptoDetails.name}, such as
          the base and quote currency, the rank, and trading volume.
        </p>
      </Col>
      {stats.map(({ icon, title, value }, i) => (
        <Col className="coin-stats" key={i}>
          <Col className="coin-stats-name">
            <Text>{icon}</Text>
            <Text>{title}</Text>
          </Col>
          <Text className="stats">{value}</Text>
        </Col>
      ))}
    </Col>
  );
};
