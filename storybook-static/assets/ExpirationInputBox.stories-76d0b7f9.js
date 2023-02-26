var m=Object.defineProperty;var e=(t,n)=>m(t,"name",{value:n,configurable:!0});import{j as o}from"./jsx-runtime-cd98d61a.js";import{I as r}from"./Input-7e4dd3c4.js";import{B as x}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as a}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import{u as c}from"./useCardExpirationContext-2d7743ac.js";import"./index-a38f3d31.js";import"./CardSelectModalProvider-85a74e2a.js";import"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-d261b708.js";function p(){const{cardExpiration:t,handleChangeExpiration:n}=c(),{month:i,year:s}=t;return o.jsxs(x,{className:"my-4",children:[o.jsx("span",{className:"input-title",children:"만료일"}),o.jsx(r,{styleType:"basic",className:" w-25",name:"month",value:i,onChange:n,type:"text",maxLength:a.EXPIRATION.LENGTH,placeholder:a.EXPIRATION.PLACEHOLDER.MONTH}),o.jsx(r,{styleType:"basic",className:" w-25",name:"year",value:s,onChange:n,type:"text",maxLength:a.EXPIRATION.LENGTH,placeholder:a.EXPIRATION.PLACEHOLDER.YEAR})]})}e(p,"ExpirationInputBox");const O={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import ExpirationInputBox from './ExpirationInputBox';

export default {
  title: 'ExpirationInputBox',
  component: ExpirationInputBox,
} as Meta;

const Template: ComponentStory<typeof ExpirationInputBox> = (args) => <ExpirationInputBox {...args} />;

const cardExpiration = {
  month: '12',
  year: '26',
};

export const Default = Template.bind({});
Default.args = {
  cardExpiration,
};
`,locationsMap:{default:{startLoc:{col:60,line:10},endLoc:{col:102,line:10},startBody:{col:60,line:10},endBody:{col:102,line:10}}}}},title:"ExpirationInputBox",component:p},l=e(t=>o.jsx(p,{...t}),"Template"),E={month:"12",year:"26"},u=l.bind({});u.args={cardExpiration:E};const j=["Default"];export{u as Default,j as __namedExportsOrder,O as default};
//# sourceMappingURL=ExpirationInputBox.stories-76d0b7f9.js.map
