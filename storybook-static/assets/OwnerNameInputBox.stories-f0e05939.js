var p=Object.defineProperty;var o=(e,n)=>p(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-cd98d61a.js";import{I as l}from"./Input-7e4dd3c4.js";import{B as r}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as a}from"./card-39c8a02a.js";import"./CardListProvider-b3c07bc8.js";import"./index-a38f3d31.js";import{u as i}from"./useCardOwnerNameContext-a58278b0.js";import"./CardSelectModalProvider-85a74e2a.js";import"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-d261b708.js";function s(){const{cardOwnerName:e,handleChangeCardOwnerName:n}=i(),m=`${e.length}/${a.OWNER_NAME.LENGTH}`;return t.jsxs(r,{className:"my-4",children:[t.jsxs(r,{display:"flex",justify:"between",align:"center",className:"flex-between",children:[t.jsx("span",{className:"input-title",children:"카드 소유자 이름(선택)"}),t.jsx("span",{className:"input-title",children:m})]}),t.jsx(l,{styleType:"basic",type:"text",maxLength:a.OWNER_NAME.LENGTH,value:e,onChange:n,placeholder:"카드에 표시된 이름과 동일하게 입력하세요."})]})}o(s,"OwnerNameInputBox");const b={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import OwnerNameInputBox from './OwnerNameInputBox';

export default {
  title: 'OwnerNameInputBox',
  component: OwnerNameInputBox,
} as Meta;

const Template: ComponentStory<typeof OwnerNameInputBox> = (args) => <OwnerNameInputBox {...args} />;

const cardOwnerName = '승완';

export const Default = Template.bind({});
Default.args = {
  cardOwnerName,
};
`,locationsMap:{default:{startLoc:{col:59,line:10},endLoc:{col:100,line:10},startBody:{col:59,line:10},endBody:{col:100,line:10}}}}},title:"OwnerNameInputBox",component:s},c=o(e=>t.jsx(s,{...e}),"Template"),u="승완",x=c.bind({});x.args={cardOwnerName:u};const T=["Default"];export{x as Default,T as __namedExportsOrder,b as default};
//# sourceMappingURL=OwnerNameInputBox.stories-f0e05939.js.map
