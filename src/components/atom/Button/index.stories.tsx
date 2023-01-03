import React from "react"
import { action } from "@storybook/addon-actions"
import { ButtonComponent } from "../Button"

export default {
  title: "Components/Atoms",
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: "A simple button component",
      },
    },
  },
  args: {
    type: "primary",
  },
  argTypes: {
    color: {
      description: "Color of the text",
      control: "color",
    },
  },
}
const Template = (args) => (
  <ButtonComponent onClick={action("onClickAction")} {...args}>
    {"Hello"}
  </ButtonComponent>
)
export const Button = Template.bind({})
