import React from 'react';
import Header from '../Header.js';

describe('Header render correctly', () => {
  it('renders correctly', () => {
    const tree = getTreeSC(<Header/>);
    expect(tree).toMatchSnapshot();
  });
});