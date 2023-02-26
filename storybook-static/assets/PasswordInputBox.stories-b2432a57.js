var d=Object.defineProperty;var n=(s,t)=>d(s,"name",{value:t,configurable:!0});import{j as o}from"./jsx-runtime-cd98d61a.js";import{I as a}from"./Input-7e4dd3c4.js";import{B as c}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as e}from"./card-39c8a02a.js";import{c as l}from"./CardListProvider-b3c07bc8.js";import{r as u}from"./index-a38f3d31.js";import{E as i}from"./CardSelectModalProvider-85a74e2a.js";import"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-d261b708.js";function x(){const s=u.useContext(l);if(s===void 0)throw new Error(i.PROVIDER.INVALID_SCOPE);return s}n(x,"useCardPasswordContext");function r(){const{cardPassword:s,handleChangeCardPassword:t}=x(),{num1:p,num2:m}=s;return o.jsxs(c,{className:"my-4",children:[o.jsx("span",{className:"input-title",children:"카드 비밀번호"}),o.jsx(a,{styleType:"basic",className:" w-15",maxLength:e.PASSWORD.LENGTH,name:"num1",value:p,onChange:t,type:"password"}),o.jsx(a,{styleType:"basic",className:" w-15",maxLength:e.PASSWORD.LENGTH,name:"num2",value:m,onChange:t,type:"password"}),o.jsx(a,{styleType:"fixed",className:" w-15",disabled:!0,value:"•",type:"password"}),o.jsx(a,{styleType:"fixed",className:"w-15",disabled:!0,value:"•",type:"password"})]})}n(r,"PasswordInputBox");const b={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import PasswordInputBox from './PasswordInputBox';

export default {
  title: 'PasswordInputBox',
  component: PasswordInputBox,
} as Meta;

const Template: ComponentStory<typeof PasswordInputBox> = () => <PasswordInputBox />;

const cardPassword = {
  num1: '2',
  num2: '4',
};

export const Default = Template.bind({});
Default.args = {
  cardPassword,
};
`,locationsMap:{default:{startLoc:{col:58,line:10},endLoc:{col:84,line:10},startBody:{col:58,line:10},endBody:{col:84,line:10}}}}},title:"PasswordInputBox",component:r},w=n(()=>o.jsx(r,{}),"Template"),f={num1:"2",num2:"4"},y=w.bind({});y.args={cardPassword:f};const g=["Default"];export{y as Default,g as __namedExportsOrder,b as default};
//# sourceMappingURL=PasswordInputBox.stories-b2432a57.js.map
