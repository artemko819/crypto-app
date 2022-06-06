import { Row } from "antd";
import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { NewsCard } from "../components/NewsCard";
import { useGetCryptosQuery } from "../services/cryptoApi";

import { Loader } from "../components/Loader";
import { NewsFilter } from "../components/NewsFilter";

export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const count = simplified ? 6 : 100;
  console.log(newsCategory);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count,
  });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <NewsFilter data={data} setNewsCategory={setNewsCategory} />
      )}
      {cryptoNews?.value.map((news, i) => (
        <NewsCard simplified={simplified} news={news} key={i} />
      ))}
    </Row>
  );
};
