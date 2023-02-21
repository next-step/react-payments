var a=Object.defineProperty;var e=(t,s)=>a(t,"name",{value:s,configurable:!0});import{j as l}from"./jsx-runtime-cd98d61a.js";import{I as o}from"./Input-83b14ba2.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const f={parameters:{storySource:{source:`import Input from './Input';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const TextInput = Template.bind({});
TextInput.args = {
  className: 'input-basic ',
  type: 'text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  className: 'input-basic ',
  type: 'password',
};

export const InputW15 = Template.bind({});
InputW15.args = {
  className: 'input-basic w-15',
};

export const InputW25 = Template.bind({});
InputW25.args = {
  className: 'input-basic w-25',
};

export const InputFixed = Template.bind({});
InputFixed.args = {
  className: 'input-fixed',
  disabled: true,
  value: '•',
};

export const InputUnderline = Template.bind({});
InputUnderline.args = {
  className: 'input-underline',
};
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"text-input":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"password-input":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"input-w-15":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"input-w-25":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"input-fixed":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}},"input-underline":{startLoc:{col:47,line:10},endLoc:{col:76,line:10},startBody:{col:47,line:10},endBody:{col:76,line:10}}}}},title:"Input",component:o},n=e(t=>l.jsx(o,{...t}),"Template"),i=n.bind({});i.args={};const p=n.bind({});p.args={className:"input-basic ",type:"text"};const c=n.bind({});c.args={className:"input-basic ",type:"password"};const r=n.bind({});r.args={className:"input-basic w-15"};const d=n.bind({});d.args={className:"input-basic w-25"};const u=n.bind({});u.args={className:"input-fixed",disabled:!0,value:"•"};const m=n.bind({});m.args={className:"input-underline"};const B=["Default","TextInput","PasswordInput","InputW15","InputW25","InputFixed","InputUnderline"];export{i as Default,u as InputFixed,m as InputUnderline,r as InputW15,d as InputW25,c as PasswordInput,p as TextInput,B as __namedExportsOrder,f as default};
//# sourceMappingURL=Input.stories-ad49959b.js.map
