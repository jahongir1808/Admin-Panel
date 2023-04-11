import React from "react";
import { Col, Row } from "antd";

const Grid = () => {
  return (
    <div className="container">
      <Row gutter={[24, 16]}>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
        <Col span={24} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: "red" }}>col-6</div>
        </Col>
      </Row>
    </div>
  );
};

export default Grid;
