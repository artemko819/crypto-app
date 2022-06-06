import { Row,Typography } from "antd";
import React from "react";

import { useGetCryptoStatsQuery } from "../services/cryptoApi";
import { Loader } from "../components/Loader";
import { CoinItem } from "../components/CoinItem";

const { Title } = Typography;

export const Exanges = () => {
  const { data, isFetching } = useGetCryptoStatsQuery();
  if (isFetching) return <Loader />;

  const bestCoins = data?.data?.bestCoins;
  const newestCoins = data?.data?.newestCoins;

  return (
    <>
      <Title level={2} className="heading">
        Best Coins
      </Title>
      <Row gutter={[24, 24]}>
        {bestCoins.map((currency) => (
          <CoinItem currency={currency} key={currency.uuid} exanges />
        ))}
      </Row>

      <Title level={2} className="heading">
        Newest Coins
      </Title>
      <Row gutter={[24, 24]}>
        {newestCoins.map((currency) => (
          <CoinItem currency={currency} key={currency.uuid} exanges />
        ))}
      </Row>
    </>
  );
};
