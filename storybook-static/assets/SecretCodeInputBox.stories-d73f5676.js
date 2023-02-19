var a=Object.defineProperty;var n=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-cd98d61a.js";import{I as p}from"./Input-83b14ba2.js";import{B as d}from"./Box-5350e976.js";import"./Button-de42b912.js";import{e as s}from"./card-d0999f2f.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";function o({cardSecretCode:e,onChange:r}){return t.jsxs(d,{className:"input-container",children:[t.jsx("span",{className:"input-title",children:"보안코드(CVC/CVV)"}),t.jsx(p,{className:"input-basic w-25",maxLength:s.LENGTH,value:e,onChange:r,type:"password"})]})}n(o,"CardSecretCodeInputBox");try{o.displayName="CardSecretCodeInputBox",o.__docgenInfo={description:"",displayName:"CardSecretCodeInputBox",props:{cardSecretCode:{defaultValue:null,description:"",name:"cardSecretCode",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const B={parameters:{storySource:{source:`import CardSecretCodeInputBox from './CardSecretCodeInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSecretCodeInputBox',
  component: CardSecretCodeInputBox,
} as Meta;

const Template: ComponentStory<typeof CardSecretCodeInputBox> = (args) => <CardSecretCodeInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:64,line:10},endLoc:{col:110,line:10},startBody:{col:64,line:10},endBody:{col:110,line:10}}}}},title:"CardSecretCodeInputBox",component:o},c=n(e=>t.jsx(o,{...e}),"Template"),i=c.bind({});i.args={};const I=["Default"];export{i as Default,I as __namedExportsOrder,B as default};
//# sourceMappingURL=SecretCodeInputBox.stories-d73f5676.js.map
