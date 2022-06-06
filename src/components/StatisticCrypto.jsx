import { Col, Row, Statistic } from 'antd'
import millify from 'millify'
import React from 'react'

export const StatisticCrypto = ({globalStats}) => {
  return (
    <Row>
    <Col span={12}>
      <Statistic
        title="Total Cryptocurrencies"
        value={globalStats.total}
      ></Statistic>
    </Col>
    <Col span={12}>
      <Statistic
        title="Total Exchanges"
        value={millify(globalStats.totalExchanges)}
      ></Statistic>
    </Col>
    <Col span={12}>
      <Statistic
        title="Total Market Cap"
        value={millify(globalStats.totalMarketCap)}
      ></Statistic>
    </Col>
    <Col span={12}>
      <Statistic
        title="Total 24h Volume"
        value={millify(globalStats.total24hVolume)}
      ></Statistic>
    </Col>
    <Col span={12}>
      <Statistic
        title="Total Markets"
        value={globalStats.totalMarkets}
      ></Statistic>
    </Col>
  </Row>
  )
}
