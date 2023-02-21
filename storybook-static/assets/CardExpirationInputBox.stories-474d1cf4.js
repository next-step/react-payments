var c=Object.defineProperty;var e=(t,a)=>c(t,"name",{value:a,configurable:!0});import{j as n}from"./jsx-runtime-cd98d61a.js";import{I as r}from"./Input-83b14ba2.js";import{B as l}from"./Box-5350e976.js";import"./Button-de42b912.js";import{b as i}from"./card-d0999f2f.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";function o({cardExpiration:t,onChange:a}){const{month:p,year:s}=t;return n.jsxs(l,{className:"input-container",children:[n.jsx("span",{className:"input-title",children:"만료일"}),n.jsx(r,{className:"input-basic w-25",name:"month",value:p,onChange:a,type:"text",maxLength:2,placeholder:i.PLACEHOLDER.MONTH}),n.jsx(r,{className:"input-basic w-25",name:"year",value:s,onChange:a,type:"text",maxLength:2,placeholder:i.PLACEHOLDER.YEAR})]})}e(o,"CardExpirationInputBox");try{o.displayName="CardExpirationInputBox",o.__docgenInfo={description:"",displayName:"CardExpirationInputBox",props:{cardExpiration:{defaultValue:null,description:"",name:"cardExpiration",required:!0,type:{name:"CardExpiration"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const _={parameters:{storySource:{source:`import CardExpirationInputBox from './CardExpirationInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardExpirationInputBox',
  component: CardExpirationInputBox,
} as Meta;

const Template: ComponentStory<typeof CardExpirationInputBox> = (args) => <CardExpirationInputBox {...args} />;

const cardExpiration = {
  month: '12',
  year: '26',
};

export const Default = Template.bind({});
Default.args = {
  cardExpiration,
};
`,locationsMap:{default:{startLoc:{col:64,line:10},endLoc:{col:110,line:10},startBody:{col:64,line:10},endBody:{col:110,line:10}}}}},title:"CardExpirationInputBox",component:o},d=e(t=>n.jsx(o,{...t}),"Template"),m={month:"12",year:"26"},x=d.bind({});x.args={cardExpiration:m};const g=["Default"];export{x as Default,g as __namedExportsOrder,_ as default};
//# sourceMappingURL=CardExpirationInputBox.stories-474d1cf4.js.map
