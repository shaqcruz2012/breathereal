import { Container, Row, Col } from "react-bootstrap";

export default function SingleColumn({children}) {
    const [topComponent, bottomComponent] = children;

    return (
      <Container fluid className="justify-content-center vw-100">
      <Row>
        <Col xs={12} className="px-0">
          {topComponent}
        </Col>
      </Row>
      
      <Row>
        <Col xs={12} sm={10} md={8} lg={4} className="mx-auto mw-250px">
          {bottomComponent}
        </Col>
      </Row>
      
    </Container>
        
    )
  }