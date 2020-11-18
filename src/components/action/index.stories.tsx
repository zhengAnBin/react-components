import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions"
import Action, { ActionProps } from './index';

export default {
  title: "Action",
  component: Action,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const ActionExa: Story<ActionProps> = (args) => <div style={{
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <Action {...args}></Action>
</div>;

export const Round = ActionExa.bind({});
Round.args = {
  size: 25,
  clickParams: 123,
  type: "close",
  onClick: action('clicked')
}