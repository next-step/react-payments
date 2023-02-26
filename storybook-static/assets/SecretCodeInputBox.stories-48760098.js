var a=Object.defineProperty;var t=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-cd98d61a.js";import{I as s}from"./Input-7e4dd3c4.js";import{B as c}from"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";import{C as p}from"./card-39c8a02a.js";import{d as m}from"./CardListProvider-b3c07bc8.js";import{r as d}from"./index-a38f3d31.js";import{E as i}from"./CardSelectModalProvider-85a74e2a.js";import"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-d261b708.js";function C(){const e=d.useContext(m);if(e===void 0)throw new Error(i.PROVIDER.INVALID_SCOPE);return e}t(C,"useCardSecretCodeContext");function n(){const{cardSecretCode:e,handleChangeCardSecretCode:r}=C();return o.jsxs(c,{className:"my-4",children:[o.jsx("span",{className:"input-title",children:"보안코드(CVC/CVV)"}),o.jsx(s,{styleType:"basic",className:" w-25",maxLength:p.SECRET_CODE.LENGTH,value:e,onChange:r,type:"password"})]})}t(n,"SecretCodeInputBox");const T={parameters:{storySource:{source:`import SecretCodeInputBox from './SecretCodeInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'SecretCodeInputBox',
  component: SecretCodeInputBox,
} as Meta;

const Template: ComponentStory<typeof SecretCodeInputBox> = (args) => <SecretCodeInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:60,line:10},endLoc:{col:102,line:10},startBody:{col:60,line:10},endBody:{col:102,line:10}}}}},title:"SecretCodeInputBox",component:n},l=t(e=>o.jsx(n,{...e}),"Template"),u=l.bind({});u.args={};const _=["Default"];export{u as Default,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=SecretCodeInputBox.stories-48760098.js.map
