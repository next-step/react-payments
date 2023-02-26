var b=Object.defineProperty;var i=(t,n)=>b(t,"name",{value:n,configurable:!0});import{j as r}from"./jsx-runtime-cd98d61a.js";import{r as s}from"./index-a38f3d31.js";import{I as d}from"./Input-7e4dd3c4.js";import{B as x}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as o}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import{u as y}from"./useCardNumberContext-120433fa.js";import"./CardSelectModalProvider-85a74e2a.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-ed86a6de.js";function C({cardNumber:t,num1Ref:n,num2Ref:u,num3Ref:c,num4Ref:l}){const{num1:p,num2:a,num3:m}=t;s.useEffect(()=>{var e;(e=n.current)==null||e.focus()},[n]),s.useEffect(()=>{var e;p.length===o.NUMBER.LENGTH&&((e=u.current)==null||e.focus())},[p,u]),s.useEffect(()=>{var e;a.length===o.NUMBER.LENGTH&&((e=c.current)==null||e.focus())},[a,c]),s.useEffect(()=>{var e;m.length===o.NUMBER.LENGTH&&((e=l.current)==null||e.focus())},[m,l])}i(C,"useInputFocus");function N(){const{cardNumber:t,handleChangeCardNumber:n}=y(),{num1:u,num2:c,num3:l,num4:p}=t,a=s.useRef(null),m=s.useRef(null),e=s.useRef(null),f=s.useRef(null);return C({cardNumber:t,num1Ref:a,num2Ref:m,num3Ref:e,num4Ref:f}),r.jsxs(x,{className:"my-4",children:[r.jsx("span",{className:"input-title",children:"카드 번호"}),r.jsx(d,{styleType:"basic",className:"w-25",type:"text",name:"num1",ref:a,maxLength:o.NUMBER.LENGTH,value:u,onChange:n}),r.jsx(d,{styleType:"basic",className:"w-25",type:"text",name:"num2",ref:m,maxLength:o.NUMBER.LENGTH,value:c,onChange:n}),r.jsx(d,{styleType:"basic",className:"w-25",type:"password",name:"num3",ref:e,maxLength:o.NUMBER.LENGTH,value:l,onChange:n}),r.jsx(d,{styleType:"basic",className:"w-25",type:"password",name:"num4",ref:f,maxLength:o.NUMBER.LENGTH,value:p,onChange:n})]})}i(N,"CardNumberFields");const I={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import CardNumberFields from './CardNumberFields';

export default {
  title: 'CardNumberFields',
  component: CardNumberFields,
} as Meta;

const Template: ComponentStory<typeof CardNumberFields> = (args) => <CardNumberFields {...args} />;

const cardNumber = {
  num1: '1234',
  num2: '5678',
  num3: '1912',
  num4: '1244',
};

export const Default = Template.bind({});
Default.args = {
  cardNumber,
};
`,locationsMap:{default:{startLoc:{col:58,line:10},endLoc:{col:98,line:10},startBody:{col:58,line:10},endBody:{col:98,line:10}}}}},title:"CardNumberFields",component:N},E=i(t=>r.jsx(N,{...t}),"Template"),g={num1:"1234",num2:"5678",num3:"1912",num4:"1244"},h=E.bind({});h.args={cardNumber:g};const S=["Default"];export{h as Default,S as __namedExportsOrder,I as default};
//# sourceMappingURL=CardNumberFields.stories-b434aa94.js.map
