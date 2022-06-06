import { Avatar, Card, Col, Typography } from "antd";
import React from "react";
import { demoImage } from "../utils/image";
import moment from "moment";

const { Title, Text } = Typography;

export const NewsCard = ({ news }) => {
  return (
    <Col xs={24} sm={12} lg={8}>
      <Card hoverable className="news-card">
        <a href={news.url} target="_blank" rel="noreferrer">
          <div className="news-image-container">
            <Title className="news-title" level={4}>
              {news.name}
            </Title>
            <img
              src={news?.image?.thumbnail?.contentUrl || demoImage}
              alt={news.name}
            />
          </div>
          <p>{news.description}</p>
          <div className="provider-container">
            <div>
              <Avatar
                size="large"
                src={news?.provider[0]?.image?.thumbnail?.contentUrl}
                alt="news"
              />
              <Text className="provider-name">{news?.provider[0]?.name}</Text>
            </div>
            <Text className="provider-name">
              {moment(news.datePublished).startOf("ss").fromNow()}
            </Text>
          </div>
        </a>
      </Card>
    </Col>
  );
};
