import { Input } from 'antd'
import React from 'react'

export const SearchCoin = ({setSearchTerm}) => {
  return (
    <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  )
}
