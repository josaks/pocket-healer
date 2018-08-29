import React from 'react';
import { View } from 'react-native';
import ResourceBar from '../../src/components/resourcebar';

describe('ResourceBar component', () => {
  it('renders a frame View', () => {
    const frame = shallow(<ResourceBar />);
    chaiExpect(frame.find(View)).to.have.length(1);
  });
});
