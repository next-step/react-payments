var m=Object.defineProperty;var a=(e,o)=>m(e,"name",{value:o,configurable:!0});import{j as t}from"./jsx-runtime-cd98d61a.js";import{I as r}from"./Input-7e4dd3c4.js";import{B as x}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as n}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import{u as c}from"./useCardExpirationContext-2d7743ac.js";import"./index-a38f3d31.js";import"./CardSelectModalProvider-85a74e2a.js";import"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-d261b708.js";function p(){const{cardExpiration:e,handleChangeExpiration:o}=c(),{month:i,year:s}=e;return t.jsxs(x,{className:"my-4",children:[t.jsx("span",{className:"input-title",children:"만료일"}),t.jsx(r,{styleType:"basic",className:" w-25",name:"month",value:i,onChange:o,type:"text",maxLength:n.EXPIRATION.LENGTH,placeholder:n.EXPIRATION.PLACEHOLDER.MONTH}),t.jsx(r,{styleType:"basic",className:" w-25",name:"year",value:s,onChange:o,type:"text",maxLength:n.EXPIRATION.LENGTH,placeholder:n.EXPIRATION.PLACEHOLDER.YEAR})]})}a(p,"ExpirationInputBox");const g={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import ExpirationInputBox from './ExpirationInputBox';

export default {
  title: 'ExpirationInputBox',
  component: ExpirationInputBox,
} as Meta;

const Template: ComponentStory<typeof ExpirationInputBox> = () => <ExpirationInputBox />;

const cardExpiration = {
  month: '12',
  year: '26',
};

export const Default = Template.bind({});
Default.args = {
  cardExpiration,
};
`,locationsMap:{default:{startLoc:{col:60,line:10},endLoc:{col:88,line:10},startBody:{col:60,line:10},endBody:{col:88,line:10}}}}},title:"ExpirationInputBox",component:p},l=a(()=>t.jsx(p,{}),"Template"),E={month:"12",year:"26"},u=l.bind({});u.args={cardExpiration:E};const j=["Default"];export{u as Default,j as __namedExportsOrder,g as default};
//# sourceMappingURL=ExpirationInputBox.stories-d76fd577.js.map
