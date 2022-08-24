import React from "react";
import mock from "../mock/patient.json";
import { Card, Col, Row, Button } from "antd";
import "antd/dist/antd.min.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Patient() {
  const { isLoading, error, data } = useQuery(["patients"], () => mock);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Row
        justify="center"
        style={{
          margin: 10,
          padding: 10,
        }}
      >
        {data.map((item, key) => (
          <Col key={key} xs={24} md={12} lg={12} xl={6} className="card-border">
            <Card title={`${item.Name} ${item.Surname}`} bordered={false}>
              <p>
                <span style={{ fontWeight: "bold" }}>Id Card: </span>
                <span>{item.IdCard}</span>
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Gender: </span>
                <span>{item.Gender}</span>
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Address: </span>
                <span>{item.Address}</span>
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Birthday: </span>
                <span>{moment(item.DateOfBirth).format("DD.MM.YYYY")}</span>
              </p>
              <Link to={`/patient/${item.Id}`}>
                <Button type="primary">Detail</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Patient;
