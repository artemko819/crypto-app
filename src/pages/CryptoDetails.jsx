import { Col } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import { DetailsHeading } from "../components/DetailsHeading";
import { DetailsCoinValue } from "../components/DetailsCoinValue";
import { DetailsCoinStats } from "../components/DetailsCoinStats";
import { DetailsCoinDesc } from "../components/DetailsCoinDesc";
import { DetailsCoinLinks } from "../components/DetailsCoinLinks";
import { DetailsSelectPeriod } from "../components/DetailsSelectPeriod";
import { time } from "../utils/menu";
import { LineChart } from "../components/LineChart";
import millify from "millify";
import { Loader } from "../components/Loader";

export const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory,  } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader/>;
  if(cryptoDetails.price === null) return <h1 style={{fontSize:"30px"}}>Error 404 Info not found</h1>
  return (
    <Col className="coin-detail-container">
      <DetailsHeading cryptoDetails={cryptoDetails} />
      <DetailsSelectPeriod setTimePeriod={setTimePeriod} time={time} />
       <LineChart
        coinHistory={coinHistory}
        coinName={cryptoDetails.name}
        currentPrice={millify(cryptoDetails.price)}
      /> 
      <Col className="stats-container">
        <DetailsCoinValue cryptoDetails={cryptoDetails} />
        <DetailsCoinStats cryptoDetails={cryptoDetails} />
      </Col>
      <Col className="coin-desc-link">
        <DetailsCoinDesc cryptoDetails={cryptoDetails} />
        <DetailsCoinLinks cryptoDetails={cryptoDetails} />
      </Col>
    </Col>
  );
};
