import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const items = [
  { label: <Link to={"/"}>Home</Link>, icon: <HomeOutlined />, key: "item-1" },
  {
    label: <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>,
    icon: <FundOutlined />,
    key: "item-2",
  },
  {
    label: <Link to={"/exanges"}>Exanges</Link>,
    icon: <MoneyCollectOutlined />,
    key: "item-3",
  },
  {
    label: <Link to={"/news"}>News</Link>,
    icon: <BulbOutlined />,
    key: "item-4",
  },
];

export const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];