import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadialMenu, { RadialProps } from './radialMenu';

const radialData = {
  startPoistion: 30,
  angleExtent: 100,
  radius: 100,
  childrens: [
    { iconName: "complete" },
    { iconName: "scenario" },
    { 
      startPoistion: 80,
      angleExtent: 80,
      radius: 100,
      iconName: "notice",
      childrens: [
        { iconName: "complete" },
        { iconName: "scenario" }
      ]
    }
  ]
}

export default {
  title: 'RadialMenu',
  component: RadialMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<RadialProps> = (args) => <div style={{
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <RadialMenu {...args} />
</div>;

export const Radial = Template.bind({});
Radial.args = {
  data: radialData,
  iconSize: 20,
  size: 50,
}
