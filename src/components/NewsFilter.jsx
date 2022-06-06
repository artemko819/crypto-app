import { Col, Select } from 'antd'
import React from 'react'

const {Option} = Select;

export const NewsFilter = ({setNewsCategory,data}) => {
  return (
    <Col span={24}>
    <Select
      showSearch
      className="select-news"
      placeholder="Select a Crypto"
      optionFilterProp="children"
      onChange={(value) => setNewsCategory(value)}
      filterOption={(input, option) =>
        option.children
          .toLowerCase()
          .indexOf(input.toLocaleLowerCase() >= 0)
      }
    >
      <Option value="Cryptocurency">Cryptocurrency</Option>
      {data?.data?.coins?.map((currency) => (
        <Option key={currency.name} value={currency.name}>{currency.name}</Option>
      ))}
    </Select>
  </Col>
  )
}
