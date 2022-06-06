import { Col, Typography } from 'antd'
import React from 'react'

const { Title, } = Typography;

export const DetailsHeading = ({cryptoDetails}) => {
  return (
    <Col className="coin-heading-container">
    <Title level={2} className="coin-name">
      {cryptoDetails.name} ({cryptoDetails.symbol}) Price
    </Title>
    <p>
      {cryptoDetails.name} live price in US Dollar (USD). View value
      statistics, market cap and supply.
    </p>
  </Col>
  )
}
