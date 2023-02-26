var a=Object.defineProperty;var r=(n,e)=>a(n,"name",{value:e,configurable:!0});import{j as m}from"./jsx-runtime-cd98d61a.js";import{C as o}from"./Card-5cd0c24d.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./card-39c8a02a.js";import"./Box-136d9405.js";import"./index-ed86a6de.js";import"./Button-a951684c.js";const x={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>버튼</Card>;

export const Default = Template.bind({});
Default.args = {
  type: 'big',
  cardNumber: { num1: '1234', num2: '5678', num3: '1234', num4: '5678' },
  cardExpiration: { month: '12', year: '25' },
  selectedCard: { name: '은규', color: '#FBCD58' },
};

export const 별칭포함카드 = Template.bind({});
별칭포함카드.args = {
  type: 'big',
  isShowAlias: true,
  cardNumber: { num1: '1234', num2: '5678', num3: '1234', num4: '5678' },
  cardExpiration: { month: '12', year: '25' },
  selectedCard: { name: '은규', color: '#FBCD58' },
  cardAlias: '승완체크카드',
};
`,locationsMap:{default:{startLoc:{col:46,line:10},endLoc:{col:81,line:10},startBody:{col:46,line:10},endBody:{col:81,line:10}},별칭포함카드:{startLoc:{col:46,line:10},endLoc:{col:81,line:10},startBody:{col:46,line:10},endBody:{col:81,line:10}}}}},title:"Card",component:o},t=r(n=>m.jsx(o,{...n,children:"버튼"}),"Template"),d=t.bind({});d.args={type:"big",cardNumber:{num1:"1234",num2:"5678",num3:"1234",num4:"5678"},cardExpiration:{month:"12",year:"25"},selectedCard:{name:"은규",color:"#FBCD58"}};const i=t.bind({});i.args={type:"big",isShowAlias:!0,cardNumber:{num1:"1234",num2:"5678",num3:"1234",num4:"5678"},cardExpiration:{month:"12",year:"25"},selectedCard:{name:"은규",color:"#FBCD58"},cardAlias:"승완체크카드"};const g=["Default","별칭포함카드"];export{d as Default,g as __namedExportsOrder,x as default,i as 별칭포함카드};
//# sourceMappingURL=Card.stories-8fa38cd4.js.map
