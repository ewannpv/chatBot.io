import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, Col, Row, Image
} from 'react-bootstrap';
import TimeAgo from 'timeago-react';

const PersonFactory = ({ person }) => {
  const lastMessage = person.lastMessageDate
    ? (
      <div>
        <h6 className="mt-0 mb-0">Last activity:</h6>
        <p>
          {' '}
          <TimeAgo
            datetime={person.lastMessageDate}
            locale="en_US"
          />
        </p>
      </div>
    )
    : (
      <div>
        <h6 className="mt-0 mb-0">Last activity:</h6>
        <p>
          none.
        </p>
      </div>
    );

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
          </p>

        </Col>
        <Col>
          {lastMessage}
        </Col>
      </Row>
    </Card>
  );
};

const PersonsContainer = () => {
  const { user, bots } = useSelector((state) => state.chatBot);
  return (
    <div className="w-100">
      <h3>Members</h3>
      <div className="shadow bg-white">
        <PersonFactory person={user} />
        {bots.map((person) => (
          <PersonFactory person={person} key={person.key} />
        ))}
      </div>
    </div>
  );
};

export default PersonsContainer;
