import { PlusCircleFilled, GithubOutlined } from "@ant-design/icons/lib/icons";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { LayoutStyle } from "./_LayoutStyle";
import RouteList from "../routes";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  return (
    <Layout className={LayoutStyle}>
      <Header className="header-fixed">
        <div className="logo-container">
          <h1 className="logo">TODOS</h1>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: "0 2rem" }}>
        <RouteList />
      </Content>
      <Footer className="footer-sticky">
        <span>
          TODOS ©2021 Created by <GithubOutlined />{" "}
          <a
            href="https://github.com/arif05rachman"
            target="_blank"
            rel="noopener noreferrer"
          >
            @arif05rachman
          </a>
        </span>
      </Footer>
    </Layout>
  );
};

export default Navbar;
