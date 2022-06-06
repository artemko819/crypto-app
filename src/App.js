import { Layout, Space, Typography } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Cryptocurrencies } from "./pages/Cryptocurrencies";
import { CryptoDetails } from "./pages/CryptoDetails";
import { Exanges } from "./pages/Exanges";
import { Home } from "./pages/Home";
import { News } from "./pages/News";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="exanges" element={<Exanges />} />
              <Route path="crypto/:coinId" element={<CryptoDetails />} />
              <Route path="news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer" level={5} >
        <Typography.Title style={{color:"#FFF",fontSize:"2rem", textAlign:"center"}}>
            Cryptoverse <br/>
            All right reserved
        </Typography.Title>
        <Space>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/exanges'}>
            Exchange
          </Link>
          <Link to={'/news'}>
            News
          </Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
