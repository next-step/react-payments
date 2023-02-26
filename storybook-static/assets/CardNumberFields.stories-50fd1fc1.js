var b=Object.defineProperty;var i=(o,n)=>b(o,"name",{value:n,configurable:!0});import{j as s}from"./jsx-runtime-cd98d61a.js";import{r as t}from"./index-a38f3d31.js";import{I as d}from"./Input-7e4dd3c4.js";import{B as x}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as r}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import{u as y}from"./useCardNumberContext-120433fa.js";import"./CardSelectModalProvider-85a74e2a.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-ed86a6de.js";function C({cardNumber:o,num1Ref:n,num2Ref:u,num3Ref:c,num4Ref:l}){const{num1:p,num2:a,num3:m}=o;t.useEffect(()=>{var e;(e=n.current)==null||e.focus()},[n]),t.useEffect(()=>{var e;p.length===r.NUMBER.LENGTH&&((e=u.current)==null||e.focus())},[p,u]),t.useEffect(()=>{var e;a.length===r.NUMBER.LENGTH&&((e=c.current)==null||e.focus())},[a,c]),t.useEffect(()=>{var e;m.length===r.NUMBER.LENGTH&&((e=l.current)==null||e.focus())},[m,l])}i(C,"useInputFocus");function N(){const{cardNumber:o,handleChangeCardNumber:n}=y(),{num1:u,num2:c,num3:l,num4:p}=o,a=t.useRef(null),m=t.useRef(null),e=t.useRef(null),f=t.useRef(null);return C({cardNumber:o,num1Ref:a,num2Ref:m,num3Ref:e,num4Ref:f}),s.jsxs(x,{className:"my-4",children:[s.jsx("span",{className:"input-title",children:"카드 번호"}),s.jsx(d,{styleType:"basic",className:"w-25",type:"text",name:"num1",ref:a,maxLength:r.NUMBER.LENGTH,value:u,onChange:n}),s.jsx(d,{styleType:"basic",className:"w-25",type:"text",name:"num2",ref:m,maxLength:r.NUMBER.LENGTH,value:c,onChange:n}),s.jsx(d,{styleType:"basic",className:"w-25",type:"password",name:"num3",ref:e,maxLength:r.NUMBER.LENGTH,value:l,onChange:n}),s.jsx(d,{styleType:"basic",className:"w-25",type:"password",name:"num4",ref:f,maxLength:r.NUMBER.LENGTH,value:p,onChange:n})]})}i(N,"CardNumberFields");const I={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import CardNumberFields from './CardNumberFields';

export default {
  title: 'CardNumberFields',
  component: CardNumberFields,
} as Meta;

const Template: ComponentStory<typeof CardNumberFields> = () => <CardNumberFields />;

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
`,locationsMap:{default:{startLoc:{col:58,line:10},endLoc:{col:84,line:10},startBody:{col:58,line:10},endBody:{col:84,line:10}}}}},title:"CardNumberFields",component:N},E=i(()=>s.jsx(N,{}),"Template"),h={num1:"1234",num2:"5678",num3:"1912",num4:"1244"},g=E.bind({});g.args={cardNumber:h};const S=["Default"];export{g as Default,S as __namedExportsOrder,I as default};
//# sourceMappingURL=CardNumberFields.stories-50fd1fc1.js.map
