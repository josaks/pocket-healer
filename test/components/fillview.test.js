import React from 'react';
import { View } from 'react-native';

import FillView from '../../src/components/fillview';

describe('FillView', () => {
  /* Test setup */

  let props;
  let mountedFillView;
  const fillView = () => {
    if (!mountedFillView) {
      mountedFillView = shallow(
        <FillView {...props} />,
      );
    }
    return mountedFillView;
  };

  beforeEach(() => {
    props = {
      fillPercent: undefined,
      fillColor: undefined,
    };
    mountedFillView = undefined;
  });

  /* End test setup */

  /* Start testing */

  it('renders a view', () => {
    expect(fillView().find(View)).toHaveLength(1);
  });
});
