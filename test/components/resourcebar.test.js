import React from 'react';
import { View } from 'react-native';

import ResourceBar from '../../src/components/resourcebar';
import FillView from '../../src/components/fillview';

describe('ResourceBar', () => {
  /* Test setup */

  let props;
  let mountedResourceBar;
  const resourceBar = () => {
    if (!mountedResourceBar) {
      mountedResourceBar = shallow(
        <ResourceBar {...props} />,
      );
    }
    return mountedResourceBar;
  };

  const getFrame = () => resourceBar().find(View).first();
  const getFill = () => resourceBar().children().find(FillView).first();

  beforeEach(() => {
    props = {
      fillPercent: undefined,
      frameStyle: undefined,
      fillColor: undefined,
    };
    mountedResourceBar = undefined;
  });

  /* End test setup */

  /* Start testing */

  it('renders a frame View', () => {
    expect(resourceBar().find(View)).toHaveLength(1);
  });

  describe('the rendered frame View', () => {
    it('contains everything that gets rendered', () => {
      const wrappingView = getFrame();
      expect(wrappingView.children()).toEqual(resourceBar().children());
    });
  });

  it('renders a FillView', () => {
    expect(resourceBar().children().find(FillView)).toHaveLength(1);
  });

  describe('when fillPercent is defined', () => {
    beforeEach(() => {
      props.fillPercent = 100;
    });

    it('sets the rendered FillView´s fillPercent prop to the same value as fillPercent', () => {
      const fillView = getFill();
      expect(fillView.props().fillPercent).toBe(props.fillPercent);
    });
  });

  describe('when fillPercent is undefined', () => {
    it('sets the rendered FillView´s fillPercent prop to 0', () => {
      const fillView = getFill();
      expect(fillView.props().fillPercent).toBe(0);
    });
  });

  describe('when fillColor is defined', () => {
    beforeEach(() => {
      props.fillColor = 'mock';
    });

    it('sets the rendered FillView´s fillColor prop to the same value as fillColor', () => {
      const fillView = getFill();
      expect(fillView.props().fillColor).toBe(props.fillColor);
    });
  });

  describe('when fillColor is undefined', () => {
    it('sets the rendered FillView´s fillColor prop to undefined', () => {
      const fillView = getFill();
      expect(fillView.props().fillColor).not.toBeDefined();
    });
  });
});
