import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as MotionBox } from './MotionBox.stories';

describe('MotionBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MotionBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
