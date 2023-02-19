var E=Object.defineProperty;var a=(n,r)=>E(n,"name",{value:r,configurable:!0});import{j as e}from"./jsx-runtime-cd98d61a.js";import{r as _}from"./index-a38f3d31.js";import{C as b,a as j,b as i}from"./card-d0999f2f.js";import"./es.object.get-own-property-descriptor-d261b708.js";function o(n,r){return n.length===b.LENGTH&&r.length>0}a(o,"isShowHyphen");function p(n){return"".padStart(n.length,"*")}a(p,"maskingNumber");function t({cardNumber:n,cardExpiration:r,cardOwnerName:u,selectedCard:x}){const{num1:d,num2:s,num3:c,num4:m}=n,{month:N,year:C}=r,{name:h,color:l}=x,y=_.useMemo(()=>({backgroundColor:l}),[l]);return e.jsx("div",{className:"card-box",children:e.jsxs("div",{className:"empty-card",style:y,children:[e.jsxs("div",{className:"card-top",children:[h," 카드"]}),e.jsx("div",{className:"card-middle",children:e.jsx("div",{className:"small-card__chip"})}),e.jsxs("div",{className:"card-number",children:[e.jsx("span",{className:"card-number",children:d}),o(d,s)&&e.jsx("span",{children:"-"}),e.jsx("span",{className:"card-number",children:s}),o(s,c)&&e.jsx("span",{children:"-"}),e.jsx("span",{className:"card-number",children:p(c)}),o(c,m)&&e.jsx("span",{children:"-"}),e.jsx("span",{className:"card-number",children:p(m)})]}),e.jsx("div",{className:"card-bottom",children:e.jsxs("div",{className:"card-bottom__info",children:[e.jsx("span",{className:"card-text card-text__ellipsis",children:u||j.PLACEHOLDER}),e.jsxs("span",{className:"card-text",children:[N||i.PLACEHOLDER.MONTH," / ",C||i.PLACEHOLDER.YEAR]})]})})]})})}a(t,"CardBox");try{t.displayName="CardBox",t.__docgenInfo={description:"",displayName:"CardBox",props:{cardNumber:{defaultValue:null,description:"",name:"cardNumber",required:!0,type:{name:"CardNumber"}},cardExpiration:{defaultValue:null,description:"",name:"cardExpiration",required:!0,type:{name:"CardExpiration"}},cardOwnerName:{defaultValue:null,description:"",name:"cardOwnerName",required:!0,type:{name:"string"}},selectedCard:{defaultValue:null,description:"",name:"selectedCard",required:!0,type:{name:"SelectedCard"}}}}}catch{}const w={parameters:{storySource:{source:`import CardBox from './CardBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardBox',
  component: CardBox,
} as Meta;

const Template: ComponentStory<typeof CardBox> = (args) => <CardBox {...args} />;

const cardNumber = {
  num1: '1234',
  num2: '5678',
  num3: '1912',
  num4: '1244',
};

const cardExpiration = {
  month: '12',
  year: '24',
};

const cardOwnerName = '승완';

const selectedCard = {
  name: '은규',
  color: '#FBCD58',
};

export const 은규카드 = Template.bind({});
은규카드.args = {
  cardNumber,
  cardExpiration,
  cardOwnerName,
  selectedCard,
};
`,locationsMap:{은규카드:{startLoc:{col:49,line:10},endLoc:{col:80,line:10},startBody:{col:49,line:10},endBody:{col:80,line:10}}}}},title:"CardBox",component:t},f=a(n=>e.jsx(t,{...n}),"Template"),B={num1:"1234",num2:"5678",num3:"1912",num4:"1244"},g={month:"12",year:"24"},O="승완",R={name:"은규",color:"#FBCD58"},A=f.bind({});A.args={cardNumber:B,cardExpiration:g,cardOwnerName:O,selectedCard:R};const H=["은규카드"];export{H as __namedExportsOrder,w as default,A as 은규카드};
//# sourceMappingURL=CardBox.stories-3f300c3b.js.map
