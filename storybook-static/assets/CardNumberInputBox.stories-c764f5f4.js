var x=Object.defineProperty;var i=(n,t)=>x(n,"name",{value:t,configurable:!0});import{j as u}from"./jsx-runtime-cd98d61a.js";import{r}from"./index-a38f3d31.js";import{I as d}from"./Input-83b14ba2.js";import{B as b}from"./Box-5350e976.js";import"./Button-de42b912.js";import{C as a}from"./card-d0999f2f.js";import"./es.object.get-own-property-descriptor-d261b708.js";function y({cardNumber:n,num1Ref:t,num2Ref:m,num3Ref:c,num4Ref:p}){const{num1:l,num2:o,num3:s}=n;r.useEffect(()=>{var e;(e=t.current)==null||e.focus()},[t]),r.useEffect(()=>{var e;l.length===a.LENGTH&&((e=m.current)==null||e.focus())},[l,m]),r.useEffect(()=>{var e;o.length===a.LENGTH&&((e=c.current)==null||e.focus())},[o,c]),r.useEffect(()=>{var e;s.length===a.LENGTH&&((e=p.current)==null||e.focus())},[s,p])}i(y,"useInputFocus");function f({cardNumber:n,onChange:t}){const{num1:m,num2:c,num3:p,num4:l}=n,o=r.useRef(null),s=r.useRef(null),e=r.useRef(null),N=r.useRef(null);return y({cardNumber:n,num1Ref:o,num2Ref:s,num3Ref:e,num4Ref:N}),u.jsxs(b,{className:"input-container",children:[u.jsx("span",{className:"input-title",children:"카드 번호"}),u.jsx(d,{type:"number",name:"num1",ref:o,maxLength:a.LENGTH,value:m,onChange:t,className:"input-basic w-25"}),u.jsx(d,{type:"number",name:"num2",ref:s,maxLength:a.LENGTH,value:c,onChange:t,className:"input-basic w-25"}),u.jsx(d,{type:"password",name:"num3",ref:e,maxLength:a.LENGTH,value:p,onChange:t,className:"input-basic w-25"}),u.jsx(d,{type:"password",name:"num4",ref:N,maxLength:a.LENGTH,value:l,onChange:t,className:"input-basic w-25"})]})}i(f,"CardNumberInputBox");try{f.displayName="CardNumberInputBox",f.__docgenInfo={description:"",displayName:"CardNumberInputBox",props:{cardNumber:{defaultValue:null,description:"",name:"cardNumber",required:!0,type:{name:"CardNumber"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const G={parameters:{storySource:{source:`import CardNumberInputBox from './CardNumberInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardNumberInputBox',
  component: CardNumberInputBox,
} as Meta;

const Template: ComponentStory<typeof CardNumberInputBox> = (args) => <CardNumberInputBox {...args} />;

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
`,locationsMap:{default:{startLoc:{col:60,line:10},endLoc:{col:102,line:10},startBody:{col:60,line:10},endBody:{col:102,line:10}}}}},title:"CardNumberInputBox",component:f},E=i(n=>u.jsx(f,{...n}),"Template"),B={num1:"1234",num2:"5678",num3:"1912",num4:"1244"},C=E.bind({});C.args={cardNumber:B};const R=["Default"];export{C as Default,R as __namedExportsOrder,G as default};
//# sourceMappingURL=CardNumberInputBox.stories-c764f5f4.js.map
