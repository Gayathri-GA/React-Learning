import React, { Component } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import '../../App.css';
import history from '../../routes/routehistory';


class HomeScreen extends Component {
  render() {
    return (
      <>
        <div>
          <Container>
            <Row style={{ paddingTop: 30 }}>
              <Col md={{ span: 4, offset: 3 }}>
                <div >
                  <h1 className='appName'>Todo</h1>
                </div>
                <div className='todoListBox'>

                </div>
              </Col>
              <Col>
                <Button
                  variant="success"
                  onClick={() =>
                    history.push({
                      pathname: "/createtodo",
                      // state: { todoArray: todo },
                    })
                  }
                >
                  Create Todo
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default HomeScreen
