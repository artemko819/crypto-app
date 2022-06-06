import { Select } from 'antd'
import React from 'react'

const {Option} = Select

export const DetailsSelectPeriod = ({time,setTimePeriod}) => {
  return (
    <Select
    defaultValue="7d"
    className="coin-heading-container"
    placeholder="select a time period"
    onChange={(value) => setTimePeriod(value)}
  >
    {time.map((date) => (
      <Option key={date} value={date}>
        {date}
      </Option>
    ))}
  </Select>
  )
}
