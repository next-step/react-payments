import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useCallback, useRef, useState } from "react";
import VirtualKeypad from "./VirtualKeypad";
import Input from "./Input";
import Button from "./Button";

export default {
  title: "페이먼츠 미션/Components/VirtualKeypad",
  component: VirtualKeypad,
  argTypes: {
    type: {},
    nativeType: {
      defaultValue: "button",
    },
    invalid: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof VirtualKeypad>;

const Template: ComponentStory<typeof VirtualKeypad> = () => {
  const $inputRef = useRef<HTMLInputElement>(null);
  const [, setCount] = useState(1);

  const rerender = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleClick = useCallback((value: number) => {
    if ($inputRef.current) {
      $inputRef.current.value += value;
    }
  }, []);

  const handleDelete = useCallback(() => {
    if ($inputRef.current) {
      $inputRef.current.value = [...$inputRef.current.value]
        .slice(0, -1)
        .join("");
    }
  }, []);

  return (
    <>
      <Button onClick={rerender}>rerender</Button>
      <Input ref={$inputRef} />
      <VirtualKeypad onClick={handleClick} onDelete={handleDelete} />
    </>
  );
};

export const example = Template.bind({});
example.args = {};
