var a=Object.defineProperty;var o=(t,r)=>a(t,"name",{value:r,configurable:!0});import{j as n}from"./jsx-runtime-cd98d61a.js";import"./Input-83b14ba2.js";import"./Box-5350e976.js";import{B as l}from"./Button-de42b912.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";function e({onClick:t}){return n.jsx(l,{type:"button",onClick:t,children:"카드 선택"})}o(e,"CardSelectButton");try{e.displayName="CardSelectButton",e.__docgenInfo={description:"",displayName:"CardSelectButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const C={parameters:{storySource:{source:`import CardSelectButton from './CardSelectButton';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSelectButton',
  component: CardSelectButton,
} as Meta;

const Template: ComponentStory<typeof CardSelectButton> = (args) => <CardSelectButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:58,line:10},endLoc:{col:98,line:10},startBody:{col:58,line:10},endBody:{col:98,line:10}}}}},title:"CardSelectButton",component:e},c=o(t=>n.jsx(e,{...t}),"Template"),p=c.bind({});p.args={};const y=["Default"];export{p as Default,y as __namedExportsOrder,C as default};
//# sourceMappingURL=CardSelectButton.stories-83c27113.js.map
