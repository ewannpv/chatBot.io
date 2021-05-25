import React from 'react';
import {
  Row, Col, Image, Card
} from 'react-bootstrap';

export const BeerFactory = ({ data }) => (
  data.map((item) => (
    <Row>
      <Col xs="4">
        <Image src={item.image_url} fluid />
      </Col>
      <Col xs="8">
        <Card className="message-card pl-4 pr-4 pb-3 mb-3 shadow">
          <Row className="d-flex justify-content-between mt-2 mb-0">
            <h4>
              {item.name}
            </h4>
          </Row>
          <Row className="d-flex justify-content-between mt-2 mb-0">
            <p className="text-uppercase">
              {item.tagline}
            </p>
          </Row>
          <Row className="d-flex justify-content-between mt-2 mb-0">
            <Col>
              <p className="font-weight-bold">
                first brewed:&nbsp;
                {item.first_brewed}
              </p>
            </Col>
            <Col className="text-right fw-light">
              <h5>
                {item.abv}
                %
              </h5>
            </Col>
          </Row>
          <Card.Body className="p-0">
            {item.description}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ))
);

export const BeersList = ({ data }) => (
  <Col lg="12">
    <Row>
      <h5>Here is some of the beers we have:</h5>
    </Row>
    <ul>
      {
        data.map((item) => (
          <li>
            Name:&nbsp;
            {item.name}
            &nbsp;-&nbsp;
            Id:&nbsp;
            <b>
              {item.id}
            </b>
            &nbsp;-&nbsp;
            {item.tagline}
            &nbsp;-&nbsp;
            abv:&nbsp;
            {item.abv}
            %
          </li>
        ))
      }
    </ul>

  </Col>
);

export const RandomBeer = ({ data }) => (
  <Col lg="12">
    <Row>
      <h5>
        Do you know the
        {' '}
        {data[0].name}
        {' '}
        ?
      </h5>
    </Row>
    <BeerFactory data={data} />
  </Col>
);

export const BeerById = ({ data }) => (
  <Col lg="12">
    <Row>
      <h5>
        {' '}
        {data[0].name}
        {' '}
      </h5>
    </Row>
    <BeerFactory data={data} />
  </Col>
);

export const BeersByAbv = ({ data, abv }) => (
  <Col lg="12">
    <Row>
      <h5>
        {' '}
        Beers with ABV greater than
        {' '}
        {abv}
        %
        {' '}
      </h5>
    </Row>
    <ul>
      {
        data.map((item) => (
          <li>
            Name:&nbsp;
            {item.name}
            &nbsp;-&nbsp;
            Id:&nbsp;
            <b>
              {item.id}
            </b>
            &nbsp;-&nbsp;
            {item.tagline}
            &nbsp;-&nbsp;
            abv:&nbsp;
            {item.abv}
            %
          </li>
        ))
      }
    </ul>
  </Col>
);
