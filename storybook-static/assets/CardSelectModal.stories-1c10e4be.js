var i=Object.defineProperty;var r=(e,t)=>i(e,"name",{value:t,configurable:!0});import{j as n}from"./jsx-runtime-cd98d61a.js";import{r as d}from"./index-a38f3d31.js";import{c as m}from"./card-d0999f2f.js";import{C as u}from"./CardSelectBox-c4183663.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./Input-83b14ba2.js";import"./Box-5350e976.js";import"./Button-de42b912.js";function p(e,t){d.useEffect(()=>{const o=r(a=>{!e.current||e.current.contains(a.target)||t()},"listener");return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e,t])}r(p,"useOutsideClick");function l({onClick:e,onCloseModal:t}){const o=d.useRef(null);return p(o,t),n.jsx("div",{className:"modal-dimmed",children:n.jsx("div",{className:"modal",ref:o,children:n.jsx("div",{className:"grid-center",children:m.map(a=>{const{name:s,color:c}=a;return n.jsx(u,{name:s,color:c,onClick:e},a.name)})})})})}r(l,"CardSelectModal");try{l.displayName="CardSelectModal",l.__docgenInfo={description:"",displayName:"CardSelectModal",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},onCloseModal:{defaultValue:null,description:"",name:"onCloseModal",required:!0,type:{name:"() => void"}}}}}catch{}const N={parameters:{storySource:{source:`import CardSelectModal from './CardSelectModal';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSelectModal',
  component: CardSelectModal,
} as Meta;

const Template: ComponentStory<typeof CardSelectModal> = (args) => <CardSelectModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:57,line:10},endLoc:{col:96,line:10},startBody:{col:57,line:10},endBody:{col:96,line:10}}}}},title:"CardSelectModal",component:l},f=r(e=>n.jsx(l,{...e}),"Template"),C=f.bind({});C.args={};const D=["Default"];export{C as Default,D as __namedExportsOrder,N as default};
//# sourceMappingURL=CardSelectModal.stories-1c10e4be.js.map
