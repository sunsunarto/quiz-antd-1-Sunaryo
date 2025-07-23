"use client";
import "antd/dist/reset.css";
import { Typography } from "antd";
import { Button } from "antd";
import { Layout } from "antd";
import "./globals.css";
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div className="mainCon">
      <div className="header ">
        <Header style={{ background: 'gray' }} className="">
          <Title>Header my website Sunaryo</Title>
        </Header>
      </div>
      <div className="content">
        <Content style={{ background: 'white' }}>
          <Title>Welcome to my website</Title>
          <div className="contentBody flex gap-4 flex-col">
            <Text>hello i from SMK tri ratna mijor in computer engineering</Text>
            <Button color="cyan" variant="solid">Get Started</Button>
          </div>
        </Content>
      </div>
      <div className="footer">
        <Footer>
          <p>Footer my website @2025</p>
        </Footer>
      </div>
    </div>
  );
}
