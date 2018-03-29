import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return(
      <Grid>
            <Jumbotron>
              <h2>Welcome to kamal's Portfolio</h2>
              <p>This is Where to Know more about me!</p>
              <Link to="/about">
                <Button bsStyle="primary">About</Button>
              </Link>
            </Jumbotron>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
                <Image src="assets/person-3.jpg" circle className="profile-pic" />
                <h3>Kamal Azizi Alaoui</h3>
                <p> This is hhh chchhhb</p>
              </Col>
            </Row>
       </Grid>

    )
  }
}
