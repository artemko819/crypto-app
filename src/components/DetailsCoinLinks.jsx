import { Col, Row, Typography } from 'antd'
import React from 'react'

const { Title } = Typography;

export const DetailsCoinLinks = ({cryptoDetails}) => {
  return (
    <Col className="coin-links">
    <Title level={3} className="coin-details-heading">
      {cryptoDetails.name} Links
    </Title>
    {cryptoDetails.links?.map((link) => (
      <Row className="coin-link" key={link.name}>
        <Title level={5} className="link-name">
          {link.type}
        </Title>
        <a href={link.url} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      </Row>
    ))}
  </Col>
  )
}
