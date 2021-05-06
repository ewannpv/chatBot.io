import React from 'react';
import { connect } from 'react-redux';
import {
  Card, Col, Row, Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

const PersonFactory = ({ person }) => {
  const avatarEmoji = person.isBot ? <FontAwesomeIcon icon={faRobot} />
    : <FontAwesomeIcon icon={faUser} />;

  const lastMessage = person.lastMessageDate
    ? (
      <div>
        <h6>Last message:</h6>
        <p>{person.lastMessageDate}</p>
      </div>
    )
    : null;

  return (
    <Card className="p-2">
      <Row>
        <Col md={3}>
          <Image src={person.imageURL} roundedCircle className="avatar-img" />
        </Col>
        <Col md={5}>
          <h5>
            {person.name}
          </h5>
          <p>
            {person.description}
            {' '}
            {avatarEmoji}
          </p>

        </Col>
        <Col>
          {lastMessage}
        </Col>
      </Row>
    </Card>
  );
};

const PersonsContainer = ({ data }) => {
  const { user } = data;
  const { bots } = data;

  return (
    <div className="w-100">
      <h3>Members</h3>
      <div className="shadow bg-white">
        <PersonFactory person={user} />
        {bots.map((person) => (
          <PersonFactory person={person} />
        ))}
      </div>
    </div>
  );
};

const mapTopProps = (store) => ({ data: store.chatBot });

export default connect(mapTopProps)(PersonsContainer);
