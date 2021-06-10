import React from 'react';
import renderer from 'react-test-renderer';
import FooterContainer from '../components/home/containers/footer-container';

test('footer renders correctly', () => {
  const tree = renderer
    .create(<FooterContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
