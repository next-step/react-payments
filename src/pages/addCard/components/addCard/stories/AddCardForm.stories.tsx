import { Meta, StoryObj } from "@storybook/react";
import AddCardForm from "../AddCardForm";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "AddCard/AddCardForm",
  component: AddCardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddCardForm>;

type Story = StoryObj<typeof AddCardForm>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <AddCardForm />
    </BrowserRouter>
  ),
};

export default meta;
