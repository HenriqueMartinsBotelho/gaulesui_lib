import { ComponentStory, ComponentMeta } from "@storybook/react";

import SlidingPanel from "./SlidingPanel";

export default {
  title: "GaulesUI/SlidingPanel",
  component: SlidingPanel,
} as ComponentMeta<typeof SlidingPanel>;

const Template: ComponentStory<typeof SlidingPanel> = (args) => <SlidingPanel {...args} />;

export const Left = Template.bind({});
Left.args = {
  text: "Hello world!",
  direction: "left",
  children: <div>Insira uma imagem ou componente</div>,
  w:'300px',
  h:'200px',
  bg:"#FF4785"

};

export const Right = Template.bind({});
Right.args = {
  text: "Hello",
  direction: "right",
  children: <div>Insira uma imagem ou componente</div>,
  w:'300px',
  h:'200px',
  bg:"#FF4785"
};


export const Top = Template.bind({});
Top.args = {
  text: "Hello",
  direction: "top",
  children: <div>Insira uma imagem ou componente</div>,
  w:'300px',
  h:'200px',
  bg:"#FF4785"
};


export const Bottom = Template.bind({});
Bottom.args = {
  text: "Hello",
  direction: "bottom",
  children: <div>Insira uma imagem ou componente</div>,
  w:'300px',
  h:'200px',
  bg:"#FF4785"
};

export const Default = Template.bind({});
Default.args = {
  text: "wrong value or null left if default",
  direction: "test"
};
