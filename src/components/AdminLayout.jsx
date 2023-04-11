import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  WalletFilled,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("0");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menus = [
    { name: "Dashboard", to: "", icon: <HomeOutlined /> },
    { name: "Group", to: "group", icon: <UsergroupAddOutlined /> },
    { name: "Teacher", to: "teacher", icon: <UsergroupAddOutlined /> },
    { name: "Student", to: "student", icon: <UsergroupAddOutlined /> },
  ];
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "10px",
          }}
        >
          <WalletFilled
            style={{
              marginLeft: "10px",
              color: "whitesmoke",
              fontSize: "30px",
            }}
          />
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          items={menus.map((menu, i) => ({
            key: "" + i,
            icon: <Link to={"/" + menu.to}>{menu.icon}</Link>,
            label: menu.name,
            onClick: ({ key }) => setCurrent(key),
          }))}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
