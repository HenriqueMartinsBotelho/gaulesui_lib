import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "./Table";

export default {
  title: "GaulesUI/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const columns = [
  { filterType: "id", label: "ID" },
  { filterType: "name", label: "Name" },
  { filterType: "age", label: "Age" },
  { filterType: "start_date", label: "Start Date" },
];

const rows = [
  {
    id: 1,
    name: "Fulano 1",
    age: 18,
    start_date: "15-07-2022",
  },
  {
    id: 2,
    name: "Fulano 2",
    age: 20,
    start_date: "16-07-2022",
  },
  {
    id: 3,
    name: "Fulano 3",
    age: 24,
    start_date: "17-07-2022",
  },
  {
    id: 4,
    name: "Fulano 4",
    age: 28,
    start_date: "18-07-2022",
  },
];

export const Main = Template.bind({});
Main.args = {
  columns: columns,
  rows: rows,
};
