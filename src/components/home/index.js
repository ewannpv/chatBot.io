import React, { Component } from 'react';
import { initalState, DataContext } from './initalState';

import Button from './button';

const Contact = ({ item, id }) => {
  const { name, age, checked } = item;
  const changeColor = !checked ? 'black' : 'red';

  return (
    <li style={{ color: changeColor }}>
      {`name: ${name} | age: ${age}`}
      <Button id={id} />
    </li>
  );
};

const ListContacts = () => (
  <ul>
    <DataContext.Consumer>
      {({ data }) => (
        data.map((item, id) => (<Contact id={id} item={item} />))
      )}
    </DataContext.Consumer>
  </ul>
);

const Home = class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: initalState
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { data } = this.state;
    const dataUpdated = data.map((item, index) => (
      id === index ? { ...item, checked: !item.checked } : item
    ));

    this.setState({ data: dataUpdated });
  }

  render() {
    const { data } = this.state;

    return (
      <DataContext.Provider value={{ data, handleClick: this.handleClick }}>
        <ListContacts />
      </DataContext.Provider>
    );
  }
};

export default Home;
