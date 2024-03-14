import Funnel from ".";

export default {
  title: "atoms/funnel",
  component: Funnel,
  parameters: {
    layout: "fullscreen",
  },
};

const StepItem = (props) => {
  const { current, update, back, next, list } = props;
  return (
    <div>
      <h2>{current}</h2>
      {list.map((step, idx) => (
        <button key={idx} onClick={() => update(step)}>
          {step}
        </button>
      ))}
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

const Template = (args) => <Funnel {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: ["step1", "step2", "step3"],
  children: [
    <Funnel.Step name="step1">
      <StepItem current={"step1"} list={["step2", "step3"]} />
    </Funnel.Step>,
    <Funnel.Step name="step2">
      <StepItem current={"step2"} list={["step1", "step3"]} />
    </Funnel.Step>,
    <Funnel.Step name="step3">
      <StepItem current={"step3"} list={["step1", "step2"]} />
    </Funnel.Step>,
  ],
};
