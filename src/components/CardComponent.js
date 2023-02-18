import React from "react";
import { Col, Card } from "react-bootstrap";

const CardComponent = (props) => {
  const { size } = props;
  return (
    <Col lg={size} className="mb-4">
      <Card className="shadow mb-4">
        <Card.Header>
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </Card.Header>
        <Card.Body>
          <h4 className="small font-weight-bold">
            Server Migration <span className="float-right">20%</span>
          </h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
