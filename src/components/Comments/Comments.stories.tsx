import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Comments from "./Comments";

export default {
  title: "GaulesUI/Comments",
  component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;



export const Main = Template.bind({});
Main.args = {
  currentUserId: "1"
};
