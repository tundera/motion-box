import React from 'react';
import { Meta, Story } from '@storybook/react';
import MotionBox, { MotionBoxProps } from '.';

const meta: Meta = {
  title: 'MotionBox',
  component: MotionBox,
};

export default meta;

const Template: Story<MotionBoxProps> = (args) => (
  <MotionBox width="150px" height="150px" bg="white" {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};

export const Keyframes = Template.bind({});
Keyframes.args = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  },
  transition: {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
  },
};
