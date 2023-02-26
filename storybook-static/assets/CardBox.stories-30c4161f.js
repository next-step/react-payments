var N=Object.defineProperty;var o=(s,a)=>N(s,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-cd98d61a.js";import{r as h}from"./index-a38f3d31.js";import{i as n,m,C as t}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import{u as j}from"./useCardExpirationContext-2d7743ac.js";import{u as E}from"./useCardNumberContext-120433fa.js";import{u as b}from"./useCardOwnerNameContext-a58278b0.js";import"./CardSelectModalProvider-85a74e2a.js";import{u as f}from"./useCardSelectModalContext-a5bfc1a6.js";import"./es.object.get-own-property-descriptor-d261b708.js";function i(){const{cardNumber:{num1:s,num2:a,num3:e,num4:c}}=E(),{cardExpiration:{month:l,year:p}}=j(),{selectedCard:{name:x,color:d}}=f(),{cardOwnerName:u}=b(),C=h.useMemo(()=>({backgroundColor:d}),[d]);return r.jsx("div",{className:"card-box",children:r.jsxs("div",{className:"empty-card",style:C,children:[r.jsxs("div",{className:"card-top",children:[x," 카드"]}),r.jsx("div",{className:"card-middle",children:r.jsx("div",{className:"small-card__chip"})}),r.jsxs("div",{className:"card-number",children:[r.jsx("span",{className:"card-number",children:s}),n(s,a)&&r.jsx("span",{children:"-"}),r.jsx("span",{className:"card-number",children:a}),n(a,e)&&r.jsx("span",{children:"-"}),r.jsx("span",{className:"card-number",children:m(e)}),n(e,c)&&r.jsx("span",{children:"-"}),r.jsx("span",{className:"card-number",children:m(c)})]}),r.jsx("div",{className:"card-bottom",children:r.jsxs("div",{className:"card-bottom__info",children:[r.jsx("span",{className:"card-text card-text__ellipsis_small",children:u||t.OWNER_NAME.PLACEHOLDER}),r.jsxs("span",{className:"card-text",children:[l||t.EXPIRATION.PLACEHOLDER.MONTH," / ",p||t.EXPIRATION.PLACEHOLDER.YEAR]})]})})]})})}o(i,"CardBox");const g={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import CardBox from './CardBox';

export default {
  title: 'CardBox',
  component: CardBox,
} as Meta;

const Template: ComponentStory<typeof CardBox> = () => <CardBox />;

export const 기본카드 = Template.bind({});
기본카드.args = {};
`,locationsMap:{기본카드:{startLoc:{col:49,line:10},endLoc:{col:66,line:10},startBody:{col:49,line:10},endBody:{col:66,line:10}}}}},title:"CardBox",component:i},y=o(()=>r.jsx(i,{}),"Template"),B=y.bind({});B.args={};const D=["기본카드"];export{D as __namedExportsOrder,g as default,B as 기본카드};
//# sourceMappingURL=CardBox.stories-30c4161f.js.map
