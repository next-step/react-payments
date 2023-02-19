var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{j as n}from"./jsx-runtime-cd98d61a.js";import{I as l}from"./Input-83b14ba2.js";import{B as o}from"./Box-5350e976.js";import"./Button-de42b912.js";import{a as s}from"./card-d0999f2f.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";function t({cardOwnerName:e,onChange:a}){const p=`${e.length}/${s.LENGTH}`;return n.jsxs(o,{className:"input-container",children:[n.jsxs(o,{className:"flex-between",children:[n.jsx("span",{className:"input-title",children:"카드 소유자 이름(선택)"}),n.jsx("span",{className:"input-title",children:p})]}),n.jsx(l,{type:"text",className:"input-basic",maxLength:s.LENGTH,value:e,onChange:a,placeholder:"카드에 표시된 이름과 동일하게 입력하세요."})]})}r(t,"CardOwnerNameInputBox");try{t.displayName="CardOwnerNameInputBox",t.__docgenInfo={description:"",displayName:"CardOwnerNameInputBox",props:{cardOwnerName:{defaultValue:null,description:"",name:"cardOwnerName",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const B={parameters:{storySource:{source:`import CardOwnerNameInputBox from './CardOwnerNameInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardOwnerNameInputBox',
  component: CardOwnerNameInputBox,
} as Meta;

const Template: ComponentStory<typeof CardOwnerNameInputBox> = (args) => <CardOwnerNameInputBox {...args} />;

const cardOwnerName = '승완';

export const Default = Template.bind({});
Default.args = {
  cardOwnerName,
};
`,locationsMap:{default:{startLoc:{col:63,line:10},endLoc:{col:108,line:10},startBody:{col:63,line:10},endBody:{col:108,line:10}}}}},title:"CardOwnerNameInputBox",component:t},c=r(e=>n.jsx(t,{...e}),"Template"),i="승완",d=c.bind({});d.args={cardOwnerName:i};const I=["Default"];export{d as Default,I as __namedExportsOrder,B as default};
//# sourceMappingURL=CardOwnerNameInputBox.stories-138a28a9.js.map
