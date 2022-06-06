import {
  CheckOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Col, Typography } from "antd";
import millify from "millify";
import React from "react";

const { Title, Text } = Typography;

export const DetailsCoinStats = ({ cryptoDetails }) => {
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
  return (
    <Col className="other-stats-info">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          Other Stats Info
        </Title>
        <p>
          An overview showing the statistics of {cryptoDetails.name}, such as
          the base and quote currency, the rank, and trading volume.
        </p>
      </Col>
      {genericStats.map(({ icon, title, value }, i) => (
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
