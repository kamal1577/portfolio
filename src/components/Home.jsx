import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, col, Image, Button } from 'react-bootstrap';
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
      </Grid>

    )
  }
}
