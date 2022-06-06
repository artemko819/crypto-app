import {  Row } from "antd";
import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { SearchCoin } from "../components/SearchCoin";
import { CoinItem } from "../components/CoinItem";
import { Loader } from "../components/Loader";
export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = data?.data?.coins.filter((coins) =>
      coins.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [data, searchTerm]);

  if (isFetching) return <Loader/>;
  
  return (
    <>
      {!simplified && <SearchCoin setSearchTerm={setSearchTerm} />}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map(currency => <CoinItem  currency={currency}/> )}
      </Row>
    </>
  );
};
