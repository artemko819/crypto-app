import { Typography } from "antd";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { StatisticCrypto } from "../components/StatisticCrypto";
import { TopRatings } from "../components/TopRatings";
import { Loader } from "../components/Loader";

const { Title } = Typography;

export const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader/>;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <StatisticCrypto globalStats={globalStats}/>
      <TopRatings news={false}/>
      <TopRatings news={true}/>
    </> 
  );
};
