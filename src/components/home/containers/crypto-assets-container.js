import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const CryptoAssetsContainer = ({ data }) => (
  <Col lg="12">
    <Row>
      <h5>Here is the list of supported assets:</h5>
    </Row>
    <ul>
      {
        data.map((item) => (
          <li>
            Rank:&nbsp;
            {item.rank}
            {' '}
            &nbsp;-&nbsp;
            <b>
              {item.id}
            </b>
            &nbsp;-&nbsp;
            Symbol:&nbsp;
            {item.symbol}
            &nbsp;-&nbsp;
            Price:&nbsp;
            {item.priceUsd.substring(0, 7)}
            $
          </li>
        ))
      }
    </ul>

  </Col>
);

export const CryptoAssetContainer = ({ data }) => (
  <Col lg="12">
    <Row>
      <h5>{data.name}</h5>
    </Row>
    <Row className="d-flex">
      <Col>
        <Row>
          <h6>
            Rank:&nbsp;
            {data.rank}
          </h6>
        </Row>
        <Row>
          <h6>
            Price:&nbsp;
            {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 5 }).format(data.priceUsd)}
            $
          </h6>
        </Row>
        <Row>
          <h6>
            Market cap:&nbsp;
            {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.marketCapUsd)}
            $
          </h6>
        </Row>
      </Col>
      <Col>
        <Row>
          <h6>
            Symbol:&nbsp;
            {data.symbol}
          </h6>
        </Row>
        <Row>
          <h6>
            24h:&nbsp;
            {data.changePercent24Hr.substring(0, 5)}
            &nbsp;%
          </h6>
        </Row>
        <Row>
          <h6>
            Volume (24h):&nbsp;
            {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(data.volumeUsd24Hr)}
            &nbsp;$
          </h6>
        </Row>
      </Col>
    </Row>
  </Col>
);
