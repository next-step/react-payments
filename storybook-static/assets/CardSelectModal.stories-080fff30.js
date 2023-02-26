var c=Object.defineProperty;var n=(e,t)=>c(e,"name",{value:t,configurable:!0});import{j as a}from"./jsx-runtime-cd98d61a.js";import{r as s}from"./index-a38f3d31.js";import{C as i}from"./card-39c8a02a.js";import"./CardSelectModalProvider-85a74e2a.js";import{u as m}from"./useCardSelectModalContext-a5bfc1a6.js";import{C as p}from"./CardSelectBox-37a3f884.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Input-7e4dd3c4.js";import"./index-ed86a6de.js";import"./Box-136d9405.js";import"./Button-a951684c.js";import"./Card-5cd0c24d.js";function u(e,t){s.useEffect(()=>{const o=n(r=>{!e.current||e.current.contains(r.target)||t()},"listener");return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e,t])}n(u,"useOutsideClick");function d(){const{handleClickCard:e,handleClickCloseModal:t}=m(),o=s.useRef(null);return u(o,t),a.jsx("div",{className:"modal-dimmed",children:a.jsx("div",{className:"modal",ref:o,children:a.jsx("div",{className:"grid-center",children:i.COMPANY.map(({name:r,color:l})=>a.jsx(p,{name:r,color:l,onClick:()=>e({name:r,color:l})},r))})})})}n(d,"CardSelectModal");const R={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react';

import CardSelectModal from './CardSelectModal';

export default {
  title: 'CardSelectModal',
  component: CardSelectModal,
} as Meta;

const Template: ComponentStory<typeof CardSelectModal> = (args) => <CardSelectModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:57,line:10},endLoc:{col:96,line:10},startBody:{col:57,line:10},endBody:{col:96,line:10}}}}},title:"CardSelectModal",component:d},C=n(e=>a.jsx(d,{...e}),"Template"),f=C.bind({});f.args={};const b=["Default"];export{f as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=CardSelectModal.stories-080fff30.js.map
