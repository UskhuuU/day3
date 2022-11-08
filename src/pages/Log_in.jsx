import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { darkModeContext } from "../App";

const Log_in = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      backgroundColor: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
    },
  };
  return (
    <div style={styles.box}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            team.
          </Col>
          <Col xs={6} md={4} style={{ gap: "100px" }}>
            Products Services Contact Log in{" "}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>Blog posts</Col>
        </Row>
        <Row>
          <Col>
            <Col xs={6}>
              Our latest updates and blogs about managing your team
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            col3
          </Col>
          <Col xs={6} md={4}>
            col4
          </Col>
          <Col xs={6} md={4}>
            col5
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Log_in;
