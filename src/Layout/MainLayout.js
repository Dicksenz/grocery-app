import React from "react";
import Aux from "../hoc/Auxiliary";
import { Layout } from "antd";

const MainLayout = props => {
  const { Header, Content, Footer } = Layout;
  return (
    <Aux>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            display: "flex"
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "1.5em",
              display: "flex"
            }}
          >
            Grocery app
          </div>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              background: "#fff",
              padding: 24,
              minHeight: 520
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Grocery App &copy; Copyright {new Date().getFullYear()}{" "}
        </Footer>
      </Layout>
    </Aux>
  );
};

export default MainLayout;
