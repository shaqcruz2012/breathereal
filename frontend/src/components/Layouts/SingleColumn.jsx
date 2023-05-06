import { Container, Row, Col } from "react-bootstrap";

export default function SingleColumn({children}) {
    const [topComponent, bottomComponent] = children;

    return (
      <Container fluid>
      <Row>
        <Col className="px-0">
          {topComponent}
        </Col>
      </Row>
      
      <Row>
        <Col>
          {bottomComponent}
        </Col>
      </Row>
    </Container>
        
    )
  }