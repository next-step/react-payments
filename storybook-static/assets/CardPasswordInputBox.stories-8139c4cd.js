var u=Object.defineProperty;var o=(t,s)=>u(t,"name",{value:s,configurable:!0});import{j as a}from"./jsx-runtime-cd98d61a.js";import{I as n}from"./Input-83b14ba2.js";import{B as m}from"./Box-5350e976.js";import"./Button-de42b912.js";import{d as r}from"./card-d0999f2f.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";function e({cardPassword:t,onChange:s}){const{num1:d,num2:p}=t;return a.jsxs(m,{className:"input-container",children:[a.jsx("span",{className:"input-title",children:"카드 비밀번호"}),a.jsx(n,{className:"input-basic w-15",maxLength:r.LENGTH,name:"num1",value:d,onChange:s,type:"password"}),a.jsx(n,{className:"input-basic w-15",maxLength:r.LENGTH,name:"num2",value:p,onChange:s,type:"password"}),a.jsx(n,{className:"input-fixed w-15",disabled:!0,value:"•",type:"password"}),a.jsx(n,{className:"input-fixed w-15",disabled:!0,value:"•",type:"password"})]})}o(e,"CardPasswordInputBox");try{e.displayName="CardPasswordInputBox",e.__docgenInfo={description:"",displayName:"CardPasswordInputBox",props:{cardPassword:{defaultValue:null,description:"",name:"cardPassword",required:!0,type:{name:"CardPassword"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const _={parameters:{storySource:{source:`import CardPasswordInputBox from './CardPasswordInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardPasswordInputBox',
  component: CardPasswordInputBox,
} as Meta;

const Template: ComponentStory<typeof CardPasswordInputBox> = (args) => <CardPasswordInputBox {...args} />;

const cardPassword = {
  num1: '2',
  num2: '4',
};

export const Default = Template.bind({});
Default.args = {
  cardPassword,
};
`,locationsMap:{default:{startLoc:{col:62,line:10},endLoc:{col:106,line:10},startBody:{col:62,line:10},endBody:{col:106,line:10}}}}},title:"CardPasswordInputBox",component:e},i=o(t=>a.jsx(e,{...t}),"Template"),l={num1:"2",num2:"4"},c=i.bind({});c.args={cardPassword:l};const g=["Default"];export{c as Default,g as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardPasswordInputBox.stories-8139c4cd.js.map
